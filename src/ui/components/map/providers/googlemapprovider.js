/** @module GoogleMapProvider */

import MapProvider from './mapprovider';
import DOM from '../../../dom/dom';

/* global google */

/**
 * GoogleMapProvider is an implementation of a MapProvider
 * that handles the integration with the third party API to expose maps.
 * @extends MapProvider
 */
export default class GoogleMapProvider extends MapProvider {
  constructor (opts) {
    super(opts);

    // normalize because google's zoom is effectively 1 unit of difference away from mapbox zoom
    this._zoomOffset = 1;
    this._zoom += this._zoomOffset;
    this._clientId = opts.clientId;
    this._signature = opts.signature;

    if (!this.hasValidClientCredentials() && !this._apiKey) {
      throw new Error('GoogleMapsProvider: Missing `apiKey` or {`clientId`, `signature`}');
    }

    /**
     * Language of the map.
     * @type {string}
     */
    this._language = this.getLanguage(this._locale);
  }

  /**
   * Google Maps supports some language codes that are longer than two characters. If the
   * locale matches one of these edge cases, use it. Otherwise, fallback on the first two
   * characters of the locale.
   * @param {string} localeStr Unicode locale
   */
  getLanguage (localeStr) {
    const googleMapsCustomLanguages =
      ['zh-CN', 'zn-HK', 'zh-TW', 'en-AU', 'en-GB', 'fr-CA', 'pt-BR', 'pt-PT', 'es-419'];
    const locale = localeStr.replace('_', '-');

    if (googleMapsCustomLanguages.includes(locale)) {
      return locale;
    }

    const language = locale.substring(0, 2);
    return language;
  }

  loadJS () {
    const self = this;
    const onLoad = function () {
      if (typeof self._onLoaded === 'function') {
        self._onLoaded();
      }
    };

    if (typeof google !== 'undefined') {
      self._isLoaded = true;
      onLoad();
      return;
    }

    let script = DOM.query('#yext-map-js');
    if (script) {
      const onLoadFunc = script.onload;
      script.onload = function () {
        onLoadFunc();
        onLoad();
      };
      return;
    }

    script = DOM.createEl('script', {
      id: 'yext-map-js',
      onload: () => {
        self._isLoaded = true;
        onLoad();
      },
      async: true,
      src: `https://maps.googleapis.com/maps/api/js?${self.generateCredentials()}&language=${self._language}`
    });

    DOM.append('body', script);
  }

  generateCredentials () {
    if (this.hasValidClientCredentials()) {
      return `client=${this._clientId}`;
    } else {
      return `key=${this._apiKey}`;
    }
  }

  hasValidClientCredentials () {
    return this._clientId;
  }

  init (el, mapData, resultsContext) {
    if (MapProvider.shouldHideMap(mapData, resultsContext, this._showEmptyMap, this._noResults.visible)) {
      this._map = null;
      return this;
    }

    // NOTE(billy) This timeout is a hack for dealing with async nature.
    // Only here for demo purposes, so we'll fix later.
    setTimeout(() => {
      let container = DOM.query(el);
      this.map = new google.maps.Map(container, {
        zoom: this._zoom,
        center: this.getCenterMarker(mapData)
      });

      // Apply our search data to our GoogleMap
      if (mapData && mapData.mapMarkers.length) {
        const collapsedMarkers = this._collapsePins
          ? this._collapseMarkers(mapData.mapMarkers)
          : mapData.mapMarkers;
        let googleMapMarkerConfigs = GoogleMapMarkerConfig.from(
          collapsedMarkers,
          this._pinConfig,
          this.map);

        let bounds = new google.maps.LatLngBounds();
        for (let i = 0; i < googleMapMarkerConfigs.length; i++) {
          let marker = new google.maps.Marker(googleMapMarkerConfigs[i]);
          if (this._onPinClick) {
            marker.addListener('click', () => this._onPinClick(collapsedMarkers[i].item));
          }
          if (this._onPinMouseOver) {
            marker.addListener('mouseover', () => this._onPinMouseOver(collapsedMarkers[i].item));
          }
          if (this._onPinMouseOut) {
            marker.addListener('mouseout', () => this._onPinMouseOut(collapsedMarkers[i].item));
          }
          bounds.extend(marker.position);
        }

        if (googleMapMarkerConfigs.length >= 2) {
          this.map.fitBounds(bounds);
        }
      }
    }, 100);
  }

