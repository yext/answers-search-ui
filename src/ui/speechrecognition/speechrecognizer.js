export default class SpeechRecognizer {
  constructor () {
    // eslint-disable-next-line new-cap
    this._speechRecognition = new webkitSpeechRecognition();
    this._speechRecognition.interimResults = true;

    this._latestResult = '';

    this._init();
  }

  _init () {
    this._speechRecognition.addEventListener('result', event => {
      const result = event.results[0][0].transcript;
      if (result !== this._latestResult) {
        this._onInterimResultHandler && this._onInterimResultHandler(result);
        this._latestResult = result;
      }
    });

    this._speechRecognition.addEventListener('end', event => {
      this._onFinalResultHandler && this._onFinalResultHandler(this._latestResult);
    });
  }

  start () {
    this._speechRecognition.start();
  }

  stop () {
    this._speechRecognition.stop();
  }

  onInterimResult (cb) {
    this._onInterimResultHandler = cb;
  }

  onFinalResult (cb) {
    this._onFinalResultHandler = cb;
  }
}
