/** @module Core */

import SearchApi from './search/searchapi';
import AutoCompleteApi from './search/autocompleteapi';

import SearchDataTransformer from './search/searchdatatransformer';

import Storage from './storage/storage';
import StorageKeys from './storage/storagekeys';
import VerticalResults from './models/verticalresults';
import UniversalResults from './models/universalresults';

/**
 * Core is the main application container for all of the network and storage
 * related behaviors of the application.
 */
export default class Core {
  constructor (opts = {}) {
    if (typeof opts.apiKey !== 'string') {
      throw new Error('Missing required `apiKey`. Type must be {string}');
    }

    if (typeof opts.answersKey !== 'string') {
      throw new Error('Missing required `answersKey`. Type must be {string}');
    }

    /**
     * A reference to the client API Key used for all requests
     * @type {string}
     * @private
     */
    this._apiKey = opts.apiKey;

    /**
     * A reference to the client Answers Key used for all requests
     * @type {string}
     * @private
     */
    this._answersKey = opts.answersKey;

    /**
     * A reference to the client locale used for all requests. If not specified, defaults to "en" (for
     * backwards compatibility).
     * @type {string}
     * @private
     */
    this._locale = opts.locale || 'en';

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

  verticalSearch (searchOptions) {
    this.storage.set(StorageKeys.VERTICAL_RESULTS, VerticalResults.searchLoading());
    return this._searcher
      .verticalQuery(Object.assign({}, searchOptions, { isDynamicFiltersEnabled: this._isDynamicFiltersEnabled }))
      .then(response => SearchDataTransformer.transformVertical(response))
      .then(data => {
        this.storage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);
        this.storage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);
        this.storage.set(StorageKeys.VERTICAL_RESULTS, data[StorageKeys.VERTICAL_RESULTS]);
        if (data[StorageKeys.DYNAMIC_FILTERS]) {
          this.storage.set(StorageKeys.DYNAMIC_FILTERS, data[StorageKeys.DYNAMIC_FILTERS]);
        }
      });
  }

  search (queryString, urls) {
    this.storage.set(StorageKeys.UNIVERSAL_RESULTS, UniversalResults.searchLoading());
    return this._searcher
      .query(queryString)
      .then(response => SearchDataTransformer.transform(response, urls))
      .then(data => {
        this.storage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);
        this.storage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);
        this.storage.set(StorageKeys.DIRECT_ANSWER, data[StorageKeys.DIRECT_ANSWER]);
        this.storage.set(StorageKeys.UNIVERSAL_RESULTS, data[StorageKeys.UNIVERSAL_RESULTS], urls);
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
