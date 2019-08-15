/** @module SearchComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import Filter from '../../../core/models/filter';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchParams from '../../dom/searchparams';

/**
 * SearchComponent exposes an interface in order to create
 * a UI Search experience for vertical and universal search.
 *
 * @extends Component
 */
export default class SearchComponent extends Component {
  constructor (config = {}) {
    super(config);

    /**
     * The optional input key for the vertical search configuration
     * If not provided, auto-complete and search will be based on universal
     * @type {string}
     */
    this._barKey = config.barKey || null;

    /**
     * The optional vertical key for vertical search configuration
     * If not provided, auto-complete and search will be based on universal
     * @type {string}
     */
    this._verticalKey = config.verticalKey || null;

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
    this.title = config.title || 'Answers Universal Search';

    /**
     * The label text is used for labeling the input box, also provided to template.
     * Optionally provided
     * @type {string}
     */
    this.labelText = config.labelText || 'What are you interested in?';

    /**
     * The submit text is used for labeling the submit button, also provided to the template.
     * @type {string}
     */
    this.submitText = config.submitText || 'Submit';

    /**
     * The submit icon is an icon for the submit button, if provided it will be displayed and the
     * submit text will be used for screen readers.
     * @type {string|null}
     */
    this.submitIcon = config.submitIcon || null;

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
    this.query = config.query || this.getUrlParams().get('query') || '';

    /**
     * The minimum time allowed in milliseconds between searches to prevent
     * many duplicate searches back-to-back
     * @type {number}
     * @private
     */
    this._searchCooldown = config.searchCooldown || 300;
  }

  static get type () {
    return 'SearchBar';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'search/search';
  }

  onCreate () {
    if (this.query && this.query.length > 0) {
      this.core.setQuery(this.query);
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

      this.core.setQuery(query);
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
      name: `${this.name}.autocomplete`,
      container: '.yext-search-autocomplete',
      barKey: this._barKey,
      verticalKey: this._verticalKey,
      promptHeader: this.promptHeader,
      originalQuery: this.query,
      inputEl: inputSelector,
      onSubmit: () => {
        DOM.trigger(this._formEl, 'submit');
      }
    });
  }

  search (query) {
    if (this._throttled) {
      return;
    }

    this._throttled = true;
    setTimeout(() => { this._throttled = false; }, this._searchCooldown);

    if (this._verticalKey) {
      const allFilters = this.core.storage.getAll(StorageKeys.FILTER);
      const totalFilter = allFilters.length > 1
        ? Filter.and(...allFilters)
        : allFilters[0];
      return this.core.verticalSearch(query, this._verticalKey, JSON.stringify(totalFilter));
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
      labelText: this.labelText,
      submitIcon: this.submitIcon,
      submitText: this.submitText,
      query: this.query
    }, data));
  }

  getUrlParams (url) {
    url = url || window.location.search.substring(1);
    return new SearchParams(url);
  }

  bindBrowserHistory () {
    DOM.on(window, 'popstate', () => {
      this.query = this.getUrlParams().get('query');
      this.setState({
        query: this.query
      });

      this.core.setQuery(this.query);

      this.search(this.query);
    });
  }
}
