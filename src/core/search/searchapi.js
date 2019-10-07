/** @module SearchApi */

import ApiRequest from '../http/apirequest';
import { AnswersBasicError, AnswersCoreError } from '../errors/errors';

/**
 * SearchApi is the API for doing various types of search
 * over the network (e.g. vertical or universal)
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
    if (!config.answersKey) {
      throw new AnswersBasicError('Answers Key is required', 'Search');
    }
    this._answersKey = config.answersKey;

    /**
     * The answers config version to use for all requests
     * @type {string}
     * @private
     */
    this._configVersion = config.configVersion;

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

  /**
   * Search in the context of a vertical
   * @param {string} verticalKey vertical ID for the search
   * @param {object} query The query details
   * @param {string} query.input The input to search for
   * @param {string} query.filter The filter to use in the search
   * @param {string} query.facetFilter The facet filter to use in the search
   * @param {number} query.limit The max number of results to include, max of 50
   * @param {number} query.offset The results offset, for fetching more results of the same query
   * @param {string} query.id The query ID to use. If paging within a query, the same ID should be used
   * @param {Object} query.geolocation The user's geolocation position used to bias the results
   * @param {boolean} query.isDynamicFiltersEnabled If true, asks the server to return dynamic filters
   * @param {string} query.skipSpellCheck The boolean as string to indicate if it should skip spell checking
   * @param {string} query.queryTrigger The source that triggers query such as suggest
   */
  verticalSearch (verticalKey, { input, filter, facetFilter, limit, offset, id, geolocation, isDynamicFiltersEnabled, skipSpellCheck, queryTrigger }) {
    if (limit > 50) {
      throw new AnswersCoreError('Provided search limit unsupported', 'SearchApi');
    }

    let request = new ApiRequest({
      endpoint: '/v2/accounts/me/answers/vertical/query',
      apiKey: this._apiKey,
      version: this._version,
      params: {
        'input': input,
        'answersKey': this._answersKey,
        'version': this._configVersion,
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
        'queryTrigger': queryTrigger
      }
    });

    return request.get()
      .then(response => response.json());
  }

  /**
   * Search across all verticals
   * @param {string} queryString The input to search for
   * @param {Object} params.geolocation the user's geolocation position used to bias the results
   * @param {string} params.skipSpellCheck The boolean as string to indicate if it should skip spell checking
   * @param {string} params.queryTrigger The source that triggers query such as suggest
   */
  universalSearch (queryString, params) {
    let request = new ApiRequest({
      endpoint: '/v2/accounts/me/answers/query',
      apiKey: this._apiKey,
      version: this._version,
      params: {
        'input': queryString,
        'answersKey': this._answersKey,
        'location': params.geolocation ? `${params.geolocation.lat},${params.geolocation.lng}` : null,
        'radius': params.geolocation ? params.geolocation.radius : null,
        'version': this._configVersion,
        'locale': this._locale,
        'skipSpellCheck': params.skipSpellCheck,
        'queryTrigger': params.queryTrigger
      }
    });

    return request.get()
      .then(response => response.json());
  }
}
