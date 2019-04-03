import Search from './search/search';
import Storage from './storage/storage'

export default class Core {
  constructor() {
    this.storage = new Storage();

    this.searcher = new Search({
      storage: this.storage
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