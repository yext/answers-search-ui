/** @module FilterRegistry */

import { FilterCombinator } from '@yext/answers-core/dist/models/searchservice/request/CombinedFilter';
import StorageKeys from '../storage/storagekeys';

/**
 * FilterRegistry is a structure that manages static {@link Filter}s and {@link Facet} filters.
 *
 * Static filters and facet filters are stored within global storage using FilterNodes.
 */
export default class FilterRegistry {
  constructor (globalStorage, availableFieldIds = []) {
    /**
     * FilterRegistry uses {@link GlobalStorage} for storing FilterNodes.
     * Each node is given a unique key in global storage.
     */
    this.globalStorage = globalStorage;

    /**
     * All available field ids for the current facet filters, including
     * field ids for unused but available filters.
     * @type {Array<string>}
     */
    this.availableFieldIds = availableFieldIds;
  }

  /**
   * Returns an array containing all of the filternodes stored in global storage.
   * @returns {Array<FilterNode>}
   */
  getAllFilterNodes () {
    const globalStorageFilterNodes = [
      ...this.getStaticFilterNodes(),
      ...this.getFacetFilterNodes()
    ];
    const locationRadiusFilterNode = this.getFilterNodeByKey(StorageKeys.LOCATION_RADIUS);
    if (locationRadiusFilterNode) {
      globalStorageFilterNodes.push(locationRadiusFilterNode);
    }
    return globalStorageFilterNodes;
  }

  /**
   * Get all of the {@link FilterNode}s for static filters.
   * @returns {Array<FilterNode>}
   */
  getStaticFilterNodes () {
    return this.globalStorage.getAll(StorageKeys.STATIC_FILTER_NODE);
  }

  /**
   * Get all of the active {@link FilterNode}s for facets.
   * @returns {Array<FilterNode>}
   */
  getFacetFilterNodes () {
    return this.globalStorage.getState(StorageKeys.FACET_FILTER_NODE) || [];
  }

  /**
   * Gets the static filters as a {@link SimpleFilter|CombinedFilter} to send to the answers-core
   * @returns {CombinedFilter|SimpleFilter|null} Returns null if no filters with
   *                                             filtering logic are present.
   */
  getStaticFilterPayload () {
    const filterNodes = this.getStaticFilterNodes();
    return this._transformFilterNodes(filterNodes, FilterCombinator.AND);
  }

  /**
   * Transforms a filter node {@link CombinedFilterNode} or {@link SimpleFilterNode} to
   * answers-core's {@link SimpleFilter} or {@link CombinedFilter}
   *
   * @param {Array<CombinedFilterNode|SimpleFilterNode>} filterNodes
   * @param {FilterCombinator} combinator from answers-core
   * @returns {CombinedFilter|SimpleFilter|null} Returns null if no filters with
   *                                             filtering logic are present.
   */
  _transformFilterNodes (filterNodes, combinator) {
    const filters = filterNodes.flatMap(filterNode => {
      if (filterNode.children) {
        return this._transformFilterNodes(filterNode.children, filterNode.combinator);
      }

      return !this._isEmpty(filterNode) && this._transformSimpleFilterNode(filterNode);
    }).filter(filter => filter);

    return filters.length > 1
      ? {
        filters: filters,
        combinator: combinator
      }
      : (filters[0] || null);
  }

  /**
   * Transforms a {@link SimpleFilterNode} to answers-core's {@link SimpleFilter}
   *
   * @param {SimpleFilterNode} filterNode
   * @returns {SimpleFilter}
   */
  _transformSimpleFilterNode (filterNode) {
    const fieldId = Object.keys(filterNode.filter)[0];
    const filterComparison = filterNode.filter[fieldId];
    const comparator = Object.keys(filterComparison)[0];
    const comparedValue = filterComparison[comparator];
    return {
      fieldId: fieldId,
      comparator: comparator,
      comparedValue: comparedValue
    };
  }

  /**
   * Determines whether a {@link SimpleFilterNode} has filtering logic or is empty
   *
   * @param {SimpleFilterNode} filterNode
   * @returns {boolean}
   */
  _isEmpty (filterNode) {
    return !filterNode.filter || Object.entries(filterNode.filter).length === 0;
  }

  /**
   * Gets the facet filters as an array of SimpleFilters to send to the answers-core.
   *
   * @returns {SimpleFilter[]} from the answers-core
   */
  getFacetFilterPayload () {
    return this.getFacetFilterNodes()
      .flatMap(filterNode => {
        const childNodes = filterNode.getChildren();
        return childNodes.length > 0 ? childNodes : filterNode;
      })
      .map(simpleFilterNode => simpleFilterNode.getFilter());
  }

  /**
   * Get the FilterNode with the corresponding key. Defaults to null.
   * @param {string} key
   */
  getFilterNodeByKey (key) {
    return this.globalStorage.getState(key);
  }

  /**
   * Sets the specified {@link FilterNode} under the given key.
   * Will replace a preexisting node if there is one.
   * @param {string} key
   * @param {FilterNode} filterNode
   */
  setStaticFilterNodes (key, filterNode) {
    this.globalStorage.set(`${StorageKeys.STATIC_FILTER_NODE}.${key}`, filterNode);
  }

  /**
   * Sets the filter nodes used for the current facet filters.
   *
   * Because the search response only sends back one
   * set of facet filters, there can only be one active facet filter node
   * at a time.
   * @param {Array<string>} availableFieldIds
   * @param {Array<FilterNode>} filterNodes
   */
  setFacetFilterNodes (availableFieldIds = [], filterNodes = []) {
    this.availableFieldIds = availableFieldIds;
    this.globalStorage.set(StorageKeys.FACET_FILTER_NODE, filterNodes);
  }

  /**
   * Sets the locationRadius filterNode. There may only be one locationRadius active
   * at a time.
   * @param {FilterNode} filterNode
   */
  setLocationRadiusFilterNode (filterNode) {
    this.globalStorage.set(StorageKeys.LOCATION_RADIUS, filterNode);
  }

  /**
   * Remove the static FilterNode with this namespace.
   * @param {string} key
   */
  clearStaticFilterNode (key) {
    this.globalStorage.delete(`${StorageKeys.STATIC_FILTER_NODE}.${key}`);
  }

  /**
   * Remove all facet FilterNodes.
   */
  clearFacetFilterNodes () {
    this.globalStorage.delete(StorageKeys.FACET_FILTER_NODE);
  }
}
