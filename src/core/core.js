import Search from './search/search';
import AutoComplete from './search/autocomplete';

import SearchDataTransformer from './search/searchdatatransformer';

import Storage from './storage/storage';

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
    this._searcher = new Search({
      apiKey: this._apiKey,
      answersKey: this._answersKey
    });

    /**
     * An abstraction containing the integration with the RESTful autocomplete API
     * For both vertical and universal search
     * @type {Search}
     * @private
     */
    this._autoComplete = new AutoComplete({
      apiKey: this._apiKey,
      answersKey: this._answersKey
    });
  }

  verticalSearch (queryString, verticalKey, filter) {
    return this._searcher
      .verticalQuery(queryString, verticalKey, filter)
      .then(response => SearchDataTransformer.transformVertical(response))
      .then(data => {
        this.storage.insert(data);
      });
  }

  search (queryString, urls) {
    return this._searcher
      .query(queryString)
      .then(response => SearchDataTransformer.transform(response, urls))
      .then(data => {
        this.storage.insert(data);
      });
  }

  autoComplete (queryString, experienceKey, barKey) {
    return this._autoComplete
      .query(queryString, experienceKey, barKey)
      .then(data => {
        this.storage.insert(data);
      });
  }

  autoCompleteFilter (input, experienceKey, barKey) {
    return this._autoComplete
      .queryFilter(input, experienceKey, barKey)
      .then(data => {
        this.storage.insert(data);
      });
  }

  on (evt, moduleId, cb) {
    return this.storage.on(evt, moduleId, cb);
  }
}
