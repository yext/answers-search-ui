import Component from '../component';
import DOM from '../../dom/dom';

export default class SearchComponent extends Component {
  constructor(opts = {}) {
    super(opts)

    this._barKey = opts.barKey || null;

    this._experienceKey = opts.experienceKey || null;

    this._templateName = 'search/search';

    this._formEl = opts.formSelector || 'form';

    this._inputEl = opts.inputEl || '.js-yext-query';

    this.title = opts.title || 'Answers Universal Search';

    this.searchText = opts.searchText || 'What are you interested in?';

    this.query = opts.query || '';
  }

  onMount() {
    // Custom renders means our native Javascript probably wont work.
    // So lets protect it, and let them manually initialize
    if (this._render) {
      return;
    }

    this.initSearch(this._formEl);
    this.initAutoComplete(this._inputEl);
  }

  initSearch(formSelector) {
    this._formEl = formSelector;

    let form = DOM.query(this._container, formSelector);
    DOM.on(form, 'submit', (e) => {
      e.preventDefault();
      this.search(form.querySelector(this._inputEl).value);
      return false;
    })
  }

  initAutoComplete(inputSelector) {
    this._inputEl = inputSelector;

    let autoComplete = this.componentManager.create('AutoComplete', {
      parent: this,
      barKey: this._barKey,
      experienceKey: this._experienceKey,
      container: '.yext-search-autocomplete',
      inputEl: inputSelector
    });
  }

  search(query) {
    this.core.search(query);
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
