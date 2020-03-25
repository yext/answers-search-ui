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

  /**
   * Helper method for creating a time range filter metadata
   * @param {*} min minimum value, can be falsy
   * @param {*} max maximum value, can be falsy
   * @param {boolean} isExclusive whether this is an inclusive or exclusive range
   * @param {Object} metadata additional metadata to be included
   * @returns {FilterMetadata}
   */
  static timeRange (min, max, isExclusive, metadata) {
    if (!min && !max) {
      return metadata;
    }
    const _metadata = { ...metadata };
    if (min && !max) {
      _metadata.displayValues = isExclusive
        ? `After ${min}`
        : `${min} and later`;
    } else if (max && !min) {
      _metadata.displayValues = isExclusive
        ? `Before ${min}`
        : `${min} and earlier`;
    } else if (min === max) {
      _metadata.displayValues = min;
    } else {
      _metadata.displayValues = `${min} - ${max}`;
    }
    return _metadata;
  }

  /**
   * Helper method for creating a range filter metadata
   * @param {*} min minimum value, can be falsy
   * @param {*} max maximum value, can be falsy
   * @param {boolean} isExclusive whether this is an inclusive or exclusive range
   * @param {Object} metadata additional metadata to be included
   * @returns {FilterMetadata}
   */
  static range (min, max, isExclusive, metadata) {
    if (!min && !max) {
      return metadata;
    }
    const _metadata = { ...metadata };
    if (min && !max) {
      _metadata.displayValues = isExclusive
        ? `> ${min}`
        : `≥ ${min}`;
    } else if (max && !min) {
      _metadata.displayValues = isExclusive
        ? `< ${min}`
        : `≤ ${min}`;
    } else if (min === max) {
      _metadata.displayValues = min;
    } else {
      _metadata.displayValues = `${min} - ${max}`;
    }
    return _metadata;
  }

  /**
   * Creates an empty FilterMetadata.
   */
  static empty () {
    return new FilterMetadata();
  }
}
