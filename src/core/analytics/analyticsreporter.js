/** @module AnalyticsReporter */

import AnalyticsEvent from './analyticsevent';
import { AnswersAnalyticsError } from '../errors/errors';
import { ANALYTICS_BASE_URL, ANALYTICS_BASE_URL_NO_COOKIE } from '../constants';
import StorageKeys from '../storage/storagekeys';
import HttpRequester from '../http/httprequester';

/**
 * Class for reporting analytics events to the server
 */
export default class AnalyticsReporter {
  constructor (core, experienceKey, experienceVersion, businessId, globalOptions = {}) {
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
     * Base URL for the analytics API
     * @type {string}
     * @private
     */
    this._baseUrl = ANALYTICS_BASE_URL_NO_COOKIE;

    if (experienceVersion) {
      this._globalOptions.experienceVersion = experienceVersion;
    }

    // listen to query id updates
    core.globalStorage.on('update', StorageKeys.QUERY_ID, id => this.setQueryId(id));
  }

  setQueryId (queryId) {
    this._globalOptions.queryId = queryId;
  }

  report (event) {
    if (!(event instanceof AnalyticsEvent)) {
      throw new AnswersAnalyticsError('Tried to send invalid analytics event', event);
    }

    event.addOptions(this._globalOptions);

    return new HttpRequester().beacon(
      `${this._baseUrl}/realtimeanalytics/data/answers/${this._businessId}`,
      {
        'data': event.toApiEvent()
      }
    );
  }

  setConversionTrackingEnabled (isEnabled) {
    this._baseUrl = isEnabled ? ANALYTICS_BASE_URL : ANALYTICS_BASE_URL_NO_COOKIE;
  }
}
