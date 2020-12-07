export default class PersistentStorageBufferEntry {
  constructor (actionType, key, value) {
    this.actionType = actionType;
    this.key = key;
    this.value = value;
  }
}
