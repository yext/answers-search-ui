/** @module */

import CoreAdapter from './core/core-adapter';
import cssVars from 'css-vars-ponyfill';

import {
  DefaultTemplatesLoader,
  Renderers,
  DOM,
  SearchParams
} from './ui/index';
import Component from './ui/components/component';

import ErrorReporter from './core/errors/errorreporter';
import ConsoleErrorReporter from './core/errors/consoleerrorreporter';
import { AnalyticsReporter, NoopAnalyticsReporter } from './core';
import Storage from './core/storage/storage';
import { AnswersComponentError } from './core/errors/errors';
import AnalyticsEvent from './core/analytics/analyticsevent';
import StorageKeys from './core/storage/storagekeys';
import QueryTriggers from './core/models/querytriggers';
import SearchConfig from './core/models/searchconfig';
import AutoCompleteApi from './core/search/autocompleteapi';
import MockAutoCompleteService from './core/search/mockautocompleteservice';
import SearchApi from './core/search/searchapi';
import MockSearchService from './core/search/mocksearchservice';
import ComponentManager from './ui/components/componentmanager';
import VerticalPagesConfig from './core/models/verticalpagesconfig';
import { SANDBOX, PRODUCTION, LOCALE, QUERY_SOURCE } from './core/constants';
import MasterSwitchApi from './core/utils/masterswitchapi';
import RichTextFormatter from './core/utils/richtextformatter';
import { isValidContext } from './core/utils/apicontext';
import FilterNodeFactory from './core/filters/filternodefactory';
import { urlWithoutQueryParamsAndHash } from './core/utils/urlutils';
import TranslationProcessor from './core/i18n/translationprocessor';

/** @typedef {import('./core/services/searchservice').default} SearchService */
/** @typedef {import('./core/services/autocompleteservice').default} AutoCompleteService */
/** @typedef {import('./core/services/questionanswerservice').default} QuestionAnswerService */
/** @typedef {import('./core/services/errorreporterservice').default} ErrorReporterService */
/** @typedef {import('./core/services/analyticsreporterservice').default} AnalyticsReporterService */

/**
 * @typedef Services
 * @property {SearchService} searchService
 * @property {AutoCompleteService} autoCompleteService
 * @property {QuestionAnswerService} questionAnswerService
 * @property {ErrorReporterService} errorReporterService
 */

const DEFAULTS = {
  locale: LOCALE,
  querySource: QUERY_SOURCE
};

/**
 * The main Answers interface
 */
class Answers {
  constructor () {
    if (!Answers.setInstance(this)) {
      return Answers.getInstance();
    }

    /**
     * A reference to the Component base class for custom
     * components to extend
     */
    this.Component = Component;

    /**
     * A reference to the AnalyticsEvent base class for reporting
     * custom analytics
     */
    this.AnalyticsEvent = AnalyticsEvent;

    /**
     * A reference to the FilterNodeFactory class for creating {@link FilterNode}s.
     */
    this.FilterNodeFactory = FilterNodeFactory;

    /**
     * A reference of the renderer to use for the components
     * This is provided during initialization.
     * @type {Renderer}
     */
    this.renderer = new Renderers.Handlebars();

    /**
     * A reference to the formatRichText function.
     * @type {Function}
     */
    this.formatRichText = (markdown, eventOptionsFieldName, targetConfig) =>
      RichTextFormatter.format(markdown, eventOptionsFieldName, targetConfig);

    /**
     * A local reference to the component manager
     * @type {ComponentManager}
     */
    this.components = ComponentManager.getInstance();

    /**
     * A local reference to the core api
     * @type {Core}
     */
    this.coreAdapter = null;

    /**
     * A callback function to invoke once the library is ready.
     * Typically fired after templates are fetched from server for rendering.
     */
    this._onReady = function () {};

    /**
     * @type {boolean}
     * @private
     */
    this._eligibleForAnalytics = false;

    /**
     * @type {Services}
     * @private
     */
    this._services = null;

    /**
     * @type {AnalyticsReporterService}
     * @private
     */
    this._analyticsReporterService = null;

    /**
     * @type {boolean}
     * @private
     */
    this._disabledByMasterSwitch = false;
  }

