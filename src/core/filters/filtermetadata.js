/** @module FilterView */

export default class FilterMetadata {
  constructor (metadata = {}) {
    const { fieldId, fieldName, displayValue } = metadata;

    /**
     * @type {string}
     */
    this.fieldId = fieldId;

    /**
     * @type {string}
     */
    this.fieldName = fieldName;

    /**
     * @type {string}
     */
    this.displayValue = displayValue;
    Object.freeze(this);
  }
}
