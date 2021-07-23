import DOM from '../dom/dom';
import MicIconStylist from './miciconstylist';
import ListeningIconStylist from './listeningiconstylist';
import ScreenReaderTextController from './screenreadertextcontroller';
import SpeechRecognizer from './speechrecognizer';
import TranslationFlagger from '../i18n/translationflagger';
import StorageKeys from '../../core/storage/storagekeys';
import AnalyticsEvent from '../../core/analytics/analyticsevent';
import { generateUUID } from '../../core/utils/uuid';

const State = {
  NOT_LISTENING: 'not-listening',
  LISTENING: 'listening'
};

/**
 * Responsible for controling voice search
 */
export default class VoiceSearchController {
  /**
   * @param {Element} searchBarContainer The search bar which contains the voice search button
   * @param {Object} config The voiceSearch config from the search bar component
   */
  constructor (searchBarContainer, config, searchComponent) {
    this._state = State.NOT_LISTENING;

    this._voiceSearchElement = DOM.query(searchBarContainer, '.yxt-SearchBar-voiceSearch');

    this._micIconStylist = new MicIconStylist(searchBarContainer, config.customMicIconUrl);
    this._listeningIconStylist = new ListeningIconStylist(searchBarContainer, config.customListeningIconUrl);
    this._screenReaderTextController = new ScreenReaderTextController(searchBarContainer, config.startText, config.stopText);

    const locale = searchComponent.core.storage.get(StorageKeys.LOCALE);
    this._speechRecognizer = new SpeechRecognizer(locale);

    this._searchComponent = searchComponent;
    this._autocompleteComponent = searchComponent._autocomplete;
    this._config = config;

    this._init();
  }

  _init () {
    this._config.customMicIconUrl && this._micIconStylist.applyActiveStyling();
    this._config.customListeningIconUrl && this._listeningIconStylist.applyInactiveStyling();
    this._screenReaderTextController.setStartListeningText();

    this._speechRecognizer.onResult(this._handleResult.bind(this));
    this._speechRecognizer.onComplete(this._handleComplete.bind(this));
    this._speechRecognizer.onError(this._enterNotListeningState.bind(this));
  }

  handleIconClick () {
    // Blur so that the focus state isn't maintained after clicking
    this._voiceSearchElement.blur();

    if (this._state === State.NOT_LISTENING) {
      this._reportVoiceStartClick();
      this._hasMicAccess().then(hasMicAccess => {
        if (hasMicAccess) {
          this._enterListeningState();
        } else {
          window.alert(TranslationFlagger.flag({
            phrase: 'Permission to use microphone is blocked'
          }));
        }
      });
    } else if (this._state === State.LISTENING) {
      this._reportVoiceStopClick();
      this._enterNotListeningState();
    }
  }

  /**
   * Returns a promise which indicates whether or not mic access is granted
   * @returns {Promise<boolean>}
   */
  _hasMicAccess () {
    return navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        // Stop the audio tracks which are started when requesting permission
        stream.getTracks().forEach(track => track.stop());
        return true;
      }).catch(() => {
        return false;
      });
  }

  _enterListeningState () {
    this._state = State.LISTENING;
    this._speechRecognizer.start();
    this._setupSearchBarForListening();
    this._listeningIconStylist.applyActiveStyling();
    this._micIconStylist.applyInactiveStyling();
    this._screenReaderTextController.setStopListeningText();
  }

  _enterNotListeningState () {
    this._state = State.NOT_LISTENING;
    this._speechRecognizer.stop();
    this._micIconStylist.applyActiveStyling();
    this._listeningIconStylist.applyInactiveStyling();
    this._screenReaderTextController.setStartListeningText();
  }

  /**
   * Sets up the search bar when voice search begins listening
   */
  _setupSearchBarForListening () {
    this._autocompleteComponent.updateQuery('');
    this._autocompleteComponent.close();
    this._searchComponent.hideClearButton();
    this._autocompleteComponent.setIsVoiceSearchActive(true);
  }

  /**
   * Handles an interim or final result from the speech recognizer
   * @param {string} result The latest speech recognition result. This includes the entire sentence, not just the latest word
   */
  _handleResult (result) {
    this._autocompleteComponent.updateQuery(result);
    this._autocompleteComponent.autoComplete(result);
  }

  /**
   * Handler for when the speech recognizer has completes speech recognition
   */
  _handleComplete () {
    this._searchComponent.submitVoiceQuery();
    this._autocompleteComponent.close();
    this._autocompleteComponent.setIsVoiceSearchActive(false);
    this._enterNotListeningState();
  }

  /**
   * Reports an analytics event for when the user clicks to start voice search
   */
  _reportVoiceStartClick () {
    if (!this._searchComponent.analyticsReporter) {
      return;
    }
    this._voiceSessionId = generateUUID();
    const analyticsEvent = AnalyticsEvent.fromData({
      type: 'VOICE_START',
      businessId: this._searchComponent.analyticsReporter._businessId,
      timestamp: new Date().getTime(),
      voiceSessionId: this._voiceSessionId
    });
    this._searchComponent.analyticsReporter.report(analyticsEvent);
  }

  /**
   * Reports an analytics event for when the user clicks to stop voice search
   */
  _reportVoiceStopClick () {
    if (!this._searchComponent.analyticsReporter) {
      return;
    }
    const analyticsEvent = AnalyticsEvent.fromData({
      type: 'VOICE_STOP',
      businessId: this._searchComponent.analyticsReporter._businessId,
      timestamp: new Date().getTime(),
      voiceSessionId: this._voiceSessionId
    });
    this._searchComponent.analyticsReporter.report(analyticsEvent);
  }
}
