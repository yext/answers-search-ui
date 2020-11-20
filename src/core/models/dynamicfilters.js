/** @module DynamicFilters */

/**
 * Model representing a set of dynamic filters
 */
export default class DynamicFilters {
  constructor (data) {
    /**
     * The list of filters this model holds
     * @type {{label: string, fieldId: string, options: object[]}}
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
   * Organize 'facets' from the answers-core into dynamic filters
   * @param {Object[]} response dynamic filter response from the answers-core
   * @returns {DynamicFilters}
   */
  static from (facets = [], resultsContext) {
    const dynamicFilters = facets.map(f => ({
      label: f['displayName'],
      fieldId: f['fieldId'],
      options: f.options.map(o => ({
        label: o['displayName'],
        countLabel: o['count'],
        selected: o['selected'],
        filter: o['filter']
      }))
    }));

    return new DynamicFilters({
      filters: dynamicFilters,
      resultsContext: resultsContext
    });
  }
}
