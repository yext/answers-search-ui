/** @module SearchComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchParams from '../../dom/searchparams';
import TranslationFlagger from '../../i18n/translationflagger';
import QueryUpdateListener from '../../../core/statelisteners/queryupdatelistener';
import QueryTriggers from '../../../core/models/querytriggers';
import VoiceSearchController from '../../speechrecognition/voicesearchcontroller';
import { speechRecognitionIsSupported } from '../../../core/speechrecognition/support';
import SearchBarIconController from '../../controllers/searchbariconcontroller';
import alert from '../../alert';
import { constructRedirectUrl } from '../../tools/urlutils';

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
     * Query submission can optionally be based on a form as context. Note that if
     * a form is not used, the component has no guarantee of WCAG compliance.
     */
    this._useForm = config.useForm !== undefined ? config.useForm : true;

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
    this.labelText = config.labelText || TranslationFlagger.flag({
      phrase: 'Conduct a search',
      context: 'Labels an input field'
    });

    /**
     * The submit text is used for labeling the submit button, also provided to the template.
     * @type {string}
     */
    this.submitText = config.submitText || TranslationFlagger.flag({
      phrase: 'Submit',
      context: 'Button label'
    });

    /**
     * The clear text is used for labeling the clear button, also provided to the template.
     * @type {string}
     */
    this.clearText = config.clearText || TranslationFlagger.flag({
      phrase: 'Clear',
      context: 'Verb, clears search'
    });

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
     * @type {string}
     */
    this.redirectUrl = config.redirectUrl || null;

    /**
     * redirectUrlTarget will force the search query submission to open in the frame specified if
     * redirectUrl is also supplied.
     * Optional, defaults to current frame.
     *
     * @type {string}
     */
    this.redirectUrlTarget = config.redirectUrlTarget || '_self';

    /**
     * true if there is another search bar present on the page.
     * Twins only update the query, and do not search
     */
    this._isTwin = config.isTwin;

    /**
     * The search config from ANSWERS.init configuration
     */
    this._globalSearchConfig = this.core.storage.get(StorageKeys.SEARCH_CONFIG) || {};

    /**
     * The default initial search query, can be an empty string
     */
    this._defaultInitialSearch = this._globalSearchConfig.defaultInitialSearch;

    /**
     * The query string to use for the input box, provided to template for rendering.
     * Optionally provided
     * @type {string|null}
     */
    this.query = config.query || this.core.storage.get(StorageKeys.QUERY);
    this.core.storage.registerListener({
      eventType: 'update',
      storageKey: StorageKeys.QUERY,
      callback: q => {
        this.query = q;
        if (this.queryEl) {
          this.queryEl.value = q;
        }
        if (q === null) {
          return;
        }
        this._updateClearButtonVisibility(q);
      }
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
     * Whether or not to allow empty searches.
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

    /**
     * Options to pass to the geolocation api.
     * @type {Object}
     */
    this._geolocationOptions = {
      enableHighAccuracy: false,
      timeout: 1000,
      maximumAge: 300000,
      ...config.geolocationOptions
    };

    /**
     * Options for the geolocation timeout alert.
     * @type {Object}
     */
    this._geolocationTimeoutAlert = {
      enabled: false,
      message: TranslationFlagger.flag({
        phrase: 'We are unable to determine your location'
      }),
      ...config.geolocationTimeoutAlert
    };

    /**
     * The unique HTML id name for the autocomplete container
     * @type {string}
     */
    this.autocompleteContainerIdName = `yxt-SearchBar-autocomplete--${this.name}`;

    /**
     * The unique HTML id name for the search input label
     * @type {string}
     */
    this.inputLabelIdName = `yxt-SearchBar-inputLabel--${this.name}`;

    /**
     * The unique HTML id name for the search input
     * @type {string}
     */
    this.inputIdName = `yxt-SearchBar-input--${this.name}`;

    this.customHooks = {
      /**
       * Callback invoked when the clear search button is clicked
       */
      onClearSearch: (config.customHooks && config.customHooks.onClearSearch) || function () {},
      /**
       * Callback invoked when a search is conducted
       */
      onConductSearch: (config.customHooks && config.customHooks.onConductSearch) || function () {}
    };

    /**
     * Options to pass to the autocomplete component
     * @type {Object}
     */
    this._autocompleteConfig = {
      shouldHideOnEmptySearch: config.autocomplete && config.autocomplete.shouldHideOnEmptySearch,
      onOpen: config.autocomplete && config.autocomplete.onOpen,
      onClose: config.autocomplete && config.autocomplete.onClose,
      customPrompts: config.autocomplete && config.autocomplete.customPrompts,
      autocompleteContainerIdName: this.autocompleteContainerIdName
    };

    if (!this._isTwin) {
      this.initQueryUpdateListener();
    }

    /**
     * If true, a loading indicator will be displayed
     * @type {boolean}
     */
    this._showLoadingIndicator = config.loadingIndicator?.display || false;

    /**
     * Custom icon url for loading indicator
     * @type {string}
     */
    this._customLoadingIconUrl = config.loadingIndicator?.iconUrl || null;

    this._voiceSearchConfig = config.voiceSearch || {};

    /**
     * Whether or not voice search should be enabled
     * @type {boolean}
     */
    this._voiceSearchEnabled = config.voiceSearch?.enabled;

    /**
     * Once voice search has activited, this value determines the length of silence in milliseconds
     * needed to trigger an automatic voice search
     */
    this._silenceThresholdToSearch = config.voiceSearch?.silenceThresholdToSearch || 1500;

    /**
     * Whether or not the voice search icon should appear
     * @type {boolean}
     */
    this._showVoiceSearch = this._voiceSearchEnabled && speechRecognitionIsSupported();

    this._customMicIconUrl = config.voiceSearch?.customMicIconUrl;

    this._customListeningIconUrl = config.voiceSearch?.customListeningIconUrl;
  }

  /**
   * Updates the global search listener with the searchbar's config.
   */
  initQueryUpdateListener () {
    const queryUpdateListener = new QueryUpdateListener(this.core, {
      searchCooldown: this._searchCooldown,
      verticalKey: this._verticalKey,
      allowEmptySearch: this._allowEmptySearch,
      defaultInitialSearch: this._defaultInitialSearch
    });
    this.core.setQueryUpdateListener(queryUpdateListener);
    this.core.queryUpdateListener.registerMiddleware(query => this.promptForLocation(query));
    this.core.queryUpdateListener.registerMiddleware(query => this.customHooks.onConductSearch(query));
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

  /**
   * This method is called by answers-umd AFTER the onReady() is finished, and
   * all components have been mounted.
   */
  searchAfterAnswersOnReady () {
    if (this.query != null && !this.redirectUrl) {
      this.core.setQuery(this.query);
    }
  }

  onMount () {
    this.queryEl = DOM.query(this._container, this._inputEl);
    if (this.autoFocus && !this.query && !this.autocompleteOnLoad) {
      this.focusInputElement();
    }

    this.initSearchBarIconController();

    // Wire up our search handling and auto complete
    this.initSearch(this._formEl);
    this.initAutoComplete(this._inputEl);

    if (this._showVoiceSearch) {
      this._voiceSearchController =
        new VoiceSearchController(this._container, this._voiceSearchConfig, this);
      const voiceSearchElement = DOM.query(this._container, '.js-yxt-SearchBar-voiceSearch');
      DOM.on(voiceSearchElement, 'click', () => {
        this._voiceSearchController.handleIconClick();
      });
    }

    if (this.clearButton) {
      this.initClearButton();
    }

    if (this.autoFocus && !this.query && this.autocompleteOnLoad) {
      this.focusInputElement();
    }
  }

  initSearchBarIconController () {
    const config = {
      useCustomIcon: this._config.customIconUrl || this.submitIcon,
      isFocus: this.autoFocus && !this.query,
      searchBarContainer: this._container,
      inputEl: this._inputEl
    };
    this.searchBarIconController = new SearchBarIconController(config);
    if (this._showLoadingIndicator) {
      this.searchBarIconController.setupLoadingIconEvents(this.core.storage, this._verticalKey);
    }
    if (!config.useCustomIcon) {
      this.searchBarIconController.setupAnimatedIconEvents();
    }
  }

  remove () {
    this._autocomplete.remove();
    super.remove();
  }

  initClearButton () {
    const button = this._getClearButton();
    this._showClearButton = this._showClearButton || this.query;
    if (this._showClearButton) {
      button.classList.remove('yxt-SearchBar--hidden');
    } else {
      button.classList.add('yxt-SearchBar--hidden');
    }
    DOM.on(button, 'click', () => {
      this.customHooks.onClearSearch();
      this.query = '';
      this._showClearButton = false;
      button.classList.add('yxt-SearchBar--hidden');
      this.queryEl.value = this.query;

      this.core.storage.delete(StorageKeys.SEARCH_OFFSET);
      this.core.triggerSearch(QueryTriggers.SEARCH_BAR, this.query);

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
      this._updateClearButtonVisibility(input);
    });
  }

  submitVoiceQuery () {
    const inputEl = DOM.query(this._container, this._inputEl);
    this.onQuerySubmit(inputEl, QueryTriggers.VOICE_SEARCH);
  }

  /**
   * Registers the different event handlers that can issue a search. Note that
   * different handlers are used depending on whether or not a form is used as
   * context.
   *
   * @param {string} formSelector CSS selector to bind our form submit handling to
   */
  initSearch (formSelector) {
    this._formEl = formSelector;

    this._container.classList.add('yxt-SearchBar-wrapper');

    if (this._useForm) {
      const form = DOM.query(this._container, formSelector);
      if (!form) {
        throw new Error(
          'Could not initialize SearchBar; Can not find {HTMLElement} `',
          this._formEl, '`.');
      }

      DOM.on(form, 'submit', (e) => {
        e.preventDefault();
        // TODO(oshi) we should not use the same css selector (this._inputEl)
        // For both the autocomplete AND the search bar input
        // This is incredibly confusing, and also makes the first DOM.query
        // Rely on the order of the input el and autocomplete in the template
        const inputEl = form.querySelector(this._inputEl);
        this.onQuerySubmit(inputEl);
      });
    } else {
      const inputEl = DOM.query(this._container, this._inputEl);
      if (!inputEl) {
        throw new Error(
          'Could not initialize SearchBar; Can not find {HTMLElement} `',
          this._inputEl, '`.');
      }
      DOM.on(inputEl, 'keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.onQuerySubmit(inputEl);
        }
      });

      const submitButton = DOM.query(this._container, '.js-yext-submit');
      DOM.on(submitButton, 'click', (e) => {
        e.preventDefault();
        this.onQuerySubmit(inputEl);
      });
    }
  }

  /**
   * The handler for a query submission. This method first sets the new query in
   * persistent and storage, than performs a debounced search.
   *
   * @param {Node} inputEl The input element containing the query.
   * @param {QueryTrigger} queryTrigger An optional query trigger used for the search
   */
  onQuerySubmit (inputEl, queryTrigger = QueryTriggers.SEARCH_BAR) {
    const query = inputEl.value;
    this.query = query;
    const params = new SearchParams(this.core.storage.getCurrentStateUrlMerged());
    params.set('query', query);

    const context = this.core.storage.get(StorageKeys.API_CONTEXT);
    if (context) {
      params.set(StorageKeys.API_CONTEXT, context);
    }

    // If we have a redirectUrl, we want the form to be
    // serialized and submitted.
    if (typeof this.redirectUrl === 'string') {
      if (this._allowEmptySearch || query) {
        const newRedirectUrl = constructRedirectUrl(this.redirectUrl, params);
        window.open(newRedirectUrl, this.redirectUrlTarget) ||
          (window.location.href = newRedirectUrl);
        return false;
      }
    }

    inputEl.blur();
    DOM.query(this._container, '.js-yext-submit').blur();

    this.core.storage.delete(StorageKeys.SEARCH_OFFSET);
    this.core.triggerSearch(queryTrigger, query);
    return false;
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
      listLabelIdName: this.inputLabelIdName,
      ...this._autocompleteConfig,
      onSubmit: () => {
        if (this._useForm) {
          DOM.trigger(DOM.query(this._container, this._formEl), 'submit');
        } else {
          const inputEl = DOM.query(this._container, inputSelector);
          this.onQuerySubmit(inputEl);
        }
      },
      onChange: () => {
        DOM.trigger(DOM.query(this._container, inputSelector), 'input');
      },
      onMount: () => {
        this._autocomplete.updateAriaExpanded(DOM.query(this._container, inputSelector));
      }
    });
    this._autocomplete.mount();
  }

  /**
   * If _promptForLocation is enabled, we will compute the query's intent and, from there,
   * determine if it's necessary to prompt the user for their location information. It will
   * be unnecessary if the query does not have near me intent or we already have their location
   * stored.
   * @param {string} query The string to query against.
   * @returns {Promise} A promise that will perform the query and update storage accordingly.
   */
  promptForLocation (query) {
    if (this._promptForLocation) {
      return this.fetchQueryIntents(query)
        .then(queryIntents => queryIntents?.includes('NEAR_ME'))
        .then(queryHasNearMeIntent => {
          if (queryHasNearMeIntent && !this.core.storage.get(StorageKeys.GEOLOCATION)) {
            return new Promise((resolve, reject) =>
              navigator.geolocation.getCurrentPosition(
                position => {
                  this.core.storage.set(StorageKeys.GEOLOCATION, {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    radius: position.coords.accuracy
                  });
                  resolve();
                },
                () => {
                  resolve();
                  const { enabled, message } = this._geolocationTimeoutAlert;
                  if (enabled) {
                    alert(message);
                  }
                },
                this._geolocationOptions)
            );
          }
        })
        .catch(error => console.warn('Unable to determine user\'s location.', error));
    } else {
      return Promise.resolve();
    }
  }

  /**
   * A helper method that computes the intents of the provided query. If the query was entered
   * manually into the search bar or selected via autocomplete, its intents will have been stored
   * already in storage. Otherwise, a new API call will have to be issued to determine
   * intent.
   * @param {string} query The query whose intent is needed.
   * @returns {Promise} A promise containing the intents of the query.
   */
  fetchQueryIntents (query) {
    const autocompleteData =
      this.core.storage.get(`${StorageKeys.AUTOCOMPLETE}.${this._autoCompleteName}`);
    if (!autocompleteData) {
      const autocompleteRequest = this._verticalKey
        ? this.core.autoCompleteVertical(
          query,
          this._autoCompleteName,
          this._verticalKey)
        : this.core.autoCompleteUniversal(query, this._autoCompleteName);
      return autocompleteRequest.then(data => data?.inputIntents ?? []);
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
    const queryId = this.core.storage.get(StorageKeys.QUERY_ID);
    const options = Object.assign(
      {},
      queryId && { queryId },
      this._verticalKey && { verticalKey: this._verticalKey }
    );
    return JSON.stringify(options);
  }

  setState (data) {
    const forwardIconOpts = {
      complexContentsParams: {
        iconPrefix: this.name
      }
    };
    const reverseIconOpts = {
      complexContentsParams: {
        iconPrefix: this.name
      }
    };
    return super.setState(Object.assign({
      title: this.title,
      inputIdName: this.inputIdName,
      labelText: this.labelText,
      inputLabelIdName: this.inputLabelIdName,
      submitIcon: this.submitIcon,
      submitText: this.submitText,
      clearText: this.clearText,
      showClearButton: this._showClearButton,
      showLoadingIndicator: this._showLoadingIndicator,
      customMicIconUrl: this._customMicIconUrl,
      customLoadingIconUrl: this._customLoadingIconUrl,
      customListeningIconUrl: this._customListeningIconUrl,
      showVoiceSearch: this._showVoiceSearch,
      query: this.query || '',
      eventOptions: this.eventOptions(),
      iconId: this.name,
      forwardIconOpts: forwardIconOpts,
      reverseIconOpts: reverseIconOpts,
      autoFocus: this.autoFocus && !this.query,
      useForm: this._useForm,
      autocompleteContainerIdName: this.autocompleteContainerIdName
    }, data));
  }

  focusInputElement () {
    DOM.query(this._container, this._inputEl).focus();
  }

  /**
   * Returns the clear button element, if exists
   *
   * @returns {Element}
   */
  _getClearButton () {
    return DOM.query(this._container, '.js-yxt-SearchBar-clear');
  }

  hideClearButton () {
    this._showClearButton = false;
    this._getClearButton().classList.add('yxt-SearchBar--hidden');
  }

  showClearButton () {
    this._showClearButton = true;
    this._getClearButton().classList.remove('yxt-SearchBar--hidden');
  }

  /**
   * Updates the Search inputs clear button based on the current input value
   *
   * @param {string} input
   */
  _updateClearButtonVisibility (input) {
    if (!this._showClearButton && input.length > 0) {
      this.showClearButton();
    } else if (this._showClearButton && input.length === 0) {
      this.hideClearButton();
    }
  }
}
