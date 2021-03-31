/**
 * Represents highlighted fields without the highlighting applied
*/
export default class HighlightedFields {
  /**
   * Constructs a highlighted fields object which consists of fields mapping to HighlightedValues
   *
   * @param {import('@yext/answers-core').HighlightedFields} highlightedFields from answers-core
   *
   * Example object:
   *
   * {
   *   name: {
   *     value: 'Yext',
   *     matchedSubstrings: [{ offset: 0, length: 4}]
   *   },
   *   description: {
   *     featured: {
   *       value: 'Yext is a search company',
   *       matchedSubstrings: [{ offset: 0, length: 4}]
   *     }
   *   },
   *   c_food: [
   *     {
   *       fruits: [
   *       {
   *         value: 'apple',
   *         matchedSubstrings: []
   *       },
   *       {
   *         value: 'pear',
   *         matchedSubstrings: []
   *       }
   *     }
   *   ]
   * }
   */
  constructor (highlightedFields = {}) {
    Object.assign(this, highlightedFields);
  }
}
