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
export default class Facet {
  constructor (data = {}) {
    Object.assign(this, data);
    Object.freeze(this);
  }

  /**
   * Create a facet filter from a list of Filters
   * @param  {...Filter} filters The filters to use in this facet
   * @returns {Facet}
   */
  static fromFilters (availableFieldIds, ...filters) {
    const groups = {};
    availableFieldIds.forEach(fieldId => {
      groups[fieldId] = [];
    });
    const flatFilters = filters.flatMap(f => f.$or || f);
    flatFilters.forEach(f => {
      const key = Object.keys(f)[0];
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(f);
    });

    return new Facet(groups);
  }

  /**
   * Stringify the facet to send in the request.
   * @param {Facet} facet
   */
  static stringify (facet) {
    return JSON.stringify(facet, (key, value) => {
      if (key !== 'metadata') {
        return value;
      }
    });
  }
}
