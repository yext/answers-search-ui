/** @module FilterMetadata */

/**
 * FilterMetadata is a container for additional display data for a {@link Filter}.
 */
export default class FilterMetadata {
  constructor (metadata = {}) {
    const { fieldName, displayValue } = metadata;

    /**
     * The display name for the field being filtered on.
     * @type {string}
     */
    this.fieldName = fieldName;

    /**
     * The display value for the values being filtered on.
     * Even if there are multiple values within the data of a filter,
     * there should only be one display value for the whole filter.
     * @type {string}
     */
    this.displayValue = displayValue;
    Object.freeze(this);
  }
}