  static setInstance (instance) {
    if (!this.instance) {
      this.instance = instance;
      return true;
    }
    return false;
  }

  static getInstance () {
    return this.instance;
  }

  /**
   * Initializes the SDK with the provided configuration. Note that before onReady
   * is ever called, a check to the relevant Answers Status page is made.
   *
   * @param {Object} config The Answers configuration.
   * @param {Object} statusPage An override for the baseUrl and endpoint of the
   *                            experience's Answers Status page.
   */
  init (config, statusPage) {
    window.performance.mark('yext.answers.initStart');
    const parsedConfig = this.parseConfig(config);
    this.validateConfig(parsedConfig);

    parsedConfig.search = new SearchConfig(parsedConfig.search);
    parsedConfig.verticalPages = new VerticalPagesConfig(parsedConfig.verticalPages);

    const globalStorage = new GlobalStorage();
    const persistentStorage = new PersistentStorage({
      updateListener: parsedConfig.onStateChange,
      resetListener: data => {
        if (!data[StorageKeys.QUERY]) {
          this.coreAdapter.clearResults();
        } else {
          this.coreAdapter.globalStorage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.QUERY_PARAMETER);
        }

        if (!data[StorageKeys.SEARCH_OFFSET]) {
          this.coreAdapter.globalStorage.set(StorageKeys.SEARCH_OFFSET, 0);
        }
      }
    });
    storage.init(window.location.search);
    storage.set(StorageKeys.SEARCH_CONFIG, parsedConfig.search);
    storage.set(StorageKeys.VERTICAL_PAGES_CONFIG, parsedConfig.verticalPages);
    storage.set(StorageKeys.LOCALE, parsedConfig.locale);
    storage.set(StorageKeys.QUERY_SOURCE, parsedConfig.querySource);

    // Check if sessionsOptIn data is stored in the URL. If it is, prefer that over
    // what is in parsedConfig.
    const sessionOptIn = storage.get(StorageKeys.SESSIONS_OPT_IN);
    if (!sessionOptIn) {
      storage.set(
        StorageKeys.SESSIONS_OPT_IN,
        { value: parsedConfig.sessionTrackingEnabled, setDynamically: false });
    } else {
      // If sessionsOptIn was stored in the URL, it was stored only as a string.
      // Parse this value and add it back to storage.
      storage.set(
        StorageKeys.SESSIONS_OPT_IN,
        { value: (/^true$/i).test(sessionOptIn), setDynamically: true });
    }

