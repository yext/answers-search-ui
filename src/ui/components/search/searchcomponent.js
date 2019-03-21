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

  static get TemplateName() {
    return 'search/search'
  }

  static get type() {
    return 'SearchComponent';
  }
}

