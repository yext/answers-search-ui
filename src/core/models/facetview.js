/** @module FacetView */

import Facet from './facet';

/**
 * Contains a {@link Facet} and associated metadata.
 */
export default class FacetView {
  constructor (filterViews = [], availableFieldIds = []) {
    /**
     * A list of all the filter views in this facet.
     * @type {Array<FilterView>}
     */
    this._filterViews = filterViews;

    /**
     * List of available field ids used in this facet.
     * @type {FilterMetadata}
     */
    this._availableFieldIds = availableFieldIds;
    Object.freeze(this);
  }

  /**
   * @returns {Facet}
   */
  getFacet () {
    const filters = this._filterViews.map(fv => fv.getFilter());
    return Facet.fromFilters(this._availableFieldIds, filters);
  }

  /**
   * @returns {Array<FilterMetadata>}
   */
  getMetadata () {
    return this._filterViews.map(fv => fv.getMetadata()).flat();
  }

  /**
   * Create a facet filter view from a list of FilterViews
   * @param {<Array<string>} availableFieldIds field ids used in the facet
   * @param  {...FilterView} filterViews The filters to use in this facet
   * @returns {Facet}
   */
  static fromFilterViews (availableFieldIds, ...filterViews) {
    return new FacetView(filterViews, availableFieldIds);
  }
}
