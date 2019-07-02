import ApiRequest from '../http/apirequest';
import AnalyticsEvent from './analyticsevent';
import { AnswersAnalyticsError } from '../errors/errors';

/**
 * Class for reporting analytics events to the server
 */
export default class AnalyticsReporter {
  constructor (apiKey, answersKey) {
    this._apiKey = apiKey;
    this._answersKey = answersKey;

    let params = new URL(window.location.toString()).searchParams;
    this._isLocal = params.get('local');

    this._businessIdUrl = this._isLocal ? `http://${window.location.hostname}` : 'https://liveapi.yext.com';
    this._analyticsUrl = this._isLocal ? `http://${window.location.hostname}` : 'https://realtimeanalytics.yext.com';

    // TODO(jdelerme): Temporary workaround for getting internal business ID for the analytics endpoint
    // To be removed when the endpoint is moved behind liveapi
    const businessIdReq = new ApiRequest({
      baseUrl: this._businessIdUrl,
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
      baseUrl: this._analyticsUrl,
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
