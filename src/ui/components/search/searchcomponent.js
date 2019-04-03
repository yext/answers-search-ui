import Component from '../component';

export default class SearchComponent extends Component {
  constructor(opts = {}) {
    super(opts)

    this._templateName = 'search/search';

    this.title = opts.title || 'Crazy Answers Searcher';

    this.searchText = opts.title || 'What are you interested in?';
  }

  _onMount() {
    let query = document.querySelector('.js-yext-query'),
        submit = document.querySelector('form');

    submit
      .addEventListener('submit', (e) => {
        e.preventDefault();
        this.core.search(query.value);
        return false;
      })
  }

  setState(data) {
    return super.setState(Object.assign({
      title: this.title,
      searchText: this.searchText
    }, data))
  }

  static get type() {
    return 'SearchComponent';
  }
}

