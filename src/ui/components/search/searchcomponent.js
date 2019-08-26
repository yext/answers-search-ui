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
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

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
     * If true, show an "x" that allows the user to clear the current
     * query
     * @type {boolean}
     */
    this.clearButton = config.clearButton === undefined
      ? true
      : config.clearButton;

    /**
     * When autofocusing on load, optionally open the autocomplete
     * (preset prompts)
     * @type {boolean}
     */
    this.autocompleteOnLoad = config.autocompleteOnLoad || false;

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
     * true if there is another search bar present on the page.
     * Twins only update the query, and do not search
     */
    this._isTwin = config.isTwin;

    /**
     * The query string to use for the input box, provided to template for rendering.
     * Optionally provided
     * @type {string}
     */
    this.query = config.query || this.core.globalStorage.getState(StorageKeys.QUERY) || '';
    this.core.globalStorage.on('update', StorageKeys.QUERY, q => {
      this.query = q;
      this.setState();
      this.search(q);
    });

    /**
     * The minimum time allowed in milliseconds between searches to prevent
     * many duplicate searches back-to-back
     * @type {number}
     * @private
     */
    this._searchCooldown = config.searchCooldown || 300;

    /**
     * When true and "near me" intent is expressed, prompt the user for their geolocation
     * @type {boolean}
     * @private
     */
    this._promptForLocation = config.promptForLocation === undefined
      ? true
      : Boolean(config.promptForLocation);

    /**
     * Controls showing and hiding the search clear button
     */
    this._showClearButton = this.clearButton && this.query;

    /**
     * Specifies whether not to render out all results
     * @type {boolean}
     * @private
     */
    this._renderAllResults = config.renderAllResults || false;
  }

  static get type () {
    return 'SearchBar';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName () {
    return 'search/search';
  }

  onCreate () {
    if (this.query && !this.redirectUrl) {
      this.core.setQuery(this.query);
    }
    if (this._promptForLocation) {
      this.initLocationPrompt();
    }
  }

  onMount () {
    if (this.autoFocus === true && this.query.length === 0 && !this.autocompleteOnLoad) {
      DOM.query(this._container, this._inputEl).focus();
    }

    // Wire up our search handling and auto complete
    this.initSearch(this._formEl);
    this.initAutoComplete(this._inputEl);

    if (this.clearButton) {
      this.initClearButton();
    }

    if (this.autoFocus === true && this.query.length === 0 && this.autocompleteOnLoad) {
      DOM.query(this._container, this._inputEl).focus();
    }
  }

  remove () {
    this._autocomplete.remove();
    super.remove();
  }

  initClearButton () {
    const button = DOM.query(this._container, '.js-yxt-SearchBar-clear');
    this._showClearButton = this._showClearButton || this.query;
    button.classList.toggle('yxt-SearchBar--hidden', !this._showClearButton);

    DOM.on(button, 'click', () => {
      this.query = '';
      this._showClearButton = false;
      button.classList.add('yxt-SearchBar--hidden');
      this.setState({});
      this.core.persistentStorage.set(StorageKeys.QUERY, this.query);
      this.core.setQuery(this.query);
    });

    DOM.on(this._inputEl, 'input', e => {
      const input = e.target.value;
      if (!this._showClearButton && input.length > 0) {
        this._showClearButton = true;
        button.classList.remove('yxt-SearchBar--hidden');
      } else if (this._showClearButton && input.length === 0) {
        this._showClearButton = false;
        button.classList.add('yxt-SearchBar--hidden');
      }
    });
  }

  initLocationPrompt () {
    this.core.globalStorage.on('update', StorageKeys.INTENTS, intent => {
      if (!intent.nearMe || this.core.globalStorage.getState(StorageKeys.GEOLOCATION) !== null) {
        return;
      }

      navigator.geolocation.getCurrentPosition(position => {
        this.core.globalStorage.set(StorageKeys.GEOLOCATION, {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          radius: position.coords.accuracy
        });
        this.search(this.query);
      });
    });
  }

  /**
   * A helper method to use for wiring up searching on form submission
   * @param {string} formSelector CSS selector to bind our submit handling to
   */
  initSearch (formSelector) {
    this._formEl = formSelector;

    this._container.classList.add('yxt-SearchBar-wrapper');

    let form = DOM.query(this._container, formSelector);
    if (!form) {
      throw new Error('Could not initialize SearchBar; Can not find {HTMLElement} `', this._formEl, '`.');
    }

    DOM.on(form, 'submit', (e) => {
      e.preventDefault();

      let inputEl = form.querySelector(this._inputEl);

      let query = inputEl.value;
      let params = new SearchParams(window.location.search.substring(1));
      params.set('query', query);

      // If we have a redirectUrl, we want the form to be
      // serialized and submitted.
      if (typeof this.redirectUrl === 'string') {
        window.location.href = this.redirectUrl + '?' + params.toString();
        return false;
      }

      inputEl.blur();

      this.core.persistentStorage.set(StorageKeys.QUERY, query);
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

    if (this._autocomplete) {
      this._autocomplete.remove();
    }

    this._autocomplete = this.componentManager.create('AutoComplete', {
      parentContainer: this._container,
      name: `${this.name}.autocomplete`,
      container: '.yxt-SearchBar-autocomplete',
      barKey: this._barKey,
      autoFocus: this.autoFocus && !this.autocompleteOnLoad,
      verticalKey: this._verticalKey,
      promptHeader: this.promptHeader,
      originalQuery: this.query,
      inputEl: inputSelector,
      onSubmit: () => {
        DOM.trigger(DOM.query(this._container, this._formEl), 'submit');
      }
    });
  }

  search (query) {
    // Don't search if we recently searched,
    // if there's no query for universal search,
    // or if this is a twin searchbar
    if (this._throttled || (!query && !this._verticalKey) || this._isTwin) {
      return;
    }

    this._throttled = true;
    setTimeout(() => { this._throttled = false; }, this._searchCooldown);

    if (this._verticalKey) {
      const allFilters = this.core.globalStorage.getAll(StorageKeys.FILTER);
      const totalFilter = allFilters.length > 1
        ? Filter.and(...allFilters)
        : allFilters[0];
      const facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
      return this.core.verticalSearch(this._verticalKey, {
        input: query,
        filter: JSON.stringify(totalFilter),
        facetFilter: JSON.stringify(facetFilter)
      }, this._renderAllResults);
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
            let params = new SearchParams(tabs[i].url.split('?')[1]);
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
      showClearButton: this._showClearButton,
      query: this.query
    }, data));
  }
}
