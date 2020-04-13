/** @module FilterNode */

/**
 * Represents a single node in the {@link FilterRegistry}.
 * Implemented by {@link SimplerFilterNode} and {@link CombinedFilterNode}
 *
 * @interface
 */
export default class FilterNode {
  /**
   * Returns the filter associated with this node.
   * Overriden by implementing classes below.
   * @returns {Filter}
   */
  getFilter () {}

  /**
   * Returns the filter views associated with this node.
   * Overriden by implementing classes below.
   * @returns {Array<FilterView>}
   */
  getFilterViews () {}
}
