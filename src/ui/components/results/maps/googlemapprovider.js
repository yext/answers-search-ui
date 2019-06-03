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

          let marker = new google.maps.Marker({
            map: this.map,
            position: {
              lat: markers[i].latitude,
              lng: markers[i].longitude
            }
          })

          bounds.extend(marker.position);
        }
      }

      this.map.fitBounds(bounds);
    }, 100);
  }
}
