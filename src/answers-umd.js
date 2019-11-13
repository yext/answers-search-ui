/** @module */

import Core from './core/core';

import {
  TemplateLoader,
  COMPONENT_MANAGER,
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
    this.components = COMPONENT_MANAGER;

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
    config = Object.assign({}, DEFAULTS, config);
    if (typeof config.apiKey !== 'string') {
      throw new Error('Missing required `apiKey`. Type must be {string}');
    }

    if (typeof config.experienceKey !== 'string') {
      throw new Error('Missing required `experienceKey`. Type must be {string}');
    }

    config.search = new SearchConfig(config.search);

    const globalStorage = new GlobalStorage();
    const persistentStorage = new PersistentStorage({
      updateListener: config.onStateChange,
      resetListener: data => globalStorage.setAll(data)
    });
    globalStorage.setAll(persistentStorage.getAll());
    globalStorage.set(StorageKeys.SEARCH_CONFIG, config.search);
    let sessionTrackingEnabled = true;
    if (typeof config.sessionTrackingEnabled === 'boolean') {
      sessionTrackingEnabled = config.sessionTrackingEnabled;
    }
    globalStorage.set(StorageKeys.SESSIONS_OPT_IN, sessionTrackingEnabled);

    this._services = config.mock ? getMockServices() : getServices(config);

    this.core = new Core({
      apiKey: config.apiKey,
      globalStorage: globalStorage,
      persistentStorage: persistentStorage,
      experienceKey: config.experienceKey,
      fieldFormatters: config.fieldFormatters,
      experienceVersion: config.experienceVersion,
      locale: config.locale,
      searchService: this._services.searchService,
      autoCompleteService: this._services.autoCompleteService,
      questionAnswerService: this._services.questionAnswerService
    });

    if (config.onStateChange && typeof config.onStateChange === 'function') {
      config.onStateChange(persistentStorage.getAll(), window.location.search.substr(1));
    }

    this.components
      .setCore(this.core)
      .setRenderer(this.renderer);

    this._eligibleForAnalytics = config.businessId != null;
    if (this._eligibleForAnalytics) {
      // TODO(amullings): Initialize with other services
      const reporter = config.mock
        ? new NoopAnalyticsReporter()
        : new AnalyticsReporter(
          this.core,
          config.experienceKey,
          config.experienceVersion,
          config.businessId,
          config.analyticsOptions);

      this._analyticsReporterService = reporter;

      this.components.setAnalyticsReporter(reporter);
      initScrollListener(reporter);
    }

    this._setDefaultInitialSearch(config.search);

    this._onReady = config.onReady || function () {};

    if (config.useTemplates === false || config.templateBundle) {
      if (config.templateBundle) {
        this.renderer.init(config.templateBundle);
      }

      this._onReady();
      return this;
    }

    // Templates are currently downloaded separately from the CORE and UI bundle.
    // Future enhancement is to ship the components with templates in a separate bundle.
    this.templates = new TemplateLoader({
      templateUrl: config.templateUrl
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
      locale: config.locale
    }),
    autoCompleteService: new AutoCompleteApi({
      apiKey: config.apiKey,
      experienceKey: config.experienceKey,
      experienceVersion: config.experienceVersion,
      locale: config.locale
    }),
    questionAnswerService: new QuestionAnswerApi({
      apiKey: config.apiKey
    }),
    errorReporterService: new ErrorReporter({
      apiKey: config.apiKey,
      experienceKey: config.experienceKey,
      experienceVersion: config.experienceVersion,
      printVerbose: config.debug,
      sendToServer: !config.suppressErrorReports
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
