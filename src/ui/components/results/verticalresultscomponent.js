/** @module VerticalResultsComponent */

import Component from '../component';

import AlternativeVerticalsComponent from './alternativeverticalscomponent';
import MapComponent from '../map/mapcomponent';
import ResultsContext from '../../../core/storage/resultscontext';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';
import CardComponent from '../cards/cardcomponent';
import ResultsHeaderComponent from './resultsheadercomponent';
import { addParamsToUrl } from '../../../core/utils/urlutils';

class VerticalResultsConfig {
  constructor (config = {}) {
    Object.assign(this, config);

    /**
     * isUniversal is set to true if this component is added by the UniversalResultsComponent
     * @type {boolean}
     * @private
     */
    this.isUniversal = config.isUniversal || false;

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
     * Config options used in the {@link ResultsHeaderComponent}
     */
    this.resultsHeaderOpts = {
      /**
       * Whether to display the number of results.
       * @type {boolean}
       */
      showResultCount: config.showResultCount === undefined ? true : config.showResultCount,

      /**
       * If present, show the filters that were ultimately applied to this query
       * @type {boolean}
       */
      showAppliedFilters: config.showAppliedFilters === undefined ? true : config.showAppliedFilters,

      /**
       * If showResultCount and showAppliedFilters are true,
       * display this separator between the result count and the applied query filters
       * @type {string}
       */
      resultsCountSeparator: config.resultsCountSeparator || '|',

      /**
       * If showAppliedFilters is true, show the field name in the string followed by a colon.
       * @type {boolean}
       */
      showFieldNames: config.showFieldNames || false
    };
  }
}

export default class VerticalResultsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new VerticalResultsConfig(config), systemConfig);

    const noResultsConfig = this._config.noResults ||
      this.core.globalStorage.getState(StorageKeys.NO_RESULTS_CONFIG);
    /**
     * A parsed version of the noResults config provided to the component.
     * Applies sensible defaults if certain values are not set.
     * @type {Object}
     * @private
     */
    this._noResultsConfig = Object.assign(
      { displayAllResults: false, template: '' }, noResultsConfig);

    /**
     * Boolean indicating if legacy no results display should be used.
     * @type {boolean}
     * @private
     */
    this._useLegacyNoResults = this._config.isUniversal || !noResultsConfig;

    /**
     * _displayAllResults controls if all results for the vertical will display
     * when there are no results for a query.
     * @type {boolean}
     * @private
     */
    this._displayAllResults = this._noResultsConfig.displayAllResults;

    /**
     * Specifies a custom no results template.
     *
     * @type {string}
     * @private
     */
    this._noResultsTemplate = this._noResultsConfig.template;

    this.moduleId = StorageKeys.VERTICAL_RESULTS;
    this._verticalsConfig = this.core.globalStorage
      .getState(StorageKeys.VERTICAL_PAGES_CONFIG).get() || [];
    /**
     * @type {Array<Result>}
     */
    this.results = [];
    this.numColumns = this._config.maxNumberOfColumns;
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

  getUniversalUrl () {
    const universalConfig = this._verticalsConfig.find(config => !config.verticalKey) || {};
    if (universalConfig.url) {
      return addParamsToUrl(universalConfig.url, { query: this.query });
    }
  }

  getVerticalURL (data) {
    const verticalConfig = this._verticalsConfig.find(config => config.verticalKey === this.verticalKey) || {};
    const verticalURL = verticalConfig.url || data.verticalURL || this.verticalKey + '.html';
    return addParamsToUrl(verticalURL, { query: this.query });
  }

  setState (data = {}, val) {
    /**
     * @type {Array<Result>}
     */
    this.results = data.results || [];
    this.resultsCount = data.resultsCount;
    this.verticalKey = data.verticalConfigId;
    this.resultsContext = data.resultsContext;
    this.appliedQueryFilters = data.appliedQueryFilters;
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    const displayResultsIfExist = this._config.isUniversal ||
      this._displayAllResults ||
      data.resultsContext === ResultsContext.NORMAL;
    const showResultsHeader = this._config.resultsHeaderOpts.showResultCount ||
      this._config.resultsHeaderOpts.showAppliedFilters;
    this.query = this.core.globalStorage.getState(StorageKeys.QUERY);

    return super.setState(Object.assign({ results: [] }, data, {
      isPreSearch: searchState === SearchStates.PRE_SEARCH,
      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
      eventOptions: this.eventOptions(),
      universalUrl: this.getUniversalUrl(),
      verticalURL: this.getVerticalURL(data),
      query: this.query,
      currentVerticalLabel: this._currentVerticalLabel,
      resultsPresent: displayResultsIfExist && this.results.length !== 0,
      showNoResults: this.resultsContext === ResultsContext.NO_RESULTS,
      placeholders: new Array(this._config.maxNumberOfColumns + 1),
      numColumns: Math.min(this._config.maxNumberOfColumns, this.results.length),
      showResultsHeader: showResultsHeader,
      useLegacyNoResults: this._useLegacyNoResults
    }), val);
  }

  /**
   * helper to construct the eventOptions object for the view all link
   * @returns {string}
   */
  eventOptions () {
    return JSON.stringify({
      verticalConfigId: this.verticalKey
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
      const newOpts = Object.assign(
        {}, this._config.mapConfig, { noResults: this._noResultsConfig }, opts);
      return super.addChild({ map: data }, type, newOpts);
    } else if (type === CardComponent.type) {
      const updatedData = {
        result: this.results[opts._index],
        verticalKey: this.verticalKey
      };
      const newOpts = {
        target: this._config.target,
        ...this._config.card,
        isUniversal: this._config.isUniversal,
        template: this._config.itemTemplate,
        render: this._config.renderItem,
        ...opts
      };
      return super.addChild(updatedData, type, newOpts);
    } else if (type === AlternativeVerticalsComponent.type) {
      const hasResults = this.results && this.results.length > 0;
      data = this.core.globalStorage.getState(StorageKeys.ALTERNATIVE_VERTICALS);
      const newOpts = {
        template: this._noResultsTemplate,
        universalUrl: this.getUniversalUrl(),
        verticalsConfig: this._verticalsConfig,
        isShowingResults: this._displayAllResults && hasResults,
        ...opts
      };
      return super.addChild(data, type, newOpts);
    } else if (type === ResultsHeaderComponent.type) {
      const resultsHeaderData = {
        resultsLength: this.results.length,
        resultsCount: this.resultsCount,
        appliedQueryFilters: this.appliedQueryFilters,
        ...data
      };
      const _opts = { ...opts };
      if (this.resultsContext === ResultsContext.NO_RESULTS) {
        _opts.showAppliedFilters = false;
      }
      return super.addChild(resultsHeaderData, type, _opts);
    }
    return super.addChild(data, type, opts);
  }
}
