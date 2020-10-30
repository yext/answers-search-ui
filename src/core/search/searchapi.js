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

    /**
     * The environment of the Answers experience
     * @type {string}
     * @private
     */
    this._environment = config.environment;
  }

  /** @inheritdoc */
  verticalSearch (verticalKey, { input, filter, facetFilter, limit, offset, id, geolocation, isDynamicFiltersEnabled, skipSpellCheck, queryTrigger, sessionTrackingEnabled, sortBys, locationRadius, context, referrerPageUrl, querySource }) {
    if (limit > 50) {
      throw new AnswersCoreError('Provided search limit unsupported', 'SearchApi');
    }
    const requestConfig = {
      endpoint: '/v2/accounts/me/answers/vertical/query',
      apiKey: this._apiKey,
      version: this._version,
      environment: this._environment,
      params: {
        input: input,
        experienceKey: this._experienceKey,
        version: this._experienceVersion,
        filters: filter,
        facetFilters: facetFilter,
        verticalKey: verticalKey,
        limit: limit,
        offset: offset,
        location: geolocation ? `${geolocation.lat},${geolocation.lng}` : null,
        queryId: id,
        retrieveFacets: isDynamicFiltersEnabled,
        locale: this._locale,
        skipSpellCheck: skipSpellCheck,
        queryTrigger: queryTrigger,
        sessionTrackingEnabled: sessionTrackingEnabled,
        sortBys: sortBys,
        locationRadius: locationRadius,
        context: context,
        referrerPageUrl: referrerPageUrl,
        source: querySource
      }
    };
    const getState = () => {
      return { value: sessionTrackingEnabled };
    };
    const request = new ApiRequest(requestConfig, { getState });

    window.performance.mark('yext.answers.verticalQuerySent');
    return request.get()
      .then(response => {
        window.performance.mark('yext.answers.verticalQueryResponseReceived');
        return response.json();
      });
  }

  /** @inheritdoc */
  universalSearch (queryString, params) {
    const requestConfig = {
      endpoint: '/v2/accounts/me/answers/query',
      apiKey: this._apiKey,
      version: this._version,
      environment: this._environment,
      params: {
        input: queryString,
        experienceKey: this._experienceKey,
        location: params.geolocation ? `${params.geolocation.lat},${params.geolocation.lng}` : null,
        version: this._experienceVersion,
        locale: this._locale,
        skipSpellCheck: params.skipSpellCheck,
        queryTrigger: params.queryTrigger,
        context: params.context,
        referrerPageUrl: params.referrerPageUrl,
        source: params.querySource
      }
    };
    const getState = () => {
      return { value: params.sessionTrackingEnabled };
    };
    const request = new ApiRequest(requestConfig, { getState });

    window.performance.mark('yext.answers.universalQuerySent');
    return request.get()
      .then(response => {
        window.performance.mark('yext.answers.universalQueryResponseReceived');
        return response.json();
      });
  }
}
