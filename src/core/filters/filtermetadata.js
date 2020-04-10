/** @module FilterMetadata */

/**
 * FilterMetadata is a container for the metadata of a {@link FilterView}.
 */
export default class FilterMetadata {
  constructor (metadata = {}) {
    const { fieldId, fieldName, displayValue } = metadata;

    /**
     * Field id the associated {@link Filter} filters on.
     * @type {string}
     */
    this.fieldId = fieldId;

    /**
     * Display name for the field being filtered on.
     * @type {string}
     */
    this.fieldName = fieldName;

    /**
     * Display value for the values of the {@link Filter}.
     * Even if there are multiple values within the data of a filter,
     * there should only be one display value for the whole filter.
     * @type {string}
     */
    this.displayValue = displayValue;
    Object.freeze(this);
  }
}
