/** @module FilterView */

import Filter from './filter';
import FilterMetadata from './filtermetadata';

/**
 * Contains a {@link Filter} and associated metadata.
 */
export default class FilterView {
  constructor (filter = {}, metadata = {}) {
    /**
     * The exactly formatted filter to send to the backend.
     * @type {Filter}
     */
    this.filter = new Filter(filter);

    /**
     * Metadata for the filter, and is an object of
     * field display name to array of field values.
     * @type {FilterMetadata}
     */
    this.metadata = new FilterMetadata(metadata);
    Object.freeze(this);
  }

  /**
   * Wrap filterView data in the FilterView class
   * @param {Object} filterView
   */
  static from (filterView) {
    return new FilterView(filterView.filter, filterView.metadata);
  }

  /**
   * Combines multiple filters if more than one is provided.
   * @param  {...FilterView} filterViews
   */
  static combineFilterViews (...filterViews) {
    if (filterViews.length === 0) {
      return {};
    } else if (filterViews.length === 1) {
      return filterViews[0];
    } else {
      const metadata = FilterMetadata.combine(filterViews.map(fv => fv.metadata));
      const filters = filterViews.map(fv => fv.filter);
      return new FilterView(Filter.and(...filters), metadata);
    }
  }
}
