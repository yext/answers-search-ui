import Component from '../component';
import DOM from '../../dom/dom';

export default class SearchComponent extends Component {
  constructor(opts = {}) {
    super(opts)

    /**
     * The template name to use for rendering with handlebars
     * @type {string}
     */
    this._templateName = 'search/search';

    /**
     * The optional input key for the vertical search configuration
     * If not provided, auto-complete and search will be based on universal
     * @type {string}
     */
    this._barKey = opts.barKey || null;

    /**
     * The optional experience key for vertical search configuration
     * If not provided, auto-complete and search will be based on universal
     * @type {string}
     */
    this._experienceKey = opts.experienceKey || null;

    /**
     * Query submission is based on a form as context.
     * Optionally provided, otherwise defaults to native form node within container
     * @type {string} CSS selector
     */
    this._formEl = opts.formSelector || 'form';

    /**
     * The input element used for searching and wires up the keyboard interaction
     * Optionally provided.
     * @type {string} CSS selector
     */
    this._inputEl = opts.inputEl || '.js-yext-query';

    /**
     * The title used, provided to the template as a data point
     * Optionally provided.
     * @type {string}
     */
    this.title = opts.title || 'Answers Universal Search';

    /**
     * The search text used for labeling the input box, also provided to template.
     * Optionally provided
     * @type {string}
     */
    this.searchText = opts.searchText || 'What are you interested in?';

    /**
     * The query string to use for the input box, provided to template for rendering.
     * Optionally provided
     * @type {string}
     */
    this.query = opts.query || '';
  }

  static get type() {
    return 'SearchBar';
  }

  onMount() {
    // Wire up our search handling and auto complete
    this.initSearch(this._formEl);
    this.initAutoComplete(this._inputEl);
  }

  /**
   * A helper method to use for wiring up searching on form submission
   * @param {string} formSelector CSS selector to bind our submit handling to
   */
  initSearch(formSelector) {
    this._formEl = formSelector;

    let form = DOM.query(this._container, formSelector);
    DOM.on(form, 'submit', (e) => {
      e.preventDefault();
      this.search(form.querySelector(this._inputEl).value);
      return false;
    })
  }

  /**
   * A helper method to wire up our auto complete on an input selector
   * @param {string} inputSelector CSS selector to bind our auto complete component to
   */
  initAutoComplete(inputSelector) {
    this._inputEl = inputSelector;

    let autoComplete = this.componentManager.create('AutoComplete', {
      parent: this,
      barKey: this._barKey,
      experienceKey: this._experienceKey,
      container: '.yext-search-autocomplete',
      inputEl: inputSelector,
      onSubmit: () => {
        DOM.trigger('form', 'submit');
      }
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
}
