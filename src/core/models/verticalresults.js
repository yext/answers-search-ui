/** @module VerticalResults */

import { AnswersCoreError } from '../errors/errors';
import Section from './section';
import SearchStates from '../storage/searchstates';
import AppliedQueryFilter from './appliedqueryfilter';
import Result from './result';
import ResultsContext from '../storage/resultscontext';

export default class VerticalResults {
  constructor (data = {}) {
    Object.assign(this, { searchState: SearchStates.SEARCH_COMPLETE }, data);

    /**
     * The context of the results, used to provide more information about why
     * these specific results were returned.
     * @type {ResultsContext}
     */
    this.resultsContext = data.resultsContext;
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
   * Constructs an SDK Section model from an search-core VerticalResult
   *
   * @param {VerticalResults} verticalResults
   * @param {Object<string, string>} urls keyed by vertical key
   * @param {Object<string, function>} formatters applied to the result fields
   * @param {ResultsContext} resultsContext
   * @param {string} verticalKeyFromRequest
   * @returns {@link Section}
   */
  static fromCore (
    verticalResults,
    urls = {},
    formatters = undefined,
    resultsContext = ResultsContext.NORMAL,
    verticalKeyFromRequest = undefined
  ) {
    if (!verticalResults) {
      return new Section();
    }

    const verticalKey = verticalResults.verticalKey || verticalKeyFromRequest;

    return new Section(
      {
        verticalConfigId: verticalKey,
        resultsCount: verticalResults.resultsCount,
        appliedQueryFilters: verticalResults.appliedQueryFilters.map(AppliedQueryFilter.fromCore),
        results: verticalResults.results.map(result => {
          return Result.fromCore(result, formatters, verticalKey);
        })
      },
      urls[verticalKey],
      resultsContext
    );
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
