/** @module BasicFilterView */

import Filter from './filter';
import FilterMetadata from './filtermetadata';

/**
 * Contains a {@link Filter} and associated metadata. Implements {@link FilterView}.
 */
export default class BasicFilterView {
  constructor (filter = {}, metadata = {}) {
    /**
     * The filter to send to the backend.
     * @type {Filter}
     */
    this._filter = new Filter(filter);

    /**
     * Metadata for the filter, and is an object of
     * field display name to array of field values.
     * @type {FilterMetadata}
     */
    this._metadata = new FilterMetadata(metadata);
    Object.freeze(this);
  }

  getFilter () {
    return this._filter;
  }

  getMetadata () {
    return this._metadata;
  }

  /**
   * Wrap filterView data in the BasicFilterView class
   * @param {Object} filterView
   * @returns {BasicFilterView}
   */
  static from (filterView) {
    return new BasicFilterView(filterView.filter, filterView.metadata);
  }
}
