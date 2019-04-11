import Component from '../component';
import DOM from '../../dom/dom';

export default class AutoCompleteComponent extends Component {
  constructor(opts = {}) {
    super(opts)

    this._barKey = opts.barKey || null;

    this.moduleId = 'search.' + this._barKey;

    this._templateName = 'search/autocomplete';

    this._selectedIndex = 0;
  }

  close() {
    this._selectedIndex = 0;
    this.setState({});
  }

  setState(data) {
    super.setState(Object.assign({
      selectedIndex: this._selectedIndex
    }, data));
  }

  onCreate() {
    let query = DOM.query(this._parent._container, '.js-yext-query');

    DOM.attr(query, 'autoComplete', 'off');

    DOM.on(query, 'keyup', () => {
      this.query = query.value;
      if (this.query.length === 0) {
        this.close();
        return;
      }
      this.core.autoComplete(query.value, this._barKey);
    })

    DOM.delegate(this._container, '.js-yext-autocomplete-option', 'click', (evt, target) => {
      let data = target.dataset,
          val = data.value,
          filter = JSON.parse(data.filter);

      query.value = val;
      this.close();
    });
  }

  onUpdate() {

  }

  static get type() {
    return 'AutoComplete';
  }
}

