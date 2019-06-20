import Component from '../component';
import DOM from '../../dom/dom';

export default class FilterPickerComponent extends Component {
  constructor (opts = {}) {
    super(opts);

    /**
     * The template name to use for rendering with handlebars
     * @type {string}
     */
    this._templateName = 'search/search';

    /**
     * The input key for the vertical search configuration
     * @type {string}
     */
    this._barKey = opts.barKey || opts.inputKey || null;

    /**
     * The experience key for vertical search configuration
     * @type {string}
     */
    this._experienceKey = opts.experienceKey || null;

    /**
     * Query submission is based on a form as context.
     * Optionally provided, otherwise defaults to native form node within container
     * @type {string} CSS selector
     */
    this._formEl = opts.formSelector || 'form';

    /**
     * The input element used for searching and wires up the keyboard interaction
     * Optionally provided.
     * @type {string} CSS selector
     */
    this._inputEl = opts.inputEl || '.js-yext-query';

    /**
     * The title used, provided to the template as a data point
     * Optionally provided.
     * @type {string}
     */
    this.title = opts.title;

    /**
     * The search text used for labeling the input box, also provided to template.
     * Optionally provided
     * @type {string}
     */
    this.searchText = opts.searchText || 'What are you interested in?';

    /**
     * The query text to show as the first item for auto complete.
     * Optionally provided
     * @type {string}
     */
    this.promptHeader = opts.promptHeader || null;

    /**
     * Auto focuses the input box if set to true.
     * Optionally provided, defaults to false.
     * @type {boolean}
     */
    this.autoFocus = opts.autoFocus === true;

    /**
     * submitURL will force the search query submission to get
     * redirected to the URL provided.
     * Optional, defaults to null.
     *
     * If no redirectUrl provided, we keep the page as a single page app.
     *
     * @type {boolean}
     */
    this.redirectUrl = opts.redirectUrl || null;

    /**
     * The query string to use for the input box, provided to template for rendering.
     * Optionally provided
     * @type {string}
     */
    this.query = opts.query || this.getUrlParams().get('query') || '';

    /**
     * The filter string to use for the provided query
     * Optionally provided
     * @type {string}
     */
    this.filter = opts.filter || this.getUrlParams().get('filter') || '';
  }

  static get type () {
    return 'FilterPicker';
  }

  onCreate () {
    if (this.query && this.query.length > 0 && this.filter && this.filter.length > 0) {
      this.search(this.query, this.filter);
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
      isFilterSearch: true,
      container: '.yext-search-autocomplete',
      promptHeader: this.promptHeader,
      originalQuery: this.query,
      originalFilter: this.filter,
      inputEl: inputSelector,
      experienceKey: this._experienceKey,
      barKey: this._barKey,
      onSubmit: (query, filter) => {
        this.search(query, filter);
      }
    });
  }

  search (query, filter) {
    const params = this.getUrlParams();

    params.set('query', query);
    params.set('filter', filter);

    // If we have a redirectUrl, we want the params to be
    // serialized and submitted.
    if (typeof this.redirectUrl === 'string') {
      window.location.href = this.redirectUrl + '?' + params.toString();
      return false;
    }

    window.history.pushState({
      query: query,
      filter: filter
    }, query, '?' + params.toString());

    this.core.verticalSearch('', this._experienceKey, filter);
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
    return new URLSearchParams(url);
  }

  bindBrowserHistory () {
    DOM.on(window, 'popstate', () => {
      this.query = this.getUrlParams().get('query');
      this.filter = this.getUrlParams().get('filter');
      this.setState({
        query: this.query,
        filter: this.filter
      });

      this.search(this.query);
    });
  }
}
