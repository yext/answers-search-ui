/** @module UniversalResults */

import SearchStates from '../storage/searchstates';
import VerticalResults from './verticalresults';

export default class UniversalResults {
  constructor (data) {
    this.queryId = data.queryId || null;
    this.sections = data.sections || [];

    /**
     * The current state of the search, used to render different templates before, during,
     * and after loading
     * @type {SearchState}
     */
    this.searchState = data.searchState || SearchStates.SEARCH_COMPLETE;
  }

  /**
   * Construct a UniversalResults object representing loading results
   * @return {UniversalResults}
   */
  static searchLoading () {
    return new UniversalResults({ searchState: SearchStates.SEARCH_LOADING });
  }

  /**
   * Constructs an SDK UniversalResults model from an search-core UniversalSearchResponse
   *
   * @param {UniversalSearchResponse} response from search-core
   * @param {Object<string, string>} urls keyed by vertical key
   * @param {Object<string, function>} formatters applied to the result fields
   * @returns {@link UniversalResults}
   */
  static fromCore (response, urls, formatters) {
    if (!response) {
      return new UniversalResults();
    }

    return new UniversalResults({
      queryId: response.queryId,
      sections: response.verticalResults.map(verticalResults => {
        return VerticalResults.fromCore(verticalResults, urls, formatters);
      })
    });
  }
}
