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

    this._searchBarContainer = searchBarContainer;
    this._voiceSearchElement = DOM.query(searchBarContainer, '.yxt-SearchBar-voiceSearch');
    this._screenReaderTextElement = DOM.query(searchBarContainer, '.yxt-SearchBar-voiceSearchText');
    this._updateScreenReaderText();

    /** @type {SVGAnimateElement} */
    this._micFadeInAnimation = DOM.query(searchBarContainer, '.js-yxt-SearchBar-micFadeIn');
    /** @type {SVGAnimateElement} */
    this._micFadeOutAnimation = DOM.query(searchBarContainer, '.js-yxt-SearchBar-micFadeOut');
    /** @type {SVGAnimateElement[]} */
    this._dotsFadeInAnimations = DOM.queryAll(searchBarContainer, '.js-yxt-SearchBar-dotsFadeIn');
    /** @type {SVGAnimateElement[]} */
    this._dotsFadeOutAnimations = DOM.queryAll(searchBarContainer, '.js-yxt-SearchBar-dotsFadeOut');

    this._voiceSearchMicElement = DOM.query(this._searchBarContainer, '.yxt-SearchBar-micIconWrapper');
    this._voiceSearchListeningElement = DOM.query(this._searchBarContainer, '.yxt-SearchBar-listeningIconWrapper');

    this._customMicIconUrl = config.customMicIconUrl;
    this._customListeningIconUrl = config.customListeningIconUrl;

    if (this._customMicIconUrl) {
      this._applyCustomMicIconStyling();
    }

    if (this._customListeningIconUrl) {
      this._applyCustomListeningIconStyling();
    }
  }

  handleIconClick () {
    if (this._state === State.NOT_LISTENING) {
      this._state = State.LISTENING;
    } else if (this._state === State.LISTENING) {
      this._state = State.NOT_LISTENING;
    }
    this._updateUI();
  }

  _updateUI () {
    if (this._customMicIconUrl) {
      this._applyCustomMicIconStyling();
    } else {
      this._executeDefaultMicIconAnimations();
    }
    if (this._customListeningIconUrl) {
      this._applyCustomListeningIconStyling();
    } else {
      this._executeDefaultListeningIconAnimations();
    }
    this._updateScreenReaderText();
    this._voiceSearchElement.blur();
  }

  _executeDefaultMicIconAnimations () {
    if (this._state === State.NOT_LISTENING) {
      this._micFadeInAnimation.beginElement();
    } else if (this._state === State.LISTENING) {
      this._micFadeOutAnimation.beginElement();
    }
  }

  _executeDefaultListeningIconAnimations () {
    if (this._state === State.NOT_LISTENING) {
      this._dotsFadeOutAnimations.forEach(animation => {
        animation.beginElement();
      });
    } else if (this._state === State.LISTENING) {
      this._dotsFadeInAnimations.forEach(animation => {
        animation.beginElement();
      });
    }
  }

  _applyCustomMicIconStyling () {
    if (this._state === State.NOT_LISTENING) {
      this._voiceSearchMicElement.classList.add('yxt-SearchBar-CustomIcon--active');
      this._voiceSearchMicElement.classList.remove('yxt-SearchBar-CustomIcon--inactive');
    } else if (this._state === State.LISTENING) {
      this._voiceSearchMicElement.classList.add('yxt-SearchBar-CustomIcon--inactive');
      this._voiceSearchMicElement.classList.remove('yxt-SearchBar-CustomIcon--active');
    }
  }

  _applyCustomListeningIconStyling () {
    if (this._state === State.NOT_LISTENING) {
      this._voiceSearchListeningElement.classList.add('yxt-SearchBar-CustomIcon--inactive');
      this._voiceSearchListeningElement.classList.remove('yxt-SearchBar-CustomIcon--active');
    } else if (this._state === State.LISTENING) {
      this._voiceSearchListeningElement.classList.add('yxt-SearchBar-CustomIcon--active');
      this._voiceSearchListeningElement.classList.remove('yxt-SearchBar-CustomIcon--inactive');
    }
  }

  _updateScreenReaderText () {
    if (this._state === State.NOT_LISTENING) {
      this._screenReaderTextElement.innerText = this._startVoiceSearchText;
    } else if (this._state === State.LISTENING) {
      this._screenReaderTextElement.innerText = this._stopVoiceSearchText;
    }
  }
}
