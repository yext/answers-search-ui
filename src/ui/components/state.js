/** @module State */

import EventEmitter from '../../core/eventemitter/eventemitter';

/**
 * State contains the data for the component
 * and exposes an {EventEmitter} interface so that external
 * dependencies can listen/hook subscribe to messages/updates.
 * @extends EventEmitter
 */
export default class State extends EventEmitter {
  constructor (data) {
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
  init (prop, optVal) {
    this._set(prop, optVal);
  }

  /**
   * setter for the state
   * @param prop {string|Object} The property to set
   * @param optVal Optional, if prop is a {string}, it will assign the value to that property
   */
  set (prop, optVal) {
    this._set(prop, optVal);
    this.emit('update');
  }

  /**
   * setter for the state enables you to update a single property, or complete state
   * depending on the arguments provided.
   * @param prop {string|Object} The property to set
   * @param optVal If prop is a {string}, provide its value
   * @private
   */
  _set (prop, optVal) {
    if (optVal === undefined) {
      this._state = prop;
    } else {
      this._state[prop] = optVal;
    }
  }

  update (data) {
    this._state = data;
    this.emit('update');
  }

  /**
   * Retrieve a properties value from the state
   * If no property provided, return the full state
   * @param {string} optProp optional property to retrieve
   */
  get (optProp) {
    if (optProp === undefined) {
      return this._state;
    }
    return this._state[optProp];
  }

  has (prop) {
    return this._state[prop] !== undefined;
  }

  asJSON () {
    return this._state;
  }
}
