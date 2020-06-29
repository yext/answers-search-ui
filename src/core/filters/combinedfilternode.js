/** @module CombinedFilterNode */

import Filter from '../models/filter';
import FilterCombinators from './filtercombinators';
import FilterNode from './filternode';

/**
 * A CombinedFilterNode represents a combined filter.
 * A combined filter is a set of filters combined with a {@link FilterCombinators}
 * ($and or $or). Since a combined filter is just a set of other filters,
 * it does not have its own {@link FilterMetadata}, and its filter is dervied from
 * its children.
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
   * Returns the metadata associated with this node's filter.
   * Because a combined filter's purpose is solely to join together other filters,
   * and does not have its own filter, this value is always null.
   * @returns {null}
   */
  getMetadata () {
    return null;
  }

  /**
   * Returns this node's children.
   * @returns {Array<FilterNode>}
   */
  getChildren () {
    return this.children;
  }

  /**
   * Recursively get all of the leaf SimpleFilterNodes.
   * @returns {Array<SimpleFilterNode>}
   */
  getSimpleDescendants () {
    return this.getChildren().flatMap(fn => fn.getSimpleDescendants());
  }

  /**
   * Removes this filter node from the FilterRegistry by calling remove on each of its
   * child FilterNodes.
   */
  remove () {
    this.children.forEach(child => {
      child.remove();
    });
  }
}
