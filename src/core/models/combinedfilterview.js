/** @module FilterView */

import Filter from './filter';
import { AnswersCoreError } from '../errors/errors';
import FilterCombinators from './filtercombinators';
import BasicFilterView from './basicfilterview';
import StorageKeys from '../storage/storagekeys';

/**
 * Contains {@link FilterView}(s), and the way that they are associated with each other.
 * Implements {@link FilterView}.
 */
export default class CombinedFilterView {
  constructor (filterViews = [], combinator) {
    /**
     * The filter to send to the backend.
     * @type {FilterView}
     */
    this._filterViews = filterViews;

    /**
     * The way that the filters are combined together.
     * @type {FilterCombinator}
     */
    this._combinator = combinator;
    Object.freeze(this);
  }

  /**
   * Gets all stored {@link BasicFilterView}, flattened into an array of depth 1.
   * @returns {Array<BasicFilterView>}
   */
  getBasicFilterViews () {
    return this._filterViews.map(fv => fv.getBasicFilterViews()).flat();
  }

  /**
   * Gets all stored filterViews, flattened into an array of depth 1.
   * @returns {Filter}
   */
  getFilter () {
    switch (this._combinator) {
      case FilterCombinators.AND:
        return Filter.and(...this._filterViews.map(fv => fv.getFilter()));
      case FilterCombinators.OR:
        return Filter.or(...this._filterViews.map(fv => fv.getFilter()));
      default:
        throw new AnswersCoreError(`Unrecognized filter combinator ${this._combinator}`);
    }
  }

  /**
   * Creates a combined filter view, if given more than one {@link FilterView}.
   * @param {Array<FilterView>} filterViews
   * @param {string} combinator
   */
  static from (filterViews = [], combinator) {
    if (filterViews.length === 0) {
      return BasicFilterView.empty();
    } else if (filterViews.length === 1) {
      return filterViews[0];
    }
    return new CombinedFilterView(filterViews, combinator);
  }

  /**
   * OR {@link BasicFilterViews} with the same keys, then AND the resulting {@link CombinedFilterViews}
   * @param  {Array<BasicFilterViews>} filterViews The filterViews to group
   * @returns {CombinedFilterView}
   */
  static group (filterViews) {
    const groupedByKey = {};
    for (const fv of filterViews) {
      const key = Filter.getFilterKey(fv.getFilter());
      if (!groupedByKey[key]) {
        groupedByKey[key] = [];
      }
      groupedByKey[key].push(fv);
    }

    const combinedFilters = Object.values(groupedByKey).map(groupedFilterViews =>
      CombinedFilterView.from(groupedFilterViews, FilterCombinators.OR)
    );
    return new CombinedFilterView(combinedFilters, FilterCombinators.AND);
  }

  static fromGlobalStorage (globalStorage) {
    const allFilterViews = globalStorage.getAll(StorageKeys.FILTER_VIEW) || [];
    return CombinedFilterView.from(allFilterViews, FilterCombinators.AND);
  }
}
