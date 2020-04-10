/** @module FilterRegistry */

import Filter from '../models/filter';
import Facet from '../models/facet';
import FilterView from './filterview';
import FilterNode from './filternode';

/**
 * FilterRegistry is a structure that manages {@link Filter}s and {@link Facet}s.
 *
 * Filters are stored in a tree structure, to allow combining of filters with
 * combinators $and and $or.
 *
 * Facets are stored as an array of {@link FilterView}s/
 * Because the search response only sends back one
 * set of facet filters, there can only be one set of active facet filters
 * at a time.
 */
export default class FilterRegistry {
  constructor (filterNodeMap = {}, facetFilterViews = {}, availableFieldIds = []) {
    /**
     * Map of FilterNodes, with each node given a unique key.
     * @type {Object<string, FilterNode>}
     */
    this.filterNodeMap = filterNodeMap;

    /**
     * Array of filter views the define the current facet filters.
     * @type {Array<FilterView>}
     */
    this.facetFilterViews = facetFilterViews;

    /**
     * All available field ids for the current facet filters, including
     * field ids for unused but available filters.
     * @type {Array<string>}
     */
    this.availableFieldIds = availableFieldIds;
  }

  /**
   * Get all of the active {@link FilterView}s. Each {@link FilterView} corresponds
   * to a single atomic filter.
   * @returns {Array<FilterView>}
   */
  getFilterViews () {
    return Object.values(this.filterNodeMap).flatMap(node => node.getFilterViews());
  }

  /**
   * Gets the filter string to send in a search query.
   * @return {string}
   */
  getRequestFilter () {
    return JSON.stringify(this._getRequestFilter());
  }

  _getRequestFilter () {
    const filterNodes = Object.values(this.filterNodeMap);
    if (!filterNodes.length) {
      return Filter.empty();
    } else if (filterNodes.length === 1) {
      return filterNodes[0].getFilter();
    }
    return Filter.and(...filterNodes.map(node => node.getFilter()));
  }

  /**
   * Gets the facet filter string to send in a search query.
   * @return {string}
   */
  getRequestFacet () {
    return JSON.stringify(this._getRequestFacet());
  }

  _getRequestFacet () {
    const filters = this.facetFilterViews.map(fv => fv.filter);
    return Facet.fromFilters(this.availableFieldIds, ...filters);
  }

  /**
   * Sets the specified {@link FilterNode} under the given key.
   * Will replace a preexisting node if there is one.
   * @param {string} key
   * @param {Object|FilterNode} filterNode
   */
  setFilterNode (key, filterNode) {
    this.filterNodeMap[key] = FilterNode.from(filterNode);
  }

  /**
   * Sets the filter views used for the current facet filters.
   * @param {Array<string>} availableFieldIds
   * @param  {Object|FilterView} filterViews
   */
  setFacetFilterViews (availableFieldIds = [], ...filterViews) {
    this.availableFieldIds = availableFieldIds;
    this.facetFilterViews = filterViews.map(fv => new FilterView(fv));
  }
}
