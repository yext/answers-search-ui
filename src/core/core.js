import Search from './search/search';
import Storage from './storage/storage'

export default class Core {
  constructor(opts = {}) {
    if (typeof opts.apiKey !== 'string') {
      throw new Error('Missing required `apiKey`. Type must be {string}');
    }

    if (typeof opts.answersKey !== 'string') {
      throw new Error('Missing required `answersKey`. Type must be {string}');
    }


    this.storage = new Storage();

    this.searcher = new Search({
      apiKey: opts.apiKey,
      answersKey: opts.answersKey
    });
  }

  search(queryString) {
    this.searcher
      .query(queryString)
      .then(data => {
        this.storage.insert(data);
      })
  }

  on(evt, moduleId, cb) {
    return this.storage.on(evt, moduleId, cb);
  }
}