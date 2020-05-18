/** @module PaginationComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import DOM from '../../dom/dom';
import { AnswersComponentError, AnswersConfigError } from '../../../core/errors/errors';
import SearchStates from '../../../core/storage/searchstates';
import ResultsContext from '../../../core/storage/resultscontext';

export default class PaginationComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    /**
     * The vertical key to use for searches
     * @type {string}
     * @private
     */
    this._verticalKey = config.verticalKey || this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).verticalKey;
    if (typeof this._verticalKey !== 'string') {
      throw new AnswersComponentError(
        'verticalKey not provided, but necessary for pagination',
        'PaginationComponent');
    }

    /**
     * If true, displays the first page button
     * @type {boolean}
     * @private
     */
    this._firstPageButtonEnabled = config.showFirst === undefined ? true : config.showFirst;

    /**
     * If true, displays the last page button
     * @type {boolean}
     * @private
     */
    this._lastPageButtonEnabled = config.showLast === undefined ? true : config.showLast;

    /**
     * Options to include with all analytic events sent by this component
     * @type {object}
     * @private
     */
    this._analyticsOptions = {
      verticalKey: this._verticalKey
    };

    /**
     * Label for a page of results.
     * @type {string}
     * @private
     */
    this._pageLabel = config.pageLabel || 'Page';

    const offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;
    this.core.globalStorage.set(StorageKeys.SEARCH_OFFSET, Number(offset));
    this.core.globalStorage.on('update', StorageKeys.SEARCH_OFFSET, offset => {
      if (typeof offset === 'number') {
        return;
      }
      this.core.globalStorage.set(StorageKeys.SEARCH_OFFSET, Number(offset));
    });

    this.core.globalStorage.on('update', StorageKeys.VERTICAL_RESULTS, results => {
      if (results.searchState === SearchStates.SEARCH_COMPLETE) {
        this.setState();
      }
    });

    /**
     * Configuration for the behavior when there are no vertical results.
     */
    this._noResults = config.noResults || this.core.globalStorage.getState(StorageKeys.NO_RESULTS_CONFIG);
    if (typeof this._noResults !== 'object') {
      throw new AnswersConfigError(
        `No results config must be an object, received ${this._noResults}`,
        'Pagination'
      );
    }
  }

  static get type () {
    return 'Pagination';
  }

  static defaultTemplateName () {
    return 'results/pagination';
  }

  shouldShowControls (results, limit) {
    const hasResults = results.searchState === 'search-complete' && results.resultsCount > limit;
    const isNormalResults = results.resultsContext === ResultsContext.NORMAL;
    const isVisibleForNoResults = 'visible' in this._noResults
      ? this._noResults.visible
      : this._noResults.displayAllResults;
    return hasResults && (isNormalResults || isVisibleForNoResults);
  }

  onMount () {
    const results = this.core.globalStorage.getState(StorageKeys.VERTICAL_RESULTS) || {};
    const limit = this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit;
    const showControls = this.shouldShowControls(results, limit);
    const offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;
    if (!showControls) {
      return;
    }

    const previousPageButton = DOM.query(this._container, '.js-yxt-Pagination-previous');
    const nextPageButton = DOM.query(this._container, '.js-yxt-Pagination-next');
    const maxPage = Math.trunc((results.resultsCount - 1) / limit);

    DOM.on(previousPageButton, 'click', () => this.updatePage(offset - limit));
    DOM.on(nextPageButton, 'click', () => this.updatePage(offset + limit));

    if (this._firstPageButtonEnabled) {
      const firstPageButton = DOM.query(this._container, '.js-yxt-Pagination-first');
      DOM.on(firstPageButton, 'click', () => this.updatePage(0));
    }

    if (this._lastPageButtonEnabled) {
      const lastPageButton = DOM.query(this._container, '.js-yxt-Pagination-last');
      DOM.on(lastPageButton, 'click', () => this.updatePage(maxPage * limit));
    }
  }

  updatePage (offset) {
    this.scrollToTop();
    this.core.globalStorage.set(StorageKeys.SEARCH_OFFSET, offset);
    this.core.persistentStorage.set(StorageKeys.SEARCH_OFFSET, offset);
    this.core.verticalPage(this._verticalKey, offset);
  }

  scrollToTop () {
    document.documentElement.scrollTop = 0;
    // Safari
    document.body.scrollTop = 0;
  }

  setState (data) {
    const results = this.core.globalStorage.getState(StorageKeys.VERTICAL_RESULTS) || {};
    let offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;
    const limit = this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit;
    const pageNumber = offset / limit;
    const isMoreResults = results.resultsCount > offset + limit;
    const maxPage = Math.trunc((results.resultsCount - 1) / limit);
    return super.setState({
      showControls: this.shouldShowControls(results, limit),
      firstPageButtonEnabled: this._firstPageButtonEnabled,
      lastPageButtonEnabled: this._lastPageButtonEnabled,
      pageNumber: pageNumber + 1,
      pageLabel: this._pageLabel,
      showFirstPageButton: pageNumber > 1,
      showPreviousPageButton: pageNumber > 0,
      showNextPageButton: isMoreResults,
      showLastPageButton: pageNumber < maxPage - 1,
      ...data
    });
  }
}
