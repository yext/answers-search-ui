/** @module ModuleData */

import EventEmitter from '../eventemitter/eventemitter';

/**
 * ModuleData is used as a generic model for Storage.
 * Typically an instance of ModuleData powers a single component.

 * A data model that exposes an event emitter interface.
 * @extends EventEmitter
 */
export default class ModuleData extends EventEmitter {
  constructor (id, data = {}) {
    super();

    this._id = id;
    this._history = [];
    this._data = data;
    this.set(data);
  }

  /**
   * replaces the currently held data with the given data
   * @param {*} data the data to replace the current data
   */
  set (data) {
    this.capturePrevious();

    if (data === null ||
      typeof data !== 'object' ||
      Array.isArray(data) ||
      Object.keys(data).length !== Object.keys(this._data).length
    ) {
      this._data = data;
      this.emit('update', this._data);
      return;
    }

    // check for shallow equality
    for (const key of Object.keys(data)) {
      if (this._data[key] !== data[key]) {
        this._data = data;
        this.emit('update', this._data);
        return;
      }
    }
  }

  capturePrevious () {
    if (this._history === undefined) {
      this._history = [];
    }

    if (this._history.length + 1 > 5) {
      this._history.shift();
    }

    // If data is ever undefined, we default to empty object
    this._history.push(JSON.stringify(this._data || {}));
  }

  undo () {
    let previous = {};
    if (this._previous.length > 0) {
      previous = JSON.parse(this._previous.pop());
    }

    this._data.set(previous);
  }

  raw () {
    return this._data;
  }
}
