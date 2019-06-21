import Component from '../component';
import DOM from '../../dom/dom';

export default class SearchComponent extends Component {
  constructor (opts = {}) {
    super(opts);

    /**
     * The template name to use for rendering with handlebars
     * @type {string}
     */
    this._templateName = 'search/search';

    /**
     * The optional input key for the vertical search configuration
     * If not provided, auto-complete and search will be based on universal
     * @type {string}
     */
    this._barKey = opts.barKey || null;

    /**
     * The optional vertical key for vertical search configuration
     * If not provided, auto-complete and search will be based on universal
     * @type {string}
     */
    this._verticalKey = opts.verticalKey || null;

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
    this.title = opts.title || 'Answers Universal Search';

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
  }

  static get type () {
    return 'SearchBar';
  }

  onCreate () {
    if (this.query && this.query.length > 0) {
      this.search(this.query);
    }

    this.bindBrowserHistory();
  }

  onMount () {
    // Wire up our search handling and auto complete
    this.initSearch(this._formEl);
    this.initAutoComplete(this._inputEl);

    if (this.autoFocus === true && this.query.length === 0) {
      DOM.query(this._container, this._inputEl).focus();
    }
  }

  /**
   * A helper method to use for wiring up searching on form submission
   * @param {string} formSelector CSS selector to bind our submit handling to
   */
  initSearch (formSelector) {
    this._formEl = formSelector;

    let form = DOM.query(this._container, formSelector);
    if (!form) {
      throw new Error('Could not initialize SearchBar; Can not find {HTMLElement} `', this._formEl, '`.');
    }

    DOM.on(form, 'submit', (e) => {
      e.preventDefault();

      let query = form.querySelector(this._inputEl).value;
      let params = this.getUrlParams();
      params.set('query', query);

      // If we have a redirectUrl, we want the form to be
      // serialized and submitted.
      if (typeof this.redirectUrl === 'string') {
        window.location.href = this.redirectUrl + '?' + params.toString();
        return false;
      }

      window.history.pushState({
        query: query
      }, query, '?' + params.toString());

      this.search(query);
      return false;
    });
  }

  /**
   * A helper method to wire up our auto complete on an input selector
   * @param {string} inputSelector CSS selector to bind our auto complete component to
   */
  initAutoComplete (inputSelector) {
    this._inputEl = inputSelector;

    this.componentManager.create('AutoComplete', {
      parent: this,
      container: '.yext-search-autocomplete',
      barKey: this._barKey,
      verticalKey: this._verticalKey,
      promptHeader: this.promptHeader,
      originalQuery: this.query,
      inputEl: inputSelector,
      onSubmit: () => {
        DOM.trigger('form', 'submit');
      }
    });
  }

  search (query) {
    if (this._verticalKey) {
      return this.core.verticalSearch(query, this._verticalKey);
    } else {
      // NOTE(billy) Temporary hack for DEMO
      // Remove me after the demo
      let nav = this.componentManager
        .getActiveComponent('Navigation');

      if (nav) {
        let tabs = nav.getState('tabs');
        let urls = {};

        if (tabs && Array.isArray(tabs)) {
          for (let i = 0; i < tabs.length; i++) {
            let params = this.getUrlParams(tabs[i].url.split('?')[1]);
            params.set('query', query);

            let url = tabs[i].baseUrl;
            if (params.toString().length > 0) {
              url += '?' + params.toString();
            }
            urls[tabs[i].configId] = url;
          }
        }
        return this.core.search(query, urls);
      }

      return this.core.search(query);
    }
  }

  setState (data) {
    return super.setState(Object.assign({
      title: this.title,
      searchText: this.searchText,
      query: this.query
    }, data));
  }

  getUrlParams (url) {
    url = url || window.location.search.substring(1);
    return new URLSearchParams(url);
  }

  bindBrowserHistory () {
    DOM.on(window, 'popstate', () => {
      this.query = this.getUrlParams().get('query');
      this.setState({
        query: this.query
      });

      this.search(this.query);
    });
  }
}
