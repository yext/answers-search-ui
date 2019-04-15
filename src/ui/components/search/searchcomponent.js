import Component from '../component';
import DOM from '../../dom/dom';

export default class SearchComponent extends Component {
  constructor(opts = {}) {
    super(opts)

    this._barKey = opts.barKey || null;

    this._experienceKey = opts.experienceKey || null;

    this._templateName = 'search/search';

    this._inputEl = opts.inputEl || '.js-yext-query';

    this.title = opts.title || 'Answers Universal Search';

    this.searchText = opts.searchText || 'What are you interested in?';

    this.query = opts.query || '';
  }

  onMount() {
    let autoComplete = this.componentManager.create('AutoComplete', {
      parent: this,
      barKey: this._barKey,
      experienceKey: this._experienceKey,
      container: '.yext-search-autocomplete',
      inputEl: this._inputEl
    });

    let form = DOM.query(this._container, 'form');
    DOM.on(form, 'submit', (e) => {
      e.preventDefault();
      this.core.search(form.querySelector(this._inputEl).value);
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
