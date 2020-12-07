import DefaultPersistentStorage from '../../../node_modules/@yext/answers-storage/dist/index';
import PersistentStorageBufferEntry from './persistentstoragebufferentry';
import PersistentStorageActionType from './persistentstorageactiontype';
import SearchParams from '../../ui/dom/searchparams';

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
    this.stateUpdateListener = stateUpdateListener || function () {};
    this.stateResetListener = stateResetListener || function () {};

    const popListener = (queryParamsObject, queryParamsString) => {
      this.stateUpdateListener(queryParamsObject, queryParamsString);
      this.stateResetListener(queryParamsObject, queryParamsString);
    };

    /**
     * The core data for the global storage
     * @type {Map}
     */
    this.data = new Map();

    /**
     * The persistent storage implementation to store state
     * across browser sessions and URLs
     * @type {PersistentStorage}
     */
    this.persistentStorage = new DefaultPersistentStorage(popListener);

    /**
     * The persistent storage buffer used to keep persistent
     * entries until a flush is called
     * @type {PersistentStorage}
     */
    this.persistentStorageBuffer = [];
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
    this.data = this.persistentStorage.getAll();
  }

  /**
   * Set the data in storage with the given key to the provided
   * data, completely overwriting any existing data.
   *
   * @param {string} key The storage key to set
   * @param {*} data The data to set
   */
  set (key, data) {
    if (typeof data === 'undefined') {
      throw new Error('undefined is not a valid storage value');
    }

    this.data.set(key, data);
  }

  /**
   * Updates the storage and adds the entry to a persistent storage
   * buffer. The entry is not yet added to the persistent storage.
   *
   * @param {string} key The storage key to set
   * @param {*} data The data to set
   */
  setWithPersist (key, data) {
    if (typeof data === 'undefined') {
      throw new Error('undefined is not a valid storage value');
    }

    this.set(key, data);

    let serializedData = data;
    if (typeof data !== 'string') {
      serializedData = JSON.stringify(data);
    }

    this.persistentStorageBuffer.push(new PersistentStorageBufferEntry(
      PersistentStorageActionType.SET,
      key,
      serializedData
    ));
  }

  /**
   * Flushes the persistent storage buffer and adds all entries
   * to the persistent storage.
   */
  flushPersist () {
    this.persistentStorageBuffer.forEach((entry) => {
      switch (entry.actionType) {
        case PersistentStorageActionType.SET:
          this.persistentStorage.set(entry.key, entry.value);
          break;
        case PersistentStorageActionType.DELETE:
          this.persistentStorage.delete(entry.key);
          break;
        default:
          throw Error('Unimplemented action type ' + entry.actionType);
      }
    });
    this.persistentStorageBuffer = [];
    this.stateUpdateListener(
      this.persistentStorage.getAll(),
      this.persistentStorage.getUrlWithCurrentState()
    );
  }

  /**
   * Get the current state for the provided key
   *
   * @param {string} key The storage key to get
   * @return {*} The state for the provided key
   */
  get (key) {
    return this.data.get(key);
  }

  /**
   * Get the current state for all key/value pairs in storage
   *
   * @return {Object} mapping from key to value representing the
   *                  current state
   */
  getAll () {
    return this.data;
  }

  /**
   * Remove the data in storage with the given key to the
   * provided data
   *
   * @param {string} key The storage key to delete
   */
  delete (key) {
    this.data.delete(key);

    this.persistentStorageBuffer.push(new PersistentStorageBufferEntry(
      PersistentStorageActionType.DELETE,
      key
    ));
  }

  /**
   * Returns the query parameters to encode the current state
   *
   * @return {string} The query parameters for a page link with the
   *                  current state encoded
   *                  e.g. ?query=all&context=%7Bkey:'hello'%7D
   */
  getUrlWithCurrentState () {
    const urlParams = new SearchParams(this.persistentStorage.getUrlWithCurrentState());
    this.persistentStorageBuffer.forEach((entry) => {
      switch (entry.actionType) {
        case PersistentStorageActionType.SET:
          urlParams.set(entry.key, entry.value);
          break;
        case PersistentStorageActionType.DELETE:
          urlParams.delete(entry.key);
          break;
        default:
          throw Error('Unimplemented action type ' + entry.actionType);
      }
    });
    return urlParams.toString();
  }

  /**
   * Adds a listener to the given module for a given event
   *
   * @param {string} event The event to listen to, e.g. ‘update’
   * @param {string} module The module key to listen for e.g. Pagination
   * @param {Function} callback The callback when an event is called,
   *                   function is given the data if relevant
   */
  on (event, module, callback) {}

  off (event, module, callback) {}
}
