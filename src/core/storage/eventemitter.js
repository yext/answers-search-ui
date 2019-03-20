export default class EventEmitter {
  constructor() {
    this._listeners = {};
  }

  on(evt, cb, once) {
    if (typeof cb !== 'function') {
      throw new Error('callback handler should be of type {function}');
    }

    if (this._listeners[evt] === undefined) {
      this._listeners[evt] = [];
    }

    this._listeners[evt].push({
      event: evt,
      cb: cb,
      once: once || false
    });

    return this;
  }

  once(evt, cb) {
    return this.on(evt, cb, true);
  }

  off(evt) {
    delete this._listeners[evt];
    return this;
  }

  emit(evt, data) {
    let listeners = this._listeners[evt];
    if (listeners === undefined) {
      return;
    }

    // Invoke each of all the listener handlers and remove the ones that should fire only once.
    let keep = [];
    for (let i = 0; i < listeners.length; i ++) {
      listeners[i].cb(data);
      if (listeners[i].once === true) {
        continue;
      }

      // Instead of having a 'dirty' array with deleted or 'undefined' entries,
      // we just create a brand new array without the listeners that were removed
      keep.push(listeners[i]);
    }

    // Update our old list of listeners to the newly created array
    this._listeners[evt] = keep;
    return this;
  }
}