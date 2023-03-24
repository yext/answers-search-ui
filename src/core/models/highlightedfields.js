/**
 * Represents highlighted fields without the highlighting applied
*/
export default class HighlightedFields {
  /**
   * Constructs a highlighted fields object which consists of fields mapping to HighlightedValues
   *
   * @param {import('@yext/search-core').HighlightedFields} highlightedFields
   *
   * Example object:
   *
   * {
   *   description: {
   *     value: 'likes apple pie and green apples',
   *     matchedSubstrings: [
   *       { offset: 6, length: 5 },
   *       { offset: 26, length: 5 }
   *     ]
   *   },
   *   c_favoriteFruits: [
   *     {
   *       apples: [
   *         {
   *           value: 'Granny Smith',
   *           matchedSubstrings: []
   *         },
   *         {
   *           value: 'Upton Pyne Apple',
   *           matchedSubstrings: [{ offset: 11, length: 5}]
   *         }
   *       ],
   *       pears: [
   *         {
   *           value: 'Callery Pear',
   *           matchedSubstrings: []
   *         }
   *       ]
   *     }
   *   ]
   * }
   */
  constructor (highlightedFields = {}) {
    Object.assign(this, highlightedFields);
  }
}
