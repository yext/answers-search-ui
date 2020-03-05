/** @module VerticalResults */

import Section from './section';
import SearchStates from '../storage/searchstates';

export default class VerticalResults {
  constructor (data = {}, verticalKey) {
    Object.assign(this, { searchState: SearchStates.SEARCH_COMPLETE }, data);
    Object.freeze(this);
  }

  /**
   * Append the provided results to the current results
   * @param {VerticalResults} results the results to append to the current results
   */
  append (results) {
    const merged = { ...this };
    merged.results = this.results.concat(results.results);
    merged.map.mapMarkers = this.map.mapMarkers.concat(results.map.mapMarkers);
    return new VerticalResults(merged);
  }

  /**
   * Create vertical results from server data
   * @param {Object} response The server response
   * @param {Object.<string, function>} formatters The field formatters to use
   * @param {string} verticalKey The verticalKey for the search
   */
  static from (response, formatters, verticalKey) {
    return new VerticalResults({
      ...Section.from(response, null, formatters),
      verticalConfigId: verticalKey
    });
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
