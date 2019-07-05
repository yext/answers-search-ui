/** @module Storage */

import ModuleData from './moduledata';
import { AnswersStorageError } from '../errors/errors';

export default class Storage {
  constructor () {
    this._moduleDataContainer = {};
    this._futureListeners = {};
  }

  insert (key, data) {
    if (key === undefined || key === null || typeof key !== 'string') {
      throw new AnswersStorageError('Invalid storage key provided', key, data);
    }
    if (data === undefined || data === null) {
      throw new AnswersStorageError('No data provided', key, data);
    }

    if (this._moduleDataContainer[key] === undefined) {
      this._moduleDataContainer[key] = new ModuleData(key);
      this._applyFutureListeners(key);
    }

    this._moduleDataContainer[key].set(data);
  }

  getState (moduleId) {
    if (this._moduleDataContainer[moduleId]) {
      return this._moduleDataContainer[moduleId].raw();
    }
    return {};
  }

  getAll (key) {
    const data = [];
    for (const dataKey of Object.keys(this._moduleDataContainer)) {
      if (dataKey.startsWith(key)) {
        data.push(this._moduleDataContainer[dataKey].raw());
      }
    }
    return data;
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
