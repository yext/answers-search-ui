/** @module SimpleFilterNode */

import FilterView from './filterview';
import FilterNode from './filternode';

/**
 * A SimpleFilterNode represents a single, atomic filter.
 * An atomic filter is a filter that filters by a single value on a single field id,
 * and does not contain any children filters.
 * This is an implementation of {@link FilterNode}.
 */
export default class SimpleFilterNode extends FilterNode {
  constructor (filterNode = {}) {
    super();
    const { filterView } = filterNode;

    /**
     * @type {FilterView}
     */
    this.filterView = new FilterView(filterView);
    Object.freeze(this);
  }

  /**
   * Returns the filter associated with this node.
   * @type {Filter}
   */
  getFilter () {
    return this.filterView.filter;
  }

  /**
   * Returns the children associated with this node (no children).
   * @returns {Array<FilterNode>}
   */
  getChildren () {
    return [];
  }

  /**
   * Returns the filter view of this node.
   * @returns {Array<FilterView>}
   */
  getFilterViews () {
    return [ this.filterView ];
  }
}
