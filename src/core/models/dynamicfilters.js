/** @module DynamicFilters */

import ResultsContext from '../storage/resultscontext';

/**
 * Model representing a set of dynamic filters
 */
export default class DynamicFilters {
  constructor (data) {
    /**
     * The list of facets this model holds
     * @type {DisplayableFacet[]} from search-core
     */
    this.filters = data.filters || [];

    /**
     * The {@link ResultsContext} of the facets.
     * @type {ResultsContext}
     */
    this.resultsContext = data.resultsContext;
    Object.freeze(this);
  }

  /**
   * Organize 'facets' from the search-core into dynamic filters
   * @param {DisplayableFacet[]} facets from search-core
   * @param {ResultsContext} resultsContext
   * @returns {DynamicFilters}
   */
  static fromCore (facets = [], resultsContext = ResultsContext.NORMAL) {
    return new DynamicFilters({
      filters: facets,
      resultsContext: resultsContext
    });
  }
}
