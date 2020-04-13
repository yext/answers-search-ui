/** @module FilterNode */

/**
 * Represents a single node in the {@link FilterRegistry}.
 * Implemented by {@link SimplerFilterNode} and {@link CombinedFilterNode}.
 */
export default class FilterNode {
  /**
   * Returns the filter associated with this node.
   * @returns {Filter}
   */
  getFilter () {}

  /**
   * Returns the filter views associated with this node.
   * @returns {Array<FilterView>}
   */
  getFilterViews () {}

  /**
   * Returns the children of this node.
   * @returns {Array<FilterNode>}
   */
  getChildren () {}
}
