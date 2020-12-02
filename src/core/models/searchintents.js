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
   * Create SearchIntents from an answers-core SearchIntent array
   *
   * @param {SearchIntent[]} searchIntents from answers-core
   * @returns {@link SearchIntents}
   */
  static fromCore (searchIntents) {
    const intents = searchIntents || [];

    return new SearchIntents({
      nearMe: intents.includes('NEAR_ME')
    });
  }
}
