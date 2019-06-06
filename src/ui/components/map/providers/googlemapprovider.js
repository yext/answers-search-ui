import MapProvider from './mapprovider';
import DOM from '../../../dom/dom';

export default class GoogleMapProvider extends MapProvider {
  constructor(opts) {
    super(opts);
  }

  loadJS(onLoad) {
    let script = DOM.createEl('script', {
      id: 'yext-map-js',
      onload: () => {
        this._isLoaded = true;
        onLoad();
      },
      async: true,
      src: 'https://maps.googleapis.com/maps/api/js?key='+this._apiKey
    });

    DOM.append('body', script);
  }

  init(el, mapData) {
    if (!mapData || mapData.mapMarkers.length <= 0) {
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

      let bounds = new google.maps.LatLngBounds();
      if (mapData && mapData.mapMarkers.length > 0) {
        let markers = mapData.mapMarkers;
        for (let i = 0; i < markers.length; i ++) {

          let marker = new google.maps.Marker(
            Object.assign({
              map: this.map,
            }, GoogleMapConfig.from(markers[i], this._pinConfig))
          );

          bounds.extend(marker.position);
        }
      }

      this.map.fitBounds(bounds);
    }, 100);
  }
}

// TODO(billy) Move to own class
class GoogleMapConfig {
  constructor(opts) {
    this.position = opts.position || {};

    this.icon = opts.icon || undefined;

    this.label = opts.label || undefined;
  }

  static from(marker, config) {
    // Support configuration as a function
    if (typeof config === 'function') {
      config = config(
        marker.item,
        MapProvider.DEFAULT_PIN_CONFIG,
        marker);
    }

    // Transform our Configuration Object into the expected
    // Google API format.
    let icon = {};
    if (config.anchor) {
      icon.anchor = google.maps.Point(config.anchor.x, config.anchor.y);
    }

    if (config.scaledSize) {
      icon.scaledSize = google.maps.Size(config.scaledSize.w, config.scaledSize.h);
    }

    if (config.url) {
      icon.url = iconCfg.url;
    }

    if (config.svg) {
      icon.url = `data:image/svg+xml;charset=utf-8, ${encodeURIComponent(config.svg)}`;
    }

    let label;
    if (config.label) {
      label = config.label;
    } else {
      label = marker.label.toString();
    }

    // NOTE(billy) Google maps doesn't handle empty icon objects nicely
    // Make google maps happy if no settings for icon are provided;
    if (Object.keys(icon).length === 0) {
      icon = undefined;
    }

    return new GoogleMapConfig({
      position: {
        lat: marker.latitude,
        lng: marker.longitude
      },
      icon: icon,
      label: label
    })
  }
}
