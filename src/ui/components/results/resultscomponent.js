/** @module ResultsComponent */

import Component from '../component';

import MapComponent from '../map/mapcomponent';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';

export default class ResultsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    /**
     * verticalConfigId used for analytics and passed to children
     * @type {string}
     * @private
     */
    this._verticalConfigId = config.verticalConfigId;

    /**
     * isUniversal is set to true if this component is added by the UniversalResultsComponent
     * @type {boolean}
     * @private
     */
    this._isUniversal = config.isUniversal || false;

    this.moduleId = StorageKeys.VERTICAL_RESULTS;

    /**
     * The url to the universal page for the no results page to link back to with current query
     * @type {string|null}
     */
    this._universalUrl = config.universalUrl;
  }

  mount () {
    if (Object.keys(this.getState()).length > 0) {
      super.mount();
    }

    return this;
  }

  static get duplicatesAllowed () {
    return true;
  }

  setState (data, val) {
    const results = data.results || [];
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    return super.setState(Object.assign({ results: [] }, data, {
      isPreSearch: searchState === SearchStates.PRE_SEARCH,
      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
      includeMap: this._config.includeMap,
      mapConfig: this._config.mapConfig,
      eventOptions: this.eventOptions(),
      universalUrl: this._universalUrl ? this._universalUrl + window.location.search : '',
      showNoResults: results.length === 0,
      query: this.core.globalStorage.getState(StorageKeys.QUERY)
    }), val);
  }

  /**
   * helper to construct the eventOptions object for the view all link
   * @returns {string}
   */
  eventOptions () {
    return JSON.stringify({
      verticalConfigId: this._verticalConfigId
    });
  }

  static get type () {
    return 'VerticalResults';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName () {
    return 'results/results';
  }

  addChild (data, type, opts) {
    if (type === MapComponent.type) {
      data = {
        map: data
      };
      const newOpts = Object.assign({}, this._config.mapConfig, opts);
      return super.addChild(data, type, newOpts);
    }

    // Apply the proper item renders to the the components
    // have just been constructed. Prioritize global over individual items.
    return super.addChild(data, type, Object.assign(opts, {
      verticalConfigId: this._verticalConfigId,
      isUniversal: this._isUniversal
    }));
  }
}
