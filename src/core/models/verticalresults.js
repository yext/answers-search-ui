/** @module VerticalResults */

import { AnswersCoreError } from '../errors/errors';
import Section from './section';
import SearchStates from '../storage/searchstates';
import AppliedQueryFilter from './appliedqueryfilter';
import Result from './Result';

export default class VerticalResults {
  constructor (data = {}) {
    Object.assign(this, { searchState: SearchStates.SEARCH_COMPLETE }, data);

    /**
     * The context of the results, used to provide more information about why
     * these specific results were returned.
     * @type {ResultsContext}
     */
    this.resultsContext = data.resultsContext;

    Object.freeze(this);
  }

  /**
   * Append the provided results to the current results
   * @param {VerticalResults} results the results to append to the current results
   */
  append (results) {
    if (results.resultsContext !== this.resultsContext) {
      throw new AnswersCoreError('Cannot merge results with different contexts', 'VerticalResults');
    }
    const merged = { ...this };
    merged.resultsContext = this.resultsContext;
    merged.results = this.results.concat(results.results);
    merged.map.mapMarkers = this.map.mapMarkers.concat(results.map.mapMarkers);
    return new VerticalResults(merged);
  }

  /**
   * Create vertical results from server data
   * @param {Object} response The server response
   * @param {Object.<string, function>} formatters The field formatters to use
   * @param {string} verticalKey the vertical key
   */
  static from (response, formatters, verticalKey) {
    const data = Section.from(response, null, formatters);
    return new VerticalResults({ ...data,
      verticalConfigId: verticalKey
    });
  }

  /**
   * Constructs an SDK Section model from an answers-core VerticalResult
   *
   * @param {VerticalResults} verticalResults
   * @param {Object<string, string>} urls keyed by vertical key
   * @returns {@link Section}
   */
  static fromCore (verticalResults, urls) {
    if (!verticalResults) {
      return new Section({});
    }

    return new Section({
      verticalConfigId: verticalResults.verticalKey,
      resultsCount: verticalResults.resultsCount,
      appliedQueryFilters: verticalResults.appliedQueryFilters.map(AppliedQueryFilter.fromCore),
      results: verticalResults.results.map(Result.fromCore),
      url: urls[verticalResults.verticalKey]
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
