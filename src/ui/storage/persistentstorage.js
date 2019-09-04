import SearchParams from '../dom/searchparams';
import { AnswersStorageError } from '../../core/errors/errors';

/** @module PersistentStorage */

export default class PersistentStorage {
  constructor () {
    /**
     * The current params model
     * @type {SearchParams}
     */
    this._params = new SearchParams(window.location.search.substring(1));

    /**
     * The current history edit timer, if any
     * @type {number}
     */
    this._historyTimer = null;

    /**
     * The list of listeners to every storage update
     * @type {function[]}
     */
    this._updateListeners = [];

    /**
     * The list of listeners to storage resets
     * @type {function[]}
     */
    this._resetListeners = [];

    window.onpopstate = () => {
      this._params = new SearchParams(window.location.search.substring(1));
      this._callListeners(this._updateListeners);
      this._callListeners(this._resetListeners);
    };
  }

  /**
   * Insert the given key/value pair into storage
   * @param {string} key The key to insert the data in
   * @param {*} data The data to insert
   */
  set (key, data) {
    if (typeof key !== 'string') {
      throw new AnswersStorageError('Storage data key must be a string', key, data);
    }

    let newData = data;
    if (typeof data !== 'string') {
      newData = JSON.stringify(data);
    }
    this._params.set(key, newData);

    if (this._historyTimer) {
      clearTimeout(this._historyTimer);
    }

    this._historyTimer = setTimeout(
      () => {
        this._historyTimer = null;
        window.history.pushState(null, null, `?${this._params.toString()}`);
        this._callListeners(this._updateListeners);
      },
      100);
  }

  /**
   * Delete the given key from storage
   * @param {string} key The key to delete
   */
  delete (key) {
    this._params.delete(key);
  }

  /**
   * Add the given callback to the list of functions invoked when storage is updated
   * @param {function} cb The callback to invoke when storage is updated
   */
  onUpdate (cb) {
    this._updateListeners.push(cb);
  }

  /**
   * Add the given callback to the list of functions invoked when storage is reset
   * @param {function} cb The callback to invoke when storage is reset
   */
  onReset (cb) {
    this._resetListeners.push(cb);
  }

  /**
   * Invoke the given list of callbacks with the current storage data
   * @param {function[]} listeners The callbacks to invoke
   * @private
   */
  _callListeners (listeners) {
    listeners.forEach(cb => cb(this.getAll(), this._params.toString()));
  }

  /**
   * Get all the key/value pairs in storage
   */
  getAll () {
    const allParams = {};
    for (const [key, val] of this._params.entries()) {
      let parsedVal = val;
      try {
        parsedVal = JSON.parse(val);
      } catch (e) { }
      allParams[key] = parsedVal;
    }
    return allParams;
  }
}
