/** @module FilterView */

import Filter from './filter';
import { AnswersCoreError } from '../errors/errors';
import FilterCombinators from './filtercombinators';
import BasicFilterView from './basicfilterview';

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
   * Gets all stored {@link FilterMetadata}, flattened into an array of depth 1.
   * @returns {Array<FilterMetadata>}
   */
  getMetadata () {
    return this._filterViews.map(fv => fv.getMetadata()).flat();
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
}
