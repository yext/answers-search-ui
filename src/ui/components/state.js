export default class State {
  constructor(data) {
    this._state = data;
  }

  set(data) {
    this._state = data;
  }

  update(data) {
    this._state = data;
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
