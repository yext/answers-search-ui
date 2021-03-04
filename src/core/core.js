/** @module Core */

export default class Core {
  constructor (config = {}) {
    this._autoComplete = config.autoCompleteService;
  }

  autoCompleteUniversal (input) {
    return this._autoComplete
      .queryUniversal(input);
  }
}
