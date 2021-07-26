import { State } from './statemachine';
import DOM from '../dom/dom';

/**
 * Defines behavior for search bar icon in loading state and during state transitions
 */
export default class LoadingIconState extends State {
  constructor (controller, stateId) {
    super(stateId);
    this._controller = controller;
    this._loadingIconElement = DOM.query(this._controller.searchBarContainer, '.js-yxt-SearchBar-LoadingIndicator');
    this.inputEl = DOM.query(this._controller.searchBarContainer, this._controller.inputEl);
  }

  onEnter (prevState) {
    this._loadingIconElement.classList.remove('yxt-SearchBar-Icon--inactive');
  }

  onExit (nextState) {
    this.inputEl.blur();
    this._loadingIconElement.classList.add('yxt-SearchBar-Icon--inactive');
  }
}
