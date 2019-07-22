/** @module FilterSearchComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import StorageKeys from '../../../core/storage/storagekeys';
import Filter from '../../../core/models/filter';
import SearchParams from '../../dom/searchparams';

/**
 * FilterSearchComponent is used for autocomplete using the FilterSearch backend.
 * It'll allow you to pick pre-set filters that are setup on the backend within
 * a vertical search context.
 *
 * @extends Component
 */
export default class FilterSearchComponent extends Component {
  constructor (config = {}) {
    super(config);

    /**
     * The input key for the vertical search configuration
     * @type {string}
     */
    this._barKey = config.barKey || config.inputKey || null;

    /**
     * The vertical key for vertical search configuration
     * @type {string}
     */
    this._verticalKey = config.verticalKey || null;

    /**
     * If true, store the filter value but do not search on change
     * @type {boolean}
     * @private
     */
    this._storeOnChange = config.storeOnChange || false;

    /**
     * Query submission is based on a form as context.
     * Optionally provided, otherwise defaults to native form node within container
     * @type {string} CSS selector
     */
    this._formEl = config.formSelector || 'form';

    /**
     * The input element used for searching and wires up the keyboard interaction
     * Optionally provided.
     * @type {string} CSS selector
     */
    this._inputEl = config.inputEl || '.js-yext-query';

    /**
     * The title used, provided to the template as a data point
     * Optionally provided.
     * @type {string}
     */
    this.title = config.title;

    /**
     * The search text used for labeling the input box, also provided to template.
     * Optionally provided
     * @type {string}
     */
    this.searchText = config.searchText || 'What are you interested in?';

    /**
     * The query text to show as the first item for auto complete.
     * Optionally provided
     * @type {string}
     */
    this.promptHeader = config.promptHeader || null;

    /**
     * Auto focuses the input box if set to true.
     * Optionally provided, defaults to false.
     * @type {boolean}
     */
    this.autoFocus = config.autoFocus === true;

    /**
     * submitURL will force the search query submission to get
     * redirected to the URL provided.
     * Optional, defaults to null.
     *
     * If no redirectUrl provided, we keep the page as a single page app.
     *
     * @type {boolean}
     */
    this.redirectUrl = config.redirectUrl || null;

    /**
     * The query string to use for the input box, provided to template for rendering.
     * Optionally provided
     * @type {string}
     */
    this.query = config.query || this.getUrlParams().get(`${this.name}.query`) || '';

    /**
     * The filter string to use for the provided query
     * Optionally provided
     * @type {string}
     */
    this.filter = config.filter || this.getUrlParams().get(`${this.name}.filter`) || '';
  }

  static get type () {
    return 'FilterSearch';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'search/filtersearch';
  }

  onCreate () {
    if (this.query && this.query.length > 0 && this.filter && this.filter.length > 0) {
      const params = this.getUrlParams();
      params.set(`${this.name}.query`, this.query);
      params.set(`${this.name}.filter`, this.filter);
      window.history.pushState({}, '', '?' + params.toString());
      this.core.setFilter(this.name, Filter.fromResponse(this.filter));
      this.search();
    }

    this.bindBrowserHistory();
  }

  onMount () {
    // Wire up our search handling and auto complete
    this.initAutoComplete(this._inputEl);

    if (this.autoFocus === true && this.query.length === 0) {
      DOM.query(this._container, this._inputEl).focus();
    }
  }

  /**
   * A helper method to wire up our auto complete on an input selector
   * @param {string} inputSelector CSS selector to bind our auto complete component to
   */
  initAutoComplete (inputSelector) {
    this._inputEl = inputSelector;

    this.componentManager.create('AutoComplete', {
      parent: this,
      name: `${this.name}.autocomplete`,
      isFilterSearch: true,
      container: '.yext-search-autocomplete',
      promptHeader: this.promptHeader,
      originalQuery: this.query,
      originalFilter: this.filter,
      inputEl: inputSelector,
      verticalKey: this._verticalKey,
      barKey: this._barKey,
      onSubmit: (query, filter) => {
        const params = this.getUrlParams();
        params.set(`${this.name}.query`, query);
        params.set(`${this.name}.filter`, filter);

        // If we have a redirectUrl, we want the params to be
        // serialized and submitted.
        if (typeof this.redirectUrl === 'string') {
          window.location.href = this.redirectUrl + '?' + params.toString();
          return false;
        }

        window.history.pushState({}, '', '?' + params.toString());

        // save the filter to storage for the next search
        this.core.setFilter(this.name, Filter.fromResponse(filter));
        this.search();
      }
    });
  }

  /**
   * Perform the vertical search with all saved filters and query,
   * optionally redirecting based on config
   */
  search () {
    if (this._storeOnChange) {
      return;
    }

    const filters = this.core.storage.getAll(StorageKeys.FILTER);
    let totalFilter = filters[0];
    if (filters.length > 1) {
      totalFilter = Filter.and(...filters);
    }
    const searchQuery = this.core.storage.getState(StorageKeys.QUERY) || '';

    this.core.verticalSearch(searchQuery, this._verticalKey, JSON.stringify(totalFilter));
  }

  setState (data) {
    return super.setState(Object.assign({
      title: this.title,
      searchText: this.searchText,
      query: this.query,
      filter: this.filter
    }, data));
  }

  getUrlParams (url) {
    url = url || window.location.search.substring(1);
    return new SearchParams(url);
  }

  bindBrowserHistory () {
    DOM.on(window, 'popstate', () => {
      this.query = this.getUrlParams().get(`${this.name}.query`);
      this.filter = this.getUrlParams().get(`${this.name}.filter`);
      this.setState({
        query: this.query,
        filter: this.filter
      });

      this._saveQueryAndFilter(this.query, this.filter);
      this.search();
    });
  }
}
