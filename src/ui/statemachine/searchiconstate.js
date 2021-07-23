import { State } from './statemachine';
import DOM from '../dom/dom';

/**
 * Defines behavior for search bar icon in search state and during state transitions
 */
export default class SearchIconState extends State {
  constructor (controller, useCustomIcon) {
    super('search');
    this._controller = controller;
    this._useCustomIcon = useCustomIcon;
    this._searchIconElement = useCustomIcon
      ? DOM.query(this._controller.searchBarContainer, '.js-yxt-SearchBar-buttonImage')
      : DOM.query(this._controller.searchBarContainer, '.js-yxt-AnimatedForward');
  }

  canEnter (context) {
    return !this._controller.iconIsFrozen;
  }

  onEnter (prevState) {
    this._useCustomIcon ? this._handleTransitionToCustom() : this._handleTransitionToMagifyingGlass();
  }

  _handleTransitionToMagifyingGlass () {
    this._searchIconElement.classList.remove('yxt-SearchBar-Icon--inactive');
    DOM.query(this._searchIconElement, '.Icon--yext_animated_forward').classList.remove('yxt-SearchBar-MagnifyingGlass--static');
  }

  _handleTransitionToCustom () {
    this._searchIconElement.classList.remove('yxt-SearchBar-Icon--inactive');
  }

  onExit (nextState) {
    this._searchIconElement.classList.add('yxt-SearchBar-Icon--inactive');
  }
}
