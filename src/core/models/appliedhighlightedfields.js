import HighlightedValue from './highlightedvalue';
import HighlightedFields from './highlightedfields';

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
    const appliedHighlightedFields =
      HighlightedFields.combineHighlightedValues(highlightedValueArray, highlightedValue => {
        const { value, matchedSubstrings } = highlightedValue;
        return new HighlightedValue().buildHighlightedValue(value, matchedSubstrings);
      });
    return new AppliedHighlightedFields(appliedHighlightedFields);
  }
}
