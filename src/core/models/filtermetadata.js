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
    for (const metadata of metadataArray) {
      for (const fieldId of Object.keys(metadata)) {
        const fieldNameToDisplayValues = metadata[fieldId];
        if (!group[fieldId]) {
          group[fieldId] = {};
        }
        for (const fieldName of Object.keys(fieldNameToDisplayValues)) {
          const displayValues = fieldNameToDisplayValues[fieldName];
          if (!group[fieldId][fieldName]) {
            group[fieldId][fieldName] = [];
          }
          group[fieldId][fieldName].push(...displayValues);
        }
      }
    }
    return new FilterMetadata(group);
  }
}
