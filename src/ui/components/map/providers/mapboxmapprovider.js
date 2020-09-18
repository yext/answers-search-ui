/** @module MapBoxMapProvider */

import MapboxLanguage from '@mapbox/mapbox-gl-language';

import MapProvider from './mapprovider';
import DOM from '../../../dom/dom';

/* global mapboxgl */

/**
 * MapBoxMapProvider is an implementation of a MapProvider
 * that handles the integration with the third party API to expose maps.
 * @extends MapProvider
 */
export default class MapBoxMapProvider extends MapProvider {
  constructor (opts = {}, systemOpts = {}) {
    super(opts, systemOpts);

    /**
     * Language of the map.
     * @type {string}
     */
    this._language = this._locale.substring(0, 2);
  }

  /**
   * Load the external JS Library
   * @param {function} onLoad An optional callback to invoke once the JS is loaded.
   */
  loadJS (onLoad) {
    let script = DOM.createEl('script', {
      id: 'yext-map-js',
      onload: () => {
        this._isLoaded = true;
        mapboxgl.accessToken = this._apiKey;

        if (typeof onLoad === 'function') {
          onLoad();
        }

        if (typeof this._onLoaded === 'function') {
          this._onLoaded();
        }
      },
      async: true,
      src: 'https://api.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.js'
    });

    let css = DOM.createEl('link', {
      id: 'yext-map-css',
      rel: 'stylesheet',
      href: 'https://api.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css'
    });

    DOM.append('body', css);
    DOM.append('body', script);
  }

  init (el, mapData, resultsContext) {
    if (MapProvider.shouldHideMap(mapData, resultsContext, this._showEmptyMap, this._noResults.visible)) {
      this._map = null;
      return this;
    }

    let container = DOM.query(el);
    this._map = new mapboxgl.Map({
      container: container,
      zoom: this._zoom,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.getCenterMarker(mapData)
    });

    this._map.addControl(new MapboxLanguage({
      defaultLanguage: this._language
    }));

    if (mapData && mapData.mapMarkers.length) {
      const collapsedMarkers = this._collapsePins
        ? this._collapseMarkers(mapData.mapMarkers)
        : mapData.mapMarkers;
      const mapboxMapMarkerConfigs = MapBoxMarkerConfig.from(
        collapsedMarkers,
        this._pinConfig,
        this._map);

      const bounds = new mapboxgl.LngLatBounds();
      for (let i = 0; i < mapboxMapMarkerConfigs.length; i++) {
        let wrapper = mapboxMapMarkerConfigs[i].wrapper;
        let coords = new mapboxgl.LngLat(
          mapboxMapMarkerConfigs[i].position.longitude,
          mapboxMapMarkerConfigs[i].position.latitude);
        let marker = new mapboxgl.Marker(wrapper).setLngLat(coords);
        bounds.extend(marker.getLngLat());
        marker.addTo(this._map);
        if (this._onPinClick) {
          marker.getElement().addEventListener('click', () => this._onPinClick(collapsedMarkers[i].item));
        }
        if (this._onPinMouseOver) {
          marker.getElement().addEventListener('mouseover', () =>
            this._onPinMouseOver(collapsedMarkers[i].item));
        }
        if (this._onPinMouseOut) {
          marker.getElement().addEventListener('mouseout', () =>
            this._onPinMouseOut(collapsedMarkers[i].item));
        }
      }
      if (mapboxMapMarkerConfigs.length >= 2) {
        this._map.fitBounds(bounds, { padding: 50 });
      }
    }
  }

  getCenterMarker (mapData) {
    return mapData && mapData.mapCenter && mapData.mapCenter.longitude && mapData.mapCenter.latitude
      ? [mapData.mapCenter.longitude, mapData.mapCenter.latitude]
      : { lng: this._defaultPosition.lng, lat: this._defaultPosition.lat };
  }
}

export class MapBoxMarkerConfig {
  constructor (opts) {
    /**
     * A reference to the mapbox map, that the marker is appended to
     * @type {MapBox}
     */
    this.map = opts.map || undefined;

    /**
     * The coordinates of the marker (lat/lng)
     * @type {Object}
     */
    this.position = opts.position || {
      latitude: undefined,
      longitude: undefined
    };

    /**
     * The html element to be used as the map marker
     * @type {object}
     */
    this.wrapper = opts.wrapper || undefined;

    /**
     * The label of the marker to use
     * @type {string}
     */
    this.label = opts.label || undefined;

    /**
     * The url of the pin for the static map
     * @type {string}
     */
    this.staticMapPin = opts.staticMapPin || undefined;
  }

  /**
   * Serializes an array of marker configs
   * @param {MapBoxMarkerConfig[]} mapboxMapMarkerConfigs
   * @returns {string[]}
   */
  static serialize (mapboxMapMarkerConfigs) {
    let serializedMarkers = [];
    mapboxMapMarkerConfigs.forEach((marker) => {
      if (marker.staticMapPin) {
        serializedMarkers.push(`url-${marker.staticMapPin}(${marker.position.longitude},${marker.position.latitude})`);
      } else {
        serializedMarkers.push(`pin-s-${marker.label}(${marker.position.longitude},${marker.position.latitude})`);
      }
    });
    return serializedMarkers.join(',');
  }

  /**
   * Converts the storage data model of markers into MapBoxMarkerConfig
   * @param {MapBox} A reference to the mapbox map to apply the marker to
   * @param {object[]} markers The data of the marker
   * @param {Object} pinConfig The configuration to apply to the marker
   * @returns {MapBoxMarkerConfig[]}
   */
  static from (markers, pinConfig, map) {
    let mapboxMapMarkerConfigs = [];
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

      const wrapper = pinConfigObj.wrapper ? pinConfigObj.wrapper : null;
      const staticMapPin = pinConfigObj.staticMapPin ? pinConfigObj.staticMapPin : null;

      mapboxMapMarkerConfigs.push(
        new MapBoxMarkerConfig({
          map: map,
          position: {
            latitude: marker.latitude,
            longitude: marker.longitude
          },
          wrapper: wrapper,
          label: marker.label,
          staticMapPin: staticMapPin
        })
      );
    });

    return mapboxMapMarkerConfigs;
  }
}
