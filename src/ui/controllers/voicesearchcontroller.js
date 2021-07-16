import DOM from '../dom/dom';
import TranslationFlagger from '../i18n/translationflagger';

const State = {
  NOT_LISTENING: 'not-listening',
  LISTENING: 'listening'
};

export default class VoiceSearchController {
  /**
   * @param {Element} searchBarContainer The search bar which contains the voice search button
   * @param {Object} config The voiceSearch config from the search bar component
   */
  constructor (searchBarContainer, config) {
    this._state = State.NOT_LISTENING;

    /**
     * The screen reader text for the "Start Voice Search" button
     * @type {string}
     */
    this._startVoiceSearchText = config.startText || TranslationFlagger.flag({
      phrase: 'Start Voice Search',
      context: 'A button to begin listening for a voice search'
    });

    /**
     * The screen reader text for the "Stop Voice Search" button
     * @type {string}
     */
    this._stopVoiceSearchText = config.stopText || TranslationFlagger.flag({
      phrase: 'Stop Voice Search',
      context: 'A button to stop listening for a voice search'
    });

    this._voiceSearchElement = DOM.query(searchBarContainer, '.yxt-SearchBar-voiceSearch');
    this._screenReaderTextElement = DOM.query(searchBarContainer, '.yxt-SearchBar-voiceSearchText');
    this._screenReaderTextElement.innerText = this._startVoiceSearchText;

    /** @type {SVGAnimateElement} */
    this._micFadeInAnimation = DOM.query(searchBarContainer, '.js-yxt-SearchBar-micFadeIn');
    /** @type {SVGAnimateElement} */
    this._micFadeOutAnimation = DOM.query(searchBarContainer, '.js-yxt-SearchBar-micFadeOut');
    /** @type {SVGAnimateElement[]} */
    this._dotsFadeInAnimations = DOM.queryAll(searchBarContainer, '.js-yxt-SearchBar-dotsFadeIn');
    /** @type {SVGAnimateElement[]} */
    this._dotsFadeOutAnimations = DOM.queryAll(searchBarContainer, '.js-yxt-SearchBar-dotsFadeOut');
  }

  handleIconClick () {
    if (this._state === State.NOT_LISTENING) {
      this._state = State.LISTENING;
      this._startListening();
    } else if (this._state === State.LISTENING) {
      this._state = State.NOT_LISTENING;
      this._stopListening();
    }
  }

  _startListening () {
    this._micFadeOutAnimation.beginElement();
    this._dotsFadeInAnimations.forEach(animation => {
      animation.beginElement();
    });
    this._screenReaderTextElement.innerText = this._stopVoiceSearchText;
    this._voiceSearchElement.blur();
  }

  _stopListening () {
    this._micFadeInAnimation.beginElement();
    this._dotsFadeOutAnimations.forEach(animation => {
      animation.beginElement();
    });
    this._screenReaderTextElement.innerText = this._startVoiceSearchText;
    this._voiceSearchElement.blur();
  }
}
