/** @module Storage */

import StorageContainer from './storagecontainer';
import { AnswersStorageError } from '../errors/errors';

/**
 * Storage is a container around application state.
 * It exposes an interface for CRUD operations as well as listening
 * for stateful changes.
 */
export default class Storage {
  constructor () {
    this._storageContainer = {};
    this._futureListeners = {};
  }

  /**
   * Set the data in storage with the given index to the provided data,
   * completely overwriting any existing data.
   * @param {string} index the storage index to set
   * @param {*} data the data to set
   */
  set (index, data) {
    this._initStorageContainer(index, data);
    this._storageContainer[index].set(data);
  }

  _initStorageContainer (index, data) {
    if (index === undefined || index === null || typeof index !== 'string') {
      throw new AnswersStorageError('Invalid storage index provided', index, data);
    }
    if (data === undefined || data === null) {
      throw new AnswersStorageError('No data provided', index, data);
    }

    if (this._storageContainer[index] === undefined) {
      this._storageContainer[index] = new StorageContainer(index);
      this._applyFutureListeners(index);
    }
  }

  getState (index) {
    if (this._storageContainer[index]) {
      return this._storageContainer[index].raw();
    }
    return {};
  }

  getAll (index) {
    const data = [];
    for (const dataKey of Object.keys(this._storageContainer)) {
      if (dataKey.startsWith(index)) {
        data.push(this._storageContainer[dataKey].raw());
      }
    }
    return data;
  }

  on (evt, moduleId, cb) {
    let storage = this._storageContainer[moduleId];
    if (storage === undefined) {
      if (this._futureListeners[moduleId] === undefined) {
        this._futureListeners[moduleId] = [];
      }

      this._futureListeners[moduleId].push({
        event: evt,
        cb: cb
      });

      return;
    }

    this._storageContainer[moduleId].on(evt, cb);
    return this;
  }

  off (evt, moduleId, cb) {
    let storage = this._storageContainer[moduleId];
    if (storage === undefined) {
      if (this._futureListeners[moduleId] !== undefined) {
        this._futureListeners[moduleId].pop();
      }

      return this;
    }

    this._storageContainer[moduleId].off(evt, cb);
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
