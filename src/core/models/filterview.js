/** @module FilterView */

import Filter from './filter';
import FilterMetadata from './filtermetadata';

/**
 * Contains a {@link Filter} and associated metadata.
 */
export default class FilterView {
  constructor (filter, metadata) {
    /**
     * The exactly formatted filter to send to the backend.
     * @type {Filter}
     */
    this.filter = filter;

    /**
     * Metadata for the filter, and is an object of
     * field display name to array of field values.
     * @type {Object}
     */
    this.metadata = metadata;
    Object.freeze(this);
  }

  /**
   * Ands together multiple filterViews.
   * @param  {...FilterView} filterViews
   */
  static and (...filterViews) {
    const metadata = FilterMetadata.combine(filterViews.map(fv => fv.metadata));
    const filters = filterViews.map(fv => fv.filter);
    return new FilterView(Filter.and(...filters), metadata);
  }

  /**
   * Combines multiple filters if more than one is provided, else returns filter.
   * @param  {...FilterView} filterViews
   */
  static combineFilterViews (...filterViews) {
    if (filterViews.length === 0) {
      return {};
    } else if (filterViews.length === 1) {
      return filterViews[0];
    } else {
      return FilterView.and(...filterViews);
    }
  }
}
