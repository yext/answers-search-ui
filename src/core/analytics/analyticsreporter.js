/** @module AnalyticsReporter */

import AnalyticsEvent from './analyticsevent';
import { PRODUCTION } from '../constants';
import HttpRequester from '../http/httprequester';
import { getAnalyticsUrl } from '../utils/urlutils';

/** @typedef {import('../services/analyticsreporterservice').default} AnalyticsReporterService */

/**
 * Class for reporting analytics events to the server via HTTP
 *
 * @implements {AnalyticsReporterService}
 */
export default class AnalyticsReporter {
  constructor (
    experienceKey,
    experienceVersion,
    businessId,
    analyticsEventsEnabled,
    globalOptions = {},
    environment = PRODUCTION) {
    /**
     * The internal business identifier used for reporting
     * @type {number}
     */
    this._businessId = businessId;

    /**
     * Boolean indicating if the Answers Search UI submits analytic click events
     * @type {boolean}
     */
    this._analyticsEventsEnabled = analyticsEventsEnabled;

    /**
     * Options to include with every analytic event reported to the server
     * @type {object}
     * @private
     */
    this._globalOptions = Object.assign({}, globalOptions, { experienceKey });

    /**
     * The environment of the Answers experience
     * @type {string}
     * @private
     */
    this._environment = environment;

    /**
     * Base URL for the analytics API
     * @type {string}
     * @private
     */
    this._baseUrl = getAnalyticsUrl(this._environment);

    /**
     * Boolean indicating if opted in or out of conversion tracking
     * @type {boolean}
     * @private
     */
    this._conversionTrackingEnabled = false;

    if (experienceVersion) {
      this._globalOptions.experienceVersion = experienceVersion;
    }
  }

  getQueryId () {
    return this._globalOptions.queryId;
  }

  setQueryId (queryId) {
    this._globalOptions.queryId = queryId;
  }

  setVisitor (visitor) {
    this._globalOptions.visitor = visitor;
  }

  /**
   * @returns {boolean} Whether analytics events are opted in or out
   */
  getAnalyticsOptIn () {
    return this._analyticsEventsEnabled;
  }

  /**
   * Opt in or out of analytics click events
   * @param {boolean} analyticsEventsEnabled
   */
  setAnalyticsOptIn (analyticsEventsEnabled) {
    this._analyticsEventsEnabled = analyticsEventsEnabled;
  }

  /**
   * Reports an analytics event
   * @param {AnalyticsEvent} event The event to send
   * @param {Object} options Analytics reporting otpions
   * @param {boolean} options.includeQueryId Whether or not to include the queryId with the request
   * @returns {boolean} true if the request was successful
   */
  report (event, { includeQueryId = true } = {}) {
    if (!this._analyticsEventsEnabled) {
      return false;
    }
    let cookieData = {};
    if (this._conversionTrackingEnabled && typeof ytag === 'function') {
      ytag('optin', true);
      cookieData = ytag('yfpc', null);
    } else if (this._conversionTrackingEnabled) {
      console.error('Conversion Tracking is enabled without supplying ytag. Analytics event sent without Conversion Tracking info.');
    }

    if (!(event instanceof AnalyticsEvent)) {
      console.error('Tried to send invalid analytics event', event);
      return false;
    }

    if (includeQueryId) {
      event.addOptions(this._globalOptions);
    } else {
      event.addOptions({
        ...this._globalOptions,
        queryId: undefined
      });
    }

    return new HttpRequester().beacon(
      `${this._baseUrl}/realtimeanalytics/data/answers/${this._businessId}`,
      { data: event.toApiEvent(), ...cookieData }
    );
  }

  /** @inheritdoc */
  setConversionTrackingEnabled (isEnabled) {
    this._conversionTrackingEnabled = isEnabled;
    this._baseUrl = getAnalyticsUrl(this._environment, isEnabled);
  }
}
