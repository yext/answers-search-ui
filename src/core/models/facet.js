/** @module Facet */

/**
 * Model representing a facet filter with the format of
 * {
 *   "field_name": [ Filters... ],
 *   ...
 * }
 *
 * @see {@link Filter}
 */
export default class FacetView {
  constructor (facet = {}, metadata) {
    this.facet = facet;
    this.metadata = metadata;
    Object.freeze(this);
  }

  /**
   * Create a facet filter from a list of FilterViews
   * @param  {...FilterViews} filterViews The filters to use in this facet
   * @returns {Facet}
   */
  static fromFilterViews (availableFieldIds, ...filterViews) {
    const groups = {};
    availableFieldIds.forEach(fieldId => {
      groups[fieldId] = [];
    });
    const flatFilters = filterViews.flatMap(f => f.filter.$or || f.filter);
    flatFilters.forEach(f => {
      const key = Object.keys(f)[0];
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(f);
    });
    const metadata = filterViews.map(f => f.metadata);
    return new FacetView(groups, metadata);
  }
}
