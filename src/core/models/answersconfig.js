/** @module AnswersConfig */

import { LOCALE, PRODUCTION, QUERY_SOURCE, SANDBOX } from '../constants';
import SearchConfig from '../models/searchconfig';
import VerticalPagesConfig from '../models/verticalpagesconfig';
import { AnswersConfigError } from '../errors/errors';

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

/**
 * AnswersConfig is a model that is used that is used to turn a raw configuration into a data model that also storesVerticalPagesConfig}. It is used to initialze the Answers SDK
 */
class AnswersConfig {
  constructor (rawConfig) {
    /**
     * Required, the Yext Answers API Key
     * @type {string}
     * @private
     */
    this.apiKey = rawConfig.apiKey;

    /**
     * The internal Yext environment
     * @type {string}
     * @private
     */
    this.environment = rawConfig.environment;

    /**
     * Required, the key used for your Answers Experience
     * @type {string}
     */
    this.experienceKey = rawConfig.experienceKey;

    /**
     *  Optional, initialize components here, invoked when the Answers component library is loaded/ready.
     *  If components are not added here, they can also be added when the init promise resolves
     * @type {function()}
     */
    this.onReady = rawConfig.onReady;

    /**
     * Optional*, Yext businessId, *required to send analytics events
     * @type {number|string|*}
     */
    this.businessId = rawConfig.businessId;

    /**
     * Optional, if false, the library will not fetch pre-made templates. Only use change this to false if you provide a
     *  template bundle in the `templateBundle` config option or implement custom renders for every component
     * @type {boolean}
     */
    this.useTemplates = rawConfig.useTemplates;

    /**
     * Optional, additional templates to register with the renderer
     * @type {Object}
     */
    this.templateBundle = rawConfig.templateBundle;

    /**
     * Optional, provide configuration for each vertical that is shared across components
     * @type {VerticalPagesConfig}
     */
    this.verticalPages = new VerticalPagesConfig(rawConfig.verticalPages);

    /**
     * Optional, search specific settings
     * @type {SearchConfig}
     */
    this.search = new SearchConfig(rawConfig.search);

    /**
     * Optional, vertical no results settings. See Vertical No Results
     * @type {Object}
     */
    this.noResults = rawConfig.noResults;

    /**
     * Optional, the locale will affect how queries are interpreted and the results returned. Defaults to 'en'
     * @type {string}
     */
    this.locale = rawConfig.locale;

    /**
     * Optional, the Answers Experience version to use for api requests
     * @type {string}
     */
    this.experienceVersion = rawConfig.experienceVersion;

    /**
     * Optional, prints full Answers error details when set to \`true\`. Defaults to false.
     * @type {boolean}
     */
    this.debug = rawConfig.debug;

    /**
     * Optional, If true, the search session is tracked. If false, there is no tracking. Defaults to true.
     * @type {boolean}
     */
    this.sessionTrackingEnabled = rawConfig.sessionTrackingEnabled;

    /**
     * Optional, invoked when the state of any component changes
     * @type {function()}
     */
    this.onStateChange = rawConfig.onStateChange;

    /**
     * Optional, analytics callback after a vertical search, see onVerticalSearch Configuration for additional details
     * @type {function()}
     */
    this.onVerticalSearch = rawConfig.onVerticalSearch;

    /**
     * Optional, analytics callback after a universal search, see onUniversalSearch Configuration for additional details
     * @type {function()}
     */
    this.onUniversalSearch = rawConfig.onUniversalSearch;

    /**
     * Optional, opt-out of automatic css variable resolution on init for legacy browsers
     * @type {boolean}
     */
    this.disableCssVariablesPonyfill = rawConfig.disableCssVariablesPonyfill;

    /**
     * Optional, the analytics key describing the Answers integration type. Accepts 'STANDARD' or 'OVERLAY', defaults to 'STANDARD'
     * @type {string}
     */
    this.querySource = rawConfig.querySource;

    /**
     * Used to signify if mocked versions of services should be used
     * @type{boolean}
     */
    this.useMock = rawConfig.mock;

    /**
     * Global options to include with every analytic event reported to the server
     * @type {object}
     */
    this.analyticsOptions = rawConfig.analyticsOptions;

    /**
     * A map of field formatters used to format results, if present
     * @type {object}
     */
    this.fieldFormatters = rawConfig.fieldFormatters;

    Object.freeze(this);
  }
}

export default class AnswersConfigBuilder {
  setRawConfig (rawConfig) {
    this.rawConfig = rawConfig;
    return this;
  }

  /**
   * Validates and builds the Answers config object to ensure things like api key and experience key are
   * properly set. Any options in rawConfig not supplied by the user are given default values.
   */
  build () {
    if (this.rawConfig.apiKey === undefined || typeof this.rawConfig.apiKey !== 'string') {
      throw new AnswersConfigError('Missing required `apiKey`. Type must be {string}', 'AnswersConfig');
    }

    if (this.rawConfig.experienceKey === undefined || typeof this.rawConfig.experienceKey !== 'string') {
      throw new AnswersConfigError('Missing required `experienceKey`. Type must be {string}', 'AnswersConfig');
    }

    if (this.rawConfig.onStateChange && typeof this.rawConfig.onStateChange !== 'function') {
      throw new AnswersConfigError('onStateChange must be a function. Current type is: ' + typeof this.rawConfig.onStateChange, 'AnswersConfig');
    }

    if (this.rawConfig.onVerticalSearch && typeof this.rawConfig.onVerticalSearch !== 'function') {
      throw new AnswersConfigError('onVerticalSearch must be a function. Current type is: ' + typeof this.rawConfig.onVerticalSearch, 'AnswersConfig');
    }

    if (this.rawConfig.onUniversalSearch && typeof this.rawConfig.onUniversalSearch !== 'function') {
      throw new AnswersConfigError('onUniversalSearch must be a function. Current type is: ' + typeof this.rawConfig.onUniversalSearch, 'AnswersConfig');
    }

    if (this.rawConfig.sessionTrackingEnabled !== undefined && typeof this.rawConfig.sessionTrackingEnabled !== 'boolean') {
      throw new AnswersConfigError('sessionTrackingEnabled must be a boolean. Current type is: ' + typeof this.rawConfig.sessionTrackingEnabled, 'AnswersConfig');
    }

    // Apply default values to the rawConfig before creating the AnswersConfig object
    const rawConfig = Object.assign({}, DEFAULTS, this.rawConfig);

    // Update apiKey and environment values if sandboxPrefix is included
    if (rawConfig.apiKey.includes(sandboxPrefix)) {
      rawConfig.apiKey = rawConfig.apiKey.replace(sandboxPrefix, '');
      rawConfig.environment = SANDBOX;
    }
    return new AnswersConfig(rawConfig);
  }
}
