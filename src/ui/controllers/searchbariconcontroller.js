import SearchStates from '../../core/storage/searchstates';
import StorageKeys from '../../core/storage/storagekeys';
import DOM from '../dom/dom';
import LoadingIconState from '../statemachine/loadingiconstate';
import SearchIconState from '../statemachine/searchiconstate';
import DefaultIconState from '../statemachine/defaulticonstate';
import { StateMachine } from '../statemachine/statemachine';

/**
 * Responsible for controlling the search bar icon behavior
 */
export default class SearchBarIconController {
  constructor (config) {
    this.iconIsFrozen = false;
    this.inputEl = config.inputEl;
    this.searchBarContainer = config.searchBarContainer;
    this.onMouseUp = this.oneTimeMouseUpListener.bind(this);

    const IconState = {
      LOADING: new LoadingIconState(this),
      SEARCH: new SearchIconState(this, config.useCustomIcon),
      DEFAULT: new DefaultIconState(this, config.useCustomIcon)
    };

    const transitions = {
      [IconState.LOADING.id]: {
        SEARCH_COMPLETE: IconState.DEFAULT
      },
      [IconState.DEFAULT.id]: {
        SUBMIT: IconState.LOADING,
        FOCUS: IconState.SEARCH
      },
      [IconState.SEARCH.id]: {
        SUBMIT: IconState.LOADING,
        FOCUS_OUT: IconState.DEFAULT
      }
    };
    const initialIconState = config.isFocus ? IconState.SEARCH : IconState.DEFAULT;
    this._fsm = new StateMachine(initialIconState, transitions);
  }

  handleEvent (event, context) {
    this._fsm.updateState(event, context);
  }

  setupLoadingIconEvents (storage, verticalKey) {
    storage.registerListener({
      eventType: 'update',
      storageKey: verticalKey ? StorageKeys.VERTICAL_RESULTS : StorageKeys.UNIVERSAL_RESULTS,
      callback: results => {
        this.iconIsFrozen = false;
        results.searchState === SearchStates.SEARCH_LOADING
          ? this.handleEvent('SUBMIT')
          : this.handleEvent('SEARCH_COMPLETE');
      }
    });
  }

  setupAnimatedIconEvents () {
    const clickableElementSelectors = ['.js-yext-submit', '.js-yxt-SearchBar-clear'];
    for (const selector of clickableElementSelectors) {
      const clickableEl = DOM.query(this.searchBarContainer, selector);
      if (clickableEl) {
        DOM.on(clickableEl, 'mousedown', () => {
          this.iconIsFrozen = true;
          DOM.on(document, 'mouseup', this.onMouseUp);
        });
      }
    }
    const queryEl = DOM.query(this.searchBarContainer, this.inputEl);
    DOM.on(queryEl, 'focus', () => {
      this.handleEvent('FOCUS');
    });
    DOM.on(this.searchBarContainer, 'focusout', e => {
      this.handleEvent('FOCUS_OUT', e);
    });
  }

  oneTimeMouseUpListener () {
    document.removeEventListener('mouseup', this.onMouseUp);
    this.iconIsFrozen = false;
  }
}