    parsedConfig.noResults && storage.set(StorageKeys.NO_RESULTS_CONFIG, parsedConfig.noResults);
    const isSuggestQueryTrigger =
      storage.get(StorageKeys.QUERY_TRIGGER) === QueryTriggers.SUGGEST;
    if (storage.get(StorageKeys.QUERY) && !isSuggestQueryTrigger) {
      storage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.QUERY_PARAMETER);
    }

    const context = storage.get(StorageKeys.API_CONTEXT);
    if (context && !isValidContext(context)) {
      storage.delete(StorageKeys.API_CONTEXT);
      console.error(`Context parameter "${context}" is invalid, omitting from the search.`);
    }

    if (storage.get(StorageKeys.REFERRER_PAGE_URL) === undefined) {
      storage.set(
        StorageKeys.REFERRER_PAGE_URL,
        urlWithoutQueryParamsAndHash(document.referrer)
      );
    }

    this._masterSwitchApi = statusPage
      ? new MasterSwitchApi({ apiKey: parsedConfig.apiKey, ...statusPage }, storage)
      : MasterSwitchApi.from(parsedConfig.apiKey, parsedConfig.experienceKey, storage);

    this._services = parsedConfig.mock
      ? getMockServices()
      : getServices(parsedConfig, storage);

    this._eligibleForAnalytics = parsedConfig.businessId != null;
    // TODO(amullings): Initialize with other services
    if (this._eligibleForAnalytics && parsedConfig.mock) {
      this._analyticsReporterService = new NoopAnalyticsReporter();
    } else if (this._eligibleForAnalytics) {
      this._analyticsReporterService = new AnalyticsReporter(
        parsedConfig.experienceKey,
        parsedConfig.experienceVersion,
        parsedConfig.businessId,
        parsedConfig.analyticsOptions,
        parsedConfig.environment);

      // listen to query id updates
      storage.registerListener({
        eventType: 'update',
        storageKey: StorageKeys.QUERY_ID,
        callback: id => this._analyticsReporterService.setQueryId(id)
      });

      this.components.setAnalyticsReporter(this._analyticsReporterService);
      initScrollListener(this._analyticsReporterService);
    }

    this.coreAdapter = new CoreAdapter({
      apiKey: parsedConfig.apiKey,
      storage: storage,
      experienceKey: parsedConfig.experienceKey,
      fieldFormatters: parsedConfig.fieldFormatters,
      experienceVersion: parsedConfig.experienceVersion,
      locale: parsedConfig.locale,
      searchService: this._services.searchService,
      autoCompleteService: this._services.autoCompleteService,
      questionAnswerService: this._services.questionAnswerService,
      analyticsReporter: this._analyticsReporterService,
      onVerticalSearch: parsedConfig.onVerticalSearch,
      onUniversalSearch: parsedConfig.onUniversalSearch
    });

    if (parsedConfig.onStateChange && typeof parsedConfig.onStateChange === 'function') {
      parsedConfig.onStateChange(
        Object.fromEntries(storage.getAll()),
        this.core.storage.getCurrentStateUrlMerged());
    }

    this.components
      .setCore(this.coreAdapter)
      .setRenderer(this.renderer);

    this._setDefaultInitialSearch(parsedConfig.search);

    this._onReady = parsedConfig.onReady || function () {};

    const asyncDeps = this._loadAsyncDependencies(parsedConfig);
    return asyncDeps.finally(() => {
      if (!this.coreAdapter.isInitialized()) {
        throw new Error(
          'Failed to initialize Core, likely because the experience\'s front-end has been disabled.');
      }
      this._onReady();
    });
  }

  _loadAsyncDependencies (parsedConfig) {
    const loadTemplates = this._loadTemplates(parsedConfig);
    const ponyfillCssVariables = this._handlePonyfillCssVariables(parsedConfig.disableCssVariablesPonyfill);
    const initializeCoreAdapter = this.coreAdapter.init();
    return Promise.all([loadTemplates, ponyfillCssVariables, initializeCoreAdapter]);
  }

  _loadTemplates ({ useTemplates, templateBundle }) {
    if (useTemplates === false || templateBundle) {
      if (templateBundle) {
        this.renderer.init(templateBundle, this._getInitLocale());
        return Promise.resolve();
      }
    } else {
      // Templates are currently downloaded separately from the CORE and UI bundle.
      // Future enhancement is to ship the components with templates in a separate bundle.
      this.templates = new DefaultTemplatesLoader(templates => {
        this.renderer.init(templates, this._getInitLocale());
      });
      return this.templates.fetchTemplates();
    }
  }

  domReady (cb) {
    DOM.onReady(cb);
  }

  onReady (cb) {
    this._onReady = cb;
    return this;
  }

  /**
   * Parses the config provided by the user. In the parsed config, any options not supplied by the
   * user are given default values.
   * @param {Object} config The user supplied config.
   */
  parseConfig (config) {
    const parsedConfig = Object.assign({}, DEFAULTS, config);
    let sessionTrackingEnabled = true;
    if (typeof config.sessionTrackingEnabled === 'boolean') {
      sessionTrackingEnabled = config.sessionTrackingEnabled;
    }
    parsedConfig.sessionTrackingEnabled = sessionTrackingEnabled;

    const sandboxPrefix = `${SANDBOX}-`;
    parsedConfig.apiKey.includes(sandboxPrefix)
      ? parsedConfig.environment = SANDBOX
      : parsedConfig.environment = PRODUCTION;
    parsedConfig.apiKey = parsedConfig.apiKey.replace(sandboxPrefix, '');

    return parsedConfig;
  }

  /**
   * Validates the Answers config object to ensure things like api key and experience key are
   * properly set.
   * @param {Object} config The Answers config.
   */
  validateConfig (config) {
    // TODO (tmeyer): Extract this method into it's own class. Investigate the use of JSON schema
    // to validate these configs.
    if (typeof config.apiKey !== 'string') {
      throw new Error('Missing required `apiKey`. Type must be {string}');
    }

    if (typeof config.experienceKey !== 'string') {
      throw new Error('Missing required `experienceKey`. Type must be {string}');
    }

    if (config.onVerticalSearch && typeof config.onVerticalSearch !== 'function') {
      throw new Error('onVerticalSearch must be a function. Current type is: ' + typeof config.onVerticalSearch);
    }

    if (config.onUniversalSearch && typeof config.onUniversalSearch !== 'function') {
      throw new Error('onUniversalSearch must be a function. Current type is: ' + typeof config.onUniversalSearch);
    }
  }

  /**
   * Register a custom component type so it can be created via
   * addComponent and used as a child component
   * @param {Component} componentClass
   */
  registerComponentType (componentClass) {
    this.components.register(componentClass);
  }

  addComponent (type, opts) {
    if (typeof opts === 'string') {
      opts = {
        container: opts
      };
    }

    try {
      this.components.create(type, opts).mount();
    } catch (e) {
      throw new AnswersComponentError('Failed to add component', type, e);
    }
    return this;
  }

  /**
   * Remove the component - and all of its children - with the given name
   * @param {string} name The name of the component to remove
   */
  removeComponent (name) {
    this.components.removeByName(name);
  }

  createComponent (opts) {
    return this.components.create('Component', opts).mount();
  }

  /**
   * Conducts a search in the Answers experience
   *
   * @param {string} query
   */
  search (query) {
    this.coreAdapter.setQuery(query, { setQueryParams: true });
    this.coreAdapter.persistentStorage.set(StorageKeys.QUERY, query);
  }

  registerHelper (name, cb) {
    this.renderer.registerHelper(name, cb);
    return this;
  }

  /**
   * Compile and add a template to the current renderer
   * @param {string} templateName The unique name for the template
   * @param {string} template The handlebars template string
   */
  registerTemplate (templateName, template) {
    this.renderer.registerTemplate(templateName, template);
  }

  /**
   * Opt in or out of convertion tracking analytics
   * @param {boolean} optIn
   */
  setConversionsOptIn (optIn) {
    if (this._eligibleForAnalytics) {
      this._analyticsReporterService.setConversionTrackingEnabled(optIn);
    }
  }

  /**
   * Opt in or out of session cookies
   * @param {boolean} optIn
   */
  setSessionsOptIn (optIn) {
    this.coreAdapter.globalStorage.set(
      StorageKeys.SESSIONS_OPT_IN, { value: optIn, setDynamically: true });
  }

  /**
   * Sets a search query on initialization for vertical searchers that have a
   * defaultInitialSearch provided, if the user hasn't already provided their
   * own via URL param.
   * @param {SearchConfig} searchConfig
   * @private
   */
  _setDefaultInitialSearch (searchConfig) {
    if (searchConfig.defaultInitialSearch == null || !searchConfig.verticalKey) {
      return;
    }
    const prepopulatedQuery = this.coreAdapter.globalStorage.getState(StorageKeys.QUERY);
    if (prepopulatedQuery != null) {
      return;
    }
    this.coreAdapter.globalStorage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.INITIALIZE);
    this.coreAdapter.setQuery(searchConfig.defaultInitialSearch);
  }

  /**
   * Sets the geolocation tag in storage, overriding other inputs. Do not use in conjunction
   * with other components that will set the geolocation internally.
   * @param {number} lat
   * @param {number} long
   */
  setGeolocation (lat, lng) {
    this.coreAdapter.globalStorage.set(StorageKeys.GEOLOCATION, {
      lat, lng, radius: 0
    });
  }

  /**
   * A promise that resolves when ponyfillCssVariables resolves,
   * or resolves immediately if ponyfill is disabled
   * @param {boolean} option to opt out of the css variables ponyfill
   * @return {Promise} resolves after ponyfillCssVariables, or immediately if disabled
   */
  _handlePonyfillCssVariables (ponyfillDisabled) {
    window.performance.mark('yext.answers.ponyfillStart');
    if (ponyfillDisabled) {
      window.performance.mark('yext.answers.ponyfillEnd');
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      this.ponyfillCssVariables({
        onFinally: () => {
          window.performance.mark('yext.answers.ponyfillEnd');
          resolve();
        }
      });
    });
  }

  /*
   * Updates the css styles with new current variables. This is useful when the css
   * variables are updated dynamically (e.g. through js) or if the css variables are
   * added after the ANSWERS.init
   *
   * To solve issues with non-zero max-age cache controls for link/script assets in IE11,
   * we add a cache busting parameter so that XMLHttpRequests succeed.
   *
   * @param {Object} config Additional config to pass to the ponyfill
   */
  ponyfillCssVariables (config = {}) {
    cssVars({
      onlyLegacy: true,
      onError: config.onError || function () {},
      onSuccess: config.onSuccess || function () {},
      onFinally: config.onFinally || function () {},
      onBeforeSend: (xhr, node, url) => {
        try {
          const uriWithCacheBust = new URL(url);
          const params = new SearchParams(uriWithCacheBust.search);
          params.set('_', new Date().getTime());
          uriWithCacheBust.search = params.toString();
          xhr.open('GET', uriWithCacheBust.toString());
        } catch (e) {
          // Catch the error and continue if the URL provided in the asset is not a valid URL
        }
      }
    });
  }

  /*
   * Adds context as a parameter for the query API calls.
   * @param {Object} context The context object passed in the API calls
   */
  setContext (context) {
    const contextString = JSON.stringify(context);
    if (!isValidContext(contextString)) {
      console.error(`Context parameter "${context}" is invalid, omitting from the search.`);
      return;
    }

    this.coreAdapter.globalStorage.set(StorageKeys.API_CONTEXT, contextString);
  }

  /**
   * Processes a translation which includes performing interpolation, pluralization, or
   * both
   * @param {string | Object} translations The translation, or an object containing
   * translated plural forms
   * @param {Object} interpolationParams Params to use during interpolation
   * @param {number} count The count associated with the pluralization
   * @param {string} language The langauge associated with the pluralization
   * @returns {string} The translation with any interpolation or pluralization applied
   */
  processTranslation (translations, interpolationParams, count, language) {
    const initLocale = this._getInitLocale();
    language = language || initLocale.substring(0, 2);

    return TranslationProcessor.process(translations, interpolationParams, count, language);
  }

  /**
   * Gets the locale that ANSWERS was initialized to
   *
   * @returns {string}
   */
  _getInitLocale () {
    return this.coreAdapter.globalStorage.getState(StorageKeys.LOCALE);
  }
}

