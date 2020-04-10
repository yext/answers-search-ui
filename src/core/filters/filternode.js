/** @module FilterNode */

import Filter from '../models/filter';
import FilterView from './filterview';
import FilterCombinators from './filtercombinators';

/**
 * Represents a single node in the {@link FilterRegistry}.
 */
export default class FilterNode {
  /**
   * Returns the filter associated with this node.
   * @type {Filter}
   */
  getFilter () {
    return Filter.empty();
  }

  /**
   * Creates a filterNode from the given data.
   * @param {Object|FilterNode} filterNode
   * @returns {FilterNode}
   */
  static from (filterNode) {
    if (Array.isArray(filterNode.children) && filterNode.children.length > 0) {
      return new _BranchNode(filterNode);
    }
    return new _LeafNode(filterNode);
  }

  /**
   * Create a FilterNode from a single filter view
   * @param {Object|FilterView} filterView
   * @returns {FilterNode}
   */
  static fromFilterView (filterView) {
    return new _LeafNode({ filterView });
  }

  /**
   * Create an AND filter node, with specified children.
   * @param  {...Object|FilterNode} childrenNodes
   * @returns {FilterNode}
   */
  static and (...childrenNodes) {
    return FilterNode._combine(FilterCombinators.AND, childrenNodes);
  }

  /**
   * Create an OR filter node, with specified children.
   * @param  {...Object|FilterNode} childrenNodes
   * @returns {FilterNode}
   */
  static or (...childrenNodes) {
    return FilterNode._combine(FilterCombinators.OR, childrenNodes);
  }

  /**
   * Creates a branch filter node with children
   * @param {string} combinator
   * @param {Object|FilterNode} filterNodes
   * @returns {FilterNode}
   */
  static _combine (combinator, filterNodes) {
    if (!filterNodes.length) {
      return new _LeafNode();
    }
    if (filterNodes.length === 1) {
      return new _LeafNode(filterNodes[0]);
    }
    return new _BranchNode({
      combinator: combinator,
      children: filterNodes
    });
  }
}

/**
 * BranchNodes represent a combined filter. They do not have a filterView,
 * and derive their value from their children.
 */
class _BranchNode extends FilterNode {
  constructor (filterNode = {}) {
    super();
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
}

/**
 * LeafNodes represent a single, atomic filter.
 */
class _LeafNode extends FilterNode {
  constructor (filterNode = {}) {
    super();
    const { filterView } = filterNode;

    /**
     * @type {FilterView}
     */
    this.filterView = filterView && new FilterView(filterView);
    Object.freeze(this);
  }

  /**
   * Returns the filter associated with this node.
   * @type {Filter}
   */
  getFilter () {
    return this.filterView.filter;
  }
}
