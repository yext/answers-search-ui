import DefaultPersistentStorage from '@yext/answers-storage';
import { AnswersStorageError } from '../errors/errors';

/** @typedef {import('./storagelistener').default} StorageListener */

/**
 * GlobalStorage is a container around application state.  It
 * exposes an interface for CRUD operations as well as listening
 * for stateful changes.
 *
 * @param {Function} callback for state (persistent store) updates
 * @param {Function} callback for state (persistent store) reset
 */
export default class GlobalStorage {
  constructor (persistedStateListeners = {}) {
    /**
     * The listeners for changes in state (persistent storage changes)
     */
    this.persistedStateListeners = {
      update: persistedStateListeners.update || function () {},
      reset: persistedStateListeners.reset || function () {}
    };

    /**
     * The listener for window.pop in the persistent storage
     *
     * @type {Function}
     */
    this.popListener = (queryParamsObject, queryParamsString) => {
      this.persistedStateListeners.update(queryParamsObject, queryParamsString);
      this.persistedStateListeners.reset(queryParamsObject, queryParamsString);
    };

    /**
     * The core data for the global storage
     *
     * @type {Map<string, *>}
     */
    this.storage = new Map();

    /**
     * The persistent storage implementation to store state
     * across browser sessions and URLs
     *
     * @type {DefaultPersistentStorage}
     */
    this.persistentStorage = new DefaultPersistentStorage(this.popListener);

    /**
     * A map of storage key to StorageListener[], which apply on
     * changes to global storage.
     *
     * @type {Map<string, StorageListener[]>}
     */
    this.listeners = new Map();
  }

  /**
   * Decodes the initial state from the query params. This could be a
   * direct mapping from query param to storage keys in the storage or
   * could fetch a sessionId from some backend
   *
   * @param {string} url The starting URL
   * @returns {GlobalStorage}
   */
  init (url) {
    this.persistentStorage.init(url);
    this.persistentStorage.getAll().forEach((value, key) => {
      this.set(key, value);
    });
    return this;
  }

  /**
   * Set the data in storage with the given key to the provided
   * data, completely overwriting any existing data.
   *
   * @param {string} key The storage key to set
   * @param {*} data The data to set
   */
  set (key, data) {
    if (key === undefined || key === null || typeof key !== 'string') {
      throw new AnswersStorageError('Storage key must be of type string', key, data);
    }

    if (typeof data === 'undefined') {
      throw new AnswersStorageError('Data cannot be of type undefined', key, data);
    }

    this.storage.set(key, data);
    this._callListeners('update', key);
  }

  /**
   * Sets all of the given entries before calling 'update' event listeners.
   *
   * @param {Map} entries the data to set
   */
  setEntries (entries) {
    const updatedKeys = new Set();
    entries.forEach((value, storageKey) => {
      this.storage.set(storageKey, value);
      updatedKeys.add(storageKey);
    });
    updatedKeys.forEach(storageKey => this._callListeners('update', storageKey));
  }

  /**
   * Updates the storage with a new entry of [key, data].  The entry
   * is not added to the URL until the history is updated.
   *
   * @param {string} key The storage key to set
   * @param {*} data The data to set
   */
  setWithPersist (key, data) {
    this.set(key, data);

    let serializedData = data;
    if (typeof data !== 'string') {
      serializedData = JSON.stringify(data);
    }

    this.persistentStorage.set(key, serializedData);
  }

  /**
   * Adds all entries of the persistent storage to the URL.
   */
  pushStateToHistory () {
    this.persistentStorage.pushStateToHistory();
    this.persistedStateListeners.update(
      this.persistentStorage.getAll(),
      this.persistentStorage.getUrlWithCurrentState()
    );
  }

  /**
   * Get the current state for the provided key
   *
   * @param {string} key The storage key to get
   * @return {*} The state for the provided key, undefined if key doesn't exist
   */
  get (key) {
    return this.storage.get(key);
  }

  /**
   * Get the current state for all key/value pairs in storage
   *
   * @return {Map<string, *>} mapping from key to value representing the current state
   */
  getAll () {
    return new Map(this.storage);
  }

  /**
   * Remove the data in storage with the given key
   *
   * @param {string} key The storage key to delete
   */
  delete (key) {
    if (key === undefined || key === null || typeof key !== 'string') {
      throw new AnswersStorageError('Storage key must be of type string', key);
    }

    this.storage.delete(key);
    this.persistentStorage.delete(key);
  }

  /**
   * Returns the query parameters to encode the current state
   *
   * @return {string} The query parameters for a page link with the
   *                  current state encoded
   *                  e.g. query=all&context=%7Bkey:'hello'%7D
   */
  getUrlWithCurrentState () {
    return this.persistentStorage.getUrlWithCurrentState();
  }

  /**
   * Adds a listener to the given module for a given event
   *
   * @param {StorageListener} listener the listener to add
   */
  registerListener (listener) {
    const { eventType, storageKey, callback } = listener;
    if (!eventType || !storageKey ||
      !callback || typeof callback !== 'function') {
      throw new AnswersStorageError(`Invalid listener applied in storage: ${listener}`);
    }
    const listenersForKey = this.listeners.get(storageKey);
    if (!listenersForKey) {
      this.listeners.set(storageKey, [ listener ]);
    } else {
      listenersForKey.push(listener);
    }
  }

  /**
   * Removes a given listener from the set of listeners
   *
   * @param {StorageListener} listener the listener to remove
   */
  removeListener (listener) {
    const { storageKey } = listener;
    const listenersForKey = this.listeners.get(storageKey);
    if (listenersForKey) {
      this.listeners.set(storageKey, listenersForKey.filter(l => l !== listener));
    }
  }

  /**
   * @param {string} eventType
   * @param {string} storageKey
   */
  _callListeners (eventType, storageKey) {
    const listenersForKey = this.listeners.get(storageKey);
    if (listenersForKey) {
      listenersForKey.forEach((listener) => {
        if (listener.eventType === eventType) {
          listener.callback(this.get(storageKey));
        }
      });
    }
  }
}
