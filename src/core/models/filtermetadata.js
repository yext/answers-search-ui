/** @module FilterMetadata */

/**
 * Metadata helper for {@link Filter} or {@link Facet}
 * Metadata structure is
 * {
 *  c_birdTypes: {
 *    'Your Favorite Bird': ['rooster', 'penguin', 'turkey', 'chikn', 'dog']
 *   }
 * }
 */
export default class FilterMetadata {
  constructor (metadata) {
    Object.assign(this, metadata);
    Object.freeze(this);
  }

  static from (metadata) {
    const { fieldId, fieldName, displayValues } = metadata;
    return new FilterMetadata({
      [fieldId]: {
        [fieldName]: [ ...displayValues ].flat()
      }
    });
  }

  /**
   * Combines several filter metadata
   * @param  {Array<FilterMetadata>} metadataArray
   */
  static combine (metadataArray) {
    const group = {};
    metadataArray.forEach(metadata => {
      Object.entries(metadata).forEach(([fieldId, labelToDisplayValues]) => {
        if (!group[fieldId]) {
          group[fieldId] = {};
        }
        Object.entries(labelToDisplayValues).forEach(([label, displayValues]) => {
          if (!group[fieldId][label]) {
            group[fieldId][label] = [];
          }
          group[fieldId][label].push(...displayValues);
        });
      });
    });
    return new FilterMetadata(group);
  }
}
