import DOM from '../dom/dom';

/**
 *  Responsible for styling the voice search listening icon
 */
export default class ListeningIconStylist {
  constructor (searchBarContainer, customListeningIconUrl) {
    this._voiceIconWrapper = DOM.query(searchBarContainer, '.yxt-SearchBar-voiceIconWrapper');

    /** @type {SVGAnimateElement[]} */
    this._dotsFadeInAnimations = DOM.queryAll(searchBarContainer, '.js-yxt-SearchBar-dotsFadeIn');
    this._dotsFadeOutAnimations = DOM.queryAll(searchBarContainer, '.js-yxt-SearchBar-dotsFadeOut');
    this._dotsListeningAnimations = DOM.queryAll(searchBarContainer, '.js-yxt-SearchBar-dotsListening');

    this._activeCustomIconClass = 'yxt-SearchBar-CustomListeningIcon--active';
    this._customListeningIconUrl = customListeningIconUrl;

    /**
     * The ID of the timer which stops the listening dots animation
     * @type {number|null}
     */
    this._stopListeningAnimationTimeout = null;
  }

  /**
   * Applies styling for when the icon is active
   */
  applyActiveStyling () {
    if (this._customListeningIconUrl) {
      this._voiceIconWrapper.classList.add(this._activeCustomIconClass);
    } else {
      this._dotsFadeInAnimations.forEach(animation => {
        animation.beginElement();
      });
      // Clear the timeout to prevent it from stopping the animation
      clearTimeout(this._stopListeningAnimationTimeout);
      this._dotsListeningAnimations.forEach(animation => {
        animation.beginElement();
      });
    }
  }

  /**
   * Applies styling for when the icon is inactive
   */
  applyInactiveStyling () {
    if (this._customListeningIconUrl) {
      this._voiceIconWrapper.classList.remove(this._activeCustomIconClass);
    } else {
      this._dotsFadeOutAnimations.forEach(animation => {
        animation.beginElement();
      });
      // Set a timeout which will stop the listening dots once the
      // fade out animation has completed
      clearTimeout(this._stopListeningAnimationTimeout);
      this._stopListeningAnimationTimeout = setTimeout(() => {
        this._dotsListeningAnimations.forEach(animation => {
          animation.endElement();
        });
      }, 300); // This duration matches the fade out duration defined in voice_search_dots.svg
    }
  }
}
