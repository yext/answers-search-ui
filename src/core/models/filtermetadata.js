/** @module FilterMetadata */

/**
 * Metadata helper for {@link Filter} or {@link Facet}
 */
export default class FilterMetadata {
  /**
   * Combines several filter metadata
   * @param  {Array<Object>} metadataArray
   */
  static combine (metadataArray) {
    return metadataArray.reduce((group, metadata) => {
      Object.entries(metadata).forEach(([displayField, displayValues]) => {
        if (!group[displayField]) {
          group[displayField] = [];
        }
        group[displayField].push(...displayValues);
      });
      return group;
    }, {}) || {};
  }
}
