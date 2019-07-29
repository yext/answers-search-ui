/** @module AnalyticsReporter */

import ApiRequest from '../http/apirequest';
import AnalyticsEvent from './analyticsevent';
import { AnswersAnalyticsError } from '../errors/errors';
import { ANALYTICS_BASE_URL } from '../constants';

/**
 * Class for reporting analytics events to the server
 */
export default class AnalyticsReporter {
  constructor (apiKey, answersKey, businessId) {
    this._apiKey = apiKey;
    this._answersKey = answersKey;
    this._businessId = businessId;
  }

  report (event) {
    if (!(event instanceof AnalyticsEvent)) {
      throw new AnswersAnalyticsError('Tried to send invalid analytics event', event);
    }

    event.addOptions({ answersKey: this._answersKey });

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
