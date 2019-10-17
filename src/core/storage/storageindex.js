/** @module StorageIndex */

import EventEmitter from '../eventemitter/eventemitter';
import { AnswersStorageError } from '../errors/errors';

/**
 * StorageIndex is exposes an interface for storing data
 * and listening to changes.
 *
 * Data within an index is partitioned based on key,
 * and all actions (inserting, deleting, listening) can be done
 * either on the index level or the (index, key) level.
 *
 * @extends EventEmitter
 */
export default class StorageIndex {
  constructor (id) {
    super();

    /**
     * The identifier (or name) of the index
     */
    this._id = id;

    /**
     * The index can be partitioned into many storageContainers by a key
     * @type {Object<string, StorageContainer>}
     */
    this._storageContainers = {};

    /**
     * Indexes could have subscribers waiting for construction
     */
    this._futureListeners = {};
  }

  /**
   * replaces the currently held data with the given data
   * @param {*} data the data to replace the current data
   */
  insert (key, data) {
    if (key === undefined || key === null) {
      throw new AnswersStorageError('Namespace required when inserting into index', this._id, key, data);
    }

    if (data === undefined || data === null) {
      throw new AnswersStorageError('Namespace required when inserting into index', this._id, key, data);
    }

    let storageContainer = this._storageContainers[key];
    if (storageContainer === undefined) {
      storageContainer = this._storageContainers[key] = new StorageContainer();

      // Sometimes there can be things listening for index changes before
      // the index is constructed. If so, wire them up./
      this._applyFutureListeners(key);

      // Relay updates to the index
      storageContainer.on('update', () => {
        this.emit('update', storageContainer.raw())
      });
    }

    storageContainer.set(data);
    return this;
  }

  get(key) {
    if (key === undefined) {
      return this._storageContainers;
    }

    return this._storageContainers[key];
  }

  raw (key) {
    return this.get(key).raw();
  }

  on (evt, key, cb) {
    const storageContainer = this._storageContainers[key];
    if (storageContainer === undefined) {
      if (this._futureListeners[key] === undefined) {
        this._futureListeners[key] = [];
      }

      this._futureListeners[key].push({
        event: evt,
        cb: cb
      });

      return this;
    }

    storageContainer.on(evt, cb);
    return this;
  }

  off (evt, key, cb) {
    let storageContainer = this._storageContainers[key];
    if (storageContainer === undefined) {
      if (this._futureListeners[key] !== undefined) {
        this._futureListeners[key].pop();
      }

      return this;
    }

    this._indexes[key].off(evt, cb);
    return this;
  }

  _applyFutureListeners (key) {
    let futures = this._futureListeners[key];
    if (!futures) {
      return;
    }

    for (let i = 0; i < futures.length; i++) {
      let future = futures[i];
      this.on(future.event, ley, future.cb);
    }
    delete this._futureListeners[key];
  }
}

class StorageContainer extends EventEmitter {
  constructor {
    this._data = null;
  }

  set(data) {
    let isDirty = false;
    // Compare old and new data and if it's dirty

    // Primitive dirty checking
    if (typeof data !== 'object') {
      if (this._data !== data) {
        isDirty = true;
      }
    }

    // Object dirty checking
    const newData = Object.assign({}, data);
    for (const prop of Object.keys(newData)) {
      if (this._data[prop] !== newData[prop]) {
        isDirty = true;
        break;
      }
    }

    if (isDirty) {
      this._data = data;
      this.emit('update', this._data);
    }

    return this;
  }
}