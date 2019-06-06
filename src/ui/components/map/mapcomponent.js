import Component from '../component';
import DOM from '../../dom/dom';

import GoogleMapProvider from './providers/googlemapprovider';
import MapBoxMapProvider from './providers/mapboxmapprovider';

export default class MapComponent extends Component {
  constructor(opts = {}) {
    super(opts);

    /**
     * Bind this component to listen to the storage based on this key
     */
    this.moduleId = 'verticalResults';

    /**
     * The default template to use to render this component
     */
    this._templateName = 'results/map';

    /**
     * An aliased used to determine the type of map provider to use
     * @type {string}
     */
    this._mapProvider = opts.mapProvider;

    /**
     * A reference to an instance of the {MapProvider} that's constructed
     * @type {MapProvider}
     */
    this._map = null;
  }

  static get type() {
    return 'Map';
  }

  onCreate() {
    if (this._mapProvider === 'google') {
      this._map = new GoogleMapProvider(this._opts);
    } else {
      this._map = new MapBoxMapProvider(this._opts);
    }

    this._map.loadJS(() => {
      let mapData = this.getState('map');
      if (mapData === undefined) {
        return;
      }

      this._map.init(this._container, mapData);
    });
  }

  onMount() {
    // NOTE(billy) This is temporary, we should create a single promise interface
    // for init to deal with the internal javascript loading
    if (this._map.isLoaded()) {
      this._map.init(this._container, this.getState('map'));
    }
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