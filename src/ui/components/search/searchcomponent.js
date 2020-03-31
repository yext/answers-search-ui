/** @module SearchComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import Filter from '../../../core/models/filter';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchParams from '../../dom/searchparams';

const IconState = {
  'FORWARD': 0,
  'REVERSE': 1
};

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
     * Optionally provided. If not provided, no title will be included.
     * @type {string}
     */
    this.title = config.title;

    /**
     * The label text is used for labeling the input box, also provided to template.
     * Optionally provided
     * @type {string}
     */
    this.labelText = config.labelText || 'Conduct a search';

    /**
     * The submit text is used for labeling the submit button, also provided to the template.
     * @type {string}
     */
    this.submitText = config.submitText || 'Submit';

    /**
     * The clear text is used for labeling the clear button, also provided to the template.
     * @type {string}
     */
    this.clearText = config.clearText || 'Clear';

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
     * @type {string|null}
     */
    this.query = config.query || this.core.globalStorage.getState(StorageKeys.QUERY);
    this.core.globalStorage.on('update', StorageKeys.QUERY, q => {
      this.query = q;
      if (this.queryEl) {
        this.queryEl.value = q;
      }
      this.debouncedSearch(q);
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
     * For vertical search bars, whether or not to allow empty searches.
     * @type {boolean}
     * @private
     */
    this._allowEmptySearch = !!config.allowEmptySearch;

    /**
     * The name of the child AutoComplete component.
     * @type {string}
     * @private
     */
    this._autoCompleteName = `${this.name}.autocomplete`;
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
    if (this.query != null && !this.redirectUrl) {
      this.core.setQuery(this.query);
    }
  }

  onMount () {
    this.queryEl = DOM.query(this._container, this._inputEl);
    if (this.autoFocus && !this.query && !this.autocompleteOnLoad) {
      this.focusInputElement();
    }

    this.isUsingYextAnimatedIcon = !this._config.customIconUrl && !this.submitIcon;
    if (this.isUsingYextAnimatedIcon) {
      this.initAnimatedIcon();
    }

    // Wire up our search handling and auto complete
    this.initSearch(this._formEl);
    this.initAutoComplete(this._inputEl);

    if (this.clearButton) {
      this.initClearButton();
    }

    if (this.autoFocus && !this.query && this.autocompleteOnLoad) {
      this.focusInputElement();
    }
  }

  animateIcon () {
    this.forwardIcon.classList.remove('yxt-SearchBar-AnimatedIcon--paused');
    if (this.iconState === IconState.FORWARD) {
      this.forwardIcon.classList.remove('yxt-SearchBar-AnimatedIcon--inactive');
      this.reverseIcon.classList.add('yxt-SearchBar-AnimatedIcon--inactive');
    } else if (this.iconState === IconState.REVERSE) {
      this.forwardIcon.classList.add('yxt-SearchBar-AnimatedIcon--inactive');
      this.reverseIcon.classList.remove('yxt-SearchBar-AnimatedIcon--inactive');
    }
    this.isRequestingAnimationFrame = false;
  }

  requestIconAnimationFrame (iconState) {
    this.iconState = iconState;
    if (!this.isRequestingAnimationFrame) {
      this.isRequestingAnimationFrame = true;
      window.requestAnimationFrame(() => this.animateIcon());
    }
  }

  initAnimatedIcon () {
    this.forwardIcon = DOM.query(this._container, '.js-yxt-AnimatedForward');
    this.reverseIcon = DOM.query(this._container, '.js-yxt-AnimatedReverse');
    const clickableElementSelectors = ['.js-yext-submit', '.js-yxt-SearchBar-clear'];
    for (const selector of clickableElementSelectors) {
      const clickableEl = DOM.query(this._container, selector);
      if (clickableEl) {
        DOM.on(clickableEl, 'mousedown', () => {
          this.iconIsFrozen = true;
        });
        DOM.on(clickableEl, 'mouseup', () => {
          this.iconIsFrozen = false;
        });
      }
    }
    DOM.on(this.queryEl, 'focus', () => {
      this.requestIconAnimationFrame(IconState.FORWARD);
    });
    DOM.on(this._container, 'focusout', e => {
      let focusStillInSearchbar = false;
      if (e.relatedTarget) {
        focusStillInSearchbar = this._container.contains(e.relatedTarget);
      } else if (e.explicitOriginalTarget) {
        focusStillInSearchbar = this._container.contains(e.explicitOriginalTarget);
      }
      if (this.iconIsFrozen || focusStillInSearchbar) {
        return;
      }
      this.requestIconAnimationFrame(IconState.REVERSE);
    });
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
      this.queryEl.value = this.query;

      this.core.persistentStorage.set(StorageKeys.QUERY, this.query);
      this.core.persistentStorage.delete(StorageKeys.SEARCH_OFFSET);
      this.core.globalStorage.delete(StorageKeys.SEARCH_OFFSET);
      this.core.setQuery(this.query);

      // Focus the input element after clearing the query, regardless of whether
      // or not the autoFocus option is enabled.
      // NOTE(amullings): This depends heavily on the fact that the re-renders
      // triggered by setState and core.setQuery happen synchronously; if this
      // stops being the case at some point, we'll need an alternative solution
      this.focusInputElement();
    });

    DOM.on(this.queryEl, 'input', e => {
      const input = e.target.value;
      this.query = input;
      if (!this._showClearButton && input.length > 0) {
        this._showClearButton = true;
        button.classList.remove('yxt-SearchBar--hidden');
      } else if (this._showClearButton && input.length === 0) {
        this._showClearButton = false;
        button.classList.add('yxt-SearchBar--hidden');
      }
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

      // TODO(oshi) we should not use the same css selector (this._inputEl)
      // For both the autocomplete AND the search bar input
      // This is incredibly confusing, and also makes the first DOM.query
      // Rely on the order of the input el and autocomplete in the template
      const inputEl = form.querySelector(this._inputEl);
      const query = inputEl.value;
      this.query = query;
      const params = new SearchParams(window.location.search.substring(1));
      params.set('query', query);

      // If we have a redirectUrl, we want the form to be
      // serialized and submitted.
      if (typeof this.redirectUrl === 'string') {
        window.location.href = this.redirectUrl + '?' + params.toString();
        return false;
      }

      inputEl.blur();
      DOM.query(this._container, '.js-yext-submit').blur();
      if (this.isUsingYextAnimatedIcon) {
        this.requestIconAnimationFrame(IconState.REVERSE);
      }

      this.core.persistentStorage.set(StorageKeys.QUERY, query);
      this.core.persistentStorage.delete(StorageKeys.SEARCH_OFFSET);
      this.core.globalStorage.delete(StorageKeys.SEARCH_OFFSET);
      this.core.setQuery(query);
      this.debouncedSearch(query);
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
      name: this._autoCompleteName,
      container: '.yxt-SearchBar-autocomplete',
      autoFocus: this.autoFocus && !this.autocompleteOnLoad,
      verticalKey: this._verticalKey,
      promptHeader: this.promptHeader,
      originalQuery: this.query,
      inputEl: inputSelector,
      onSubmit: () => {
        DOM.trigger(DOM.query(this._container, this._formEl), 'submit');
      },
      onChange: () => {
        DOM.trigger(DOM.query(this._container, inputSelector), 'input');
      }
    });
  }

  /**
   * Performs a debounced query using the provided string input. Specifically, a new search is not
   * performed if we recently searched, if there's no query for universal search, or if this
   * is a twin searchbar.
   * @param {string} query The string to query against.
   * @returns {Promise} A promise that will perform the query and update globalStorage accordingly.
   */
  debouncedSearch (query) {
    if (this._throttled ||
      (!query && !this._verticalKey) ||
      (!query && this._verticalKey && !this._allowEmptySearch) ||
      this._isTwin) {
      return;
    }

    this._throttled = true;
    setTimeout(() => { this._throttled = false; }, this._searchCooldown);

    // If _promptForLocation is enabled, we will compute the query's intent and, from there,
    // determine if it's necessary to prompt the user for their location information. It will
    // be unnecessary if the query does not have near me intent or we already have their location
    // stored.
    if (this._promptForLocation) {
      this.fetchQueryIntents(query)
        .then(queryIntents => queryIntents.includes('NEAR_ME'))
        .then(queryHasNearMeIntent => {
          if (queryHasNearMeIntent && !this.core.globalStorage.getState(StorageKeys.GEOLOCATION)) {
            return new Promise((resolve, reject) =>
              navigator.geolocation.getCurrentPosition(
                position => {
                  this.core.globalStorage.set(StorageKeys.GEOLOCATION, {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    radius: position.coords.accuracy
                  });
                  resolve(this.search(query));
                },
                () => resolve(this.search(query)))
            );
          } else {
            return this.search(query);
          }
        });
    } else {
      return this.search(query);
    }
  }

  /**
   * Performs a query using the provided string input.
   * @param {string} query The string to query against.
   * @returns {Promise} A promise that will perform the query and update globalStorage accordingly.
   */
  search (query) {
    if (this._verticalKey) {
      const allFilters = this.core.globalStorage.getAll(StorageKeys.FILTER);
      const totalFilter = allFilters.length > 1
        ? Filter.and(...allFilters)
        : allFilters[0];
      return this.core.verticalSearch(this._verticalKey, {
        input: query,
        filter: JSON.stringify(totalFilter),
        offset: this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0
      });
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

  /**
   * A helper method that computes the intents of the provided query. If the query was entered
   * manually into the search bar or selected via autocomplete, its intents will have been stored
   * already in globalStorage. Otherwise, a new API call will have to be issued to determine
   * intent.
   * @param {string} query The query whose intent is needed.
   * @returns {Promise} A promise containing the intents of the query.
   */
  fetchQueryIntents (query) {
    const autocompleteData =
      this.core.globalStorage.getState(`${StorageKeys.AUTOCOMPLETE}.${this._autoCompleteName}`);
    if (!autocompleteData) {
      const autocompleteRequest = this._verticalKey
        ? this.core.autoCompleteVertical(
          query,
          this._autoCompleteName,
          this._verticalKey)
        : this.core.autoCompleteUniversal(query, this._autoCompleteName);
      return autocompleteRequest.then(data => data.inputIntents);
    } else {
      // There are two alternatives to consider here. The user could have selected the query
      // as an autocomplete option or manually input it themselves. If the former, use the intents
      // of the corresponding autocomplete option. If the latter, use the inputIntents of the
      // autocompleteData.
      const results = autocompleteData.sections.flatMap(section => section.results);
      const matchingResult = results.find(result => result.value === query);
      const queryIntents = matchingResult ? matchingResult.intents : autocompleteData.inputIntents;
      return Promise.resolve(queryIntents);
    }
  }

  /**
   * A helper method that constructs the meta information needed by the SEARCH_CLEAR_BUTTON
   * analytics event.
   */
  eventOptions () {
    const queryId = this.core.globalStorage.getState(StorageKeys.QUERY_ID);
    const options = Object.assign(
      {},
      queryId && { queryId },
      this._verticalKey && { verticalKey: this._verticalKey }
    );
    return JSON.stringify(options);
  }

  setState (data) {
    const forwardIconOpts = {
      iconName: 'yext_animated_forward',
      classNames: 'Icon--lg',
      complexContentsParams: {
        iconPrefix: this.name
      }
    };
    const reverseIconOpts = {
      iconName: 'yext_animated_reverse',
      classNames: 'Icon--lg',
      complexContentsParams: {
        iconPrefix: this.name
      }
    };
    return super.setState(Object.assign({
      title: this.title,
      labelText: this.labelText,
      submitIcon: this.submitIcon,
      submitText: this.submitText,
      clearText: this.clearText,
      showClearButton: this._showClearButton,
      query: this.query || '',
      eventOptions: this.eventOptions(),
      iconId: this.name,
      forwardIconOpts: forwardIconOpts,
      reverseIconOpts: reverseIconOpts
    }, data));
  }

  focusInputElement () {
    DOM.query(this._container, this._inputEl).focus();
  }
}
