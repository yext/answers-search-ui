/** @module */

import Core from './core/core';

import {
  TemplateLoader,
  Renderers,
  DOM
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
import SearchConfig from './core/models/searchconfig';
import AutoCompleteApi from './core/search/autocompleteapi';
import MockAutoCompleteService from './core/search/mockautocompleteservice';
import QuestionAnswerApi from './core/search/questionanswerapi';
import MockQuestionAnswerService from './core/search/mockquestionanswerservice';
import SearchApi from './core/search/searchapi';
import MockSearchService from './core/search/mocksearchservice';
import ComponentManager from './ui/components/componentmanager';
import NavigationConfig from './core/models/navigationconfig';

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
     * A reference of the renderer to use for the components
     * This is provided during initialization.
     * @type {Renderer}
     */
    this.renderer = new Renderers.Handlebars();

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

  init (config) {
    const parsedConfig = this.parseConfig(config);
    if (typeof parsedConfig.apiKey !== 'string') {
      throw new Error('Missing required `apiKey`. Type must be {string}');
    }

    if (typeof parsedConfig.experienceKey !== 'string') {
      throw new Error('Missing required `experienceKey`. Type must be {string}');
    }

    parsedConfig.search = new SearchConfig(parsedConfig.search);
    parsedConfig.navigation = new NavigationConfig(parsedConfig.navigation);

    const globalStorage = new GlobalStorage();
    const persistentStorage = new PersistentStorage({
      updateListener: parsedConfig.onStateChange,
      resetListener: data => globalStorage.setAll(data)
    });
    globalStorage.setAll(persistentStorage.getAll());
    globalStorage.set(StorageKeys.SEARCH_CONFIG, parsedConfig.search);
    globalStorage.set(StorageKeys.NAVIGATION_CONFIG, parsedConfig.navigation);
    globalStorage.set(StorageKeys.LOCALE, parsedConfig.locale);
    globalStorage.set(StorageKeys.SESSIONS_OPT_IN, parsedConfig.sessionTrackingEnabled);

    this._services = parsedConfig.mock ? getMockServices() : getServices(parsedConfig);

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
      questionAnswerService: this._services.questionAnswerService
    });

    if (parsedConfig.onStateChange && typeof parsedConfig.onStateChange === 'function') {
      parsedConfig.onStateChange(persistentStorage.getAll(), window.location.search.substr(1));
    }

    this.components
      .setCore(this.core)
      .setRenderer(this.renderer);

    this._eligibleForAnalytics = parsedConfig.businessId != null;
    if (this._eligibleForAnalytics) {
      // TODO(amullings): Initialize with other services
      const reporter = parsedConfig.mock
        ? new NoopAnalyticsReporter()
        : new AnalyticsReporter(
          this.core,
          parsedConfig.experienceKey,
          parsedConfig.experienceVersion,
          parsedConfig.businessId,
          parsedConfig.analyticsOptions);

      this._analyticsReporterService = reporter;

      this.components.setAnalyticsReporter(reporter);
      initScrollListener(reporter);
    }

    this._setDefaultInitialSearch(parsedConfig.search);

    this._onReady = parsedConfig.onReady || function () {};

    if (parsedConfig.useTemplates === false || parsedConfig.templateBundle) {
      if (parsedConfig.templateBundle) {
        this.renderer.init(parsedConfig.templateBundle);
      }

      this._onReady();
      return this;
    }

    // Templates are currently downloaded separately from the CORE and UI bundle.
    // Future enhancement is to ship the components with templates in a separate bundle.
    this.templates = new TemplateLoader({
      templateUrl: parsedConfig.templateUrl
    }).onLoaded((templates) => {
      this.renderer.init(templates);

      this._onReady();
    });

    return this;
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
    return parsedConfig;
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
   * Opt in or out of convertion tracking analytics
   * @param {boolean} optIn
   */
  setConversionsOptIn (optIn) {
    if (this._eligibleForAnalytics) {
      this._analyticsReporterService.setConversionTrackingEnabled(optIn);
    }
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
    this.core.globalStorage.set('queryTrigger', 'initialize');
    this.core.setQuery(searchConfig.defaultInitialSearch);
  }
}

/**
 * @param {Object} config
 * @returns {Services}
 */
function getServices (config) {
  return {
    searchService: new SearchApi({
      apiKey: config.apiKey,
      experienceKey: config.experienceKey,
      experienceVersion: config.experienceVersion,
      locale: config.locale,
      sessionTrackingEnabled: config.sessionTrackingEnabled
    }),
    autoCompleteService: new AutoCompleteApi({
      apiKey: config.apiKey,
      experienceKey: config.experienceKey,
      experienceVersion: config.experienceVersion,
      locale: config.locale,
      sessionTrackingEnabled: config.sessionTrackingEnabled
    }),
    questionAnswerService: new QuestionAnswerApi({
      apiKey: config.apiKey,
      sessionTrackingEnabled: config.sessionTrackingEnabled
    }),
    errorReporterService: new ErrorReporter({
      apiKey: config.apiKey,
      experienceKey: config.experienceKey,
      experienceVersion: config.experienceVersion,
      printVerbose: config.debug,
      sendToServer: !config.suppressErrorReports,
      sessionTrackingEnabled: config.sessionTrackingEnabled
    })
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
      reporter.report(event);
    }
  };

  document.addEventListener('scroll', () => {
    clearTimeout(timeout);
    timeout = setTimeout(sendEvent, DEBOUNCE_TIME);
  });
}

const ANSWERS = new Answers();
export default ANSWERS;
