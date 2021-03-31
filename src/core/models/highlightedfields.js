/**
 * Represents highlighted fields without the highlighting applied
*/
export default class HighlightedFields {
  /**
   * Constructs a highlighted fields object which consists of fields mapping to HighlightedValues
   *
   * @param {Object<string, string|object>} data Keyed by fieldName. It may consist of nested fields
   *
   * Example object:
   *
   * {
   *   name: {
   *     value: 'Yext',
   *     matchedSubstrings: [{ offset: 0, length: 4}]
   *   }
   *   description: {
   *     featured: {
   *       value: 'Yext is a search company',
   *       matchedSubstrings: [{ offset: 0, length: 4}]
   *     }
   *   }
   * }
   */
  constructor (data = {}) {
    Object.assign(this, data);
  }

  /**
   * Constructs a HighlightedFields object from an answers-core HighlightedValue array
   *
   * @param {HighlightedValue[]} highlightedValueArray from answers-core
   * @returns {HighlightedFields}
   */
  static fromCore (highlightedValueArray) {
    const highlightedFields =
      this.combineHighlightedValues(highlightedValueArray, highlightedValue => {
        const { value, matchedSubstrings } = highlightedValue;
        return { value, matchedSubstrings };
      });
    return new HighlightedFields(highlightedFields);
  }

  /**
   * Combines an array of HighlightedValues into the map it describes.
   * Will format the data at the leaves using the given dataProvider.
   *
   * @param {HighlightedValue[]} highlightedValueArray
   * @param {Function} dataProvider
   * @returns {Object}
   */
  static combineHighlightedValues (highlightedValueArray, dataProvider) {
    if (!highlightedValueArray || !Array.isArray(highlightedValueArray)) {
      return {};
    }
    const highlightedValuesMapping = {};
    highlightedValueArray.forEach(highlightedValue => {
      const { path } = highlightedValue;
      if (path.length === 0) {
        return;
      }
      const data = dataProvider(highlightedValue);
      const topLevelField = path[0];

      highlightedValuesMapping[topLevelField] =
        this._getUpdatedMappingRecursively(
          highlightedValuesMapping[topLevelField] || {}, path.slice(1), data);
    });
    return highlightedValuesMapping;
  }

  static _getUpdatedMappingRecursively (currentMapping, path, data) {
    if (path.length === 0) {
      if (Object.keys(currentMapping).length === 0) {
        return data;
      } else if (Array.isArray(currentMapping)) {
        currentMapping.push(data);
        return currentMapping;
      } else {
        return [
          currentMapping,
          data
        ];
      }
    }
    const key = path[0];
    const remainingPath = path.slice(1);
    if (!currentMapping[key]) {
      currentMapping[key] = {};
    }
    currentMapping[key] =
      this._getUpdatedMappingRecursively(currentMapping[key], remainingPath, data);
    return currentMapping;
  }
}
