/** @module AnalyticsReporter */

import ApiRequest from '../http/apirequest';
import AnalyticsEvent from './analyticsevent';
import { AnswersAnalyticsError } from '../errors/errors';
import { ANALYTICS_BASE_URL } from '../constants';

/**
 * Class for reporting analytics events to the server
 */
export default class AnalyticsReporter {
  constructor (apiKey, answersKey) {
    this._apiKey = apiKey;
    this._answersKey = answersKey;

    // TODO(jdelerme): Temporary workaround for getting internal business ID for the analytics endpoint
    // To be removed when the endpoint is moved behind liveapi
    const businessIdReq = new ApiRequest({
      endpoint: '/v2/accounts/me/answers/query',
      apiKey: this._apiKey,
      version: 20190301,
      params: {
        'input': '',
        'answersKey': this._answersKey
      }
    });

    businessIdReq.get().then(r => r.json()).then(d => {
      this._businessId = d.response.businessId;
    });
  }

  report (event) {
    if (!(event instanceof AnalyticsEvent)) {
      throw new AnswersAnalyticsError('Tried to send invalid analytics event', event);
    }

    event.addOptions({ answers_key: this._answersKey });

    const request = new ApiRequest({
      baseUrl: ANALYTICS_BASE_URL,
      endpoint: `/realtimeanalytics/data/answers/${this._businessId}`,
      apiKey: this._apiKey,
      version: 20190301,
      params: {
        'data': event.toApiEvent()
      }
    });

    request.post()
      .catch(console.err);
  }
}
