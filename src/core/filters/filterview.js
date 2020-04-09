/** @module FilterView */

import Filter from '../models/filter';
import FilterMetadata from './filtermetadata';

export default class FilterView {
  constructor (filterView = {}) {
    const { filter, metadata } = filterView;

    this.filter = Filter.from(filter);

    this.metadata = new FilterMetadata({
      fieldId: this.filter.getFilterKey(),
      ...metadata
    });
  }
}
