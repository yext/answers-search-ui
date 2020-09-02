/** @module FilterSearchComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import StorageKeys from '../../../core/storage/storagekeys';
import Filter from '../../../core/models/filter';
import SearchParams from '../../dom/searchparams';
import buildSearchParameters from '../../tools/searchparamsparser';
import FilterNodeFactory from '../../../core/filters/filternodefactory';
import ComponentTypes from '../../components/componenttypes';
import TranslationFlagger from '../../i18n/translationflagger';

/**
 * FilterSearchComponent is used for autocomplete using the FilterSearch backend.
 * It'll allow you to pick pre-set filters that are setup on the backend within
 * a vertical search context.
 *
 * @extends Component
 */
export default class FilterSearchComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

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
    this.searchText = config.searchText || TranslationFlagger.flag({
      phrase: 'What are you interested in?',
      context: 'Labels an input field'
    });

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
    this.filter = config.filter || this.core.globalStorage.getState(`${StorageKeys.FILTER}.${this.name}`);
    if (typeof this.filter === 'string') {
      try {
        this.filter = JSON.parse(this.filter);
      } catch (e) {}
    }

    if (this.query && this.filter) {
      const filterNode = this._buildFilterNode(this.query, this.filter);
      this.core.setStaticFilterNodes(this.name, filterNode);
    }

    this.searchParameters = buildSearchParameters(config.searchParameters);
  }

  static get type () {
    return ComponentTypes.FILTER_SEARCH;
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName () {
    return 'search/filtersearch';
  }

  // TODO(oshi): SPR-1925 check that it is safe to remove this, it runs an extra search
  // For no obvious reasons
  onCreate () {
    if (this.query && this.filter) {
      this.search();
    }
  }

  onMount () {
    if (this.autoCompleteComponent) {
      this.autoCompleteComponent.remove();
    }
    // Wire up our search handling and auto complete
    this.initAutoComplete(this._inputEl);

    if (this.autoFocus === true && this.query.length === 0) {
      DOM.query(this._container, this._inputEl).focus();
    }
  }

  _removeFilterNode () {
    this.query = '';
    this.core.persistentStorage.set(`${StorageKeys.QUERY}.${this.name}`, this.query);
    this.core.clearStaticFilterNode(this.name);
    this.setState();
  }

  _buildFilterNode (query, filter) {
    return FilterNodeFactory.from({
      filter: filter,
      metadata: {
        fieldName: this.title,
        displayValue: `${query}`
      },
      remove: () => this._removeFilterNode()
    });
  }

  /**
   * A helper method to wire up our auto complete on an input selector
   * @param {string} inputSelector CSS selector to bind our auto complete component to
   */
  initAutoComplete (inputSelector) {
    this._inputEl = inputSelector;

    this.autoCompleteComponent = this.componentManager.create('AutoComplete', {
      parentContainer: this._container,
      name: `${this.name}.autocomplete`,
      isFilterSearch: true,
      container: '.yxt-SearchBar-autocomplete',
      promptHeader: this.promptHeader,
      originalQuery: this.query,
      inputEl: inputSelector,
      verticalKey: this._verticalKey,
      searchParameters: this.searchParameters,
      onSubmit: (query, filter) => {
        this.filter = Filter.fromResponse(filter);
        const filterNode = this._buildFilterNode(query, this.filter);

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
        this.core.persistentStorage.set(`${StorageKeys.QUERY}.${this.name}`, this.query);
        this.core.persistentStorage.set(`${StorageKeys.FILTER}.${this.name}`, filterNode.getFilter());
        this.core.setStaticFilterNodes(this.name, filterNode);
        this.search();
      }
    });
  }

  /**
   * Perform the vertical search with all saved filters and query,
   * optionally redirecting based on config. Uses window.setTimeout to allow
   * other filters to finish rendering before searching.
   */
  search () {
    if (this._storeOnChange) {
      return;
    }
    window.setTimeout(() => {
      this.core.verticalSearch(this._config.verticalKey, {
        setQueryParams: true,
        resetPagination: true,
        useFacets: true
      });
    });
  }

  setState (data) {
    return super.setState(Object.assign({
      title: this.title,
      searchText: this.searchText,
      query: this.query
    }, data));
  }
}
