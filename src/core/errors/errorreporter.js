import { AnswersBaseError } from './errors';

import ApiRequest from '../http/apirequest';
import { LIB_VERSION } from '../constants';

export default class ErrorReporter {
  constructor(apiKey, answersKey) {
    this.apiKey = apiKey;
    this.answersKey = answersKey;
  }

  report(err) {
    if (!(err instanceof AnswersBaseError) || err.reported) {
      return;
    }

    err.reported = true;

    const request = new ApiRequest({
      baseUrl: this._isDev ? 'http://' + "localhost" : 'https://liveapi.yext.com',
      endpoint: '/v2/accounts/me/answers/errors',
      apiKey: this.apiKey,
      version: 20190301,
      params: {
        'error': err.toJson(),
        'libVersion': LIB_VERSION,
        'answersKey': this.answersKey,
      },
    });

    request.get()
      .catch(console.err);

    return err;
  }
}
