import Search from './search/search';
import Storage from './storage/storage'

export default class Core {
  constructor() {
    this.storage = new Storage();

    this.searcher = new Search();

    this.simulateDataInserts();
  }

  search(queryString) {
    this.searcher
      .query(queryString)
      .then((results) => {
        // Handl errors here
        this.storage.insert(results);
      })
  }

  on(module, cb) {
    this.storage.on(module, cb);
  }

  simulateDataInserts() {
    this.storage.insert({
      1: {
        totalResults: 2,
        results: [
          {
            title: 'Result Item',
            body: 'This is the result body for item'
          }
        ]
      }
    })

    setInterval(() => {
      let results = [];
      let numResults = Math.floor((Math.random() * 5) + 1);
      for (let i = 1; i <= numResults; i ++) {
        results.push({
          title: 'Result Item #' + i,
          body: 'This is the result body for item #' + i
        })
      }

      this.storage.insert({
        1: {
          totalResults: numResults,
          results: results
        }
      })
    }, 1000)
  }
}