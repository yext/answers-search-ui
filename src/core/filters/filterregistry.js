/** @module FilterRegistry */

import FilterNodeFactory from './filternodefactory';
import Facet from '../models/facet';
import StorageKeys from '../storage/storagekeys';

/**
 * FilterRegistry is a structure that manages static {@link Filter}s and {@link Facet} filters.
 *
 * Static filters and facet filters are stored within global storage using FilterNodes.
 */
export default class FilterRegistry {
  constructor (globalStorage, availableFieldIds = [], filterRegistryId) {
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

    /**
     * This FilterRegistry's unique id.
     */
    this.filterRegistryId = filterRegistryId || 'FILTER_REGISTRY';
  }

  /**
   * Get all of the {@link FilterNode}s for static filters.
   * @returns {Array<FilterNode>}
   */
  getStaticFilterNodes () {
    return this.globalStorage.getAll(`${this.filterRegistryId}.${StorageKeys.STATIC_FILTER_NODE}`);
  }

  /**
   * Get all of the active {@link FilterNode}s for facets.
   * @returns {Array<FilterNode>}
   */
  getFacetFilterNodes () {
    return this.globalStorage.getState(`${this.filterRegistryId}.${StorageKeys.FACET_FILTER_NODE}`) || [];
  }

  /**
   * Gets the filter string to send in a search query.
   * TODO: move payload method logic into core.js, since it is only used there.
   * Add something like a getFilterNodeByKey method.
   * @returns {string}
   */
  getStaticFilterPayload () {
    return JSON.stringify(this._getStaticFilterPayload());
  }

  _getStaticFilterPayload () {
    const filterNodes = this.getStaticFilterNodes();
    const totalNode = FilterNodeFactory.and(...filterNodes);
    return totalNode.getFilter();
  }

  /**
   * Gets the facet filter string to send in a search query.
   * @returns {string}
   */
  getFacetFilterPayload () {
    return JSON.stringify(this._getFacetFilterPayload());
  }

  _getFacetFilterPayload () {
    const getFilters = fn => fn.getChildren().length
      ? fn.getChildren().flatMap(getFilters)
      : fn.getFilter();
    const filters = this.getFacetFilterNodes().flatMap(getFilters);
    return Facet.fromFilters(this.availableFieldIds, ...filters);
  }

  /**
   * Gets the locationRadius to send in a search query.
   * @returns {number}
   */
  getLocationRadiusPayload () {
    const filterNode =
      this.globalStorage.getState(`${this.filterRegistryId}.${StorageKeys.LOCATION_RADIUS}`);
    return filterNode.getFilter().value;
  }

  /**
   * Sets the specified {@link FilterNode} under the given key.
   * Will replace a preexisting node if there is one.
   * @param {string} key
   * @param {FilterNode} filterNode
   */
  setStaticFilterNodes (key, filterNode) {
    this.globalStorage.set(`${this.filterRegistryId}.${StorageKeys.STATIC_FILTER_NODE}.${key}`, filterNode);
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
    this.globalStorage.set(`${this.filterRegistryId}.${StorageKeys.FACET_FILTER_NODE}`, filterNodes);
  }

  /**
   * Sets the locationRadius filterNode. There may only be one locationRadius active
   * at a time.
   * @param {FilterNode} filterNode
   */
  setLocationRadiusFilterNode (filterNode) {
    this.globalStorage.set(`${this.filterRegistryId}.${StorageKeys.LOCATION_RADIUS}`, filterNode);
  }
}
