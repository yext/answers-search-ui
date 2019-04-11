import Component from '../component';
import DOM from '../../dom/dom';

export default class SearchComponent extends Component {
  constructor(opts = {}) {
    super(opts)

    this._barKey = opts.barKey || null;

    this._templateName = 'search/search';

    this.title = opts.title || 'Answers Universal Search';

    this.searchText = opts.searchText || 'What are you interested in?';

    this.query = opts.query || '';
  }

  onMount() {
    let autoComplete = this.componentManager.create('AutoComplete', {
      parent: this,
      barKey: this._barKey,
      container: '.yext-search-autocomplete'
    });

    let form = DOM.query(this._container, 'form');
    DOM.on(form, 'submit', (e) => {
      e.preventDefault();
      this.core.search(form.querySelector('input').value);
      return false;
    })
  }

  setState(data) {
    return super.setState(Object.assign({
      title: this.title,
      searchText: this.searchText,
      query: this.query
    }, data))
  }

  static get type() {
    return 'SearchComponent';
  }
}
