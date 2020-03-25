/** @module FacetView */

import Facet from './facet';
import StorageKeys from '../storage/storagekeys';

/**
 * Contains a {@link Facet} and associated metadata.
 */
export default class FacetView {
  constructor (filterViews = [], availableFieldIds = []) {
    /**
     * A list of all the filter views in this facet.
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
    const filters = this.getBasicFilterViews().map(fv => fv.getFilter());
    return Facet.fromFilters(this._availableFieldIds, filters);
  }

  /**
   * @returns {Array<BasicFilterView>}
   */
  getBasicFilterViews () {
    return this._filterViews.map(fv => fv.getBasicFilterViews()).flat();
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

  static fromGlobalStorage (globalStorage) {
    const facets = globalStorage.getAll(StorageKeys.FACET_VIEW) || [];
    const facet = facets.length > 0 ? facets[0] : FacetView.empty();
    return facet;
  }

  static empty () {
    return new FacetView();
  }
}
