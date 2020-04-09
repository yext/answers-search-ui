/** @module FilterRegistry */

import Filter from '../models/filter';
import Facet from '../models/facet';
import FilterView from './filterview';

export default class FilterRegistry {
  constructor (filterNodeMap = {}, facetFilterViews = {}, availableFieldIds = []) {
    /**
     * Map of filter namespace to FilterNode.
     * @type {Object<string, FilterNode>}
     */
    this.filterNodeMap = filterNodeMap;

    /**
     * Array of filter views used to generate the facets.
     * Facets don't have a tree structure so we can just
     * use an array.
     * Because the search response only sends back one
     * set of facets, it only makes sense for the front-end
     * to have to worry about one set.
     * @type {Array<FilterView>}
     */
    this.facetFilterViews = facetFilterViews;

    /**
     * Used when building the request facet.
     * @type {Array<string>}
     */
    this.availableFieldIds = availableFieldIds;
  }

  getFilterViews () {
    const _getFilterViews = node => {
      if (node.filterView) {
        return [ node.filterView ];
      }
      return node.children.flatMap(_getFilterViews);
    };
    return Object.values(this.filterNodeMap).flatMap(node => _getFilterViews(node));
  }

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

  getRequestFacet () {
    return JSON.stringify(this._getRequestFacet());
  }

  _getRequestFacet () {
    const filters = this.facetFilterViews.map(fv => fv.filter);
    return Facet.fromFilters(this.availableFieldIds, ...filters);
  }

  setFilterNode (key, filterNode) {
    this.filterNodeMap[key] = filterNode;
  }

  setFacetFilterViews (availableFieldIds = [], ...filterViews) {
    this.availableFieldIds = availableFieldIds;
    this.facetFilterViews = filterViews.map(fv => new FilterView(fv));
  }
}
