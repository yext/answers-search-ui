import Search from './search/search';
import AutoComplete from './search/autocomplete';

import SearchDataTransformer from './search/searchdatatransformer';

import Storage from './storage/storage'

export default class Core {
  constructor(opts = {}) {
    if (typeof opts.apiKey !== 'string') {
      throw new Error('Missing required `apiKey`. Type must be {string}');
    }

    if (typeof opts.answersKey !== 'string') {
      throw new Error('Missing required `answersKey`. Type must be {string}');
    }

    this._apiKey = opts.apiKey;

    this._answersKey = opts.answersKey;

    this.storage = new Storage();

    this._searcher = new Search({
      apiKey: this._apiKey,
      answersKey: this._answersKey
    });

    this._autoComplete = new AutoComplete({
      apiKey: this._apiKey,
      answersKey: this._answersKey
    });
  }

  verticalSearch(queryString, verticalKey) {
    return this._searcher
      .verticalQuery(queryString, verticalKey)
      .then(response => SearchDataTransformer.transformVertical(response))
      .then(data => {
        this.storage.insert(data);
      })
      .catch(error => console.error(error));
  }

  search(queryString, nav) {
    return this._searcher
      .query(queryString)
      .then(response => SearchDataTransformer.transform(response, nav))
      .then(data => {
        this.storage.insert(data);
      })
      .catch(error => console.error(error))
  }

  autoComplete(queryString, experienceKey, barKey) {
    return this._autoComplete
      .query(queryString, experienceKey, barKey)
      .then(data => {
        this.storage.insert(data);
      })
  }

  on(evt, moduleId, cb) {
    return this.storage.on(evt, moduleId, cb);
  }
}

