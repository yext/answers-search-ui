/** @module Filter */

export default class Filter {
  constructor (data = {}) {
    Object.assign(this, data);
    Object.freeze(this);
  }

  /**
   * Parse a JSON format filter returned from the server into a Filter
   * @param {*} responseFilter A filter in JSON format returned from the backend
   */
  static from (responseFilter) {
    return new Filter(JSON.parse(responseFilter));
  }

  /**
   * Return a new Filter representing the OR of all provided filters
   * @param  {...Filter} filters The filters to OR together
   */
  static or (...filters) {
    return new Filter({
      '$or': filters
    });
  }

  /**
   * Return a new Filter representing the AND of all provided filters
   * @param  {...Filter} filters The filters to AND together
   */
  static and (...filters) {
    return new Filter({
      '$and': filters
    });
  }

  /**
   * OR filters with the same keys, then AND the resulting groups
   * @param  {...Filter} filters The filters to group
   */
  static group (...filters) {
    const groups = {};
    for (const filter of filters) {
      const key = Object.keys(filter)[0];
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
   */
  static equal (field, value) {
    return Filter._makeFilter(field, '$eq', value);
  }

  /**
   * Create a new "less than" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be less than
   */
  static lessThan (field, value) {
    return Filter._makeFilter(field, '$lt', value);
  }

  /**
   * Create a new "less than or equal to" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be less than or equal to
   */
  static lessThanEqual (field, value) {
    return Filter._makeFilter(field, '$le', value);
  }

  /**
   * Create a new "greater than" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be greater than
   */
  static greaterThan (field, value) {
    return Filter._makeFilter(field, '$gt', value);
  }

  /**
   * Create a new "greater than or equal to" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be greater than or equal to
   */
  static greaterThanEqual (field, value) {
    return Filter._makeFilter(field, '$ge', value);
  }

  /**
   * Create a new inclusive range filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} min The minimum value of the range
   * @param {*} max The maximum value of the ranger
   */
  static range (field, min, max) {
    return Filter.and(Filter.greaterThanEqual(field, min), Filter.lessThanEqual(field, max));
  }

  /**
   * Create a new filter with the given matcher
   * @private
   * @param {string} field The subject field of the filter
   * @param {string} matcher The matcher for the filer
   * @param {*} value The value for the filter
   */
  static _makeFilter (field, matcher, value) {
    return new Filter({
      [field]: {
        [matcher]: value
      }
    });
  }
}
