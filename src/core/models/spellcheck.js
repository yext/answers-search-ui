/** @module SpellCheck */

import HighlightedValue from './highlightedvalue';

/**
 * SpellCheck is the core state model
 * to power the SpellCheck component
 */
export default class SpellCheck {
  constructor (data) {
    /**
     * The original query
     * @type {string}
     */
    this.query = data.query || null;

    /**
     * The corrected query
     * @type {string}
     */
    this.correctedQuery = data.correctedQuery || null;
    /**
     * The corrected query with highlighted tags
     * @type {string}
     */
    this.correctedQueryDisplay = data.correctedQueryDisplay || null;

    /**
     * The spell check type
     * @type {string}
     */
    this.type = data.type || null;
  }

  /**
   * Create a spell check model from the provided data
   * @param {Object} response The spell check response
   */
  static from (response) {
    if (!response) {
      return {};
    }

    return new SpellCheck({
      query: response.originalQuery,
      correctedQuery: response.correctedQuery,
      correctedQueryDisplay: new HighlightedValue(response.correctedQuery).get(),
      type: response.type
    });
  }
}
