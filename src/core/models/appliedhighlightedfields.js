import HighlightedValue from './highlightedvalue';

/**
 * Represents highlighted fields with the highlighting applied
 */
export default class AppliedHighlightedFields {
  /**
   * Constructs a highlighted field map which consists of mappings from fields to highlighted
   * value strings.
   *
   * @param {Object<string, string|object|array>} data Keyed by fieldName. It may consist of nested fields
   *
   * Example object:
   *
   * {
   *   name: '<strong>Yext</strong>',
   *   description: {
   *     featured: '<strong>Yext</strong> is the offical answers company'
   *   },
   *   languages: ['english', 'spanish'],
   *   c_food: [
   *     {
   *       vegetables: ['carrots', 'celery']
   *     }
   *   ]
   * }
   */
  constructor (data = {}) {
    Object.assign(this, data);
  }

  /**
   * Constructs an AppliedHighlightedFields object from an answers-core HighlightedField
   *
   * @param {import('@yext/answers-core').HighlightedFields} highlightedFields from answers-core
   * @returns {AppliedHighlightedFields}
   */
  static fromCore (highlightedFields) {
    if (!highlightedFields || typeof highlightedFields !== 'object') {
      return {};
    }
    const appliedHighlightedFields = this.computeHighlightedDataRecursively(highlightedFields);
    return new AppliedHighlightedFields(appliedHighlightedFields);
  }

  /**
   * Given an answers-core HighlightedFields tree, returns a new tree
   * with highlighting applied to the leaf nodes.
   *
   * @param {import('@yext/answers-core').HighlightedFields} highlightedFields from answers-core
   * @returns {AppliedHighlightedFields}
   */
  static computeHighlightedDataRecursively (highlightedFields) {
    if (this.isHighlightedFieldLeafNode(highlightedFields)) {
      const { value, matchedSubstrings } = highlightedFields;
      return new HighlightedValue().buildHighlightedValue(value, matchedSubstrings);
    }
    if (Array.isArray(highlightedFields)) {
      return highlightedFields.map(
        childFields => this.computeHighlightedDataRecursively(childFields));
    }
    return Object.entries(highlightedFields)
      .reduce((computedFields, [fieldName, childFields]) => {
        computedFields[fieldName] = this.computeHighlightedDataRecursively(childFields);
        return computedFields;
      }, {});
  }

  static isHighlightedFieldLeafNode ({ matchedSubstrings, value }) {
    return matchedSubstrings !== undefined && value !== undefined;
  }
}
