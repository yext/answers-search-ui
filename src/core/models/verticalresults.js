/** @module VerticalResults */

import { AnswersCoreError } from '../errors/errors';
import ResultsContext from '../storage/resultscontext';
import Section from './section';
import SearchStates from '../storage/searchstates';

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
   * Form response as if the results from `allResultsForVertical` were the actual
   * results in `results`
   * @param {Object} response The server response
   */
  static _formResponseFromAllResultsForVertical (response) {
    const { results, resultsCount } = response.allResultsForVertical || {};
    return {
      ...response,
      results: results || [],
      resultsCount: resultsCount || 0
    };
  }

  /**
   * Create vertical results from server data
   * @param {Object} response The server response
   * @param {Object.<string, function>} formatters The field formatters to use
   */
  static from (response, formatters, verticalKey) {
    const hasResults = response.results && response.results.length > 0;
    if (!hasResults) {
      const data = Section.from(VerticalResults._formResponseFromAllResultsForVertical(response), null, formatters);
      return new VerticalResults({ ...data,
        verticalConfigId: verticalKey,
        resultsContext: ResultsContext.NO_RESULTS
      });
    } else {
      const data = Section.from(response, null, formatters);
      return new VerticalResults({ ...data,
        verticalConfigId: verticalKey,
        resultsContext: ResultsContext.NORMAL
      });
    }
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
