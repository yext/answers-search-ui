import DefaultPersistentStorage from '../../../node_modules/@yext/answers-storage/dist/index';
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
  constructor (stateUpdateListener, stateResetListener) {
    /**
     * The update listener for changes in state (persistent storage changes)
     *
     * @type {Function}
     */
    this.stateUpdateListener = stateUpdateListener || function () {};

    /**
     * The reset listener for changes in state (persistent storage changes)
     *
     * @type {Function}
     */
    this.stateResetListener = stateResetListener || function () {};

    /**
     * The listener for window.pop in the persistent storage
     *
     * @type {Function}
     */
    this.popListener = (queryParamsObject, queryParamsString) => {
      this.stateUpdateListener(queryParamsObject, queryParamsString);
      this.stateResetListener(queryParamsObject, queryParamsString);
    };

    /**
     * The core data for the global storage
     *
     * @type {Map<string, *}
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
     * The persistent storage buffer used to keep persistent
     * entries until a flush is called
     *
     * @type {PersistentStorage}
     */
    this.persistentStorageBuffer = new DefaultPersistentStorage(this.popListener);

    /**
     * The listeners to apply on changes to global storage
     *
     * @type {Listener[]}
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
   * Updates the storage and adds the entry to a persistent storage
   * buffer. The entry is not added to the persistent storage until
   * the buffer is flushed.
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

    this.persistentStorageBuffer.set(key, serializedData);
  }

  /**
   * Flushes the persistent storage buffer and adds all entries
   * to the persistent storage.
   */
  flushPersist () {
    this.persistentStorage = this.persistentStorageBuffer;

    const persistentStorageClone = new DefaultPersistentStorage(this.popListener);
    this.persistentStorage.getAll().forEach((value, key) => {
      persistentStorageClone.set(key, value);
    });

    this.persistentStorageBuffer = persistentStorageClone;

    this.stateUpdateListener(
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
    return this.storage;
  }

  /**
   * Remove the data in storage with the given key
   *
   * @param {string} key The storage key to delete
   */
  delete (key) {
    this.storage.delete(key);
    this.persistentStorageBuffer.delete(key);
  }

  /**
   * Returns the query parameters to encode the current state
   *
   * @return {string} The query parameters for a page link with the
   *                  current state encoded
   *                  e.g. query=all&context=%7Bkey:'hello'%7D
   */
  getUrlWithCurrentState () {
    return this.persistentStorageBuffer.getUrlWithCurrentState();
  }

  /**
   * Adds a listener to the given module for a given event
   *
   * @param {Listener} the listener to add
   */
  addListener (listener) {
    if (!listener.eventType || !listener.storageKey || !listener.callback) {
      throw new AnswersStorageError(`Invalid listener applied in storage: ${listener}`);
    }
    this.listeners.push(listener);
  }

  /**
   * Removes a listener for the given moduleId for a given event
   *
   * @param {Listener} the listener to remove
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
