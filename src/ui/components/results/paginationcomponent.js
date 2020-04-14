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
    this._maxVisiblePagesDesktop = config.maxVisiblePagesDesktop === undefined ? 1 : config.maxVisiblePagesDesktop;

    /**
     * The number of pages visible before/after the current page on mobile.
     * @type {number}
     * @private
     */
    this._maxVisiblePagesMobile = config.maxVisiblePagesMobile === undefined ? 1 : config.maxVisiblePagesMobile;

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
    this.core.verticalPage(this._verticalKey);
  }

  scrollToTop () {
    document.documentElement.scrollTop = 0;
    // Safari
    document.body.scrollTop = 0;
  }

  /**
   * Pagination should evenly add page numbers in the "forward" and "backward" directions, unless
   * one side has reached the max/min value, in which case the remaining side should be the only
   * one to get more pages.
   * @param {number} pageNumber the current page's number
   * @param {number} maxPage the highest page number, acts as the upper bound
   * @param {number} limit the maximum total number of pages that are allocated
   * @returns {Array<number>} the backLimit and frontLimit, respectively
   */
  _allocate (pageNumber, maxPage, limit) {
    var backLimit = pageNumber;
    var frontLimit = pageNumber;
    for (var i = 0; i < limit; i++) {
      if (i % 2 === 0) {
        if (backLimit > 0) {
          backLimit--;
        } else if (frontLimit < maxPage) {
          frontLimit++;
        }
      } else {
        if (frontLimit < maxPage) {
          frontLimit++;
        } else if (backLimit > 0) {
          backLimit--;
        }
      }
    }

    return [backLimit, frontLimit];
  }

  /**
   * Creates an object representing the view state of the page numbers and ellipses
   * @param {number} pageNumber refers to the page number, not the page index
   * @param {number} maxPage
   * @returns {Object}
   */
  _createPageNumbers (pageNumber, maxPage) {
    const [mobileBackLimit, mobileFrontLimit] = this._allocate(pageNumber, maxPage, this._maxVisiblePagesMobile);
    const [desktopBackLimit, desktopFrontLimit] = this._allocate(pageNumber, maxPage, this._maxVisiblePagesDesktop);
    const pageNumbers = [];
    for (var i = 1; i <= maxPage; i++) {
      const num = { number: i };
      if (i === pageNumber) {
        num.active = true;
      } else {
        if (i <= mobileBackLimit || i > mobileFrontLimit) {
          num.mobileHidden = true;
        }
        if (i <= desktopBackLimit || i > desktopFrontLimit) {
          num.desktopHidden = true;
        }
      }
      pageNumbers.push(num);
    }

    return {
      ellipses: {
        mobileBack: this._pinFirstAndLastPage && mobileBackLimit > 0,
        mobileFront: this._pinFirstAndLastPage && mobileFrontLimit < maxPage,
        desktopBack: this._pinFirstAndLastPage && desktopBackLimit > 0,
        desktopFront: this._pinFirstAndLastPage && desktopFrontLimit < maxPage
      },
      pageNumbers
    };
  }

  setState (data) {
    const results = this.core.globalStorage.getState(StorageKeys.VERTICAL_RESULTS) || {};
    let offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;
    const limit = this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit;
    const pageNumber = (offset / limit) + 1;
    const isMoreResults = results.resultsCount > offset + limit;
    const maxPage = Math.trunc((results.resultsCount - 1) / limit) + 1;
    const { ellipses, pageNumbers } = this._createPageNumbers(pageNumber, maxPage);

    return super.setState({
      showControls: this.shouldShowControls(results, limit),
      firstPageButtonEnabled: this._firstPageButtonEnabled,
      lastPageButtonEnabled: this._lastPageButtonEnabled,
      pageNumber,
      pageLabel: this._pageLabel,
      showFirstPageButton: pageNumber > 2,
      showPreviousPageButton: pageNumber > 1,
      showNextPageButton: isMoreResults,
      showLastPageButton: pageNumber < maxPage - 1,
      icons: this._icons,
      pageNumbers,
      ellipses,
      pinPages: this._pinFirstAndLastPage,
      nextPage: pageNumber + 1,
      maxPage,
      ...data
    });
  }
}
