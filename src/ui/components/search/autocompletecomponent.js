import Component from '../component';
import DOM from '../../dom/dom';

const Keys = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  ESCAPE: 27,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  LEFT_OS_KEY: 91,
  RIGHT_OS_KEY: 92,
  SELECT_KEY: 93
}

export default class AutoCompleteComponent extends Component {
  constructor(opts = {}) {
    super(opts)

    this._barKey = opts.barKey || null;

    this._experienceKey = opts.experienceKey || null;

    if (this._barKey === null || this._experienceKey === null) {
      throw new Error('AutoComplete requires a {barKey} and {experienceKey} to use!');
    }

    this.moduleId = 'search.' + this._barKey;

    this._templateName = 'search/autocomplete';

    this._originalQuery = '';

    this._sectionIndex = 0;

    this._resultIndex = -1;
  }

  close() {
    this._selectedIndex = 0;
    this._resultIndex = -1;
    this.setState({});
  }

  setState(data) {
    data = data || {};
    if (data.sections && data.sections.length === 0) {
      delete data.sections;
    }

    if (data.sections && data.sections.length === 1 && data.sections[0].results.length === 0) {
      delete data.sections;
    }

    super.setState(Object.assign(data, {
      sectionIndex: this._sectionIndex,
      resultIndex: this._resultIndex
    }));
  }

  updateState() {
    this.setState(this._state.get());
  }

  updateQuery(value) {
    if (value === undefined) {
      let sections = this._state.get('sections'),
          results = sections[this._sectionIndex].results;

      if (results === undefined || results.length === 0) {
        return;
      }

      value = results[this._resultIndex].shortValue;
    }
    let queryEl = DOM.query(this._parent._container, '.js-yext-query');
    queryEl.value = value;
  }

  onCreate() {
    let queryInput = DOM.query(this._parent._container, '.js-yext-query');

    DOM.attr(queryInput, 'autoComplete', 'off');

    DOM.on(queryInput, 'blur', () => {
      // Blur fires before click events, so we want to delay the event
      // from being processed until the next UI tick.
      setTimeout(() => {
        this.close();
      }, 10)
    });

    DOM.on(queryInput, 'keyup', (e) => {
      // Handle user up arrow
      let sections = this._state.get('sections');
      if (sections === undefined || sections.length <= 0) {
        return;
      }

      let results = sections[this._sectionIndex].results;

      if (e.keyCode === Keys.UP) {
        if (this._resultIndex === 0) {
          if (this._sectionIndex > 0) {
            this._sectionIndex --;
            this._resultIndex = sections[this._sectionIndex].results.length - 1;
          }
          this.updateQuery();
          this.updateState();
          return;
        }

        this._resultIndex --;
        this.updateState();
        this.updateQuery();
        return;
      }

      // Handle down arrow
      if (e.keyCode === Keys.DOWN) {
        if (this._resultIndex >= results.length - 1) {
          if (this._sectionIndex < sections.length - 1) {
            this._sectionIndex ++;
            this._resultIndex = 0;
          }
          this.updateQuery();
          this.updateState();
          return;
        }

        this._resultIndex ++;
        this.updateQuery();
        this.updateState();
        return;
      }
    })


    let ignoredKeys = [
      Keys.DOWN,
      Keys.UP,
      Keys.CTRL,
      Keys.ALT,
      Keys.SHIFT,
      Keys.LEFT,
      Keys.RIGHT,
      Keys.LEFT_OS_KEY,
      Keys.RIGHT_OS_KEY,
      Keys.SELECT_KEY
    ];

    DOM.on(queryInput, 'keyup', (e) => {
      if (ignoredKeys.indexOf(e.keyCode) > -1) {
        return;
      }

      // Escape
      if (e.keyCode === Keys.ESCAPE) {
        this.updateQuery(this._originalQuery);
        this.close();
        return;
      }

      // Enter
      if (e.keyCode === Keys.ENTER) {
        this.close();
        return;
      }

      this._originalQuery = queryInput.value;
      if (this._originalQuery.length === 0) {
        this.close();
        return;
      }

      this.core.autoComplete(queryInput.value, this._experienceKey, this._barKey);
    })

    DOM.delegate(this._container, '.js-yext-autocomplete-option', 'click', (evt, target) => {
      let data = target.dataset,
          val = data.value,
          filter = JSON.parse(data.filter);

      this.updateQuery(val);
      this.close();
    });
  }

  onUpdate() {

  }

  static get type() {
    return 'AutoComplete';
  }
}

