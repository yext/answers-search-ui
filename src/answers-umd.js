/** @module */

import Core from './core/core';
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
import PersistentStorage from './ui/storage/persistentstorage';
import GlobalStorage from './core/storage/globalstorage';
import { AnswersComponentError } from './core/errors/errors';
import AnalyticsEvent from './core/analytics/analyticsevent';
import StorageKeys from './core/storage/storagekeys';
import QueryTriggers from './core/models/querytriggers';
import SearchConfig from './core/models/searchconfig';
import AutoCompleteApi from './core/search/autocompleteapi';
import MockAutoCompleteService from './core/search/mockautocompleteservice';
import QuestionAnswerApi from './core/search/questionanswerapi';
import MockQuestionAnswerService from './core/search/mockquestionanswerservice';
import SearchApi from './core/search/searchapi';
import MockSearchService from './core/search/mocksearchservice';
import ComponentManager from './ui/components/componentmanager';
import VerticalPagesConfig from './core/models/verticalpagesconfig';
import { SANDBOX, PRODUCTION } from './core/constants';
import MasterSwitchApi from './core/utils/masterswitchapi';
import RichTextFormatter from './core/utils/richtextformatter';
import { isValidContext } from './core/utils/apicontext';
import FilterNodeFactory from './core/filters/filternodefactory';
import { urlWithoutQueryParamsAndHash } from './core/utils/urlutils';

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
  locale: 'en'
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
    this.core = null;

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
    const parsedConfig = this.parseConfig(config);
    this.validateConfig(parsedConfig);

    parsedConfig.search = new SearchConfig(parsedConfig.search);
    parsedConfig.verticalPages = new VerticalPagesConfig(parsedConfig.verticalPages);

    const globalStorage = new GlobalStorage();
    const persistentStorage = new PersistentStorage({
      updateListener: parsedConfig.onStateChange,
      resetListener: data => {
        if (!data[StorageKeys.QUERY]) {
          this.core.clearResults();
        } else {
          this.core.globalStorage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.QUERY_PARAMETER);
        }

        if (!data[StorageKeys.SEARCH_OFFSET]) {
          this.core.globalStorage.set(StorageKeys.SEARCH_OFFSET, 0);
        }
        globalStorage.setAll(data);
      }
    });
    globalStorage.setAll(persistentStorage.getAll());
    globalStorage.set(StorageKeys.SEARCH_CONFIG, parsedConfig.search);
    globalStorage.set(StorageKeys.VERTICAL_PAGES_CONFIG, parsedConfig.verticalPages);
    globalStorage.set(StorageKeys.LOCALE, parsedConfig.locale);
    globalStorage.set(StorageKeys.SESSIONS_OPT_IN, parsedConfig.sessionTrackingEnabled);
    parsedConfig.noResults && globalStorage.set(StorageKeys.NO_RESULTS_CONFIG, parsedConfig.noResults);
    if (globalStorage.getState(StorageKeys.QUERY)) {
      globalStorage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.QUERY_PARAMETER);
    }

    const context = globalStorage.getState(StorageKeys.API_CONTEXT);
    if (context && !isValidContext(context)) {
      persistentStorage.delete(StorageKeys.API_CONTEXT, true);
      globalStorage.delete(StorageKeys.API_CONTEXT);
      console.error(`Context parameter "${context}" is invalid, omitting from the search.`);
    }

    if (globalStorage.getState(StorageKeys.REFERRER_PAGE_URL) === null) {
      globalStorage.set(
        StorageKeys.REFERRER_PAGE_URL,
        urlWithoutQueryParamsAndHash(document.referrer)
      );
    }

    this._masterSwitchApi = statusPage
      ? new MasterSwitchApi({ apiKey: parsedConfig.apiKey, ...statusPage }, globalStorage)
      : MasterSwitchApi.from(parsedConfig.apiKey, parsedConfig.experienceKey, globalStorage);

    this._services = parsedConfig.mock
      ? getMockServices()
      : getServices(parsedConfig, globalStorage);

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
      globalStorage.on('update', StorageKeys.QUERY_ID, id =>
        this._analyticsReporterService.setQueryId(id)
      );

      this.components.setAnalyticsReporter(this._analyticsReporterService);
      initScrollListener(this._analyticsReporterService);
    }

    this.core = new Core({
      apiKey: parsedConfig.apiKey,
      globalStorage: globalStorage,
      persistentStorage: persistentStorage,
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
      parsedConfig.onStateChange(persistentStorage.getAll(), window.location.search.substr(1));
    }

    this.components
      .setCore(this.core)
      .setRenderer(this.renderer);

    this._setDefaultInitialSearch(parsedConfig.search);

    this._onReady = parsedConfig.onReady || function () {};

    if (parsedConfig.useTemplates === false || parsedConfig.templateBundle) {
      if (parsedConfig.templateBundle) {
        this.renderer.init(parsedConfig.templateBundle);
      }

      this._handlePonyfillCssVariables(
        parsedConfig.disableCssVariablesPonyfill,
        this._invokeOnReady.bind(this));
      return this;
    }

    // Templates are currently downloaded separately from the CORE and UI bundle.
    // Future enhancement is to ship the components with templates in a separate bundle.
    this.templates = new DefaultTemplatesLoader(templates => {
      this.renderer.init(templates);
      this._handlePonyfillCssVariables(
        parsedConfig.disableCssVariablesPonyfill,
        this._invokeOnReady.bind(this));
    });

    return this;
  }

  /**
   * Checks the experience's Answer Status page before invoking onReady. If the status is
   * disabled, onReady is not called.
   */
  _invokeOnReady () {
    this._masterSwitchApi.isDisabled()
      .then(isDisabled => !isDisabled && this._onReady(), () => this._onReady());
  }

  /**
   * Calls the CSS vars ponyfill, if opted-in, and invokes the callback
   * regardless of if there was an error/success. If opted-out, only invokes the callback.
   * @param {boolean} option to opt out of the css variables ponyfill
   * @param callback {Function} always called after function
   */
  _handlePonyfillCssVariables (ponyfillDisabled, callback) {
    if (!ponyfillDisabled) {
      this.ponyfillCssVariables({
        onFinally: () => {
          callback();
        }
      });
    } else {
      callback();
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
    this.core.globalStorage.set(StorageKeys.SESSIONS_OPT_IN, optIn);
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
    const prepopulatedQuery = this.core.globalStorage.getState(StorageKeys.QUERY);
    if (prepopulatedQuery != null) {
      return;
    }
    this.core.globalStorage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.INITIALIZE);
    this.core.setQuery(searchConfig.defaultInitialSearch);
  }

  /**
   * Sets the geolocation tag in global storage, overriding other inputs. Do not use in conjunction
   * with other components that will set the geolocation internally.
   * @param {number} lat
   * @param {number} long
   */
  setGeolocation (lat, lng) {
    this.core.globalStorage.set(StorageKeys.GEOLOCATION, {
      lat, lng, radius: 0
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

    this.core.globalStorage.set(StorageKeys.API_CONTEXT, contextString);
  }
}

/**
 * @param {Object} config
 * @param {GlobalStorage} globalStorage
 * @returns {Services}
 */
function getServices (config, globalStorage) {
  return {
    searchService: new SearchApi({
      apiKey: config.apiKey,
      experienceKey: config.experienceKey,
      experienceVersion: config.experienceVersion,
      locale: config.locale,
      environment: config.environment
    }),
    autoCompleteService: new AutoCompleteApi(
      {
        apiKey: config.apiKey,
        experienceKey: config.experienceKey,
        experienceVersion: config.experienceVersion,
        locale: config.locale,
        environment: config.environment
      },
      globalStorage),
    questionAnswerService: new QuestionAnswerApi(
      { apiKey: config.apiKey, environment: config.environment },
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
      globalStorage)
  };
}

/**
 * @returns {Services}
 */
function getMockServices () {
  return {
    searchService: new MockSearchService(),
    autoCompleteService: new MockAutoCompleteService(),
    questionAnswerService: new MockQuestionAnswerService(),
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
