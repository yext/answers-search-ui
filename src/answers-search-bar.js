/** @module */

import Core from './core/core';
import cssVars from 'css-vars-ponyfill';

import {
  Renderers,
  DOM,
  SearchParams
} from './ui/index';

import ErrorReporter from './core/errors/errorreporter';
import { AnalyticsReporter } from './core';
import Storage from './core/storage/storage';
import { AnswersComponentError } from './core/errors/errors';
import StorageKeys from './core/storage/storagekeys';
import QueryTriggers from './core/models/querytriggers';
import SearchConfig from './core/models/searchconfig';
import ComponentManager from './ui/components/componentmanager';
import { SANDBOX, PRODUCTION, LOCALE, QUERY_SOURCE } from './core/constants';
import { isValidContext } from './core/utils/apicontext';
import { urlWithoutQueryParamsAndHash } from './core/utils/urlutils';
import Filter from './core/models/filter';
import { SEARCH_BAR_COMPONENTS_REGISTRY } from './ui/components/search-bar-only-registry';
import createImpressionEvent from './core/analytics/createimpressionevent';

/** @typedef {import('./core/services/errorreporterservice').default} ErrorReporterService */
/** @typedef {import('./core/services/analyticsreporterservice').default} AnalyticsReporterService */

/**
 * @typedef Services
 * @property {ErrorReporterService} errorReporterService
 */

const DEFAULTS = {
  environment: PRODUCTION,
  locale: LOCALE,
  querySource: QUERY_SOURCE,
  analyticsEventsEnabled: true
};

/**
 * The class that powers the stand-alone SearchBar integration. Note that this class
 * follows the singleton pattern.
 */
