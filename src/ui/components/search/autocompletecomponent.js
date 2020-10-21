/** @module AutoCompleteComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import StorageKeys from '../../../core/storage/storagekeys';

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

    /**
     * Whether autocomplete is simple or filter
     * @type {boolean}
     */
    this.isFilterSearch = opts.isFilterSearch || false;

    /**
     * The `verticalKey` of the vertical search to use for auto-complete
     * @type {string}
     */
    this._verticalKey = opts.verticalKey || null;

    /**
     * A reference to the input el selector for auto complete
     * @type {string}
     */
    this._inputEl = opts.inputEl || '.js-yext-query';

    /**
     * A selector for the autocomplete elementes
     * @type {string}
     */
    this._autocompleteEls = opts.autoCompleteEls || '.js-yext-autocomplete-option';

    /**
     * An internal reference for the data-storage to listen for updates from the server
     * @type {string}
     */
    this.moduleId = `${StorageKeys.AUTOCOMPLETE}.${this.name}`;

    /**
     * An internal reference to the input value when typing.
     * We use this for resetting the state of the input value when other interactions (e.g. result navigation)
     * change based on interactions. For instance, hitting escape should reset the value to the original typed query.
     * @type {string}
     */
    this._originalQuery = opts.originalQuery || '';

    /**
     * Used for keyboard navigation through results.
     * An internal reference to the current section we're navigating in.
     * @type {number}
     */
    this._sectionIndex = 0;

    /**
     * Used for keyboard navigation through results.
     * An internal reference to the current result index we're navigating on.
     * @type {number}
     */
    this._resultIndex = -1;

    /**
     * The query text to show as the first item for auto complete.
     * Optionally provided
     * @type {string}
     */
    this.promptHeader = opts.promptHeader || null;

    /**
     * Whether the input is autocomatically focused or not
     * @type {boolean}
     */
    this._autoFocus = opts.autoFocus || false;

    /**
     * Callback invoked when the `Enter` key is pressed on auto complete.
     */
    this._onSubmit = opts.onSubmit || function () {};

    /**
     * Callback invoked when keys are used to navigate through the auto complete. Note that this is
     * not called when either the `Enter` key is pressed or the mouse is used to select an
     * autocomplete option.
     */
    this._onChange = opts.onChange || function () {};

    this._searchParameters = opts.searchParameters || null;

    /**
     * HTML id for the aria-labelledby in the autocomplete list
     * @type {string}
     */
    this.listLabelIdName = opts.listLabelIdName || 'yxt-SearchBar-listLabel--SearchBar';

    /**
     * Whether to hide the autocomplete when the search input is empty
     * @type {boolean}
     */
    this._shouldHideOnEmptySearch = opts.shouldHideOnEmptySearch || false;

    /**
     * Callback invoked when the autocomplete component changes from closed to open.
     * @type {function}
     */
    this._onOpen = opts.onOpen || function () {};

    /**
     * Callback invoked when the autocomplete component changes from open to closed.
     * @type {function}
     */
    this._onClose = opts.onClose || function () {};

    /**
     * Indicates the initial open/closed status of this component
     * @type {boolean}
     */
    this._isOpen = false;
  }

  /**
   * The aliased used by the component manager for creation.
   */
  static get type () {
    return 'AutoComplete';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'search/autocomplete';
  }

  /**
   * setState is overridden so that we can provide additional meta data
   * to the template (e.g. the sectionIndex and resultIndex), since
   * those are client-interaction specific values and aren't returned from the server.
   */
  setState (data) {
    const queryInputEl = DOM.query(this._parentContainer, this._inputEl);
    const shouldHideAutocomplete = this._shouldHideOnEmptySearch && !queryInputEl.value;
    const wasOpen = this._isOpen;
    if (!this.isQueryInputFocused() || shouldHideAutocomplete) {
      this._isOpen = false;
      this._sectionIndex = 0;
      this._resultIndex = -1;
      data = {};
    } else {
      this._isOpen = true;
    }

    if (wasOpen && !this._isOpen) {
      this._onClose();
    } else if (!wasOpen && this._isOpen) {
      this._onOpen();
    }

    super.setState(Object.assign({}, data, {
      hasResults: this.hasResults(data),
      sectionIndex: this._sectionIndex,
      resultIndex: this._resultIndex,
      promptHeader: this._originalQuery.length === 0 ? this.promptHeader : null,
      listLabelIdName: this.listLabelIdName
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
    if (this.isFilterSearch) {
      this.core.autoCompleteFilter(input, {
        namespace: this.name,
        verticalKey: this._verticalKey,
        searchParameters: this._searchParameters
      });
    } else if (this._verticalKey) {
      this.core.autoCompleteVertical(input, this.name, this._verticalKey);
    } else {
      this.core.autoCompleteUniversal(input, this.name);
    }
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
      if (this.isFilterSearch) {
        this.autoComplete(value);
      }
      return;
    }

    // submit the search on enter
    if (key === Keys.ENTER) {
      e.preventDefault();

      if (this.isFilterSearch && this._resultIndex === -1) {
        return;
      }

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
