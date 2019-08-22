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

    this._clientId = opts.clientId;
    this._signature = opts.signature;

    if (!this.hasValidClientCredentials() && !this._apiKey) {
      throw new Error('GoogleMapsProvider: Missing `apiKey` or {`clientId`, `signature`}');
    }
  }

  loadJS (onLoad) {
    if (DOM.query('#yext-map-js')) {
      if (typeof onLoad === 'function') {
        onLoad();
      }
      return;
    }

    let script = DOM.createEl('script', {
      id: 'yext-map-js',
      onload: () => {
        this._isLoaded = true;
        this._onLoaded();
      },
      async: true,
      src: `//maps.googleapis.com/maps/api/js?${this.generateCredentials()}`
    });

    DOM.append('body', script);
  }

  generateStatic (mapData) {
    let googleMapMarkerConfigs = GoogleMapMarkerConfig.from(
      mapData.mapMarkers,
      this._pinConfig
    );

    let encodedMarkers = GoogleMapMarkerConfig.serialize(googleMapMarkerConfigs);
    return `
      <img src="//maps.googleapis.com/maps/api/staticmap?${encodedMarkers}&size=${this._width}x${this._height}&${this.generateCredentials()}">`;
  }

  generateCredentials () {
    if (this.hasValidClientCredentials()) {
      return `client=${this._clientId}`;
    } else {
      return `key=${this._apiKey}`;
    }
  }

  hasValidClientCredentials () {
    // Signature is only required if map is static
    return this._clientId && (this._signature || !this._isStatic);
  }

  init (el, mapData) {
    if ((!mapData || mapData.mapMarkers.length <= 0) && !this._showEmptyMap) {
      this._map = null;
      return this;
    }
    // NOTE(billy) This timeout is a hack for dealing with async nature.
    // Only here for demo purposes, so we'll fix later.
    setTimeout(() => {
      let container = DOM.query(el);
      DOM.css(container, {
        width: this._width,
        height: this._height
      });

      this.map = new google.maps.Map(container, {
        zoom: this._zoom
      });

      const collapsedMarkers = this._collapseMarkers(mapData.mapMarkers);

      // Apply our search data to our GoogleMap
      let bounds = new google.maps.LatLngBounds();

      if (mapData && mapData.mapMarkers.length) {
        let googleMapMarkerConfigs = GoogleMapMarkerConfig.from(
          collapsedMarkers,
          this._pinConfig,
          this.map);

        for (let i = 0; i < googleMapMarkerConfigs.length; i++) {
          let marker = new google.maps.Marker(googleMapMarkerConfigs[i]);
          if (this._onPinClick) {
            marker.addListener('click', () => this._onPinClick(collapsedMarkers[i].item));
          }
          bounds.extend(marker.position);
        }

        this.map.fitBounds(bounds);
      } else {
        this.map.setCenter(new google.maps.LatLng(this._defaultPosition.lat, this._defaultPosition.lng));
      }
    }, 100);
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
        icon.scaledSize = google.maps.Size(pinConfigObj.scaledSize.w, pinConfigObj.scaledSize.h);
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
