/** @module SimpleFilterNode */

import FilterView from './filterview';

/**
 * A SimpleFilterNode represents a single, atomic filter.
 */
export default class SimpleFilterNode {
  constructor (filterNode = {}) {
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
   * Returns the filter view of this node.
   * @returns {Array<FilterView>}
   */
  getFilterViews () {
    return [ this.filterView ];
  }

  /**
   * Creates a filterNode from the given data.
   * @param {Object|FilterNode} filterNode
   * @returns {FilterNode}
   */
  static from (filterNode) {
    return new SimpleFilterNode(filterNode);
  }

  /**
   * Creates a filterNode from the given {@link FilterView}.
   * @param {Object|FilterView} filterView
   * @returns {FilterNode}
   */
  static fromFilterView (filterView) {
    return new SimpleFilterNode({ filterView: filterView });
  }
}
