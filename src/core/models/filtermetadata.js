/** @module FilterMetadata */

/**
 * Additional metadata stored inside a {@link BasicFilterView}.
 */
export default class FilterMetadata {
  constructor (metadata = {}) {
    const { fieldName, displayValues } = metadata;
    /**
     * Field display name for the {@link BasicFilterView} this is associated with.
     * @type {string}
     */
    this.fieldName = fieldName;

    /**
     * Display values for the {@link BasicFilterView} this is associated with.
     * If displayValues is a single value not wrapped in an array, wrap it in an array.
     */
    this.displayValues = [ ...displayValues ].flat();
    Object.freeze(this);
  }

  static from (metadata) {
    return new FilterMetadata(metadata);
  }
}
