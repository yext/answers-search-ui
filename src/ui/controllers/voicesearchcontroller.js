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
    this._startVoiceSearchText = config.startText || 'Start Voice Search';

    /**
     * The screen reader text for the "Stop Voice Search" button
     * @type {string}
     */
    this._stopVoiceSearchText = config.stopText || 'Stop Voice Search';

    this._searchBarContainer = searchBarContainer;
    this._voiceSearchElement = DOM.query(searchBarContainer, '.yxt-SearchBar-voiceSearch');
    this._voiceIconWrapper = DOM.query(searchBarContainer, '.yxt-SearchBar-voiceIconWrapper');
    this._screenReaderTextElement = DOM.query(searchBarContainer, '.yxt-SearchBar-voiceSearchText');
    this._updateScreenReaderText();

    /** @type {SVGAnimateElement} */
    this._micFadeInAnimation = DOM.query(searchBarContainer, '.js-yxt-SearchBar-micFadeIn');
    this._micFadeOutAnimation = DOM.query(searchBarContainer, '.js-yxt-SearchBar-micFadeOut');
    this._dotsFadeInAnimations = DOM.queryAll(searchBarContainer, '.js-yxt-SearchBar-dotsFadeIn');
    this._dotsFadeOutAnimations = DOM.queryAll(searchBarContainer, '.js-yxt-SearchBar-dotsFadeOut');

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
    // Blur so that the focus state isn't maintained after clicking
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
      this._voiceIconWrapper.classList.add('yxt-SearchBar-CustomMicIcon');
    } else if (this._state === State.LISTENING) {
      this._voiceIconWrapper.classList.remove('yxt-SearchBar-CustomMicIcon');
    }
  }

  _applyCustomListeningIconStyling () {
    if (this._state === State.NOT_LISTENING) {
      this._voiceIconWrapper.classList.remove('yxt-SearchBar-CustomListeningIcon');
    } else if (this._state === State.LISTENING) {
      this._voiceIconWrapper.classList.add('yxt-SearchBar-CustomListeningIcon');
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