/**
 * @param {Object} config
 * @param {Storage} storage
 * @returns {Services}
 */
function getServices (config, storage) {
  return {
    searchService: new SearchApi({
      apiKey: config.apiKey,
      experienceKey: config.experienceKey,
      experienceVersion: config.experienceVersion,
      locale: config.locale,
      environment: config.environment
    },
    storage),
    autoCompleteService: new AutoCompleteApi(
      {
        apiKey: config.apiKey,
        experienceKey: config.experienceKey,
        experienceVersion: config.experienceVersion,
        locale: config.locale,
        environment: config.environment
      },
      globalStorage),
    errorReporterService: new ErrorReporter(
      {
        apiKey: config.apiKey,
        experienceKey: config.experienceKey,
        experienceVersion: config.experienceVersion,
        printVerbose: config.debug,
        sendToServer: !config.suppressErrorReports,
        environment: config.environment
      },
      storage)
  };
}

/**
 * @returns {Services}
 */
function getMockServices () {
  return {
    searchService: new MockSearchService(),
    autoCompleteService: new MockAutoCompleteService(),
    errorReporterService: new ConsoleErrorReporter()
  };
}

/**
 * Initialize the scroll event listener to send analytics events
 * when the user scrolls to the bottom. Debounces scroll events so
 * they are processed after the user stops scrolling
 */
function initScrollListener (reporter) {
  const DEBOUNCE_TIME = 100;
  let timeout = null;

  const sendEvent = () => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight) {
      const event = new AnalyticsEvent('SCROLL_TO_BOTTOM_OF_PAGE');
      if (reporter.getQueryId()) {
        reporter.report(event);
      }
    }
  };

  document.addEventListener('scroll', () => {
    clearTimeout(timeout);
    timeout = setTimeout(sendEvent, DEBOUNCE_TIME);
  });
}

const ANSWERS = new Answers();
export default ANSWERS;