  getCenterMarker (mapData) {
    return mapData && mapData.mapCenter && mapData.mapCenter.longitude && mapData.mapCenter.latitude
      ? { lng: mapData.mapCenter.longitude, lat: mapData.mapCenter.latitude }
      : { lng: this._defaultPosition.lng, lat: this._defaultPosition.lat };
  }
}

// TODO(billy) Move to own class
export class GoogleMapMarkerConfig {
  constructor (opts) {
    /**
     * A reference to the google map, that the marker is appended to
     * @type {GoogleMap}
     */
    this.map = opts.map || undefined;

    /**
     * The coordinates of the marker (lat/lng)
     * @type {Object}
     */
    this.position = opts.position || {
      lat: undefined,
      lng: undefined
    };

    /**
     * The properties/settings of the icon used for the marker
     * e.g. {
     *        anchor: { x: 0, y: 0 }
     *        url: 'path/to/url.jpg'
     *        scaledSize: { w: 0, h: 0 }
     *       }
     *
     * @type {object}
     */
    this.icon = opts.icon || undefined;

    /**
     * The label of the marker to use
     * @type {string}
     */
    this.label = opts.label || undefined;
  }

  /**
   * Serializes an array of marker configs
   * @param {GoogleMapMarkerConfig[]} googleMapMarkerConfigs
   * @returns {string[]}
   */
  static serialize (googleMapMarkerConfigs) {
    let serializedMarkers = [];
    googleMapMarkerConfigs.forEach((marker) => {
      serializedMarkers.push(`markers=label:${marker.label}|${marker.position.lat},${marker.position.lng}`);
    });
    return serializedMarkers.join('&');
  }

  /**
   * Converts the storage data model of markers into GoogleAPIMarker
   * @param {object[]} markers The data of the marker
   * @param {(Object|function)} pinConfig The configuration to apply to the marker
   * @param {GoogleMap} map reference to the google map to apply the marker to
   * @returns {GoogleMapMarkerConfig[]}
   */
  static from (markers, pinConfig, map) {
    let googleMapMarkerConfigs = [];
    if (!Array.isArray(markers)) {
      markers = [markers];
    }

    markers.forEach((marker) => {
      // Support configuration as a function
      let pinConfigObj = pinConfig;
      if (typeof pinConfig === 'function') {
        pinConfigObj = pinConfig(
          marker.item,
          MapProvider.DEFAULT_PIN_CONFIG,
          marker);
      }

      // Transform our Configuration Object into the expected
      // Google API format.
      let icon = {};
      if (pinConfigObj.anchor) {
        icon.anchor = google.maps.Point(pinConfigObj.anchor.x, pinConfigObj.anchor.y);
      }

      if (pinConfigObj.scaledSize) {
        icon.scaledSize = new google.maps.Size(pinConfigObj.scaledSize.w, pinConfigObj.scaledSize.h);
      }

      if (pinConfigObj.url) {
        icon.url = pinConfigObj.url;
      }

      if (pinConfigObj.svg) {
        icon.url = `data:image/svg+xml;charset=utf-8, ${encodeURIComponent(pinConfigObj.svg)}`;
      }

      let label;
      if (pinConfigObj.label) {
        label = pinConfigObj.label;
      } else {
        label = marker.label.toString();
      }

      // NOTE(billy) Google maps doesn't handle empty icon objects nicely
      // Make google maps happy if no settings for icon are provided;
      if (Object.keys(icon).length === 0) {
        icon = undefined;
      }

      googleMapMarkerConfigs.push(
        new GoogleMapMarkerConfig({
          map: map,
          position: {
            lat: marker.latitude,
            lng: marker.longitude
          },
          icon: icon,
          label: label
        })
      );
    });

    return googleMapMarkerConfigs;
  }
}
