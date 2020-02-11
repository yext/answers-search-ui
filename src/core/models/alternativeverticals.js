/** @module AlternativeVerticals */

import Section from './section';
import SearchStates from '../storage/searchstates';

export default class AlternativeVerticals {
  constructor (data) {
    /**
     * Alternative verticals that have results for the current query
     * @type {Section}
     */
    this.alternativeVerticals = data || [];

    /**
     * The current state of the search, used to render different templates before, during,
     * and after loading
     * @type {string}
     */
    this.searchState = data.searchState || SearchStates.SEARCH_COMPLETE;
  }

  /**
   * Create alternative verticals from server data
   * @param {Object} response The server response
   * @param {Object.<string, function>} formatters The field formatters to use
   */
  static from (response, formatters) {
    return new AlternativeVerticals(Section.from(response.alternativeVerticals, {}, formatters));
  }

  /**
   * Construct a AlternativeVerticals object representing loading results
   * @return {AlternativeVerticals}
   */
  static searchLoading () {
    return new AlternativeVerticals({ searchState: SearchStates.SEARCH_LOADING });
  }
}
