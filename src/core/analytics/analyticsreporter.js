/** @module AnalyticsReporter */

import AnalyticsEvent from './analyticsevent';
import { AnswersAnalyticsError } from '../errors/errors';
import { ANALYTICS_BASE_URL } from '../constants';
import StorageKeys from '../storage/storagekeys';
import HttpRequester from '../http/httprequester';

/**
 * Class for reporting analytics events to the server
 */
export default class AnalyticsReporter {
  constructor (core, answersKey, businessId, globalOptions = {}) {
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
    this._globalOptions = Object.assign({}, globalOptions, { answersKey });

    // listen to query id updates
    core.storage.on('update', StorageKeys.QUERY_ID, id => this.setQueryId(id));
  }

  setQueryId (queryId) {
    this._globalOptions.queryId = queryId;
  }

  report (event) {
    if (!(event instanceof AnalyticsEvent)) {
      throw new AnswersAnalyticsError('Tried to send invalid analytics event', event);
    }

    event.addOptions(this._globalOptions);

    return HttpRequester().beacon(
      `${ANALYTICS_BASE_URL}/realtimeanalytics/data/answers/${this._businessId}`,
      {
        'data': event.toApiEvent()
      }
    );
  }
}
