/** @module AutoCompleteApi */

import ApiRequest from '../http/apirequest';
import AutoCompleteDataTransformer from './autocompletedatatransformer';
import { AnswersEndpointError } from '../errors/errors';
import { getCachedLiveApiUrl } from '../utils/urlutils';

export default class AutoCompleteApi {
  constructor (config = {}) {
    this._apiKey = config.apiKey;
    this._experienceKey = config.experienceKey;
    this._version = config.version || 20190101;
    this._experienceVersion = config.experienceVersion;
    this._locale = config.locale;
    this._environment = config.environment;
    this._baseUrl = getCachedLiveApiUrl(this._environment);
    this._sessionTrackingEnabled = config.sessionTrackingEnabled;
  }

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
      },
      sessionTrackingEnabled: this._sessionTrackingEnabled
    };
    let request = new ApiRequest(requestConfig);

    return request.get()
      .then(response => response.json())
      .then(response => AutoCompleteDataTransformer.universal(response.response))
      .catch(error => {
        throw new AnswersEndpointError('Universal search request failed', 'AutoComplete', error);
      });
  }
}
