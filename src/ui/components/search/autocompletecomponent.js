/** @module AutoCompleteComponent */

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
};

export default class AutoCompleteComponent extends Component {
  constructor (opts = {}, systemOpts = {}) {
    super(opts, systemOpts);
    this._inputEl = opts.inputEl || '.js-yext-query';
    this._autocompleteEls = opts.autoCompleteEls || '.js-yext-autocomplete-option';
    this._originalQuery = opts.originalQuery || '';
    this._sectionIndex = 0;
    this._resultIndex = -1;
    this._onSubmit = opts.onSubmit || function () {};
    this._onChange = opts.onChange || function () {};

    this._searchParameters = opts.searchParameters || null;
  }
  static get type () {
    return 'AutoComplete';
  }

  static defaultTemplateName (config) {
    return 'search/autocomplete';
  }

  setState (data) {
    if (!this.isQueryInputFocused()) {
      this._sectionIndex = 0;
      this._resultIndex = -1;
      data = {};
    }
    super.setState(Object.assign({}, data, {
      hasResults: this.hasResults(data),
      sectionIndex: this._sectionIndex,
      resultIndex: this._resultIndex,
      promptHeader: this._originalQuery.length === 0 ? this.promptHeader : null
    }));
  }

  isQueryInputFocused () {
    return document.activeElement &&
      document.activeElement.className.includes(this._inputEl.substring(1));
  }

  /**
   * updateState is a helper to apply the current state with new client-state.
   */
  updateState () {
    this.setState(this._state.get());
  }

  /**
   * onCreate is triggered when the component is constructed from the framework.
   * Once we're initalized, we wire up all of our user interactions
   */
  onCreate () {
    // Use the context of the parent component to find the input node.
    let queryInput = DOM.query(this._parentContainer, this._inputEl);
    if (!queryInput) {
      throw new Error('Could not initialize AutoComplete. Can not find {HTMLElement} `', this._inputEl, '`.');
    }

    // Disable the native autocomplete, autocorrect & spellcheck
    DOM.attributes(queryInput, {
      autocomplete: 'off',
      autocorrect: 'off',
      spellcheck: 'false'
    });

    // The user exits the input, so we want to reset the state and close
    // the auto complete
    // TODO(jdelerme): Close logic to be moved to parent
    DOM.on(document, 'click', e => {
      if (DOM.matches(e.target, '.js-yxt-AutoComplete-wrapper *') || DOM.matches(e.target, this._inputEl)) {
        return;
      }
      this.close();
    });

    // When a user focuses the input, we should populate the autocomplete based
    // on the current value
    DOM.on(queryInput, 'focus', () => {
      this.reset();
      this.autoComplete(queryInput.value);
    });

    // Allow the user to navigate between the results using the keyboard
    DOM.on(queryInput, 'keydown', (e) => {
      this.handleNavigateResults(e.keyCode, e);
      this.handleSubmitResult(e.keyCode, queryInput.value, e);
    });

    if (this._autoFocus) {
      DOM.once(queryInput, 'click', () => {
        this.autoComplete(queryInput.value);
      });
    }

    // Allow the user to select a result with the mouse
    DOM.delegate(this._container, '.js-yext-autocomplete-option', 'click', (evt, target) => {
      let data = target.dataset;
      let val = data.short;

      this.updateQuery(val);
      this._onSubmit(val, data.filter);
      this.close();
    });

    // When the user is typing in the input, process the auto complete.
    DOM.on(queryInput, 'keyup', (e) => {
      this.handleTyping(e.keyCode, queryInput.value, e);
    });
  }

  /**
   * close will hide the auto complete results and reset the state.
   */
  close () {
    this.setState({});
    this.reset();
  }

  /**
   * resets the client state to their original values and triggers
   * a template-rerender via updateState
   */
  reset () {
    this._sectionIndex = 0;
    this._resultIndex = -1;
    this.updateState();
  }

  /**
   * Helper method to update the input text
   * @param {string} optValue Option value provided.
   * If no value provided, we'll try to find it based on the selection indexes.
   */
  updateQuery (optValue) {
    // Only want to update the query string if theres a value.
    // If one is provided, great.
    // Otherwise, lets try to find it from the current selection in the results.
    if (optValue === undefined) {
      let sections = this._state.get('sections');

      let results = sections[this._sectionIndex].results;
      optValue = results[this._resultIndex].shortValue;
    }

    let queryEl = DOM.query(this._parentContainer, this._inputEl);
    queryEl.value = optValue;
  }

  handleTyping (key, value, e) {
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
      Keys.ENTER,
      Keys.TAB,
      Keys.SELECT_KEY
    ];

    if (ignoredKeys.indexOf(key) > -1) {
      return;
    }

    // User escapes out of auto complete, so we reset it to the original input
    if (key === Keys.ESCAPE) {
      this.updateQuery(this._originalQuery);
      this.close();
      return;
    }

    // Update the original value based on the user input
    this._originalQuery = value;

    this.reset();
    this.autoComplete(value);
  }

  autoComplete (input) {
    this.core.autoCompleteUniversal(input, this.name).then(data => this.setState(data));
  }

  /**
   * returns true if we have results in any section
   * @returns boolean
   */
  hasResults (data) {
    if (!data) {
      return false;
    }
    let sections = data['sections'];
    if (!sections) {
      return false;
    }

    for (let i = 0; i < sections.length; i++) {
      const data = sections[i];
      if (!data) {
        continue;
      }
      const results = data.results;
      if (!results) {
        continue;
      }

      if (results.length > 0) {
        return true;
      }
    }

    return false;
  }

  handleNavigateResults (key, e) {
    let sections = this._state.get('sections');
    if (sections === undefined || sections.length <= 0) {
      return;
    }

    // Tabbing out or enter should close the auto complete.
    if (key === Keys.TAB) {
      this.close();
      return;
    }

    let results = sections[this._sectionIndex].results;
    if (key === Keys.UP) {
      e.preventDefault();
      if (this._resultIndex <= 0) {
        if (this._sectionIndex > 0) {
          this._sectionIndex--;
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

      this._resultIndex--;
      this.updateState();
      this.updateQuery();
      return;
    }

    if (key === Keys.DOWN) {
      e.preventDefault();
      if (this._resultIndex >= results.length - 1) {
        if (this._sectionIndex < sections.length - 1) {
          this._sectionIndex++;
          this._resultIndex = 0;
        }
        this.updateQuery();
        this.updateState();
        return;
      }

      this._resultIndex++;
      this.updateQuery();
      this.updateState();
    }
  }

  handleSubmitResult (key, value, e) {
    let sections = this._state.get('sections');
    if (sections === undefined || sections.length <= 0) {
      return;
    }

    // submit the search on enter
    if (key === Keys.ENTER) {
      e.preventDefault();

      let filter = '';
      if (this._sectionIndex >= 0 && this._resultIndex >= 0) {
        filter = JSON.stringify(sections[this._sectionIndex].results[this._resultIndex].filter);
      }

      this.updateQuery(value);
      this._originalQuery = value;
      this._onSubmit(value, filter);
      this.close();
    } else {
      this._onChange();
    }
  }
}
