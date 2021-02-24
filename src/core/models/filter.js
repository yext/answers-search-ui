/** @module Filter */

import FilterCombinators from '../filters/filtercombinators';

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
   * A filter should have exactly ONE key. That key is EITHER the field name to filter by, or
   * a special string such as $or or $and.
   * @type {string}
   */
  getFilterKey () {
    if (Object.keys(this).length > 0) {
      return Object.keys(this)[0];
    }
  }

  /**
   * Create an empty filter
   */
  static empty () {
    return new Filter();
  }

  /**
   * Wrap filter data in a Filter class
   * @param {Object} filter
   */
  static from (filter) {
    return new Filter(filter);
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
   * Return a new Filter representing the OR of all provided filters
   * @param  {...Filter} filters The filters to OR together
   * @returns {Filter}
   */
  static or (...filters) {
    return new Filter({
      [ FilterCombinators.OR ]: filters
    });
  }

  /**
   * Return a new Filter representing the AND of all provided filters
   * @param  {...Filter} filters The filters to AND together
   * @returns {Filter}
   */
  static and (...filters) {
    return new Filter({
      [ FilterCombinators.AND ]: filters
    });
  }

  /**
   * Create a new "equal to" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be equal to
   * @returns {Filter}
   */
  static equal (field, value) {
    return Filter._fromMatcher(field, '$eq', value);
  }
  /**
   * Create a new position filter
   * @param {number} lat The latitude of the position
   * @param {number} lng The longitude of the position
   * @param {number} radius The search radius (in meters)
   */
  static position (lat, lng, radius) {
    return Filter._fromMatcher('builtin.location', '$near', { lat, lng, radius });
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
