/** @module FilterRegistry */

import Facet from '../models/facet';
import StorageKeys from '../storage/storagekeys';
import FilterNodeFactory from './filternodefactory';
import { FilterCombinator } from '@yext/search-core';

/** @typedef {import('../storage/storage').default} Storage */

/**
 * FilterRegistry is a structure that manages static {@link Filter}s and {@link Facet} filters.
 *
 * Static filters and facet filters are stored within storage using FilterNodes.
 */
export default class FilterRegistry {
  constructor (storage, availableFieldIds = []) {
    /**
     * FilterRegistry uses {@link Storage} for storing FilterNodes.
     * Each node is given a unique key in storage.
     * @type {Storage}
     */
    this.storage = storage;

    /**
     * All available field ids for the current facet filters, including
     * field ids for unused but available filters.
     * @type {Array<string>}
     */
    this.availableFieldIds = availableFieldIds;
  }

  /**
   * Returns an array containing all of the filternodes stored in storage.
   * @returns {Array<FilterNode>}
   */
  getAllFilterNodes () {
    const storageFilterNodes = [
      ...this.getStaticFilterNodes(),
      ...this.getFacetFilterNodes()
    ];
    const locationRadiusFilterNode = this.getFilterNodeByKey(StorageKeys.LOCATION_RADIUS_FILTER_NODE);
    if (locationRadiusFilterNode) {
      storageFilterNodes.push(locationRadiusFilterNode);
    }
    return storageFilterNodes;
  }

  /**
   * Get all of the {@link FilterNode}s for static filters.
   * @returns {Array<FilterNode>}
   */
  getStaticFilterNodes () {
    const staticFilterNodes = [];
    this.storage.getAll().forEach((value, key) => {
      if (key.startsWith(StorageKeys.STATIC_FILTER_NODES)) {
        staticFilterNodes.push(value);
      }
    });
    return staticFilterNodes;
  }

  /**
   * Get all of the active {@link FilterNode}s for facets.
   * @returns {Array<FilterNode>}
   */
  getFacetFilterNodes () {
    return this.storage.get(StorageKeys.FACET_FILTER_NODES) || [];
  }

  /**
   * Gets the static filters as a {@link Filter|CombinedFilter} to send to the search-core
   *
   * @returns {import('@yext/search-core').StaticFilter | null}
   * Returns null if no filters with filtering logic are present.
   */
  getStaticFilterPayload () {
    const filterNodes = this.getStaticFilterNodes()
      .filter(filterNode => {
        return filterNode.getChildren().length > 0 || filterNode.getFilter().getFilterKey();
      });
    return filterNodes.length > 0
      ? this._transformFilterNodes(filterNodes, FilterCombinator.AND)
      : null;
  }

  /**
   * Combines together all static filter nodes in the same shape that would
   * be sent to the API.
   *
   * @returns {FilterNode}
   */
  getAllStaticFilterNodesCombined () {
    const filterNodes = this.getStaticFilterNodes();
    const totalNode = FilterNodeFactory.and(...filterNodes);
    return totalNode;
  }

  /**
   * Transforms a list of filter nodes {@link CombinedFilterNode} or {@link SimpleFilterNode} to
   * search-core's {@link Filter} or {@link CombinedFilter}
   *
   * @param {Array<CombinedFilterNode|SimpleFilterNode>} filterNodes
   * @param {FilterCombinator} combinator from search-core
   * @returns {import('@yext/search-core').StaticFilter} from search-core
   */
  _transformFilterNodes (filterNodes, combinator) {
    const filters = filterNodes.flatMap(filterNode => {
      if (filterNode.children) {
        return this._transformFilterNodes(filterNode.children, filterNode.combinator);
      }

      return this._transformSimpleFilterNode(filterNode);
    });

    return filters.length === 1
      ? filters[0]
      : {
          kind: combinator === FilterCombinator.OR ? 'disjunction' : 'conjunction',
          filters: filters,
          combinator: combinator
        };
  }

