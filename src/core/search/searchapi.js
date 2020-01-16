/** @module SearchApi */

/** @typedef {import('./searchservice').default} SearchService */

import ApiRequest from '../http/apirequest';
import { AnswersBasicError, AnswersCoreError } from '../errors/errors';

/**
 * SearchApi is the API for doing various types of search
 * over the network (e.g. vertical or universal)
 *
 * @implements {SearchService}
 */
export default class SearchApi {
  constructor (config = {}) {
    /**
     * A local reference to the API Key to use for the request
     * @type {string}
     * @private
     */
    if (!config.apiKey) {
      throw new AnswersBasicError('Api Key is required', 'Search');
    }
    this._apiKey = config.apiKey;

    /**
     * A local reference to the Answers Key to use for the request
     * @type {string}
     * @private
     */
    if (!config.experienceKey) {
      throw new AnswersBasicError('Answers Key is required', 'Search');
    }
    this._experienceKey = config.experienceKey;

    /**
     * The answers config version to use for all requests
     * @type {string}
     * @private
     */
    this._experienceVersion = config.experienceVersion;

    /**
     * The version of the API to make a request to
     * @type {string}
     * @private
     */
    this._version = config.version || 20190101 || 20190301;

    /**
     * A local reference to the locale to use for the request
     * @type {string}
     * @private
     */
    if (!config.locale) {
      throw new AnswersBasicError('Locale is required', 'Search');
    }
    this._locale = config.locale;
  }

  /** @inheritdoc */
  verticalSearch (verticalKey, { input, filter, facetFilter, limit, offset, id, geolocation, isDynamicFiltersEnabled, skipSpellCheck, queryTrigger, sessionTrackingEnabled, sortBys }) {
    if (limit > 50) {
      throw new AnswersCoreError('Provided search limit unsupported', 'SearchApi');
    }

    let request = new ApiRequest({
      endpoint: '/v2/accounts/me/answers/vertical/query',
      apiKey: this._apiKey,
      version: this._version,
      params: {
        'input': input,
        'experienceKey': this._experienceKey,
        'version': this._experienceVersion,
        'filters': filter,
        'facetFilters': facetFilter,
        'verticalKey': verticalKey,
        'limit': limit,
        'offset': offset,
        'location': geolocation ? `${geolocation.lat},${geolocation.lng}` : null,
        'radius': geolocation ? geolocation.radius : null,
        'queryId': id,
        'retrieveFacets': isDynamicFiltersEnabled,
        'locale': this._locale,
        'skipSpellCheck': skipSpellCheck,
        'queryTrigger': queryTrigger,
        'sessionTrackingEnabled': sessionTrackingEnabled,
        'sortBys': sortBys
      }
    });

    return request.get()
      .then(response => response.json());
  }

  /** @inheritdoc */
  universalSearch (queryString, params) {
    let request = new ApiRequest({
      endpoint: '/v2/accounts/me/answers/query',
      apiKey: this._apiKey,
      version: this._version,
      params: {
        'input': queryString,
        'experienceKey': this._experienceKey,
        'location': params.geolocation ? `${params.geolocation.lat},${params.geolocation.lng}` : null,
        'radius': params.geolocation ? params.geolocation.radius : null,
        'version': this._experienceVersion,
        'locale': this._locale,
        'skipSpellCheck': params.skipSpellCheck,
        'queryTrigger': params.queryTrigger,
        'sessionTrackingEnabled': params.sessionTrackingEnabled
      }
    });

    return request.get()
      .then(response => response.json());
  }
}
