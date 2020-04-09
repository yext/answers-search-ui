/** @module FilterNode */

import Filter from '../models/filter';
import FilterView from './filterview';
import FilterCombinators from './filtercombinators';

export default class FilterNode {
  constructor (filterNode = {}) {
    const { filterView, combinator, children } = filterNode;

    /**
     * @type {FilterView}
     */
    this.filterView = filterView ? new FilterView(filterView) : null;

    /**
     * @type {string}
     */
    this.combinator = combinator;

    /**
     * @type {Array<FilterNode>}
     */
    this.children = children || [];
  }

  getFilter () {
    if (this.filterView) {
      return this.filterView.filter;
    }
    switch (this.combinator) {
      case (FilterCombinators.AND):
        return Filter.and(...this.children.map(childNode => childNode.getFilter()));
      case (FilterCombinators.OR):
        return Filter.or(...this.children.map(childNode => childNode.getFilter()));
    }
    return Filter.empty();
  }

  static fromFilterView (filterView) {
    return new FilterNode({ filterView });
  }

  static and (...filterNodes) {
    return FilterNode._combine(FilterCombinators.AND, filterNodes);
  }

  static or (...filterNodes) {
    return FilterNode._combine(FilterCombinators.OR, filterNodes);
  }

  static _combine (combinator, filterNodes) {
    if (!filterNodes.length) {
      return new FilterNode();
    }
    if (filterNodes.length === 1) {
      return filterNodes[0];
    }
    return new FilterNode({
      combinator: combinator,
      children: filterNodes
    });
  }
}
