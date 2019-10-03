/** @module SearchIntents */

export default class SearchIntents {
  constructor (intents) {
    /**
     * The intent to find results based on the user's location
     * @type {boolean}
     */
    this.nearMe = intents.nearMe;

    Object.freeze(this);
  }

  /**
   * Create SearchIntents from server response
   * @param {Object} response The server response intents
   * @returns {SearchIntents}
   */
  static from (response) {
    const intents = response || [];

    return new SearchIntents({
      nearMe: intents.includes('NEAR_ME')
    });
  }
}
