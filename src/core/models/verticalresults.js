/** @module VerticalResults */

import Section from './section';
import SearchStates from '../storage/searchstates';

export default class VerticalResults {
  constructor (data = {}) {
    Object.assign(this, { searchState: SearchStates.SEARCH_COMPLETE }, data);
    Object.freeze(this);
  }

  static from (response) {
    return new VerticalResults(Section.from(response));
  }

  /**
   * Construct a VerticalResults object representing loading results
   * @return {VerticalResults}
   */
  static searchLoading () {
    return new VerticalResults({ searchState: SearchStates.SEARCH_LOADING });
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
