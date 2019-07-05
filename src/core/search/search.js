/** @module Search */

import HttpRequester from '../http/httprequester';
import ApiRequest from '../http/apirequest';

export default class Search {
  constructor (opts = {}) {
    let params = new URL(window.location.toString()).searchParams;
    let isLocal = params.get('local');

    this._requester = new HttpRequester();

    /**
     * The baseUrl to use for making a request
     * @type {string}
     * @private
     */
    this._baseUrl = isLocal ? 'http://' + window.location.hostname : 'https://liveapi.yext.com';

    /**
     * A local reference to the API Key to use for the request
     * @type {string}
     * @private
     */
    this._apiKey = opts.apiKey || null;

    /**
     * A local reference to the Answers Key to use for the request
     * @type {string}
     * @private
     */
    this._answersKey = opts.answersKey || null;

    /**
     * The version of the API to make a request to
     * @type {string}
     * @private
     */
    this._version = opts.version || 20190101 || 20190301;
  }

  verticalQuery (queryString, verticalKey, filter) {
    let request = new ApiRequest({
      baseUrl: this._baseUrl,
      endpoint: '/v2/accounts/me/answers/vertical/query',
      apiKey: this._apiKey,
      version: this._version,
      params: {
        'input': queryString,
        'answersKey': this._answersKey,
        'filters': filter,
        'verticalKey': verticalKey
      }
    });

    return request.get()
      .then(response => response.json());
  }

  query (queryString) {
    let request = new ApiRequest({
      baseUrl: this._baseUrl,
      endpoint: '/v2/accounts/me/answers/query',
      apiKey: this._apiKey,
      version: this._version,
      params: {
        'input': queryString,
        'answersKey': this._answersKey
      }
    });

    return request.get()
      .then(response => response.json());
  }
}
