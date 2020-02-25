/** @module FacetView */

import Facet from './facet';

/**
 * Contains a {@link Facet} and associated metadata.
 */
export default class FacetView {
  constructor (facet, metadatas) {
    /**
     * The exactly formatted filter to send to the backend.
     * @type {Facet}
     */
    this.facet = facet;

    /**
     * Metadata for the filter.
     * @type {Array<FilterMetadata>}
     */
    this.metadatas = metadatas;
    Object.freeze(this);
  }

  /**
   * Create a facet filter view from a list of FilterViews
   * @param  {...FilterView} filterViews The filters to use in this facet
   * @returns {Facet}
   */
  static fromFilterViews (availableFieldIds, ...filterViews) {
    const filters = filterViews.map(fv => fv.filter);
    const metadatas = filterViews.flatMap(fv => fv.metadatas);
    return new FacetView(Facet.fromFilterViews(availableFieldIds, ...filters), metadatas);
  }
}
