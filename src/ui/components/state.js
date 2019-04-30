import EventEmitter from '../../core/eventemitter/eventemitter';

/**
 * State contains the data for the component
 * and exposes an {EventEmitter} interface so that external
 * dependencies can listen/hook subscribe to messages/updates.
 */
export default class State extends EventEmitter {
  constructor(data) {
    super();

    /**
     * The initial state of the component
     * @type {Object}
     * @private
     */
    this._state = data || {};
  }

  /**
   * Set the initial state of the component.
   * NOTE(billy): Does not fire an update message
   */
  init(prop, opt_val) {
    this._set(prop, opt_val);
  }

  /**
   * setter for the state
   * @param prop {string|Object} The property to set
   * @param opt_val Optional, if prop is a {string}, it will assign the value to that property
   */
  set(prop, opt_val) {
    this._set(prop, opt_val);
    this.emit('update');
  }

  /**
   * setter for the state enables you to update a single property, or complete state
   * depending on the arguments provided.
   * @param prop {string|Object} The property to set
   * @param opt_val If prop is a {string}, provide its value
   * @private
   */
  _set(prop, opt_val) {
    if (opt_val === undefined) {
      this._state = prop;
    } else {
      this._state[prop] = opt_val;
    }
  }

  update(data) {
    this._state = data;
    this.emit('update');
  }

  /**
   * Retrieve a properties value from the state
   * If no property provided, return the full state
   * @param {string} opt_prop optional property to retrieve
   */
  get(opt_prop) {
    if (opt_prop === undefined) {
      return this._state;
    }
    return this._state[opt_prop];
  }

  asJSON() {
    return this._state;
  }
}
