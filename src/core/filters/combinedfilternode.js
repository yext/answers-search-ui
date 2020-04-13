/** @module CombinedFilterNode */

import Filter from '../models/filter';
import FilterCombinators from './filtercombinators';
import FilterNode from './filternode';

/**
 * A CombinedFilterNode represents a combined filter. They do not have their own filterView,
 * and instead are defined by their children.
 * This is an implementation of {@link FilterNode}.
 */
export default class CombinedFilterNode extends FilterNode {
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
   * Returns the filter created by combining this node's children.
   * @type {Filter}
   */
  getFilter () {
    const filters = this.children.map(childNode => childNode.getFilter());
    switch (this.combinator) {
      case (FilterCombinators.AND):
        return Filter.and(...filters);
      case (FilterCombinators.OR):
        return Filter.or(...filters);
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
   * Returns the children associated with this node.
   * @returns {Array<FilterNode>}
   */
  getChildren () {
    return this.children;
  }
}
