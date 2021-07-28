import DOM from '../dom/dom';

/**
 *  Responsible for styling the voice search mic icon
 */
export default class MicIconStylist {
  constructor (searchBarContainer, customMicIconUrl) {
    this._voiceIconWrapper = DOM.query(searchBarContainer, '.yxt-SearchBar-voiceIconWrapper');

    /** @type {SVGAnimateElement} */
    this._micFadeInAnimation = DOM.query(searchBarContainer, '.js-yxt-SearchBar-micFadeIn');
    this._micFadeOutAnimation = DOM.query(searchBarContainer, '.js-yxt-SearchBar-micFadeOut');

    this._activeCustomIconClass = 'yxt-SearchBar-CustomMicIcon--active';
    this._customMicIconUrl = customMicIconUrl;
  }

  /**
   * Applies styling for when the icon is active
   */
  applyActiveStyling () {
    if (this._customMicIconUrl) {
      this._voiceIconWrapper.classList.add(this._activeCustomIconClass);
    } else {
      this._micFadeInAnimation.beginElement();
    }
  }

  /**
   * Applies styling for when the icon is inactive
   */
  applyInactiveStyling () {
    if (this._customMicIconUrl) {
      this._voiceIconWrapper.classList.remove(this._activeCustomIconClass);
    } else {
      this._micFadeOutAnimation.beginElement();
    }
  }
}
