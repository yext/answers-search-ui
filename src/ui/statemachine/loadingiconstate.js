import { State } from './statemachine';
import DOM from '../dom/dom';

/**
 * Defines behavior for search bar icon in loading state and during state transitions
 */
export default class LoadingIconState extends State {
  constructor (controller) {
    super('loading');
    this._controller = controller;
    this._loadingIconElement = DOM.query(this._controller.searchBarContainer, '.js-yxt-SearchBar-LoadingIndicator');
  }

  onEnter (prevState) {
    this._loadingIconElement.classList.remove('yxt-SearchBar-Icon--inactive');
  }

  onExit (nextState) {
    DOM.query(this._controller.searchBarContainer, this._controller.inputEl).blur();
    this._loadingIconElement.classList.add('yxt-SearchBar-Icon--inactive');
  }
}
