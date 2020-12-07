/** @module AlternativeVerticals */

import VerticalResults from './verticalresults';

export default class AlternativeVerticals {
  constructor (data) {
    /**
     * Alternative verticals that have results for the current query
     * @type {Section}
     */
    this.alternativeVerticals = data || [];
  }

  /**
   * Create alternative verticals from server data
   *
   * @param {Object[]} alternativeVerticals
   * @param {Object<string, function>} formatters applied to the result fields
   */
  static fromCore (alternativeVerticals, formatters) {
    if (!alternativeVerticals || alternativeVerticals.length === 0) {
      return new AlternativeVerticals();
    }

    return new AlternativeVerticals(alternativeVerticals.map(alternativeVertical => {
      return VerticalResults.fromCore(alternativeVertical, {}, formatters);
    }));
  }
}
