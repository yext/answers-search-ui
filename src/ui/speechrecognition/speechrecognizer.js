/* eslint-disable new-cap */
import { isMicrosoftEdge } from '../../core/utils/useragent';
import { transformSpeechRecognitionLocaleForEdge } from '../../core/speechrecognition/locales';
import TranslationFlagger from '../i18n/translationflagger';

/**
 * Responsible for recognizing speech
 */
export default class SpeechRecognizer {
  constructor (locale) {
    this._speechRecognition = new webkitSpeechRecognition();
    this._speechRecognition.interimResults = true;

    this._speechRecognition.lang = isMicrosoftEdge()
      ? transformSpeechRecognitionLocaleForEdge(locale)
      : locale;

    /**
     * The latest result from speech recognition
     * @type {string}
     */
    this._latestResult = '';

    /**
     * The timeout ID of the silence threshold timeout
     * @type {number|null}
     */
    this._silenceThresholdTimeout = null;

    /**
     * The amount of silence after the last detected word before triggering a search.
     * This is primarily used for Safari since Edge and Chrome typically detect the end of
     * voice search phrase very quickly.
     */
    this._silenceThresholdToSearch = 1000;

    /**
     * Indicates that speech recognition is currently active.
     * This is used to prevent the speech recognizer from starting while it is already active.
     * @type {boolean}
     */
    this._recognitionActive = false;

    this._init();
  }

  _init () {
    this._speechRecognition.addEventListener('start', () => {
      this._recognitionActive = true;
    });
    this._speechRecognition.addEventListener('end', () => {
      this._recognitionActive = false;
      this._onCompleteHandler && this._onCompleteHandler(this._latestResult);
    });
    this._speechRecognition.addEventListener('result', event => {
      this._handleResultEvent(event);
    });
    this._speechRecognition.addEventListener('error', event => {
      this._handleErrorEvent(event);
    });
  }

  /**
   * Handles a search recognition result event
   * @param {SpeechRecognitionEvent} event
   */
  _handleResultEvent (event) {
    /**
     * Set a timeout to stop the speech recognition if no words are detected for the configured amount
     * of time. Every time a result comes in, reset that timeout.
     */
    clearTimeout(this._silenceThresholdTimeout);
    this._silenceThresholdTimeout = setTimeout(() => {
      this.stop();
    }, this._silenceThresholdToSearch);

    const result = event.results[0][0].transcript;
    const isFinalResult = event.results[0].isFinal;

    if (result !== this._latestResult) {
      this._onResultHandler && this._onResultHandler(result);
      this._latestResult = result;
    }
    if (isFinalResult) {
      this.stop();
    }
  }

  /**
   * Handles a speech recognition error
   * @param {SpeechRecognitionError} event
   */
  _handleErrorEvent (event) {
    if (event.error === 'service-not-allowed') {
      window.alert(
        TranslationFlagger.flag({ phrase: 'Speech Recognition is not available.' }) + '\n' +
        TranslationFlagger.flag({ phrase: 'Siri must be enabled for support on Safari.' })
      );
    } else {
      console.warn(event);
    }
    this._onError && this._onError();
  }

  /**
   * Starts the speech recognizer if it has not already started
   */
  start () {
    try {
      !this._recognitionActive && this._speechRecognition.start();
    } catch (err) {
      console.warn(err);
    }
  }

  /**
   * Stops the speech recognizer if it is active
   */
  stop () {
    this._recognitionActive && this._speechRecognition.stop();
  }

  /**
   * Sets the callback which is called when an error occurs
   * @param {Function} cb
   */
  onError (cb) {
    this._onError = cb;
  }

  /**
   * Sets the callback which is called when a result is detected
   * @param {Function} cb
   */
  onResult (cb) {
    this._onResultHandler = cb;
  }

  /**
   * Sets the callback which is called when speech recognition is complete
   * @param {Function} cb
   */
  onComplete (cb) {
    this._onCompleteHandler = cb;
  }
}
