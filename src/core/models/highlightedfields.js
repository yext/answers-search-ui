import { nestValue } from '../utils/objectutils';

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
    if (!highlightedValueArray || !Array.isArray(highlightedValueArray)) {
      return new HighlightedFields();
    }

    return highlightedValueArray.reduce((highlightedFieldMappings, highlightedValue) => {
      const fieldIsNested = (highlightedValue.path.length > 1);

      const highlightedValueData = {
        value: highlightedValue.value,
        matchedSubstrings: highlightedValue.matchedSubstrings
      };

      if (fieldIsNested) {
        const topLevelOfPath = highlightedValue.path[0];
        const nestedPath = highlightedValue.path.slice(1);
        const nestedHighlightedValue = nestValue(highlightedValueData, nestedPath);

        highlightedFieldMappings[topLevelOfPath] = nestedHighlightedValue;
      } else {
        highlightedFieldMappings[highlightedValue.fieldName] = highlightedValueData;
      }

      return new HighlightedFields(highlightedFieldMappings);
    }, {});
  }
}
