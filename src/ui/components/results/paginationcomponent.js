/** @module PaginationComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import DOM from '../../dom/dom';
import { AnswersComponentError } from '../../../core/errors/errors';
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
     * The number of pages visible before/after the current page on desktop.
     * @type {number}
     * @private
     */
    this._maxVisiblePagesDesktop = config.maxVisiblePagesDesktop === undefined ? 0 : config.maxVisiblePagesDesktop;

    /**
     * The number of pages visible before/after the current page on mobile.
     * @type {number}
     * @private
     */
    this._maxVisiblePagesMobile = config.maxVisiblePagesMobile === undefined ? 0 : config.maxVisiblePagesMobile;

    /**
     * DEPRECATED
     * @type {boolean}
     * @private
     */
    this._firstPageButtonEnabled = config.showFirst === undefined ? config.showFirstAndLastButton : config.showFirst;

    /**
     * DEPRECATED
     * @type {boolean}
     * @private
     */
    this._lastPageButtonEnabled = config.showLast === undefined ? config.showFirstAndLastButton : config.showLast;

    /**
     * If true, displays the first and last page buttons
     * @type {boolean}
     * @private
     */
    this._showFirstAndLastPageButtons = config.showFirstAndLastButton !== false;

    /**
     * If true, always displays the page numbers for first and last page.
     * @type {boolean}
     * @private
     */
    this._pinFirstAndLastPage = !!config.pinFirstAndLastPage;

    /**
     * Icons object for first, previous, next, and last page icons.
     * @type {{
     *  nextButtonIcon: (string | undefined),
     *  previousButtonIcon: (string | undefined),
     *  firstButtonIcon: (string | undefined),
     *  lastButtonIcon: (string | undefined),
     * }}
     * @private
     */
    this._icons = config.icons;

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
    this._pageLabel = config.pageLabel === undefined ? 'Page' : config.pageLabel;

    /**
     * Function that is invoked on pagination
     * @type {function(): {}}
     * @private
     */
    this._onPaginate = config.onPaginate || this.scrollToTop;

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
  }

  static get type () {
    return 'Pagination';
  }

  static defaultTemplateName () {
    return 'results/pagination';
  }

  shouldShowControls (results, limit) {
    const hasResults = results.searchState === 'search-complete' && results.resultsCount > limit;
    const noResultsConfig = this.core.globalStorage.getState(StorageKeys.NO_RESULTS_CONFIG) || {};
    const showControls = hasResults &&
      (results.resultsContext === ResultsContext.NORMAL || noResultsConfig.displayAllResults);
    return showControls;
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

    DOM.queryAll('.js-yxt-Pagination-link').forEach(node => {
      DOM.on(node, 'click', () => this.updatePage((parseInt(node.dataset.number) - 1) * limit));
    });
  }

  updatePage (offset) {
    this._onPaginate();
    this.core.globalStorage.set(StorageKeys.SEARCH_OFFSET, offset);
    this.core.persistentStorage.set(StorageKeys.SEARCH_OFFSET, offset);
    this.core.verticalPage(this._verticalKey, offset);
  }

  scrollToTop () {
    document.documentElement.scrollTop = 0;
    // Safari
    document.body.scrollTop = 0;
  }

  /**
   * Pagination should evenly allocate between front and back, unless one side hits the limit,
   * in which case the remaining side should be allocated up to the max.
   * @param {number} pageNumber the current page's number
   * @param {number} maxPage the highest page number, acts as the upper bound
   * @param {number} limit the maximum total number of pages that are allocated
   * @returns {Array<number>} the backLimit and frontLimit, respectively
   */
  _allocate (pageNumber, maxPage, limit) {
    var backLimit = pageNumber;
    var frontLimit = pageNumber;
    for (var i = 0; i < limit; i++) {
      if (i % 2 === 1) {
        if (backLimit > 0) {
          backLimit--;
        } else if (frontLimit < maxPage + 1) {
          frontLimit++;
        }
      } else {
        if (frontLimit < maxPage + 1) {
          frontLimit++;
        } else if (backLimit > 0) {
          backLimit--;
        }
      }
    }

    return [backLimit, frontLimit];
  }

  setState (data) {
    const results = this.core.globalStorage.getState(StorageKeys.VERTICAL_RESULTS) || {};
    let offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;
    const limit = this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit;
    const pageNumber = offset / limit;
    const isMoreResults = results.resultsCount > offset + limit;
    const maxPage = Math.trunc((results.resultsCount - 1) / limit);
    var mobileBackLimit, mobileFrontLimit, desktopBackLimit, desktopFrontLimit;
    var mobileLimits = this._allocate(pageNumber, maxPage, this._maxVisiblePagesMobile);
    var desktopLimits = this._allocate(pageNumber, maxPage, this._maxVisiblePagesDesktop);
    mobileBackLimit = mobileLimits[0];
    mobileFrontLimit = mobileLimits[1];
    desktopBackLimit = desktopLimits[0];
    desktopFrontLimit = desktopLimits[1];

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
      icons: this._icons,
      mobileBackLimit,
      desktopBackLimit,
      mobileFrontLimit,
      desktopFrontLimit,
      ellipses: {
        mobileBack: mobileBackLimit > 0,
        mobileFront: mobileFrontLimit < maxPage + 1,
        desktopBack: desktopBackLimit > 0,
        desktopFront: desktopFrontLimit < maxPage + 1
      },
      pinPages: this._pinFirstAndLastPage,
      nextPage: pageNumber + 2,
      maxPage: maxPage + 1,
      ...data
    });
  }
}
