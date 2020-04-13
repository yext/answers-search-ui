/** @module CombinedFilterNode */

import Filter from '../models/filter';
import FilterCombinators from './filtercombinators';
import SimpleFilterNode from './simplefilternode';

/**
 * A CombinedFilterNode represents a combined filter. They do not have their own filterView,
 * and instead are defined by their children.
 */
export default class CombinedFilterNode {
  constructor (filterNode = {}) {
    const { combinator, children } = filterNode;

    /**
     * @type {string}
     */
    this.combinator = combinator;

    /**
     * @type {Array<FilterNode>}
     */
    this.children = children || [];
    Object.freeze(this);
  }

  /**
   * Returns the filter associated with this node. Since this is node has children
   * we need to return a combined filter.
   * @type {Filter}
   */
  getFilter () {
    switch (this.combinator) {
      case (FilterCombinators.AND):
        return Filter.and(...this.children.map(childNode => childNode.getFilter()));
      case (FilterCombinators.OR):
        return Filter.or(...this.children.map(childNode => childNode.getFilter()));
    }
    return Filter.empty();
  }

  /**
   * Returns a flattened array of the filter views associated with this node.
   * @returns {Array<FilterView>}
   */
  getFilterViews () {
    return this.children.flatMap(node => node.getFilterViews());
  }

  /**
   * Creates a filterNode from the given data.
   * @param {Object|FilterNode} filterNode
   * @returns {FilterNode}
   */
  static from (filterNode) {
    return new CombinedFilterNode(filterNode);
  }

  /**
   * Create an AND filter node, with specified children.
   * @param  {...Object|FilterNode} childrenNodes
   * @returns {FilterNode}
   */
  static and (...childrenNodes) {
    return CombinedFilterNode._combine(FilterCombinators.AND, childrenNodes);
  }

  /**
   * Create an OR filter node, with specified children.
   * @param  {...Object|FilterNode} childrenNodes
   * @returns {FilterNode}
   */
  static or (...childrenNodes) {
    return CombinedFilterNode._combine(FilterCombinators.OR, childrenNodes);
  }

  /**
   * Creates a branch filter node with children
   * @param {string} combinator
   * @param {Object|FilterNode} filterNodes
   * @returns {FilterNode}
   */
  static _combine (combinator, filterNodes) {
    if (!filterNodes.length) {
      return new SimpleFilterNode();
    }
    if (filterNodes.length === 1) {
      return new SimpleFilterNode(filterNodes[0]);
    }
    return new CombinedFilterNode({
      combinator: combinator,
      children: filterNodes
    });
  }
}
