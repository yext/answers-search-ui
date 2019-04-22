import EventEmitter from '../eventemitter/eventemitter';

export default class ModuleData extends EventEmitter {
  constructor(id, data = {}) {
    super();

    this._id = id;

    this._history = [];

    this._data = {};

    this.set(data);
  }

  set(data) {
    if (this._data === undefined) {
      this._data = {};
    }

    this.capturePrevious();

    // TODO(billy) This assumes the top level properties are all contained within
    // an object. Probably not a good assumption to make.
    let keys = Object.keys(data),
        len = keys.length,
        isDirty = false;

    for (let i = 0; i < len; i ++) {
      let prop = keys[i],
          val = data[keys[i]];

      // TODO(billy) For now, one level of comparison is probably fine,
      // in the future we'll probably need to do some deeper object comparisons
      // If the value is already correct, no updates!
      if (this._data[prop] === val) {
        continue;
      }

      this._data[prop] = val;
      isDirty = true;
    }

    // Only emit updates if the model was dirty
    if (isDirty) {
      this.emit('update', this._data);
    }

    return this;
  }

  capturePrevious() {
    if (this._history === undefined) {
      this._history = [];
    }

    if (this._history.length + 1 > 5) {
      this._history.shift();
    }

    // If data is ever undefined, we default to empty object
    this._history.push(JSON.stringify(this._data || {}));
  }

  undo() {
    let previous = {};
    if (this._previous.length > 0) {
      previous = JSON.parse(this._previous.pop());
    }

    this._data.set(previous);
  }

  raw() {
    return this._data;
  }
}
