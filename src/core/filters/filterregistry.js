/** @module FilterRegistry */

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
   * Gets the static filters as a {@link CombinedFilter} to send to the answers-core
   */
  getStaticFilterPayload () {
    const filterNodes = this.getStaticFilterNodes();

    const transformedFilterNodes = filterNodes.map(filterNode => {
      return this._transformFilterNode(filterNode);
    }).filter(filter => filter);

    if (transformedFilterNodes.length > 1) {
      return {
        combinator: '$and',
        filters: transformedFilterNodes
      };
    }
    return transformedFilterNodes[0];
  }

  /**
   * Transforms a filter node {@link CombinedFilterNode} or {@link SimpleFilterNode} to
   * answers-core's {@link SimpleFilter} or {@link CombinedFilter}
   *
   * @param {CombinedFilterNode|SimpleFilterNode} filterNode
   * @returns {CombinedFilter|SimpleFilter}
   */

  _transformFilterNode (filterNode) {
    if (filterNode.children) {
      return this._recurseCombinedFilterNodes(filterNode.children, filterNode.combinator);
    }

    // All static filters come through this code path, even if the filters have not been
    // interacted with. We should ignore filters that effectively don't filter anything.
    if (!filterNode.filter || Object.entries(filterNode.filter).length === 0) {
      return;
    }

    return this._transformSimpleFilterNode(filterNode);
  }

  /**
   * Converts a list of combined and simple filter nodes to the answers-core library's
   * {@link CombinedFilter}.
   *
   * @param {Array<SimpleFilterNode|CombinedFilterNode>} filterNodes
   * @param {string} combinator
   * @returns {CombinedFilter} from the answers-core library
   */
  _recurseCombinedFilterNodes (filterNodes, combinator) {
    return {
      filters: filterNodes.flatMap(filterNode => {
        return this._transformFilterNode(filterNode);
      }).filter(filter => filter),
      combinator: combinator
    };
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
   * Gets the facet filters as an array of SimpleFilters to send to the answers-core.
   *
   * @returns {SimpleFilter[]}
   */
  getFacetFilterPayload () {
    return this.getFacetFilterNodes()
      .flatMap(filterNode => filterNode.children || filterNode)
      .map(simpleFilterNode => simpleFilterNode.filter);
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
