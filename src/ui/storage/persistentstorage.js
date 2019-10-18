import SearchParams from '../dom/searchparams';
import { AnswersStorageError } from '../../core/errors/errors';

/** @module PersistentStorage */

export default class PersistentStorage {
  constructor (config = {}) {
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
    this._updateListener = config.updateListener || function () {};

    /**
     * The list of listeners to storage resets
     * @type {function[]}
     */
    this._resetListener = config.resetListener || function () {};

    window.onpopstate = () => {
      this._params = new SearchParams(window.location.search.substring(1));
      this._callListener(this._updateListener);
      this._callListener(this._resetListener);
    };
  }

  /**
   * Insert the given key/value pair into storage
   * @param {string} key The key to insert the data in
   * @param {*} data The data to insert
   */
  set (key, data, replaceHistory = false) {
    if (typeof key !== 'string') {
      throw new AnswersStorageError('Storage data key must be a string', key, data);
    }

    let newData = data;
    if (typeof data !== 'string') {
      newData = JSON.stringify(data);
    }
    this._params.set(key, newData);
    this._updateHistory(replaceHistory);
  }

  /**
   * Delete the given key from storage
   * @param {string} key The key to delete
   */
  delete (key, replaceHistory = false) {
    this._params.delete(key);
    this._updateHistory(replaceHistory);
  }

  _updateHistory (replaceHistory = false) {
    if (this._historyTimer) {
      clearTimeout(this._historyTimer);
    }

    // batch update calls across components to avoid updating the url too much
    this._historyTimer = setTimeout(
      () => {
        this._historyTimer = null;
        if (replaceHistory) {
          window.history.replaceState(null, null, `?${this._params.toString()}`);
        } else {
          window.history.pushState(null, null, `?${this._params.toString()}`);
        }
        this._callListener(this._updateListener);
      },
      100);
  }

  /**
   * Invoke the given list of callbacks with the current storage data
   * @param {function[]} listeners The callbacks to invoke
   * @private
   */
  _callListener (listener) {
    listener(this.getAll(), this._params.toString());
  }

  /**
   * Get all the key/value pairs in storage
   */
  getAll () {
    const allParams = {};
    for (const [key, val] of this._params.entries()) {
      allParams[key] = val;
    }
    return allParams;
  }
}
