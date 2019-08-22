/** @module Core */

import SearchApi from './search/searchapi';
import AutoCompleteApi from './search/autocompleteapi';

import SearchDataTransformer from './search/searchdatatransformer';

import Storage from './storage/storage';
import StorageKeys from './storage/storagekeys';
import VerticalResults from './models/verticalresults';
import UniversalResults from './models/universalresults';
import QuestionSubmission from './models/questionsubmission';

/**
 * Core is the main application container for all of the network and storage
 * related behaviors of the application.
 */
export default class Core {
  constructor (config = {}) {
    if (typeof config.apiKey !== 'string') {
      throw new Error('Missing required `apiKey`. Type must be {string}');
    }

    if (typeof config.answersKey !== 'string') {
      throw new Error('Missing required `answersKey`. Type must be {string}');
    }

    /**
     * A reference to the client API Key used for all requests
     * @type {string}
     * @private
     */
    this._apiKey = config.apiKey;

    /**
     * A reference to the client Answers Key used for all requests
     * @type {string}
     * @private
     */
    this._answersKey = config.answersKey;

    /**
     * A reference to the client locale used for all requests. If not specified, defaults to "en" (for
     * backwards compatibility).
     * @type {string}
     * @private
     */
    this._locale = config.locale || 'en';

    /**
     * A reference to the core data storage that powers the UI
     * @type {Storage}
     * @private
     */
    this.storage = new Storage();

    /**
     * An abstraction containing the integration with the RESTful search API
     * For both vertical and universal search
     * @type {Search}
     * @private
     */
    this._searcher = new SearchApi({
      apiKey: this._apiKey,
      answersKey: this._answersKey,
      locale: this._locale
    });

    /**
     * An abstraction containing the integration with the RESTful autocomplete API
     * For filter search, vertical autocomplete, and universal autocomplete
     * @type {Autocomplete}
     * @private
     */
    this._autoComplete = new AutoCompleteApi({
      apiKey: this._apiKey,
      answersKey: this._answersKey,
      locale: this._locale
    });
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
   * @param {boolean} query.append If true, adds the results of this query to the end of the current results, defaults false
   */
  verticalSearch (verticalKey, query) {
    this.storage.set(
      StorageKeys.VERTICAL_RESULTS,
      VerticalResults.searchLoading());

    return this._searcher
      .verticalSearch(verticalKey, {
        ...query,
        isDynamicFiltersEnabled: this._isDynamicFiltersEnabled
      })
      .then(response => SearchDataTransformer.transformVertical(response))
      .then(results => query.append
        ? this.storage.getState(StorageKeys.VERTICAL_RESULTS).append(results)
        : results)
      .then(data => {
        this.storage.set(
          StorageKeys.QUERY_ID,
          data[StorageKeys.QUERY_ID]);

        this.storage.set(
          StorageKeys.NAVIGATION,
          data[StorageKeys.NAVIGATION]);

        this.storage.set(
          StorageKeys.VERTICAL_RESULTS,
          data[StorageKeys.VERTICAL_RESULTS]);

        if (data[StorageKeys.DYNAMIC_FILTERS]) {
          this.storage.set(StorageKeys.DYNAMIC_FILTERS,
            data[StorageKeys.DYNAMIC_FILTERS]);
        }

        this.storage.set(
          StorageKeys.QUESTION_SUBMISSION,
          new QuestionSubmission({
            questionText: query.input
          })
        );
      });
  }

  search (queryString, urls) {
    this.storage.set(
      StorageKeys.UNIVERSAL_RESULTS,
      UniversalResults.searchLoading());

    return this._searcher
      .universalSearch(queryString)
      .then(response => SearchDataTransformer.transform(response, urls))
      .then(data => {
        this.storage.set(
          StorageKeys.QUERY_ID,
          data[StorageKeys.QUERY_ID]);

        this.storage.set(
          StorageKeys.NAVIGATION,
          data[StorageKeys.NAVIGATION]);

        this.storage.set(
          StorageKeys.DIRECT_ANSWER,
          data[StorageKeys.DIRECT_ANSWER]);

        this.storage.set(
          StorageKeys.UNIVERSAL_RESULTS,
          data[StorageKeys.UNIVERSAL_RESULTS],
          urls);

        this.storage.set(
          StorageKeys.QUESTION_SUBMISSION,
          new QuestionSubmission({
            questionText: queryString
          })
        );
      });
  }

  /**
   * Given an input, query for a list of similar results and set into storage
   *
   * @param {string} input     the string to autocomplete
   * @param {string} namespace the namespace to use for the storage key
   */
  autoCompleteUniversal (input, namespace) {
    return this._autoComplete
      .queryUniversal(input)
      .then(data => {
        this.storage.set(`${StorageKeys.AUTOCOMPLETE}.${namespace}`, data);
      });
  }

  /**
   * Given an input, query for a list of similar results in the provided vertical
   * and set into storage
   *
   * @param {string} input       the string to autocomplete
   * @param {string} namespace the namespace to use for the storage key
   * @param {string} verticalKey the vertical key for the experience
   * @param {string} barKey      the bar key for the experience
   */
  autoCompleteVertical (input, namespace, verticalKey, barKey) {
    return this._autoComplete
      .queryVertical(input, verticalKey, barKey)
      .then(data => {
        this.storage.set(`${StorageKeys.AUTOCOMPLETE}.${namespace}`, data);
      });
  }

  /**
   * Given an input, provide a list of suitable filters for autocompletion
   *
   * @param {string} input         the string to search for filters with
   * @param {string} namespace     the namespace to use for the storage key
   * @param {string} verticalKey   the vertical key for the experience
   * @param {string} barKey        the bar key for the experience
   */
  autoCompleteFilter (input, namespace, verticalKey, barKey) {
    return this._autoComplete
      .queryFilter(input, verticalKey, barKey)
      .then(data => {
        this.storage.set(`${StorageKeys.AUTOCOMPLETE}.${namespace}`, data);
      });
  }

  /**
   * Submits a question to the server and updates the underlying questin model
   * @param {object} question The question object to submit to the server
   */
  submitQuestion (question) {
    // TODO(billy) Implement network request
    this.storage.set(
      StorageKeys.QUESTION_SUBMISSION,
      QuestionSubmission.isSubmitted());
  }

  /**
   * Stores the given query into storage, to be used for the next search
   * @param {string} query the query to store
   */
  setQuery (query) {
    this.storage.set(StorageKeys.QUERY, query);
  }

  /**
   * Stores the provided query ID, to be used in analytics
   * @param {string} queryId The query id to store
   */
  setQueryId (queryId) {
    this.storage.set(StorageKeys.QUERY_ID, queryId);
  }

  /**
   * Stores the given filter into storage, to be used for the next search
   *
   * @param {string} namespace the namespace to use for the storage key
   * @param {Filter} filter    the filter to set
   */
  setFilter (namespace, filter) {
    this.storage.set(`${StorageKeys.FILTER}.${namespace}`, filter);
  }

  setFacetFilter (namespace, filter) {
    this.storage.set(`${StorageKeys.FACET_FILTER}.${namespace}`, filter);
  }

  enableDynamicFilters () {
    this._isDynamicFiltersEnabled = true;
  }

  on (evt, moduleId, cb) {
    return this.storage.on(evt, moduleId, cb);
  }
}