  /**
   * Transforms a {@link SimpleFilterNode} to search-core's {@link Filter} or {@link CombinedFilter}
   * if there are multiple matchers.
   *
   * @param {SimpleFilterNode} filterNode
   * @returns {import('@yext/search-core').StaticFilter}
   */
  _transformSimpleFilterNode (filterNode) {
    const fieldId = Object.keys(filterNode.filter)[0];
    const filterComparison = filterNode.filter[fieldId];
    const matchers = Object.keys(filterComparison);
    if (matchers.length === 1) {
      const matcher = matchers[0];
      const value = filterComparison[matcher];
      /** @type {import('@yext/search-core').FieldValueStaticFilter} */
      return {
        kind: 'fieldValue',
        fieldId: fieldId,
        matcher: matcher,
        value: value
      };
    } else if (matchers.length > 1) {
      /** @type {import('@yext/search-core').FieldValueStaticFilter[]} */
      const childFilters = matchers.map(matcher => ({
        kind: 'fieldValue',
        fieldId: fieldId,
        matcher: matcher,
        value: filterComparison[matcher]
      }));
      /** @type {import('@yext/search-core').ConjunctionStaticFilter} */
      return {
        combinator: FilterCombinator.AND,
        kind: 'conjunction',
        filters: childFilters
      };
    }
  }

  /**
   * Transforms a {@link Filter} into search-core's {@link FacetOption}
   *
   * @param {Filter} filter
   * @returns {FacetOption} from search-core
   */
  _transformSimpleFilterNodeIntoFacetOption (filter) {
    const fieldId = Object.keys(filter)[0];
    const filterComparison = filter[fieldId];
    const matcher = Object.keys(filterComparison)[0];
    const value = filterComparison[matcher];
    return {
      matcher: matcher,
      value: value
    };
  }

  /**
   * Combines the active facet FilterNodes into a single Facet
   *
   * @returns {Facet}
   */
  _createFacetsFromFilterNodes () {
    const getFilters = fn => fn.getChildren().length
      ? fn.getChildren().flatMap(getFilters)
      : fn.getFilter();
    const filters = this.getFacetFilterNodes().flatMap(getFilters);
    return Facet.fromFilters(this.availableFieldIds, ...filters);
  }

  /**
   * Returns the current Facets state.
   *
   * @returns {Facet}
   */
  getFacets () {
    const hasFacetFilterNodes = this.storage.has(StorageKeys.FACET_FILTER_NODES);
    return hasFacetFilterNodes
      ? this._createFacetsFromFilterNodes()
      : this.storage.get(StorageKeys.PERSISTED_FACETS) || {};
  }

  /**
   * Gets the facet filters as an array of Filters to send to the search-core.
   *
   * @returns {Facet[]} from search-core
   */
  getFacetsPayload () {
    const facets = this.getFacets();
    const coreFacets = Object.entries(facets).map(([fieldId, filterArray]) => {
      return {
        fieldId: fieldId,
        options: filterArray.map(this._transformSimpleFilterNodeIntoFacetOption)
      };
    });

    return coreFacets;
  }

  /**
   * Get the FilterNode with the corresponding key. Defaults to null.
   * @param {string} key
   */
  getFilterNodeByKey (key) {
    return this.storage.get(key);
  }

  /**
   * Sets the specified {@link FilterNode} under the given key.
   * Will replace a preexisting node if there is one.
   * @param {string} key
   * @param {FilterNode} filterNode
   */
  setStaticFilterNodes (key, filterNode) {
    this.storage.set(`${StorageKeys.STATIC_FILTER_NODES}.${key}`, filterNode);
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
    this.storage.set(StorageKeys.FACET_FILTER_NODES, filterNodes);
  }

  /**
   * Sets the locationRadius filterNode. There may only be one locationRadius active
   * at a time.
   * @param {FilterNode} filterNode
   */
  setLocationRadiusFilterNode (filterNode) {
    this.storage.set(StorageKeys.LOCATION_RADIUS_FILTER_NODE, filterNode);
  }

  /**
   * Deletes the static FilterNode with this namespace.
   * @param {string} key
   */
  clearStaticFilterNode (key) {
    this.storage.delete(`${StorageKeys.STATIC_FILTER_NODES}.${key}`);
  }

  /**
   * Deletes all facet FilterNodes.
   */
  clearFacetFilterNodes () {
    this.storage.delete(StorageKeys.FACET_FILTER_NODES);
  }

  /**
   * Deletes all FilterNodes in storage.
   */
  clearAllFilterNodes () {
    this.storage.delete(StorageKeys.LOCATION_RADIUS_FILTER_NODE);
    this.clearFacetFilterNodes();
    this.storage.getAll().forEach((value, key) => {
      if (key.startsWith(StorageKeys.STATIC_FILTER_NODES)) {
        this.storage.delete(key);
      }
    });
  }
}
