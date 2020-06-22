/** @module SimpleFilterNode */

import Filter from '../models/filter';
import FilterMetadata from './filtermetadata';
import FilterNode from './filternode';

/**
 * A SimpleFilterNode represents a single, atomic filter.
 * An atomic filter is a filter that filters by a single value on a single field id,
 * and does not contain any children filters.
 */
export default class SimpleFilterNode extends FilterNode {
  constructor (filterNode = {}) {
    super();
    const { filter, metadata, remove } = filterNode;

    /**
     * The filter data.
     * @type {Filter}
     */
    this.filter = Filter.from(filter);

    /**
     * Display metadata associated with the filter data.
     * @type {FilterMetadata}
     */
    this.metadata = new FilterMetadata(metadata);

    /**
     * Remove callback function.
     * @type {Function}
     */
    this._remove = remove || function () {};
    Object.freeze(this);
  }

  /**
   * Returns the filter associated with this node.
   * @type {Filter}
   */
  getFilter () {
    return this.filter;
  }

  /**
   * Returns the children associated with this node (no children).
   * @returns {Array<FilterNode>}
   */
  getChildren () {
    return [];
  }

  /**
   * Returns the filter metadata for this node's filter.
   * @returns {FilterMetadata}
   */
  getMetadata () {
    return this.metadata;
  }

  /**
   * Recursively get all of the leaf SimpleFilterNodes.
   * Since SimpleFilterNodes have no children this just returns itself.
   * @returns {Array<SimpleFilterNode>}
   */
  getSimpleAncestors () {
    return this;
  }

  /**
   * Removes this filter node from the FilterRegistry.
   */
  remove () {
    this._remove();
  }

  /**
   * Returns whether this SimpleFilterNode's filter is equal to another SimpleFilterNode's
   * @param {SimpleFilterNode} node
   * @returns {boolean}
   */
  hasSameFilterAs (node) {
    const filter1 = this.getFilter();
    const filter2 = node.getFilter();
    return filter1.isEqualToSimpleFilter(filter2);
  }
}
