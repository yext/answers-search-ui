import DOM from '../dom/dom';
import MicIconStylist from './miciconstylist';
import ListeningIconStylist from './listeningiconstylist';
import ScreenReaderTextController from './screenreadertextcontroller';

const State = {
  NOT_LISTENING: 'not-listening',
  LISTENING: 'listening'
};

/**
 * Responsible for controling the voice search button
 */
export default class VoiceSearchController {
  /**
   * @param {Element} searchBarContainer The search bar which contains the voice search button
   * @param {Object} config The voiceSearch config from the search bar component
   */
  constructor (searchBarContainer, config) {
    this._state = State.NOT_LISTENING;

    this._voiceSearchElement = DOM.query(searchBarContainer, '.yxt-SearchBar-voiceSearch');

    this._micIconStylist = new MicIconStylist(searchBarContainer, config.customMicIconUrl);
    this._listeningIconStylist = new ListeningIconStylist(searchBarContainer, config.customListeningIconUrl);
    this._screenReaderTextController = new ScreenReaderTextController(searchBarContainer, config.startText, config.stopText);

    config.customMicIconUrl && this._micIconStylist.applyActiveStyling();
    config.customListeningIconUrl && this._listeningIconStylist.applyInactiveStyling();
    this._screenReaderTextController.setStartListeningText();
  }

  handleIconClick () {
    if (this._state === State.NOT_LISTENING) {
      this._state = State.LISTENING;
    } else if (this._state === State.LISTENING) {
      this._state = State.NOT_LISTENING;
    }
    this._handleCurrentState();
  }

  _handleCurrentState () {
    if (this._state === State.NOT_LISTENING) {
      this._micIconStylist.applyActiveStyling();
      this._listeningIconStylist.applyInactiveStyling();
      this._screenReaderTextController.setStartListeningText();
    } else if (this._state === State.LISTENING) {
      this._listeningIconStylist.applyActiveStyling();
      this._micIconStylist.applyInactiveStyling();
      this._screenReaderTextController.setStopListeningText();
    }
    // Blur so that the focus state isn't maintained after clicking
    this._voiceSearchElement.blur();
  }
}
