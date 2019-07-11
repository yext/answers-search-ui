/** @module EventEmitter */

/**
 * EventEmitter is a base class for any object that wants to expose
 * a pub/sub interface, for emitting messages and providing listeners.
 */
export default class EventEmitter {
  constructor () {
    /**
     * The subscribers of messages
     * @type {object[]}
     * @private
     */
    this._listeners = {};
  }

  /**
   * on is the public interface for subscribing events that are emitted.
   * @param {string} evt the event name to listen to
   * @param {function} cb The callback to invoke when the {evt} is emitted
   * @param {boolean} once Optional value which will only handle the message once
   */
  on (evt, cb, once) {
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

  /**
   * once is the public interface for subscribing events that are emitted.
   * The handler will only be triggered once.
   *
   * @param {string} evt the event name to listen to
   * @param {function} cb The callback to invoke when the {evt} is emitted
   * @param {boolean} once Optional value which will only handle the message once
   */
  once (evt, cb) {
    return this.on(evt, cb, true);
  }

  /**
   * off is the public interface for unsubscribing from an event
   * @param {string} evt the event name to unsubscribe from
   */
  off (evt) {
    delete this._listeners[evt];
    return this;
  }

  /**
   * emit is the public interface for broadcasting messages/events
   * @param {string} evt the event name to publish from
   * @param {Object} data the data to send along to the subscribers
   */
  emit (evt, data) {
    let listeners = this._listeners[evt];
    if (listeners === undefined) {
      return;
    }

    // Invoke each of all the listener handlers and remove the ones that should fire only once.
    let keep = [];
    for (let i = 0; i < listeners.length; i++) {
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
