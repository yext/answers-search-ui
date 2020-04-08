/** @module FilterMetadata */

/**
 * Additional metadata stored inside a {@link BasicFilterView}.
 */
export default class FilterMetadata {
  constructor (metadata = {}) {
    const { fieldId, fieldName, displayValue } = metadata;

    /**
     * Field id for the associated {@link BasicFilterView}
     * @type {string}
     */
    this.fieldId = fieldId;

    /**
     * Field display name for the {@link BasicFilterView} this is associated with.
     * @type {string}
     */
    this.fieldName = fieldName;

    /**
     * Display value for the {@link BasicFilterView} this is associated with.
     */
    this.displayValue = displayValue;
    Object.freeze(this);
  }

  /**
   * Wrap filterView data in the BasicFilterView class
   * @param {Object} metadata
   * @returns {FilterMetadata}
   */
  static from (metadata) {
    return new FilterMetadata(metadata);
  }
}
