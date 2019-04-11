import Search from './search/search';
import AutoComplete from './search/autocomplete';

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

  search(queryString) {
    return this._searcher
      .query(queryString)
      .then(data => {
        this.storage.insert(data);
      })
  }

  autoComplete(queryString, barKey) {
    return this._autoComplete
      .query(queryString, barKey)
      .then(data => {
        this.storage.insert(data);
      })
  }

  on(evt, moduleId, cb) {
    return this.storage.on(evt, moduleId, cb);
  }
}

