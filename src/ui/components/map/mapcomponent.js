import Component from '../component';

import GoogleMapProvider from './providers/googlemapprovider';
import MapBoxMapProvider from './providers/mapboxmapprovider';

const ProviderTypes = {
  'google': GoogleMapProvider,
  'mapbox': MapBoxMapProvider
};

export default class MapComponent extends Component {
  constructor (opts = {}) {
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
    if (!this._mapProvider || !(this._mapProvider.toLowerCase() in ProviderTypes)) {
      throw new Error('MapComponent: Invalid Map Provider; must be `google` or `mapBox`');
    }

    /**
     * Internal indication of whether or not to use a static or dynamic map
     * @type {boolean}
     */
    this._isStatic = opts.isStatic || false;

    /**
     * A reference to an instance of the {MapProvider} that's constructed
     * @type {MapProvider}
     */
    this._map = null;
  }

  static get type () {
    return 'Map';
  }

  // TODO(billy) Make ProviderTypes a factory class
  getProviderInstance (type) {
    return new ProviderTypes[type.toLowerCase()](this._opts);
  }

  onCreate () {
    this._map = this.getProviderInstance(this._mapProvider);
    let mapData = this.getState('map');
    if (mapData === undefined && this._isStatic) {
      return this;
    }

    if (this._isStatic) {
      // TODO(billy) The existing template should just take in the map `imgURL` as data
      // Instead of overriding the template like so, but NBD for now.
      this.setTemplate(this._map.generateStatic(mapData));
      return this;
    }

    this._map.loadJS();
  }

  onMount () {
    this._map.onLoaded(() => {
      this._map.init(this._container, this.getState('map'));
    });
  }

  setState (data, val) {
    if (Object.keys(data).length === 0) {
      return this;
    }

    return super.setState(data, val);
  }
}
