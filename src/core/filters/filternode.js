/** @module FilterNode */

/**
 * A FilterNode represents a single node in a filter tree.
 * Each filter node has an associated filter, containing the filter
 * data to send in a request, an associated filter view for the node,
 * and any children nodes.
 *
 * Implemented by {@link SimplerFilterNode} and {@link CombinedFilterNode}.
 */
export default class FilterNode {
  /**
   * Returns this node's filter.
   * @returns {Filter}
   */
  getFilter () {}

  /**
   * Returns this node's filter view.
   * @returns {FilterView}
   */
  getFilterView () {}

  /**
   * Returns the children of this node.
   * @returns {Array<FilterNode>}
   */
  getChildren () {}
}
