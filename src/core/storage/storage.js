import Search from './search';
//import Storage from './storage';

class Core {
  constructor() {
    this.storage = new Storage();

    this.searcher = new Search(this.storage);

//    this.autoComplete = new AutoComplet();


  }
}

export default class Storage {

}