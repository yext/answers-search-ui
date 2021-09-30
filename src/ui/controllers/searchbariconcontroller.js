import SearchStates from '../../core/storage/searchstates';
import StorageKeys from '../../core/storage/storagekeys';
import DOM from '../dom/dom';
import LoadingIconState from '../statemachine/loadingiconstate';
import SearchIconState from '../statemachine/searchiconstate';
import DefaultIconState from '../statemachine/defaulticonstate';
import { StateMachine } from '../statemachine/statemachine';

/**
 * Events to trigger state transitions in search bar icon state machine
 */
const IconEvent = {
  SEARCH_COMPLETE: 'SEARCH_COMPLETE',
  SUBMIT: 'SUBMIT',
  FOCUS: 'FOCUS',
  FOCUS_OUT: 'FOCUS_OUT'
};

/**
 * Possible states in search bar icon state machine
 */
const IconState = {
  LOADING_ICON: 'LOADING_ICON',
  SEARCH_ICON: 'SEARCH_ICON',
  DEFAULT_ICON: 'DEFAULT_ICON'
};

/**
 * Responsible for controlling the search bar icon behavior
 */
export default class SearchBarIconController {
  constructor (config) {
    this.iconIsFrozen = false;
    this.inputEl = config.inputEl;
    this.searchBarContainer = config.searchBarContainer;

    const stateMap = {
      [IconState.LOADING_ICON]: new LoadingIconState(this, IconState.LOADING_ICON),
      [IconState.DEFAULT_ICON]: new DefaultIconState(this, IconState.DEFAULT_ICON, config.useCustomIcon),
      [IconState.SEARCH_ICON]: new SearchIconState(this, IconState.SEARCH_ICON, config.useCustomIcon)
    };

    const possibleTransitions = {
      [IconState.LOADING_ICON]: {
        [IconEvent.SEARCH_COMPLETE]: IconState.DEFAULT_ICON
      },
      [IconState.DEFAULT_ICON]: {
        [IconEvent.SUBMIT]: IconState.LOADING_ICON,
        [IconEvent.FOCUS]: IconState.SEARCH_ICON
      },
      [IconState.SEARCH_ICON]: {
        [IconEvent.SUBMIT]: IconState.LOADING_ICON,
        [IconEvent.FOCUS_OUT]: IconState.DEFAULT_ICON
      }
    };
    const initialIconState = config.isFocus
      ? stateMap[IconState.SEARCH_ICON]
      : stateMap[IconState.DEFAULT_ICON];
    this._fsm = new StateMachine(initialIconState, stateMap, possibleTransitions);
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
          ? this.handleEvent(IconEvent.SUBMIT)
          : this.handleEvent(IconEvent.SEARCH_COMPLETE);
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
          DOM.once(document, 'mouseup', () => {
            this.iconIsFrozen = false;
          });
        });
      }
    }
    const queryEl = DOM.query(this.searchBarContainer, this.inputEl);
    DOM.on(queryEl, 'focus', () => {
      this.handleEvent(IconEvent.FOCUS);
    });
    DOM.on(this.searchBarContainer, 'focusout', e => {
      this.handleEvent(IconEvent.FOCUS_OUT, e);
    });
  }
}
