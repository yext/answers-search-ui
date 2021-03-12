import HighlightedValue from './highlightedvalue';
import { nestValue } from '../utils/objectutils';

/**
 * Represents highlighted fields with the highlighting applied
 */
export default class AppliedHighlightedFields {
  /**
   * Constructs a highlighted field map which consists of mappings from fields to highlighted
   * value strings.
   *
   * @param {Object<string, string|object>} data Keyed by fieldName. It may consist of nested fields
   *
   * Example object:
   *
   * {
   *   name: '<strong>Yext</strong>',
   *   description: {
   *     featured: '<strong>Yext</strong> is the offical answers company'
   *   }
   * }
   */
  constructor (data = {}) {
    Object.assign(this, data);
  }

  /**
   * Constructs an AppliedHighlightedFields object from an answers-core HighlightedValue array
   *
   * @param {HighlightedValue[]} highlightedValueArray from answers-core
   * @returns {AppliedHighlightedFields}
   */
  static fromCore (highlightedValueArray) {
    if (!highlightedValueArray || !Array.isArray(highlightedValueArray)) {
      return new AppliedHighlightedFields();
    }

    return highlightedValueArray.reduce((highlightedFieldMappings, highlightedValue) => {
      const highlightedValueString = new HighlightedValue()
        .buildHighlightedValue(highlightedValue.value, highlightedValue.matchedSubstrings);
      const fieldIsNested = (highlightedValue.path.length > 1);

      if (fieldIsNested) {
        const topLevelOfPath = highlightedValue.path[0];
        const nestedPath = highlightedValue.path.slice(1);
        const nestedHighlightedValueString = nestValue(highlightedValueString, nestedPath);

        highlightedFieldMappings[topLevelOfPath] = nestedHighlightedValueString;
      } else {
        highlightedFieldMappings[highlightedValue.fieldName] = highlightedValueString;
      }

      return new AppliedHighlightedFields(highlightedFieldMappings);
    }, {});
  }
}
