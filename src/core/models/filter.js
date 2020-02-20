/** @module Filter */

/**
 * Represents an api filter and provides static methods for easily constructing Filters.
 * See https://developer.yext.com/docs/api-reference/#operation/listEntities for structure details
 */
export default class Filter {
  constructor (data = {}) {
    Object.assign(this, data);
    Object.freeze(this);
  }

  /**
   * Parse a JSON format filter returned from the server into a Filter
   * @param {*} responseFilter A filter in JSON format returned from the backend
   * @returns {Filter}
   */
  static fromResponse (responseFilter) {
    return new Filter(JSON.parse(responseFilter));
  }

  /**
   * Create a new filter with the given matcher
   * @private
   * @param {string} field The subject field of the filter
   * @param {string} matcher The matcher for the filer
   * @param {*} value The value for the filter
   * @returns {Filter}
   */
  static _fromMatcher (field, matcher, value) {
    return new Filter({
      [field]: {
        [matcher]: value
      }
    });
  }
}
