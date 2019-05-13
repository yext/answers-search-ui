import Component from '../component';
import DOM from '../../dom/dom';

export default class MapComponent extends Component {
  constructor(opts = {}) {
    super(opts);

    this.moduleId = 'verticalResults';

    this._templateName = 'results/map';

    this._mapProvider = opts.mapProvider;

    this._mapApiKey = opts.mapApiKey;

    this._width = opts.width || '100%';

    this._height = opts.height || '100%';

    this._zoom = opts.zoom || 20;

    this._map = null;
  }

  static get type() {
    return 'Map';
  }

  onCreate() {
    let script = DOM.createEl('script', {
      id: 'google-map-js',
      onload: () => { this.initMap() },
      async: true,
      src: 'https://maps.googleapis.com/maps/api/js?key='+this._mapApiKey
    });

    DOM.append('body', script);
  }

  onMount() {
    this.initMap();
  }

  initMap() {
    let mapData = this.getState('map');

    if (!mapData || mapData.mapMarkers.length <= 0) {
      this._map = null;
      this.unMount();
      return this;
    }

    // NOTE(billy) This timeout is a hack
    setTimeout(() => {
      let container = DOM.query(this._container);
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

  setState(data, val) {
    if (Object.keys(data).length === 0) {
      return this;
    }

    return super.setState(Object.assign(data, {
      mapConfig: {
        mapProvider: this._mapProvider,
        mapApiKey: this._mapApiKey
      }
    }), val);
  }
}