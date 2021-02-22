/** @module AnswersConfig */

import { LOCALE, PRODUCTION, QUERY_SOURCE, SANDBOX } from '../constants';
import SearchConfig from '../models/searchconfig';
import VerticalPagesConfig from '../models/verticalpagesconfig';

const sandboxPrefix = `${SANDBOX}-`;
const DEFAULTS = {
  environment: PRODUCTION,
  onReady: function () {},
  useTemplates: true,
  locale: LOCALE,
  experienceVersion: 'PRODUCTION',
  debug: false,
  sessionTrackingEnabled: true,
  onStateChange: function () {},
  onVerticalSearch: function () {},
  onUniversalSearch: function () {},
  disableCssVariablesPonyfill: false,
  querySource: QUERY_SOURCE
};

export default class AnswersConfig {
  constructor (config) {
    const parsedConfig = this.parseConfig(config);

    /**
     * The internal Yext environment
     * @type {string}
     * @private
     */
    this._environment = parsedConfig.environment;

    /**
     * Required, the Yext Answers API Key
     * @private
     * @type {string}
     */
    this._apiKey = parsedConfig.apiKey;

    /**
     * Required, the key used for your Answers Experience
     * @type {string}
     */
    this.experienceKey = parsedConfig.experienceKey;

    /**
     *  Optional, initialize components here, invoked when the Answers component library is loaded/ready.
     *  If components are not added here, they can also be added when the init promise resolves
     * @type {function()}
     */
    this.onReady = parsedConfig.onReady;

    /**
     * Optional*, Yext businessId, *required to send analytics events
     * @type {number|string|*}
     */
    this.businessId = parsedConfig.businessId;

    /**
     * Optional, if false, the library will not fetch pre-made templates. Only use change this to false if you provide a
     *  template bundle in the `templateBundle` config option or implement custom renders for every component
     * @type {boolean}
     */
    this.useTemplates = parsedConfig.useTemplates;

    /**
     * Optional, additional templates to register with the renderer
     * @type {Object}
     */
    this.templateBundle = parsedConfig.templateBundle;

    /**
     * Optional, provide configuration for each vertical that is shared across components
     * @type {VerticalPagesConfig}
     */
    this.verticalPages = new VerticalPagesConfig(parsedConfig.verticalPages);

    /**
     * Optional, search specific settings
     * @type {SearchConfig}
     */
    this.search = new SearchConfig(parsedConfig.search);

    /**
     * Optional, vertical no results settings. See Vertical No Results
     * @type {Object}
     */
    this.noResults = parsedConfig.noResults;

    /**
     * Optional, the locale will affect how queries are interpreted and the results returned. Defaults to 'en'
     * @type {string}
     */
    this.locale = parsedConfig.locale;

    /**
     * Optional, the Answers Experience version to use for api requests
     * @type {string}
     */
    this.experienceVersion = parsedConfig.experienceVersion;

    /**
     * Optional, prints full Answers error details when set to \`true\`. Defaults to false.
     * @type {boolean}
     */
    this.debug = parsedConfig.debug;

    /**
     * Optional, If true, the search session is tracked. If false, there is no tracking. Defaults to true.
     * @type {boolean}
     */
    this.sessionTrackingEnabled = parsedConfig.sessionTrackingEnabled;

    /**
     * Optional, invoked when the state of any component changes
     * @type {function()}
     */
    this.onStateChange = parsedConfig.onStateChange;

    /**
     * Optional, analytics callback after a vertical search, see onVerticalSearch Configuration for additional details
     * @type {function()}
     */
    this.onVerticalSearch = parsedConfig.onVerticalSearch;

    /**
     * Optional, analytics callback after a universal search, see onUniversalSearch Configuration for additional details
     * @type {function()}
     */
    this.onUniversalSearch = parsedConfig.onUniversalSearch;

    /**
     * Optional, opt-out of automatic css variable resolution on init for legacy browsers
     * @type {boolean}
     */
    this.disableCssVariablesPonyfill = parsedConfig.disableCssVariablesPonyfill;

    /**
     * Optional, the analytics key describing the Answers integration type. Accepts 'STANDARD' or 'OVERLAY', defaults to 'STANDARD'
     * @type {string}
     */
    this.querySource = parsedConfig.querySource;

    this.mock = parsedConfig.mock;
    this.analyticsOptions = parsedConfig.analyticsOptions;
    this.fieldFormatters = parsedConfig.fieldFormatters;

    this.validate();
    Object.freeze(this);
  }

  /**
   * Validates the Answers config object to ensure things like api key and experience key are
   * properly set.
   */
  validate () {
    if (typeof this._apiKey !== 'string') {
      throw new Error('Missing required `apiKey`. Type must be {string}');
    }

    if (typeof this.onStateChange !== 'function') {
      throw new Error('onStateChange must be a function. Current type is: ' + typeof this.onStateChange);
    }

    if (typeof this.experienceKey !== 'string') {
      throw new Error('Missing required `experienceKey`. Type must be {string}');
    }

    if (typeof this.onVerticalSearch !== 'function') {
      throw new Error('onVerticalSearch must be a function. Current type is: ' + typeof this.onVerticalSearch);
    }

    if (typeof this.onUniversalSearch !== 'function') {
      throw new Error('onUniversalSearch must be a function. Current type is: ' + typeof this.onUniversalSearch);
    }
  }

  /**
   * The Yext Answers API Key. If the apiKey contains the sandbox prefix, then it is removed leaving only the API key.
   * @returns {string}
   */
  get apiKey () {
    return this._apiKey.replace(sandboxPrefix, '');
  }

  /**
   * The internal Yext Environment.
   *  Defaults to Production
   *  If the apiKey contains the sandbox prefix, then the environment returned is Sandbox.
   * @returns {string}
   */
  get environment () {
    if (this._apiKey.includes(sandboxPrefix)) {
      return SANDBOX;
    } else {
      return this._environment;
    }
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
}
