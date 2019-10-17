/** @module Storage */

import StorageIndex from './storageindex';
import StorageIndexes from './storageindexes';

import { AnswersStorageError } from '../errors/errors';

import EventEmitter from '../eventemitter/eventemitter';

/**
 * Storage contains all application state.
 *
 * Data is partitioned in indexes, with each index expositing
 * an interface for inserting, updating data, as well as listening
 * to changes.
 */
export default class Storage {
  constructor () {
    /**
     * Storage is partitioned by various indexes.
     * @type {Object<string, StorageIndex>}
     */
    this._indexes = {};
  }

  createIndex(index) {
    if (typeof index !== 'string') {
      throw new AnswersStorageError('Invalid storage index provided', index);
    }

    if (this._indexes[index]) {
      throw new AnswersStorageError('Index already exists!', index);
    }

    this._indexes[index] = new StorageIndex(index);
    return this;
  }

  /**
   * set is a legacy interface for inserting data into storage
   * @deprecated
   */
  set(key, data) {
    return this.insert(StorageIndexes.DEFAULT, key, data);
  }

  /**
   * getState is a legacy interface for retrieving data from storage
   * @deprecated
   */
  getState (key) {
    return this.get(StorageIndexes.DEFAULT, key);
  }

  /**
   * Insert data into the index, completely overwriting any existing data.
   * @param {string} index the storage key to set
   * @param {string} key to assign value to
   * @param {*} data the data to set
   */
  insert (index, key, data) {
    if (typeof index !== 'string') {
      throw new AnswersStorageError('Invalid storage key provided', index, data);
    }

    if (data === undefined || data === null) {
      throw new AnswersStorageError('No data provided', index, data);
    }

    // Facade support for: insert(index, { key: val })
    if (typeof key === 'object') {
      for (const k in key) {
        this._indexes[index].insert(k, key[k])
      }
      return this;
    }

    this._indexes[index].insert(key, data);
    return this;
  }

  get(index, key) {
    if (this._indexes[index]) {
      return this._indexes[index].get(key);
    }
    return null;
  }

  getAll (key) {
    const data = [];
    for (const dataKey of Object.keys(this._indexes)) {
      if (dataKey.startsWith(key) && this._indexes[dataKey].raw() !== null) {
        data.push(this._indexes[dataKey].raw());
      }
    }
    return data;
  }

  on(evt, index, key, cb) {
    if (typeof key === 'function') {
      this._indexes[index].on(evt, key);
      return this;
    }

    this._indexes[index].get(key).on(evt, cb);
    return this;
  }
}
