import EventEmitter from '../../core/eventemitter/eventemitter';

export default class State extends EventEmitter {
  constructor(data) {
    super();

    this._state = data;
  }

  set(prop, val) {
    if (val === undefined) {
      this._state = prop;
    } else {
      this._state[prop] = val;
    }
    this.emit('update');
  }

  update(data) {
    this._state = data;
    this.emit('update');
  }

  get(prop) {
    if (prop === undefined) {
      return this._state;
    }
    return this._state[prop];
  }

  asJSON() {
    return this._state;
  }
}
