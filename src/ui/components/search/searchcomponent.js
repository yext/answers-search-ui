import Component from '../component';

export default class SearchComponent extends Component {
  constructor(opts = {}) {
    super(opts)

    // this.moduleId = 2;

    this.setState({
      title: 'Crazy Answers Searcher',
      searchText: 'What are you interested in?'
    });
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

  static get TemplateName() {
    return 'search/search'
  }

  static get type() {
    return 'SearchComponent';
  }
}

