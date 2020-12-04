/**
 * GlobalStorage is a container around application state.  It
 * exposes an interface for CRUD operations as well as listening
 * for stateful changes.
 * @param {Function} callback for state (persistent store) updates
 * @param {Function} callback for state (persistent store) reset
 */
export default class GlobalStorage {
  constructor (stateUpdateListener, stateResetListener) {
    /**
     * The persistent storage implementation to store state
     * across browser sessions and URLs
     * @type {PersistentStorage}
     */
    this.persistentStorage = undefined;
  }

  /**
   * Decodes the initial state from the query params. This could be a
   * direct mapping from query param to storage keys in the storage or
   * could fetch a sessionId from some backend
   *
   * @param {string} url The starting URL
   */
  init (url) {}

  /**
   * Set the data in storage with the given key to the provided
   * data, completely overwriting any existing data.
   *
   * @param {string} key The storage key to set
   * @param {*} data The data to set
   */
  set (key, data) {}

  /**
   * Updates the storage and adds the entry to a persistent storage
   * buffer. The entry is not yet added to the persistent storage.
   *
   * @param {string} key The storage key to set
   * @param {*} data The data to set
   */
  setWithPersist (key, data, replaceHistory) {}

  /**
   * Flushes the persistent storage buffer and adds all entries
   * to the persistent storage.
   */
  flushPersist () {}

  /**
   * Get the current state for the provided key
   *
   * @param {string} key The storage key to get
   * @return {*} The state for the provided key
   */
  get (key) {}

  /**
   * Get the current state for all key/value pairs in storage
   *
   * @return {Object} mapping from key to value representing the
   *                  current state
   */
  getAll () {}

  /**
   * Remove the data in storage with the given key to the
   * provided data
   *
   * @param {string} key The storage key to delete
   */
  delete (key) {}

  /**
   * Returns the query parameters to encode the current state
   *
   * @return {string} The query parameters for a page link with the
   *                  current state encoded
   *                  e.g. ?query=all&context=%7Bkey:'hello'%7D
   */
  getUrlForNewPageMaintainingState () {}

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
