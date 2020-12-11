import DefaultPersistentStorage from '@yext/answers-storage';
import { AnswersStorageError } from '../errors/errors';

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
     * @type {PersistentStorage}
     */
    this.persistentStorage = new DefaultPersistentStorage(this.popListener);

    /**
     * The listeners to apply on changes to global storage
     *
     * @type {StorageListener[]}
     */
    this.listeners = [];
  }

  /**
   * Decodes the initial state from the query params. This could be a
   * direct mapping from query param to storage keys in the storage or
   * could fetch a sessionId from some backend
   *
   * @param {string} url The starting URL
   */
  init (url) {
    this.persistentStorage.init(url);
    this.persistentStorage.getAll().forEach((value, key) => {
      this.set(key, value);
    });
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
      throw new AnswersStorageError('Invalid storage key provided', key, data);
    }

    if (typeof data === 'undefined') {
      throw new AnswersStorageError('Invalid storage key provided', key, data);
    }

    this.storage.set(key, data);
    this._callListeners('update', key);
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
   * @param {StorageListener} the listener to add
   */
  registerListener (listener) {
    if (!listener.eventType || !listener.storageKey ||
      !listener.callback || typeof listener.callback !== 'function') {
      throw new AnswersStorageError(`Invalid listener applied in storage: ${listener}`);
    }
    this.listeners.push(listener);
  }

  /**
   * Removes a given listener from the set of listeners
   *
   * @param {StorageListener} the listener to remove
   */
  removeListener (listener) {
    this.listeners = this.listeners.filter(l => l !== listener);
  }

  /**
   * @param {string} eventType
   * @param {string} storageKey
   */
  _callListeners (eventType, storageKey) {
    this.listeners.forEach((listener) => {
      if (listener.storageKey === storageKey && listener.eventType === eventType) {
        listener.callback(this.get(storageKey));
      }
    });
  }
}
