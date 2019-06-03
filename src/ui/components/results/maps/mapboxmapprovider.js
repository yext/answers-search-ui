import MapProvider from './mapprovider';
import DOM from '../../../dom/dom';

export default class MapBoxMapProvider extends MapProvider {
  constructor(opts) {
    super(opts);
  }

  /**
   * Load the external JS Library
   * @param {function} onLoad An optional callback to invoke once the JS is loaded.
   */
  loadJS(onLoad) {
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

  init(el, mapData) {
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

    this._map.on('load', () => {
      if (mapData && mapData.mapMarkers.length > 0) {
        let markers = mapData.mapMarkers;
        for (let i = 0; i < markers.length; i ++) {

          let coords = new mapboxgl.LngLat(
            markers[i].longitude,
            markers[i].latitude)

          let marker = new mapboxgl.Marker().setLngLat(coords);
          marker.addTo(this._map);
        }
      }
    });
  }
}
