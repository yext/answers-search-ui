/** @module SearchComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import SearchParams from '../../dom/searchparams';

export default class SearchComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);
    this._formEl = config.formSelector || 'form';
    this._inputEl = config.inputEl || '.js-yext-query';
    this.labelText = config.labelText || 'Conduct a search';
    this.submitText = config.submitText || 'Submit';
    this.redirectUrl = config.redirectUrl;
    this.query = config.query;
    this._allowEmptySearch = config.allowEmptySearch;
    this._autoCompleteName = this.name + '.autocomplete';
    this._processParams = config.processParams;
  }

  onMount () {
    this.queryEl = DOM.query(this._container, this._inputEl);
    this.initSearch(this._formEl);
    this.initAutoComplete(this._inputEl);
  }

  remove () {
    this._autocomplete.remove();
    super.remove();
  }

  initSearch (formSelector) {
    this._container.classList.add('yxt-SearchBar-wrapper');

    let form = DOM.query(this._container, formSelector);
    console.log(form);
    DOM.on(form, 'submit', (e) => {
      e.preventDefault();
      const inputEl = form.querySelector('.js-yext-query');
      this.onQuerySubmit(inputEl);
    });
  }

  onQuerySubmit (inputEl) {
    const query = inputEl.value;
    this.query = query;
    const params = new SearchParams(window.location.search.substring(1));
    params.set('query', query);
    const paramString = this._processParams ? this._processParams(params).toString() : params.toString();

    if (this._allowEmptySearch || query) {
      window.location.href = this.redirectUrl + '?' + paramString;
      return false;
    }
  }

  initAutoComplete (inputSelector) {
    this._autocomplete = this.componentManager.create('AutoComplete', {
      parentContainer: this._container,
      name: this._autoCompleteName,
      container: '.yxt-SearchBar-autocomplete',
      originalQuery: this.query,
      inputEl: inputSelector,
      onSubmit: () => {
        DOM.trigger(DOM.query(this._container, this._formEl), 'submit');
      },
      onChange: () => {
        DOM.trigger(DOM.query(this._container, inputSelector), 'input');
      }
    });
  }

  setState (data) {
    return super.setState(Object.assign({
      labelText: this.labelText,
      submitText: this.submitText,
      query: this.query || ''
    }, data));
  }

  static get type () {
    return 'SearchBar';
  }

  static defaultTemplateName () {
    return 'search/search';
  }
}
