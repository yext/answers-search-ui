/** @module FilterNodeFactory */

import FilterCombinators from './filtercombinators';
import SimpleFilterNode from './simplefilternode';
import CombinedFilterNode from './combinedfilternode';

/**
 * FilterNodeFactory is a class containing static helper methods for
 * generating FilterNodes.
 */
export default class FilterNodeFactory {
  /**
   * Create an AND filter node, with specified children.
   * @param  {...FilterNode} childrenNodes
   * @returns {FilterNode}
   */
  static and (...childrenNodes) {
    return FilterNodeFactory._combine(FilterCombinators.AND, childrenNodes);
  }

  /**
   * Create an OR filter node, with specified children.
   * @param  {...FilterNode} childrenNodes
   * @returns {FilterNode}
   */
  static or (...childrenNodes) {
    return FilterNodeFactory._combine(FilterCombinators.OR, childrenNodes);
  }

  /**
   * Creates a combined filter node with the given combinator and children.
   * @param {string} combinator
   * @param {Array<FilterNode>} filterNodes
   * @returns {FilterNode}
   * @private
   */
  static _combine (combinator, filterNodes) {
    const children = filterNodes.filter(fn => fn.getFilter().getFilterKey());
    if (!children.length) {
      return new SimpleFilterNode();
    }
    if (children.length === 1) {
      return children[0];
    }
    return new CombinedFilterNode({
      combinator: combinator,
      children: children
    });
  }

  /**
   * Creates a filterNode from the given data.
   * @param {Object|FilterNode} filterNode
   * @returns {FilterNode}
   */
  static from (filterNode = {}) {
    if (filterNode.children && filterNode.children.length) {
      return new CombinedFilterNode(filterNode);
    }
    return new SimpleFilterNode(filterNode);
  }
}
