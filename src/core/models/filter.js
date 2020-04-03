/** @module Filter */

import FilterCombinators from './filtercombinators';

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
      [FilterCombinators.OR]: filters
    });
  }

  /**
   * Return a new Filter representing the AND of all provided filters
   * @param  {...Filter} filters The filters to AND together
   * @returns {Filter}
   */
  static and (...filters) {
    return new Filter({
      [FilterCombinators.AND]: filters
    });
  }

  /**
   * OR filters with the same keys, then AND the resulting groups
   * @param  {...Filter} filters The filters to group
   * @returns {Filter}
   */
  static group (...filters) {
    const groups = {};
    for (const filter of filters) {
      const key = filter.getFilterKey();
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(filter);
    }

    const groupFilters = [];
    for (const field of Object.keys(groups)) {
      groupFilters.push(groups[field].length > 1 ? Filter.or(...groups[field]) : groups[field][0]);
    }

    return groupFilters.length > 1 ? Filter.and(...groupFilters) : groupFilters[0];
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
   * Create a new "less than" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be less than
   * @returns {Filter}
   */
  static lessThan (field, value) {
    return Filter._fromMatcher(field, '$lt', value);
  }

  /**
   * Create a new "less than or equal to" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be less than or equal to
   * @returns {Filter}
   */
  static lessThanEqual (field, value) {
    return Filter._fromMatcher(field, '$le', value);
  }

  /**
   * Create a new "greater than" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be greater than
   * @returns {Filter}
   */
  static greaterThan (field, value) {
    return Filter._fromMatcher(field, '$gt', value);
  }

  /**
   * Create a new "greater than or equal to" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be greater than or equal to
   * @returns {Filter}
   */
  static greaterThanEqual (field, value) {
    return Filter._fromMatcher(field, '$ge', value);
  }

  /**
   * Create a new inclusive range filter
   * @param {string} field The subject field of the filter
   * @param {*} min The minimum value
   * @param {*} max The maximum value
   * @returns {Filter}
   */
  static inclusiveRange (field, min, max) {
    return new Filter({
      [field]: {
        '$ge': min,
        '$le': max
      }
    });
  }

  /**
   * Create a new exclusive range filter
   * @param {string} field The subject field of the filter
   * @param {*} min The minimum value
   * @param {*} max The maximum value
   * @returns {Filter}
   */
  static exclusiveRange (field, min, max) {
    return new Filter({
      [field]: {
        '$gt': min,
        '$lt': max
      }
    });
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
