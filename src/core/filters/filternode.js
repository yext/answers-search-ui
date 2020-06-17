/** @module FilterNode */

/**
 * A FilterNode represents a single node in a filter tree.
 * Each filter node has an associated filter, containing the filter
 * data to send in a request, any additional filter metadata for display,
 * and any children nodes.
 *
 * Implemented by {@link SimpleFilterNode} and {@link CombinedFilterNode}.
 */
export default class FilterNode {
  /**
   * Returns this node's filter.
   * @returns {Filter}
   */
  getFilter () {}

  /**
   * Returns the metadata for this node's filter.
   * @returns {FilterMetadata}
   */
  getMetadata () {}

  /**
   * Returns the children of this node.
   * @returns {Array<FilterNode>}
   */
  getChildren () {}

  /**
   * Recursively get all of the leaf SimpleFilterNodes.
   * @returns {Array<SimpleFilterNode>}
   */
  getSimpleDescendants () {}

  /**
   * Remove this FilterNode from the FilterRegistry.
   */
  remove () {}
}
