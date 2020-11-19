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
   * Construct a UnivervalResults object representing loading results
   * @return {UniversalResults}
   */
  static searchLoading () {
    return new UniversalResults({ searchState: SearchStates.SEARCH_LOADING });
  }
}
