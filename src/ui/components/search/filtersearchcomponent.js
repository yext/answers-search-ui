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
    this.query = config.query || this.core.globalStorage.getState(`${StorageKeys.QUERY}.${this.name}`) || '';
    this.core.globalStorage.on('update', `${StorageKeys.QUERY}.${this.name}`, q => {
      this.query = q;
      this.search();
    });

    /**
     * The filter string to use for the provided query
     * Optionally provided
     * @type {string}
     */
    this.filter = config.filter || this.core.globalStorage.getState(`${StorageKeys.FILTER}.${this.name}`) || '';
    this.core.globalStorage.on('update', `${StorageKeys.FILTER}.${this.name}`, f => { this.filter = f; });
  }

  static get type () {
    return 'FilterSearch';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName () {
    return 'search/filtersearch';
  }

  onCreate () {
    if (this.query && this.filter) {
      this.search();
    }
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
      container: '.yxt-SearchBar-autocomplete',
      promptHeader: this.promptHeader,
      originalQuery: this.query,
      originalFilter: this.filter,
      inputEl: inputSelector,
      verticalKey: this._verticalKey,
      barKey: this._barKey,
      onSubmit: (query, filter) => {
        const params = new SearchParams(window.location.search.substring(1));
        params.set(`${this.name}.query`, query);
        params.set(`${this.name}.filter`, filter);

        // If we have a redirectUrl, we want the params to be
        // serialized and submitted.
        if (typeof this.redirectUrl === 'string') {
          window.location.href = this.redirectUrl + '?' + params.toString();
          return false;
        }

        // save the filter to storage for the next search
        this.query = query;
        this.filter = Filter.fromResponse(filter);
        this.core.persistentStorage.set(`${StorageKeys.QUERY}.${this.name}`, this.query);
        this.core.persistentStorage.set(`${StorageKeys.FILTER}.${this.name}`, this.filter);
        this.core.setFilter(this.name, this.filter);
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

    const filters = this.core.globalStorage.getAll(StorageKeys.FILTER);
    let totalFilter = filters[0];
    if (filters.length > 1) {
      totalFilter = Filter.and(...filters);
    }
    const searchQuery = this.core.globalStorage.getState(StorageKeys.QUERY) || '';
    const facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];

    this.core.verticalSearch(this._verticalKey, {
      input: searchQuery,
      filter: JSON.stringify(totalFilter),
      facetFilter: JSON.stringify(facetFilter)
    });
  }

  setState (data) {
    return super.setState(Object.assign({
      title: this.title,
      searchText: this.searchText,
      query: this.query,
      filter: this.filter
    }, data));
  }
}
