/** @module AnalyticsReporter */

import ApiRequest from '../http/apirequest';
import AnalyticsEvent from './analyticsevent';
import { AnswersAnalyticsError } from '../errors/errors';
import { ANALYTICS_BASE_URL } from '../constants';

/**
 * Class for reporting analytics events to the server
 */
export default class AnalyticsReporter {
  constructor (apiKey, answersKey, businessId, globalOptions) {
    this._apiKey = apiKey;
    this._businessId = businessId;
    this._globalOptions = globalOptions || {};
    this._globalOptions.answersKey = answersKey;
  }

  report (event) {
    if (!(event instanceof AnalyticsEvent)) {
      throw new AnswersAnalyticsError('Tried to send invalid analytics event', event);
    }

    event.addOptions(this._globalOptions);

    const request = new ApiRequest({
      baseUrl: ANALYTICS_BASE_URL,
      endpoint: `/realtimeanalytics/data/answers/${this._businessId}`,
      apiKey: this._apiKey,
      version: 20190301,
      params: {
        'data': event.toApiEvent()
      }
    });

    return request.post()
      .catch(console.err);
  }
}
