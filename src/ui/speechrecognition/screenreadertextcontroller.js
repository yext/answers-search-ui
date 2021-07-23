import DOM from '../dom/dom';
import TranslationFlagger from '../i18n/translationflagger';

/**
 * Responsible for updating the screen reader text for the voice search button
 */
export default class ScreenReaderTextController {
  constructor (searchBarContainer, startText, stopText) {
    /**
     * The screen reader text for the "Start Voice Search" button
     * @type {string}
     */
    this._startVoiceSearchText = startText || 'Start Voice Search';

    /**
     * The screen reader text for the "Stop Voice Search" button
     * @type {string}
     */
    this._stopVoiceSearchText = stopText || 'Stop Voice Search';

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
