/** @module VerticalResultsComponent */

import Component from '../component';

import AlternativeVerticalsComponent from './alternativeverticalscomponent';
import MapComponent from '../map/mapcomponent';
import ResultsContext from '../../../core/storage/resultscontext';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';
import CardComponent from '../cards/cardcomponent';

class VerticalResultsConfig {
  constructor (config = {}) {
    Object.assign(this, config);

    /**
     * verticalConfigId used for analytics and passed to children
     * @type {string}
     * @private
     */
    this.verticalConfigId = config.verticalConfigId;

    /**
     * isUniversal is set to true if this component is added by the UniversalResultsComponent
     * @type {boolean}
     * @private
     */
    this.isUniversal = config.isUniversal || false;

    /**
     * _showEnhancedNoResults is set to true if the noResults object exists in the component's
     * config
     * @type {boolean}
     * @private
     */
    this._showEnhancedNoResults = config.noResults || false;

    /**
     * _displayAllResults is set to true if the config option noResults.displayAllResults is true,
     * meaning that all results for the vertical will display when there are no results for a query
     * @type {boolean}
     * @private
     */
    this._displayAllResults = config.noResults && config.noResults.displayAllResults;

    const parentOpts = config._parentOpts || {};

    /**
     * Custom render function
     * @type {function}
     */
    this.renderItem = config.renderItem || parentOpts.renderItem;

    /**
     * Custom item template
     * @type {string}
     */
    this.itemTemplate = config.itemTemplate || parentOpts.itemTemplate;

    /**
     * The url to the universal page for the no results page to link back to with current query
     * @type {string|null}
     */
    this._universalUrl = config.universalUrl;

    /**
     * The maximum number of columns to display, supports 1, 2, 3, or 4.
     * @type {number}
     */
    this.maxNumberOfColumns = config.maxNumberOfColumns || 1;

    /**
     * The config to pass to the card
     * @type {Object}
     */
    this.card = config.card || {};

    /**
     * Config for the footer at the bottom of the vertical results
     * @type {Object}
     */
    this.footer = config.footer || {};
  }
}

export default class VerticalResultsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new VerticalResultsConfig(config), systemConfig);
    this.moduleId = StorageKeys.VERTICAL_RESULTS;
    this._verticalsConfig = this.core.globalStorage
      .getState(StorageKeys.VERTICAL_PAGES_CONFIG)
      .verticalPagesConfig || [];
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
    /**
     * @type {Array<Result>}
     */
    const results = data.results || [];
    const numColumns = Math.min(results.length || 1, this._config.maxNumberOfColumns);
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    const displayResultsIfExist = this._config._isUniversal ||
      this._config._displayAllResults ||
      data.resultsContext === ResultsContext.NORMAL;
    return super.setState(Object.assign({ results: [] }, data, {
      isPreSearch: searchState === SearchStates.PRE_SEARCH,
      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
      includeMap: this._config.includeMap,
      mapConfig: this._config.mapConfig,
      eventOptions: this.eventOptions(),
      universalUrl: this._universalUrl ? this._universalUrl + window.location.search : '',
      query: this.core.globalStorage.getState(StorageKeys.QUERY),
      numColumns,
      currentVerticalLabel: this._currentVerticalLabel,
      resultsPresent: displayResultsIfExist && results.length !== 0,
      showNoResults: data.resultsContext === ResultsContext.NO_RESULTS,
      isEnhancedNoResultsEnabled: this._config._showEnhancedNoResults
    }), val);
  }

  /**
   * helper to construct the eventOptions object for the view all link
   * @returns {string}
   */
  eventOptions () {
    return JSON.stringify({
      verticalConfigId: this._config.verticalConfigId
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
  static defaultTemplateName (config) {
    return 'results/verticalresults';
  }

  addChild (data, type, opts) {
    if (type === MapComponent.type) {
      data = {
        map: data
      };
      const newOpts = Object.assign({}, this._config.mapConfig, opts);
      return super.addChild(data, type, newOpts);
    } else if (type === CardComponent.type) {
      const newOpts = {
        ...this._config.card,
        verticalConfigId: this._config.verticalConfigId,
        isUniversal: this._config.isUniversal,
        template: this._config.itemTemplate,
        render: this._config.renderItem,
        ...opts
      };
      return super.addChild(data, type, newOpts);
    } else if (type === AlternativeVerticalsComponent.type) {
      data = this.core.globalStorage.getState(StorageKeys.ALTERNATIVE_VERTICALS);
      const newOpts = Object.assign({}, {
        universalUrl: this._config._universalUrl,
        verticalsConfig: this._verticalsConfig
      },
      this._config.noResults, opts);
      return super.addChild(data, type, newOpts);
    }
    return super.addChild(data, type, opts);
  }
}
