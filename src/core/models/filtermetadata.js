/** @module FilterMetadata */

/**
 * Metadata helper for {@link Filter} or {@link Facet}
 */
export default class FilterMetadata {
  constructor (metadata) {
    Object.assign(this, metadata);
    Object.freeze(this);
  }

  /**
   * Combines several filter metadata
   * @param  {Array<FilterMetadata>} metadataArray
   */
  static combine (metadataArray) {
    const metadata = metadataArray.reduce((group, metadata) => {
      Object.entries(metadata).forEach(([displayField, displayValues]) => {
        if (!group[displayField]) {
          group[displayField] = [];
        }
        group[displayField].push(...displayValues);
      });
      return group;
    }, {}) || {};
    return new FilterMetadata(metadata);
  }
}
