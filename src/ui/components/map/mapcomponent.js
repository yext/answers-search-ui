/** @module MapComponent */

import Component from '../component';

import GoogleMapProvider from './providers/googlemapprovider';
import MapBoxMapProvider from './providers/mapboxmapprovider';

import StorageKeys from '../../../core/storage/storagekeys';
import ResultsContext from '../../../core/storage/resultscontext';

const ProviderTypes = {
  'google': GoogleMapProvider,
  'mapbox': MapBoxMapProvider
};

export default class MapComponent extends Component {
  constructor (opts = {}, systemOpts = {}) {
    super(opts, systemOpts);

    /**
     * Bind this component to listen to the storage based on this key
     */
    this.moduleId = StorageKeys.VERTICAL_RESULTS;

    /**
     * Configuration for the behavior when there are no vertical results.
     */
    this._noResults = Object.assign(
      { displayAllResults: false, template: '' },
      opts.noResults || this.core.globalStorage.getState(StorageKeys.NO_RESULTS_CONFIG),
    );

    /**
     * An aliased used to determine the type of map provider to use
     * @type {string}
     */
    this._mapProvider = opts.mapProvider;
    if (!this._mapProvider || !(this._mapProvider.toLowerCase() in ProviderTypes)) {
      throw new Error('MapComponent: Invalid Map Provider; must be `google` or `mapBox`');
    }

    /**
     * A reference to an instance of the {MapProvider} that's constructed
     * @type {MapProvider}
     */
    this._map = null;
  }

  static get type () {
    return 'Map';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/map';
  }

  // TODO(billy) Make ProviderTypes a factory class
  getProviderInstance (type) {
    return new ProviderTypes[type.toLowerCase()](this._config);
  }

  onCreate () {
    this._map = this.getProviderInstance(this._mapProvider);
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

    if (data.resultsContext !== ResultsContext.NORMAL && !this._noResults.displayAllResults) {
      data = {};
    }

    return super.setState(data, val);
  }
}
