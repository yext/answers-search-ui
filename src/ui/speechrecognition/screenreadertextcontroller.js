import DOM from '../dom/dom';
import TranslationFlagger from '../i18n/translationflagger';

export default class ScreenReaderTextController {
  constructor (searchBarContainer, startText, stopText) {
    /**
     * The screen reader text for the "Start Voice Search" button
     * @type {string}
     */
    this._startVoiceSearchText = startText || TranslationFlagger.flag({
      phrase: 'Start Voice Search',
      context: 'A button to begin listening for a voice search'
    });

    /**
     * The screen reader text for the "Stop Voice Search" button
     * @type {string}
     */
    this._stopVoiceSearchText = stopText || TranslationFlagger.flag({
      phrase: 'Stop Voice Search',
      context: 'A button to stop listening for a voice search'
    });

    this._voiceSearchElement = DOM.query(searchBarContainer, '.yxt-SearchBar-voiceSearch');
    this._screenReaderTextElement = DOM.query(searchBarContainer, '.yxt-SearchBar-voiceSearchText');
  }

  setStartListeningText () {
    this._screenReaderTextElement.innerText = this._startVoiceSearchText;
  }

  setStopListeningText () {
    this._screenReaderTextElement.innerText = this._stopVoiceSearchText;
  }
}
