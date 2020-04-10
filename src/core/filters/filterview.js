/** @module FilterView */

import Filter from '../models/filter';
import FilterMetadata from './filtermetadata';

/**
 * Container for the data driving a single, atomic filter.
 */
export default class FilterView {
  constructor (filterView = {}) {
    const { filter, metadata } = filterView;

    /**
     * The filter data.
     * @type {Filter}
     */
    this.filter = Filter.from(filter);

    /**
     * Metadata associated with the filter.
     * @type {FilterMetadata}
     */
    this.metadata = new FilterMetadata({
      fieldId: this.filter.getFilterKey(),
      ...metadata
    });
    Object.freeze(this);
  }
}
