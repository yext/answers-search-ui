/** @module FilterView */

import Filter from './filter';

/**
 * Contains a {@link Filter} and associated metadata.
 */
export default class FilterView {
  constructor (filter, ...metadatas) {
    /**
     * The exactly formatted filter to send to the backend.
     * @type {Filter}
     */
    this.filter = filter;

    /**
     * Metadata for the filter.
     * @type {FilterMetadata}
     */
    this.metadatas = metadatas.map(md => new FilterMetadata(md.displayField, md.displayValues));
    Object.freeze(this);
  }

  /**
   * Ands together multiple filterViews.
   * @param  {...FilterView} filterViews
   */
  static and (...filterViews) {
    const groupedMetadata = {};
    filterViews.forEach(fv => {
      const metadatas = fv.metadatas;
      metadatas.forEach(md => {
        const { displayField, displayValues } = md;
        if (!groupedMetadata[displayField]) {
          groupedMetadata[displayField] = [];
        }
        groupedMetadata[displayField].push(...displayValues);
      });
    });
    const metadatas = Object.keys(groupedMetadata).map(displayField =>
      new FilterMetadata({
        displayField,
        displayValues: groupedMetadata[displayField]
      })
    );
    const filters = filterViews.map(fv => fv.filter);
    return new FilterView(Filter.and(...filters), ...metadatas);
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

class FilterMetadata {
  constructor (displayField, displayValues) {
    /**
     * Display string for the field name.
     * @type {string}
     */
    this.displayField = displayField;

    /**
     * Display values for the filter's metadata.
     * @type {Array<string>}
     */
    this.displayValues = [ displayValues ].flat();

    Object.freeze(this);
  }
}