class AnswersSearchBar {
  constructor () {
    if (!AnswersSearchBar.setInstance(this)) {
      return AnswersSearchBar.getInstance();
    }

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
    this.components = new ComponentManager(SEARCH_BAR_COMPONENTS_REGISTRY);

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

  /**
   * Attempts to set the singleton instance of the {@link AnswersSearchBar}.
   * If there is already an instance of this class, the method returns False.
   * If the provided instance was set successfully, the method returns True.
   *
   * @param {AnswersSearchBar} instance
   * @returns {boolean}
   */
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
   * Initializes the stand-alone SearchBar using the provided configuration.
   *
   * @param {Object} config The Answers configuration.
   */
  init (config) {
    const parsedConfig = this.parseConfig(config);
    this.validateConfig(parsedConfig);

    parsedConfig.search = new SearchConfig(parsedConfig.search);

    const storage = new Storage({
      persistedValueParser: this._parsePersistentStorageValue
    });
    storage.init(window.location.search);
    storage.set(StorageKeys.SEARCH_CONFIG, parsedConfig.search);
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
    if (storage.has(StorageKeys.QUERY) && !isSuggestQueryTrigger) {
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

    this._services = getServices(parsedConfig, storage);

    this._eligibleForAnalytics = parsedConfig.businessId != null;
    if (this._eligibleForAnalytics) {
      this._analyticsReporterService = new AnalyticsReporter(
        parsedConfig.experienceKey,
        parsedConfig.experienceVersion,
        parsedConfig.businessId,
        parsedConfig.analyticsEventsEnabled,
        parsedConfig.analyticsOptions,
        parsedConfig.environment);

      this.components.setAnalyticsReporter(this._analyticsReporterService);
    }

    this.core = new Core({
      token: parsedConfig.token,
      apiKey: parsedConfig.apiKey,
      storage: storage,
      experienceKey: parsedConfig.experienceKey,
      fieldFormatters: parsedConfig.fieldFormatters,
      experienceVersion: parsedConfig.experienceVersion,
      locale: parsedConfig.locale,
      analyticsReporter: this._analyticsReporterService,
      onVerticalSearch: parsedConfig.onVerticalSearch,
      onUniversalSearch: parsedConfig.onUniversalSearch,
      environment: parsedConfig.environment,
      componentManager: this.components,
      cloudChoice: parsedConfig.cloudChoice
    });

    if (parsedConfig.onStateChange && typeof parsedConfig.onStateChange === 'function') {
      parsedConfig.onStateChange(
        Object.fromEntries(storage.getAll()),
        this.core.storage.getCurrentStateUrlMerged());
    }

    this.components
      .setCore(this.core)
      .setRenderer(this.renderer);

    this._setDefaultInitialSearch(parsedConfig.search);

    if (parsedConfig.visitor) {
      this.setVisitor(parsedConfig.visitor);
    } else {
      this.core.init();
    }

    this._onReady = parsedConfig.onReady || function () {};

    this.renderer.init(parsedConfig.templateBundle, this._getInitLocale());
    this._handlePonyfillCssVariables(parsedConfig.disableCssVariablesPonyfill)
      .finally(() => {
        this._onReady();
        if (this._analyticsReporterService) {
          const impressionEvent = createImpressionEvent({
            verticalKey: parsedConfig.search?.verticalKey,
            standAlone: true
          });
          this._analyticsReporterService.report(impressionEvent, { includeQueryId: false });
        }
      });
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

    if (parsedConfig.apiKey) {
      const sandboxPrefix = `${SANDBOX}-`;
      if (!config.environment) {
        parsedConfig.apiKey.includes(sandboxPrefix)
          ? parsedConfig.environment = SANDBOX
          : parsedConfig.environment = PRODUCTION;
      }
      parsedConfig.apiKey = parsedConfig.apiKey.replace(sandboxPrefix, '');
    }

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
    if (typeof config.apiKey !== 'string' && typeof config.token !== 'string') {
      throw new Error('Missing required `apiKey` or `token`. Type must be {string}');
    }

    if (typeof config.apiKey === 'string' && typeof config.token === 'string') {
      throw new Error('Both apiKey and token are present. Only one authentication method should be provided');
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
   * @returns {boolean} Whether analytics events are opted in or out
   */
  getAnalyticsOptIn () {
    return this._analyticsReporterService?.getAnalyticsOptIn();
  }

  /**
   * Opt in or out of analytic events
   * @param {boolean} analyticsEventsEnabled
   */
  setAnalyticsOptIn (analyticsEventsEnabled) {
    this._analyticsReporterService.setAnalyticsOptIn(analyticsEventsEnabled);
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
    this.core.storage.set(
      StorageKeys.SESSIONS_OPT_IN, { value: optIn, setDynamically: true });
  }

  /**
   * Sets a search query on initialization for vertical searchers that have a
   * defaultInitialSearch provided, if the user hasn't already provided their
   * own via URL param. A default initial search should not be persisted in the URL,
   * so we do a regular set instead of a setWithPersist here.
   *
   * @param {SearchConfig} searchConfig
   * @private
   */
  _setDefaultInitialSearch (searchConfig) {
    if (searchConfig.defaultInitialSearch == null) {
      return;
    }
    const prepopulatedQuery = this.core.storage.get(StorageKeys.QUERY);
    if (prepopulatedQuery != null) {
      return;
    }
    this.core.storage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.INITIALIZE);
    this.core.storage.set(StorageKeys.QUERY, searchConfig.defaultInitialSearch);
  }

  /**
   * Sets the geolocation tag in storage, overriding other inputs. Do not use in conjunction
   * with other components that will set the geolocation internally.
   * @param {number} lat
   * @param {number} long
   */
  setGeolocation (lat, lng) {
    this.core.storage.set(StorageKeys.GEOLOCATION, {
      lat, lng, radius: 0
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

    this.core.storage.set(StorageKeys.API_CONTEXT, contextString);
  }

  /**
   * Gets the locale that ANSWERS was initialized to
   *
   * @returns {string}
   */
  _getInitLocale () {
    return this.core.storage.get(StorageKeys.LOCALE);
  }

  /**
   * A promise that resolves when ponyfillCssVariables resolves,
   * or resolves immediately if ponyfill is disabled
   * @param {boolean} option to opt out of the css variables ponyfill
   * @return {Promise} resolves after ponyfillCssVariables, or immediately if disabled
   */
  _handlePonyfillCssVariables (ponyfillDisabled) {
    if (ponyfillDisabled) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      this.ponyfillCssVariables({
        onFinally: () => {
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

  /**
   * Parses a value from persistent storage, which stores strings,
   * into the shape the SDK expects.
   * TODO(SLAP-1111): Move this into a dedicated file/class.
   *
   * @param {string} key
   * @param {string} value
   * @returns {string|number|Filter}
   */
  _parsePersistentStorageValue (key, value) {
    switch (key) {
      case StorageKeys.PERSISTED_FILTER:
        return Filter.from(JSON.parse(value));
      case StorageKeys.PERSISTED_LOCATION_RADIUS:
        return parseFloat(value);
      case StorageKeys.PERSISTED_FACETS:
      case StorageKeys.SORT_BYS:
        return JSON.parse(value);
      default:
        return value;
    }
  }

  setVisitor (visitor) {
    if (visitor.id) {
      this._analyticsReporterService?.setVisitor(visitor);
      this.core.init({ visitor: visitor });
    } else {
      console.error(`Invalid visitor. Visitor was not set because "${JSON.stringify(visitor)}" does not have an id.`);
    }
  }
}

/**
 * @param {Object} config
 * @param {Storage} storage
 * @returns {Services}
 */
function getServices (config, storage) {
  return {
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

const ANSWERS = new AnswersSearchBar();
export default ANSWERS;
