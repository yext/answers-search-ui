/**
 * The storage listener is a listener on changes to the SDK global storage
 */
export default class StorageListener {
  /**
   * @param {string} eventType The type of event to listen for e.g. 'update'
   * @param {string} storageKey The key to listen for e.g. 'Pagination'
   * @param {Function} callback The callback to call when the event is emitted on the storage key
   */
  constructor (eventType, storageKey, callback) {
    this.eventType = eventType;
    this.storageKey = storageKey;
    this.callback = callback;
  }
}
