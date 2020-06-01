/** @module AnalyticsReporter */

import AnalyticsEvent from './analyticsevent';
import { AnswersAnalyticsError } from '../errors/errors';
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
    globalOptions = {},
    environment = PRODUCTION) {
    /**
     * The internal business identifier used for reporting
     * @type {number}
     */
    this._businessId = businessId;

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

  /** @inheritdoc */
  report (event) {
    let cookieData = {};
    if (this._conversionTrackingEnabled && typeof ytag === 'function') {
      ytag('optin', true);
      cookieData = ytag('yfpc', null);
    } else if (this._conversionTrackingEnabled) {
      throw new AnswersAnalyticsError('Tried to enable conversion tracking without including ytag');
    }

    if (!(event instanceof AnalyticsEvent)) {
      throw new AnswersAnalyticsError('Tried to send invalid analytics event', event);
    }

    event.addOptions(this._globalOptions);

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
