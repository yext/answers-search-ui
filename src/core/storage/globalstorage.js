/** @module GlobalStorage */

import ModuleData from './moduledata';
import { AnswersStorageError } from '../errors/errors';
import StorageKeys from './storagekeys';
import CombinedFilterNode from '../filters/combinedfilternode';
import SimpleFilterNode from '../filters/simplefilternode';

/**
 * Storage is a container around application state.
 * It exposes an interface for CRUD operations as well as listening
 * for stateful changes.
 */
export default class GlobalStorage {
  constructor () {
    this._moduleDataContainer = {};
    this._futureListeners = {};
  }

  /**
   * Set the data in storage with the given key to the provided data,
   * completely overwriting any existing data.
   * @param {string} key the storage key to set
   * @param {*} data the data to set
   */
  set (key, data) {
    this._initDataContainer(key, data);
    this._moduleDataContainer[key].set(data);
  }

  /**
   * Add all key/value pairs in the provided map to the storage
   * @param {*} data The key/value pairs to set in the storage
   */
  setAll (data) {
    for (const [key, val] of Object.entries(data)) {
      if (key === StorageKeys.QUERY || key === StorageKeys.FACET_FILTER_NODE) {
        continue;
      }
      this.set(key, val);
    }

    if (data[StorageKeys.FACET_FILTER_NODE]) {
      this._applyPersistedFacets(data[StorageKeys.FACET_FILTER_NODE]);
      this.set(StorageKeys.FORCE_USE_FACETS_ONCE, true);
    }

    // Update query last since it triggers a search
    // TODO: move listeners up so all of storage can be updated at the same time
    if (data[StorageKeys.QUERY]) {
      this.set(StorageKeys.QUERY, data[StorageKeys.QUERY]);
    }
  }

  _applyPersistedFacets (persistedFacets) {
    const rawNodes = JSON.parse(persistedFacets) || [];
    const filterNodify = node => {
      if (node.children && node.children.length) {
        node.children = node.children.map(childNode => {
          return filterNodify(childNode);
        });
        return new CombinedFilterNode(node);
      }
      return new SimpleFilterNode(node);
    };
    const filterNodes = rawNodes.map(filterNodify);
    this.set(StorageKeys.FACET_FILTER_NODE, filterNodes);
  }

  _initDataContainer (key, data) {
    if (key === undefined || key === null || typeof key !== 'string') {
      throw new AnswersStorageError('Invalid storage key provided', key, data);
    }
    if (data === undefined) {
      throw new AnswersStorageError('No data provided', key, data);
    }

    if (this._moduleDataContainer[key] === undefined) {
      this._moduleDataContainer[key] = new ModuleData(key);
      this._applyFutureListeners(key);
    }
  }

  getState (moduleId) {
    if (this._moduleDataContainer[moduleId]) {
      return this._moduleDataContainer[moduleId].raw();
    }
    return null;
  }

  getAll (key) {
    const data = [];
    for (const dataKey of Object.keys(this._moduleDataContainer)) {
      if (dataKey.startsWith(key) && this._moduleDataContainer[dataKey].raw() !== null) {
        data.push(this._moduleDataContainer[dataKey].raw());
      }
    }
    return data;
  }

  /**
   * Remove the data in storage with the given key to the provided data,
   * @param {string} key the storage key to delete
   */
  delete (key) {
    // Note: Do we need to clean up listeners here?
    delete this._moduleDataContainer[key];
  }

  on (evt, moduleId, cb) {
    let moduleData = this._moduleDataContainer[moduleId];
    if (moduleData === undefined) {
      if (this._futureListeners[moduleId] === undefined) {
        this._futureListeners[moduleId] = [];
      }

      this._futureListeners[moduleId].push({
        event: evt,
        cb: cb
      });

      return;
    }

    this._moduleDataContainer[moduleId].on(evt, cb);
    return this;
  }

  off (evt, moduleId, cb) {
    let moduleData = this._moduleDataContainer[moduleId];
    if (moduleData === undefined) {
      if (this._futureListeners[moduleId] !== undefined) {
        this._futureListeners[moduleId].pop();
      }

      return this;
    }

    this._moduleDataContainer[moduleId].off(evt, cb);
    return this;
  }

  _applyFutureListeners (moduleId) {
    let futures = this._futureListeners[moduleId];
    if (!futures) {
      return;
    }

    for (let i = 0; i < futures.length; i++) {
      let future = futures[i];
      this.on(future.event, moduleId, future.cb);
    }
    delete this._futureListeners[moduleId];
  }
}
