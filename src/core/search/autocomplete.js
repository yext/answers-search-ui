import ApiRequest from '../http/apirequest';
import AutoCompleteDataTransformer from './autocompletedatatransformer';

/**
 * A wrapper around the AutoComplete {ApiRequest} endpoints
 */
export default class AutoComplete {
  constructor (opts = {}) {
    let params = new URL(window.location.toString()).searchParams;
    let isLocal = params.get('local');

    /**
     * The baseUrl to use for making a request
     * @type {string}
     * @private
     */
    this._baseUrl = isLocal ? 'http://' + window.location.hostname : 'https://liveapi.yext.com';

    /**
     * The API Key to use for the request
     * @type {string}
     * @private
     */
    this._apiKey = opts.apiKey || null;

    /**
     * The Answers Key to use for the request
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

  /**
   * query supports both UniversalSearch and VerticalSearch auto completing.
   * Providing an experienceKey and barKey will create a vertical search auto complete request.
   * @param {string} input The input to use for auto complete
   * @param {string} experienceKey The experience key to use for a vertical auto complete request
   * @param {string} barKey The barKey to use for a vertical search auto complete request
   */
  query (input, experienceKey, barKey) {
    if (experienceKey || barKey) {
      return this._queryVertical(input, experienceKey, barKey);
    }

    return this._queryUniversal(input);
  }

  /**
   * Autocomplete filters
   * @param {string} input The input to use for auto complete
   */
  queryFilter (input, experienceKey, barKey) {
    let request = new ApiRequest({
      baseUrl: this._baseUrl,
      endpoint: '/v2/accounts/me/answers/filtersearch',
      apiKey: this._apiKey,
      version: this._version,
      params: {
        'input': input,
        'answersKey': this._answersKey,
        'experiencekey': experienceKey,
        'inputKey': barKey
      }
    });

    return request.get()
      .then(response => response.json())
      .then(response => AutoCompleteDataTransformer.filter(response.response, barKey))
      .catch(error => console.error(error));
  }

  _queryVertical (input, experienceKey, barKey) {
    let request = new ApiRequest({
      baseUrl: this._baseUrl,
      endpoint: '/v2/accounts/me/entities/autocomplete',
      apiKey: this._apiKey,
      version: this._version,
      params: {
        'input': input,
        'experienceKey': experienceKey,
        'barKey': barKey
      }
    });

    return request.get()
      .then(response => response.json())
      .then(response => AutoCompleteDataTransformer.vertical(response.response, request._params.barKey))
      .catch(error => console.error(error));
  }

  _queryUniversal (queryString) {
    let request = new ApiRequest({
      baseUrl: this._baseUrl,
      endpoint: '/v2/accounts/me/answers/autocomplete',
      apiKey: this._apiKey,
      version: this._version,
      params: {
        'input': queryString,
        'answersKey': this._answersKey
      }
    });

    return request.get(queryString)
      .then(response => response.json())
      .then(response => AutoCompleteDataTransformer.universal(response.response));
  }
}
