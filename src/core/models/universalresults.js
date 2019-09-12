/** @module UniversalResults */

import Section from './section';
import SearchStates from '../storage/searchstates';

export default class UniversalResults {
  constructor (data) {
    this.queryId = data.queryId || null;
    this.sections = data.sections || [];

    /**
     * The current state of the search, used to render different templates before, during,
     * and after loading
     * @type {string}
     */
    this.searchState = data.searchState || SearchStates.SEARCH_COMPLETE;
  }

  /**
   * Create universal results from server data
   * @param {Object} response The server response
   * @param {Object} urls The tab urls
   * @param {Object.<string, function>} formatters The field formatters to use
   */
  static from (response, urls, formatters) {
    return new UniversalResults({
      queryId: response.queryId,
      sections: Section.from(response.modules, urls, formatters)
    });
  }

  /**
   * Construct a UnivervalResults object representing loading results
   * @return {UniversalResults}
   */
  static searchLoading () {
    return new UniversalResults({ searchState: SearchStates.SEARCH_LOADING });
  }
}
