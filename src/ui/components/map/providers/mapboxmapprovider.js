/** @module MapBoxMapProvider */

import MapProvider from './mapprovider';
import DOM from '../../../dom/dom';

/* global mapboxgl */

/**
 * MapBoxMapProvider is an implementation of a MapProvider
 * that handles the integration with the third party API to expose maps.
 * @extends MapProvider
 */
export default class MapBoxMapProvider extends MapProvider {
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

        onLoad();
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

  generateStatic (mapData) {
    let mapboxMapMarkerConfigs = MapBoxMarkerConfig.from(
      mapData.mapMarkers,
      this._pinConfig
    );

    let center = mapData.mapCenter;
    let width = this._width || 600;
    let height = this._height || 200;
    let zoom = this._zoom || 9;

    let encodedMarkers = MapBoxMarkerConfig.serialize(mapboxMapMarkerConfigs);
    return `<img src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${encodedMarkers}/${center.longitude},${center.latitude},${zoom}/auto/${width}x${height}?access_token=${this._apiKey}">`;
  }

  init (el, mapData) {
    if (!mapData || mapData.mapMarkers.length <= 0) {
      this._map = null;
      return this;
    }

    let container = DOM.query(el);
    DOM.css(container, {
      width: this._width,
      height: this._height
    });

    this._map = new mapboxgl.Map({
      container: container,
      zoom: this._zoom,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [mapData.mapCenter.longitude, mapData.mapCenter.latitude]
    });

    const mapboxMapMarkerConfigs = MapBoxMarkerConfig.from(
      mapData.mapMarkers,
      this._pinConfig,
      this._map);

    for (let i = 0; i < mapboxMapMarkerConfigs.length; i++) {
      let wrapper = mapboxMapMarkerConfigs[i].wrapper;
      let coords = new mapboxgl.LngLat(
        mapboxMapMarkerConfigs[i].position.longitude,
        mapboxMapMarkerConfigs[i].position.latitude);
      let marker = new mapboxgl.Marker(wrapper).setLngtLat(coords);
      marker.addTo(this._map);
    }
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
  }

  /**
   * Serializes an array of marker configs
   * @param {MapBoxMarkerConfig[]} mapboxMapMarkerConfigs
   * @returns {string[]}
   */
  static serialize (mapboxMapMarkerConfigs) {
    let serializedMarkers = [];
    mapboxMapMarkerConfigs.forEach((marker) => {
      serializedMarkers.push(`pin-s-${marker.label}(${marker.position.longitude},${marker.position.latitude})`);
    });
    return serializedMarkers.join(',');
  }

  /**
   * Converts the storage data model of markers into GoogleAPIMarker
   * @param {MapBox} A reference to the google map to apply the marker to
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

      let wrapper = pinConfigObj.wrapper ? pinConfigObj.wrapper : null;

      mapboxMapMarkerConfigs.push(
        new MapBoxMarkerConfig({
          map: map,
          position: {
            latitude: marker.latitude,
            longitude: marker.longitude
          },
          wrapper: wrapper
        })
      );
    });

    return mapboxMapMarkerConfigs;
  }
}
