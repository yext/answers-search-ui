/* eslint-disable new-cap */
import { isMicrosoftEdge } from '../../core/utils/useragent';
import { transformSpeechRecognitionLocaleForEdge } from '../../core/speechrecognition/locales';

export default class SpeechRecognizer {
  constructor (locale) {
    this._speechRecognition = new webkitSpeechRecognition();
    this._speechRecognition.interimResults = true;

    this._speechRecognition.lang = isMicrosoftEdge()
      ? transformSpeechRecognitionLocaleForEdge(locale)
      : locale;

    this._latestResult = '';

    this._silenceThresholdTimeout = null;
    this._silenceThresholdToSearch = 1000;

    /**
     * Indicates that speech recognition is currently active
     * We can use this to prevent an error that occurs when the speech recognizer is started
     * while it is already active
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
      this._onFinalResultHandler && this._onFinalResultHandler(this._latestResult);
    });
    this._speechRecognition.addEventListener('result', event => {
      this._handleResultEvent(event);
    });
    this._speechRecognition.addEventListener('error', event => {
      this._handleErrorEvent(event);
    });
  }

  _handleResultEvent (event) {
    clearTimeout(this._silenceThresholdTimeout);
    this._silenceThresholdTimeout = setTimeout(() => {
      this.stop();
    }, this._silenceThresholdToSearch);

    const result = event.results[0][0].transcript;
    const isFinalResult = event.results[0].isFinal;

    if (result !== this._latestResult) {
      this._onInterimResultHandler && this._onInterimResultHandler(result);
      this._latestResult = result;
    }
    if (isFinalResult) {
      this.stop();
    }
  }

  _handleErrorEvent (event) {
    if (event.error === 'service-not-allowed') {
      window.alert('Speech Recognition is not available\nSiri must be enabled for support on Safari');
    } else if (event.error === 'aborted') {
      // We can ignore this because it was called by the last result
    } else {
      console.warn(event);
    }
    this._onError && this._onError();
  }

  start () {
    try {
      !this._recognitionActive && this._speechRecognition.start();
    } catch (err) {
      console.warn(err);
    }
  }

  stop () {
    this._recognitionActive && this._speechRecognition.stop();
  }

  onError (cb) {
    this._onError = cb;
  }

  onInterimResult (cb) {
    this._onInterimResultHandler = cb;
  }

  onFinalResult (cb) {
    this._onFinalResultHandler = cb;
  }
}
