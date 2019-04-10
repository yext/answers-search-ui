import EventEmitter from '../../core/eventemitter/eventemitter';

export default class State extends EventEmitter {
  constructor(data) {
    super();

    this._state = data;
  }

  set(data) {
    this._state = data;
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
