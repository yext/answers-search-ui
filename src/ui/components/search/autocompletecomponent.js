import Component from '../component';
import DOM from '../../dom/dom';

export default class AutoCompleteComponent extends Component {
  constructor(opts = {}) {
    super(opts)

    this._barKey = opts.barKey || null;

    this.moduleId = 'search.' + this._barKey;

    this._templateName = 'search/autocomplete';

    this._sectionIndex = 0;

    this._resultIndex = 0;
  }

  close() {
    this._selectedIndex = 0;
    this._resultIndex = 0;
    this.setState({});
  }

  setState(data) {
    data = data || {};
    super.setState(Object.assign(data, {
      sectionIndex: this._sectionIndex,
      resultIndex: this._resultIndex
    }));
  }

  updateState() {
    this.setState(this._state.get());
  }

  onCreate() {
    let queryInput = DOM.query(this._parent._container, '.js-yext-query');

    DOM.attr(queryInput, 'autoComplete', 'off');

    DOM.on(queryInput, 'keyup', (e) => {
      console.log(this._sectionIndex, this._resultIndex);
      // Handle user up arrow
      if (e.keyCode === 38) {
        let sections = this._state.get('sections'),
            results = sections[this._sectionIndex].results;

        if (this._resultIndex === 0) {
          if (this._sectionIndex > 0) {
            this._sectionIndex --;
            this._resultIndex = sections[this._sectionIndex].results.length - 1;
          }
          this.updateState();
          return;
        }

        this._resultIndex --;
        this.updateState();
        return;
      }

      // Handle down arrow
      if (e.keyCode === 40) {
        let sections = this._state.get('sections'),
            results = sections[this._sectionIndex].results;

        if (this._resultIndex >= results.length - 1) {
          if (this._sectionIndex < sections.length - 1) {
            this._sectionIndex ++;
            this._resultIndex = 0;
          }
          this.updateState();
          return;
        }

        this._resultIndex ++;
          this.updateState();
        return;
      }

      this.queryInput = queryInput.value;
      if (this.queryInput.length === 0) {
        this.close();
        return;
      }
      this.core.autoComplete(queryInput.value, this._barKey);
    })

    DOM.delegate(this._container, '.js-yext-autocomplete-option', 'click', (evt, target) => {
      let data = target.dataset,
          val = data.value,
          filter = JSON.parse(data.filter);

      queryInput.value = val;
      this.close();
    });
  }

  onUpdate() {

  }

  static get type() {
    return 'AutoComplete';
  }
}

