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
    let encodedMarkers = '';
    let mapMarkers = mapData.mapMarkers;
    let center = mapData.mapCenter;
    let width = this._width || 600;
    let height = this._height || 200;
    let zoom = this._zoom || 9;

    for (let i = 0; i < mapMarkers.length; i++) {
      let mm = mapMarkers[i];
      if (i > 0) {
        encodedMarkers += ',';
      }
      encodedMarkers += `pin-s-${mm.label}(${mm.longitude},${mm.latitude})`;
    }
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

    const pinConfig = this._pinConfig;
    let pinConfigObj,
      wrapper;

    this._map.on('load', () => {
      if (mapData && mapData.mapMarkers.length > 0) {
        let markers = mapData.mapMarkers;
        for (let i = 0; i < markers.length; i++) {
          if (pinConfig && typeof pinConfig === 'function') {
            pinConfigObj = pinConfig(markers[i].item, MapProvider.DEFAULT_PIN_CONFIG, markers[i]);
          }

          wrapper = document.createElement('div');
          if (pinConfig && pinConfigObj.svg) {
            wrapper.innerHTML = pinConfigObj.svg;
          }

          let coords = new mapboxgl.LngLat(
            markers[i].longitude,
            markers[i].latitude);

          let marker = new mapboxgl.Marker(wrapper).setLngLat(coords);
          marker.addTo(this._map);
        }
      }
    });
  }
}
