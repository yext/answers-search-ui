/** @module AlternativeVerticals */

import Section from './section';

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
   * @param {Object} response The server response
   * @param {Object.<string, function>} formatters The field formatters to use
   */
  static from (response, formatters) {
    return new AlternativeVerticals(Section.from(response.alternativeVerticals, {}, formatters));
  }
}
