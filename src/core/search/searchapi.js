/** @module SearchApi */

import ApiRequest from '../http/apirequest';

/**
 * SearchApi is the API for doing various types of search
 * over the network (e.g. vertical or universal)
 */
export default class SearchApi {
  constructor (opts = {}) {
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

    /**
     * A local reference to the locale to use for the request
     * @type {string}
     * @private
     */
    this._locale = opts.locale || null;
  }

  verticalQuery (queryString, verticalKey, filter) {
    let request = new ApiRequest({
      endpoint: '/v2/accounts/me/answers/vertical/query',
      apiKey: this._apiKey,
      version: this._version,
      params: {
        'input': queryString,
        'answersKey': this._answersKey,
        'filters': filter,
        'verticalKey': verticalKey,
        'locale': this._locale
      }
    });

    return request.get()
      .then(response => response.json());
  }

  query (queryString) {
    let request = new ApiRequest({
      endpoint: '/v2/accounts/me/answers/query',
      apiKey: this._apiKey,
      version: this._version,
      params: {
        'input': queryString,
        'answersKey': this._answersKey,
        'locale': this._locale
      }
    });

    return request.get()
      .then(response => response.json());
  }
}
