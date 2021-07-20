import DOM from '../../dom/dom';

export default class ListeningIconStylist {
  constructor (searchBarContainer, customListeningIconUrl) {
    this._voiceIconWrapper = DOM.query(searchBarContainer, '.yxt-SearchBar-voiceIconWrapper');

    /** @type {SVGAnimateElement} */
    this._dotsFadeInAnimations = DOM.queryAll(searchBarContainer, '.js-yxt-SearchBar-dotsFadeIn');
    this._dotsFadeOutAnimations = DOM.queryAll(searchBarContainer, '.js-yxt-SearchBar-dotsFadeOut');

    this._activeCustomIconClass = 'yxt-SearchBar-CustomListeningIcon--active';
    this._customListeningIconUrl = customListeningIconUrl;
  }

  applyActiveStyling () {
    if (this._customListeningIconUrl) {
      this._voiceIconWrapper.classList.add(this._activeCustomIconClass);
    } else {
      this._dotsFadeInAnimations.forEach(animation => {
        animation.beginElement();
      });
    }
  }

  applyInactiveStyling () {
    if (this._customListeningIconUrl) {
      this._voiceIconWrapper.classList.remove(this._activeCustomIconClass);
    } else {
      this._dotsFadeOutAnimations.forEach(animation => {
        animation.beginElement();
      });
    }
  }
}
