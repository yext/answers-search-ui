/** @module VerticalResultsComponent */

import Component from '../component';

import MapComponent from '../map/mapcomponent';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';
import CardComponent from '../cards/cardcomponent';
import DOM from '../../dom/dom';

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
    /**
     * @type {Array<Result>}
     */
    this.results = [];
    this.placeholderCount = 0;
  }

  mount () {
    if (Object.keys(this.getState()).length > 0) {
      super.mount();
    }
    return this;
  }

  onMount () {
    const placeholderCount = this.getPlaceholderCount();
    if (this.placeholderCount !== placeholderCount) {
      this.placeholderCount = placeholderCount;
      this.setState(this._state.get());
    }
  }

  static get duplicatesAllowed () {
    return true;
  }

  getPlaceholderCount () {
    const resultsCount = this.results.length;
    if (this._config.maxNumberOfColumns <= 1 || !resultsCount) {
      return 0;
    }
    // When there is only a single row of cards, it's undetermined without querying the dom
    // whether placeholders are required or not. If the user resizes
    // their page after this initialization the placeholders will not be updated, but
    // adding a listener on window resize is incredibly laggy and an uncommon use case.
    if (resultsCount < this._config.maxNumberOfColumns) {
      const itemsEl = DOM.query(this._container, '.yxt-Results-items');
      const cardEl = DOM.query(this._container, '[data-component=Card]');
      if (!itemsEl || !cardEl) {
        return 0;
      }
      const totalWidth = itemsEl.scrollWidth + 32;
      const cardWidth = cardEl.scrollWidth;
      const numColumns = Math.floor(totalWidth / cardWidth);
      const numPlaceholders = (numColumns - resultsCount % numColumns) % numColumns;
      return numPlaceholders;
    }
    return this._config.maxNumberOfColumns;
  }

  setState (data, val) {
    /**
     * @type {Array<Result>}
     */
    this.results = data.results || [];
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    return super.setState(Object.assign({ results: [] }, data, {
      isPreSearch: searchState === SearchStates.PRE_SEARCH,
      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
      includeMap: this._config.includeMap,
      mapConfig: this._config.mapConfig,
      eventOptions: this.eventOptions(),
      universalUrl: this._universalUrl ? this._universalUrl + window.location.search : '',
      showNoResults: this.results.length === 0,
      query: this.core.globalStorage.getState(StorageKeys.QUERY),
      placeholders: new Array(this.placeholderCount)
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
      const index = opts.index;
      return super.addChild(this.results[index], type, newOpts);
    }
    return super.addChild(data, type, opts);
  }
}
