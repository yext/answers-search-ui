/** @module FacetView */

import Facet from './facet';
import FilterMetadata from './filtermetadata';

/**
 * Contains a {@link Facet} and associated metadata.
 */
export default class FacetView {
  constructor (facet = {}, metadata = {}) {
    /**
     * The facet to send to the backend.
     * @type {Facet}
     */
    this.facet = facet;

    /**
     * Metadata for the facet, and is an object of
     * field display name to array of field values.
     * @type {Object}
     */
    this.metadata = metadata;
    Object.freeze(this);
  }

  /**
   * Create a facet filter view from a list of FilterViews
   * @param {<Array<string>} availableFieldIds field ids used in the facet
   * @param  {...FilterView} filterViews The filters to use in this facet
   * @returns {Facet}
   */
  static fromFilterViews (availableFieldIds, ...filterViews) {
    const facet = Facet.fromFilters(availableFieldIds, ...filterViews.map(fv => fv.filter));
    const metadata = FilterMetadata.combine(filterViews.map(fv => fv.metadata));
    return new FacetView(facet, metadata);
  }
}
