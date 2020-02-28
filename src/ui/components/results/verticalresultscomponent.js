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
    this.numColumns = 1;
    this.handleResize = this.handleResize.bind(this);
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

  /**
   * Gets the number of columns needed, capped at the max number of columns
   * set in the config, and also the number of results.
   * @returns {number}
   */
  getNumColumns () {
    if (this._config.maxNumberOfColumns <= 1 || !this.results.length) {
      return 1;
    }
    const totalWidth = this._container.scrollWidth;
    if (totalWidth <= this._config._desktopBreakpoint) {
      return 1;
    }
    const numColumns = Math.floor(totalWidth / this._config._cardMinWidth);
    return Math.min(numColumns, this._config.maxNumberOfColumns, this.results.length);
  }

  handleResize () {
    if (this._handleResizeTimer) {
      clearTimeout(this._handleResizeTimer);
    }

    this._handleResizeTimer = setTimeout(() => {
      const numColumns = this.getNumColumns();
      if (this.numColumns !== numColumns && numColumns !== 1) {
        this.numColumns = numColumns;
        const resultsEl = DOM.query(this._container, '.yxt-Results-items');
        resultsEl.classList.remove('yxt-Results-items-1');
        resultsEl.classList.remove('yxt-Results-items-2');
        resultsEl.classList.remove('yxt-Results-items-3');
        resultsEl.classList.remove('yxt-Results-items-4');
        resultsEl.classList.add(`yxt-Results-items-${this.numColumns}`);
      }
    }, 100);
  }

  onCreate () {
    window.addEventListener('resize', this.handleResize);
  }

  onDestroy () {
    window.removeEventListener('resize', this.handleResize);
  }

  setState (data, val) {
    /**
     * @type {Array<Result>}
     */
    this.results = data.results || [];
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    this.numColumns = this.getNumColumns();
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
      placeholders: new Array(this._config.maxNumberOfColumns),
      numColumns: this.numColumns
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
