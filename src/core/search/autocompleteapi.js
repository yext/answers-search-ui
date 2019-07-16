/** @module AutoCompleteApi */

import ApiRequest from '../http/apirequest';
import AutoCompleteDataTransformer from './autocompletedatatransformer';
import { AnswersBasicError, AnswersEndpointError } from '../errors/errors';

/**
 * AutoCompleteApi exposes an interface for network related matters
 * for all the autocomplete endpoints.
 */
export default class AutoCompleteApi {
  constructor (opts = {}) {
    /**
     * The API Key to use for the request
     * @type {string}
     * @private
     */
    if (!opts.apiKey) {
      throw new AnswersBasicError('Api Key is required', 'AutoComplete');
    }
    this._apiKey = opts.apiKey;

    /**
     * The Answers Key to use for the request
     * @type {string}
     * @private
     */
    if (!opts.answersKey) {
      throw new AnswersBasicError('Answers Key is required', 'AutoComplete');
    }
    this._answersKey = opts.answersKey;

    /**
     * The version of the API to make a request to
     * @type {string}
     * @private
     */
    this._version = opts.version || 20190101 || 20190301;

    /**
     * The locale to use for the request
     * @type {string}
     * @private
     */
    if (!opts.locale) {
      throw new AnswersBasicError('Locale is required', 'AutoComplete');
    }
    this._locale = opts.locale;
  }

  /**
   * Autocomplete filters
   * @param {string} input The input to use for auto complete
   */
  queryFilter (input, verticalKey, barKey) {
    let request = new ApiRequest({
      endpoint: '/v2/accounts/me/answers/filtersearch',
      apiKey: this._apiKey,
      version: this._version,
      params: {
        'input': input,
        'answersKey': this._answersKey,
        'experienceKey': verticalKey,
        'inputKey': barKey,
        'locale': this._locale
      }
    });

    return request.get()
      .then(response => response.json())
      .then(response => AutoCompleteDataTransformer.filter(response.response, barKey))
      .catch(error => {
        throw new AnswersEndpointError('Filter search request failed', 'AutoComplete', error);
      });
  }

  queryVertical (input, verticalKey, barKey) {
    let request = new ApiRequest({
      endpoint: '/v2/accounts/me/answers/autocomplete',
      apiKey: this._apiKey,
      version: this._version,
      params: {
        'input': input,
        'answersKey': this._answersKey,
        'experienceKey': verticalKey,
        'barKey': barKey,
        'locale': this._locale
      }
    });

    return request.get()
      .then(response => response.json())
      .then(response => AutoCompleteDataTransformer.vertical(response.response, request._params.barKey))
      .catch(error => {
        throw new AnswersEndpointError('Vertical search request failed', 'AutoComplete', error);
      });
  }

  queryUniversal (queryString) {
    let request = new ApiRequest({
      endpoint: '/v2/accounts/me/answers/autocomplete',
      apiKey: this._apiKey,
      version: this._version,
      params: {
        'input': queryString,
        'answersKey': this._answersKey,
        'locale': this._locale
      }
    });

    return request.get(queryString)
      .then(response => response.json())
      .then(response => AutoCompleteDataTransformer.universal(response.response))
      .catch(error => {
        throw new AnswersEndpointError('Universal search request failed', 'AutoComplete', error);
      });
  }
}
