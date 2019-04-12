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

    /**
     * The `barKey` in the vertical search to use for auto-complete
     * @type {string}
     */
    this._barKey = opts.barKey || null;

    /**
     * The `experienceKey` of the vertical search to use for auto-complete
     * @type {string}
     */
    this._experienceKey = opts.experienceKey || null;

    if (this._barKey === null || this._experienceKey === null) {
      throw new Error('AutoComplete requires a {barKey} and {experienceKey} to use!');
    }

    /**
     * An internal reference for the data-storage to listen for updates from the server
     * @type {string}
     */
    this.moduleId = 'search.' + this._barKey;

    /**
     * The default handlebars template name to use for rendering
     * @type {string}
     */
    this._templateName = 'search/autocomplete';

    /**
     * An internal reference to the input value when typing.
     * We use this for resetting the state of the input value when other interactions (e.g. result navigation)
     * change based on interactions. For instance, hitting escape should reset the value to the original typed query.
     * @type {string}
     */
    this._originalQuery = '';

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
  }

  /**
   * The aliased used by the component manager for creation.
   */
  static get type() {
    return 'AutoComplete';
  }

  /**
   * setState is overridden so that we can provide additional meta data
   * to the template (e.g. the sectionIndex and resultIndex), since
   * those are client-interaction specific values and aren't returned from the server.
   */
  setState(data) {
    super.setState(Object.assign(data, {
      sectionIndex: this._sectionIndex,
      resultIndex: this._resultIndex
    }));
  }

  /**
   * updateState is a helper to apply the current state with new client-state.
   */
  updateState() {
    this.setState(this._state.get());
  }

  /**
   * onCreate is triggered when the component is constructed from the framework.
   * Once we're initalized, we wire up all of our user interactions
   */
  onCreate() {
    // Use the context of the parent component to find the input node.
    let queryInput = DOM.query(this._parent._container, '.js-yext-query');

    // Disable the native auto complete
    DOM.attr(queryInput, 'autoComplete', 'off');

    // The user exits the input, so we want to reset the state and close
    // the auto complete
    DOM.on(queryInput, 'blur', () => {
      // Blur fires before click events, so we want to delay the event
      // from being processed until the next UI tick.
      setTimeout(() => {
        this.close();
      }, 10)
    });

    // Allow the user to navigate between the results using the keyboard
    DOM.on(queryInput, 'keydown', (e) => {
     this.handleNavigateResults(e.keyCode, e);
    });

    // Allow the user to select a result with the mouse
    DOM.delegate(this._container, '.js-yext-autocomplete-option', 'click', (evt, target) => {
      let data = target.dataset,
          val = data.value,
          filter = JSON.parse(data.filter);

      this.updateQuery(val);
      this.close();
    });

    // When the user is typing in the input, process the auto complete.
    DOM.on(queryInput, 'keyup', (e) => {
      this.handleTyping(e.keyCode, queryInput.value, e)
    })
  }

  /**
   * close will hide the auto complete results and reset the state.
   */
  close() {
    this.setState({});
    this.reset();
  }

  /**
   * resets the client state to their original values and triggers
   * a template-rerender via updateState
   */
  reset() {
    this._selectedIndex = 0;
    this._resultIndex = -1;
    this.updateState();
  }

  /**
   * Helper method to update the input text
   * @param {string} opt_value Option value provided.
   * If no value provided, we'll try to find it based on the selection indexes.
   */
  updateQuery(opt_value) {
    // Only want to update the query string if theres a value.
    // If one is provided, great.
    // Otherwise, lets try to find it from the current selection in the results.
    if (opt_value === undefined) {
      let sections = this._state.get('sections'),
          results = sections[this._sectionIndex].results;
      opt_value = results[this._resultIndex].shortValue;
    }

    let queryEl = DOM.query(this._parent._container, '.js-yext-query');
    queryEl.value = opt_value;
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
}