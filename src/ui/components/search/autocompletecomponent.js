import Component from '../component';
import DOM from '../../dom/dom';

const Keys = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESCAPE: 27,

  LEFT: 37,
  RIGHT: 39,
  UP: 38,

  DELETE: 46,
  DOWN: 40,
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
    this.setState({});
    this.reset();
  }

  reset() {
    this._selectedIndex = 0;
    this._resultIndex = -1;
    this.updateState();
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

    DOM.on(queryInput, 'keydown', (e) => {
     this.handleNavigateResults(e.keyCode, e);
   })

    DOM.on(queryInput, 'keyup', (e) => {
      this.handleTyping(e.keyCode, queryInput.value, e)
    })

    DOM.delegate(this._container, '.js-yext-autocomplete-option', 'click', (evt, target) => {
      let data = target.dataset,
          val = data.value,
          filter = JSON.parse(data.filter);

      this.updateQuery(val);
      this.close();
    });
  }

  handleTyping(key, value, e) {
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

    if (ignoredKeys.indexOf(key) > -1) {
      return;
    }

    if (key === Keys.DELETE || key === Keys.BACKSPACE) {
      this.reset();
    }

    // Escape
    if (key === Keys.ESCAPE) {
      this.updateQuery(this._originalQuery);
      this.close();
      return;
    }

    // Enter
    if (key === Keys.ENTER || key === Keys.TAB) {
      this.close();
      return;
    }

    this._originalQuery = value;
    if (this._originalQuery.length === 0) {
      this.close();
      return;
    }

    this.core.autoComplete(value, this._experienceKey, this._barKey);
  }

  handleNavigateResults(key, e) {
    // Handle user up arrow
    let sections = this._state.get('sections');
    if (sections === undefined || sections.length <= 0) {
      return;
    }

    let results = sections[this._sectionIndex].results;

    if (key === Keys.UP) {
      e.preventDefault();
      if (this._resultIndex <= 0) {
        if (this._sectionIndex > 0) {
          this._sectionIndex --;
          this._resultIndex = sections[this._sectionIndex].results.length - 1;
        } else {
          this.updateQuery(this._originalQuery);
          this.reset();
          return;
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
    if (key === Keys.DOWN) {
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
  }

  static get type() {
    return 'AutoComplete';
  }
}

