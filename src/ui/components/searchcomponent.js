import Component from './component';

export default class SearchComponent extends Component {
  constructor(opts = {}) {
    super(opts)

    this._data = {
      title: 'Crazy Answers Searcher',
      searchText: 'What are you interested in?'
    }
  }

  static get type() {
    return 'Search';
  }

  static get TemplateName() {
    return 'search'
  }
}

