import HighlightedValue from '../models/highlightedvalue';

/**
 * Represents mappings from fields to highlighted strings
 */
export default class HighlightedFieldMap {
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
   * Constructs a HighlightedFieldMap from an answers-core HighlightInfo array
   *
   * @param {HighlightInfo[]} highlightInfoArray from answers-core
   * @returns {HighlightedFieldMap}
   */
  static fromCore (highlightInfoArray) {
    if (highlightInfoArray === undefined || highlightInfoArray.length === 0) {
      return {};
    }

    return highlightInfoArray.reduce((highlightedFieldMappings, highlightInfo) => {
      const highlightedValueString = new HighlightedValue()
        .buildHighlightedValue(highlightInfo.value, highlightInfo.matchedSubstrings);
      const fieldIsNested = (highlightInfo.path.length > 1);

      if (fieldIsNested) {
        const topLevelOfPath = highlightInfo.path[0];
        const nestedPath = highlightInfo.path.slice(1);
        const nestedHighlightedValueString = this.nestValue(highlightedValueString, nestedPath);

        highlightedFieldMappings[topLevelOfPath] = nestedHighlightedValueString;
      } else {
        highlightedFieldMappings[highlightInfo.fieldName] = highlightedValueString;
      }

      return new HighlightedFieldMap(highlightedFieldMappings);
    }, {});
  }

  /**
   * Nest a value inside an object whose structure is defined by an array of keys
   *
   * Example: if `value` is 'Hello, world!', and `keys` is ['a', 'b'],
   * the function will return the object:
   *
   * {
   *   a: {
   *     b: 'Hello, world!'
   *   }
   * }
   *
   * @param {*} value
   * @param {string[]} keys
   */
  static nestValue (value, keys) {
    return keys.reduceRight((acc, key) => {
      return { [key]: acc };
    }, value);
  }
}
