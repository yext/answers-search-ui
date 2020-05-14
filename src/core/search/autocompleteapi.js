/** @module AutoCompleteApi */

import ApiRequest from '../http/apirequest';
import AutoCompleteDataTransformer from './autocompletedatatransformer';
import { AnswersBasicError, AnswersEndpointError } from '../errors/errors';
import { getCachedLiveApiUrl } from '../utils/urlutils';

/** @typedef {import('./autocompleteservice').default} AutoCompleteService */

/**
 * AutoCompleteApi exposes an interface for network related matters
 * for all the autocomplete endpoints.
 *
 * @implements {AutoCompleteService}
 */
export default class AutoCompleteApi {
  constructor (config = {}, globalStorage) {
    /**
     * The API Key to use for the request
     * @type {string}
     * @private
     */
    if (!config.apiKey) {
      throw new AnswersBasicError('Api Key is required', 'AutoComplete');
    }
    this._apiKey = config.apiKey;

    /**
     * The Answers Key to use for the request
     * @type {string}
     * @private
     */
    if (!config.experienceKey) {
      throw new AnswersBasicError('Answers Key is required', 'AutoComplete');
    }
    this._experienceKey = config.experienceKey;

    /**
     * The version of the API to make a request to
     * @type {string}
     * @private
     */
    this._version = config.version || 20190101 || 20190301;

    /**
     * The answers config version to use for all requests
     * @type {string}
     * @private
     */
    this._experienceVersion = config.experienceVersion;

    /**
     * The locale to use for the request
     * @type {string}
     * @private
     */
    if (!config.locale) {
      throw new AnswersBasicError('Locale is required', 'AutoComplete');
    }
    this._locale = config.locale;

    /**
     * The global storage instance of the experience
     * @type {GlobalStorage}
     * @private
     */
    if (!globalStorage) {
      throw new AnswersBasicError('Global storage is required', 'AutoComplete');
    }
    this._globalStorage = globalStorage;

    /**
     * The environment of the Answers experience
     * @type {string}
     * @private
     */
    this._environment = config.environment;

    /**
     * The base url for the autocomplete API request
     * @type {string}
     * @private
     */
    this._baseUrl = getCachedLiveApiUrl(this._environment);
  }

  /** @inheritdoc */
  queryFilter (input, config) {
    const requestConfig = {
      endpoint: '/v2/accounts/me/answers/filtersearch',
      apiKey: this._apiKey,
      version: this._version,
      environment: this._environment,
      params: {
        'input': input,
        'experienceKey': this._experienceKey,
        'version': this._experienceVersion,
        'verticalKey': config.verticalKey,
        'locale': this._locale,
        'search_parameters': JSON.stringify(config.searchParameters)
      }
    };
    let request = new ApiRequest(requestConfig, this._globalStorage);

    return request.get()
      .then(response => response.json())
      .then(response => AutoCompleteDataTransformer.filter(response.response))
      .catch(error => {
        throw new AnswersEndpointError('Filter search request failed', 'AutoComplete', error);
      });
  }

  /** @inheritdoc */
  queryVertical (input, verticalKey) {
    const requestConfig = {
      endpoint: '/v2/accounts/me/answers/vertical/autocomplete',
      apiKey: this._apiKey,
      version: this._version,
      environment: this._environment,
      baseUrl: this._baseUrl,
      params: {
        'input': input,
        'experienceKey': this._experienceKey,
        'version': this._experienceVersion,
        'verticalKey': verticalKey,
        'locale': this._locale
      }
    };
    let request = new ApiRequest(requestConfig, this._globalStorage);

    return request.get()
      .then(response => response.json())
      .then(response => AutoCompleteDataTransformer.vertical(response.response))
      .catch(error => {
        throw new AnswersEndpointError('Vertical search request failed', 'AutoComplete', error);
      });
  }

  /** @inheritdoc */
  queryUniversal (queryString) {
    const requestConfig = {
      endpoint: '/v2/accounts/me/answers/autocomplete',
      apiKey: this._apiKey,
      version: this._version,
      environment: this._environment,
      baseUrl: this._baseUrl,
      params: {
        'input': queryString,
        'experienceKey': this._experienceKey,
        'version': this._experienceVersion,
        'locale': this._locale
      }
    };
    let request = new ApiRequest(requestConfig, this._globalStorage);

    return request.get()
      .then(response => response.json())
      .then(response => AutoCompleteDataTransformer.universal(response.response))
      .catch(error => {
        throw new AnswersEndpointError('Universal search request failed', 'AutoComplete', error);
      });
  }
}
