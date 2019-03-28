import Search from './search/search';
import Storage from './storage/storage'

export default class Core {
  constructor() {
    this.storage = new Storage();

    this.searcher = new Search({
      storage: this.storage
    });

    this.simulateDataInserts();
  }

  search(queryString) {
    this.searcher
      .query(queryString)
      .then(data => {
        this.storage.insert(data.response.modules);
      })
  }

  on(evt, moduleId, cb) {
    return this.storage.on(evt, moduleId, cb);
  }

  simulateDataInserts() {
    // Initial state
    this.storage.insert({
      2: this.generatePeopleResults()
    })
  }

generatePeopleResults() {
  let names = ['Billy', 'Steve', 'Kevin', 'Max', 'Tom', 'Joe', 'Bob'],
      professions = ['Front-end ninja', 'Data Guy', 'Mastermind', 'Product Lover', 'El capitan', 'OOF', 'Lover of cake']

    let results = [];
    let numResults = Math.floor((Math.random() * 5) + 1);
    for (let i = 0; i < numResults; i ++) {
      results.push({
        name: names[i],
        profession: professions[i],
        description: 'Too lazy to make #' + (i+1),
      })
    }

    return {
      totalResults: numResults,
      results: results
    }
  }
}