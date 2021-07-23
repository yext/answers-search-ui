import { State } from './statemachine';
import LoadingIconState from './loadingiconstate';
import DOM from '../dom/dom';

/**
 * Defines behavior for search bar icon in default state and during state transitions
 */
export default class DefaultIconState extends State {
  constructor (controller, useCustomIcon) {
    super('default');
    this._controller = controller;
    this._useCustomIcon = useCustomIcon;
    this._defaultIconElement = useCustomIcon
      ? DOM.query(this._controller.searchBarContainer, '.js-yxt-SearchBar-buttonImage')
      : DOM.query(this._controller.searchBarContainer, '.js-yxt-AnimatedReverse');
  }

  canEnter (e) {
    let focusStillInSearchbar = false;
    if (e && e.relatedTarget) {
      focusStillInSearchbar = this._controller.searchBarContainer.contains(e.relatedTarget);
    }
    return !this._controller.iconIsFrozen && !focusStillInSearchbar;
  }

  onEnter (prevState) {
    this._useCustomIcon ? this._handleTransitionToCustom() : this._handleTransitionToYext(prevState);
  }

  _handleTransitionToYext (prevState) {
    this._defaultIconElement.classList.remove('yxt-SearchBar-Icon--inactive');
    const svgWrapper = DOM.query(this._defaultIconElement, '.Icon--yext_animated_reverse');
    prevState instanceof LoadingIconState
      ? svgWrapper.classList.add('yxt-SearchBar-Yext--static')
      : svgWrapper.classList.remove('yxt-SearchBar-Yext--static');
  }

  _handleTransitionToCustom () {
    this._defaultIconElement.classList.remove('yxt-SearchBar-Icon--inactive');
  }

  onExit (nextState) {
    this._defaultIconElement.classList.add('yxt-SearchBar-Icon--inactive');
  }
}
