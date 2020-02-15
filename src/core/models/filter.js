import { AnswersBasicError } from '../errors/errors';

/** @module Filter */

/**
 * Represents an api filter and provides static methods for easily constructing Filters.
 * See https://developer.yext.com/docs/api-reference/#operation/listEntities for structure details
 */
export default class Filter {
  constructor (data = {}, metadata) {
    Object.assign(this, data);
    const entries = Object.entries(this);
    if (entries.length > 1) {
      throw new AnswersBasicError('Filters need at most one key', 'Filter', this);
    }
    if (entries.length === 1 && metadata) {
      // Insert additional metadata into the filter if is not a combinator filter,
      // Intentionally does not keep old metadata.
      const [field, filterValue] = entries[0];
      if (!Array.isArray(filterValue)) {
        this[field] = {
          ...filterValue,
          metadata: metadata
        };
      }
    }
    Object.freeze(this);
  }

  /**
   * Parse a JSON format filter returned from the server into a Filter
   * @param {*} responseFilter A filter in JSON format returned from the backend
   * @returns {Filter}
   */
  static fromResponse (responseFilter, metadata) {
    return new Filter(JSON.parse(responseFilter), metadata);
  }

  /**
   * Return a new Filter representing the OR of all provided filters
   * @param  {...Filter} filters The filters to OR together
   * @returns {Filter}
   */
  static or (...filters) {
    return new Filter({
      '$or': filters
    });
  }

  /**
   * Return a new Filter representing the AND of all provided filters
   * @param  {...Filter} filters The filters to AND together
   * @returns {Filter}
   */
  static and (...filters) {
    return new Filter({
      '$and': filters
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
   * @param {Object} metadata Extra metadata for the filter
   * @returns {Filter}
   */
  static equal (field, value, metadata) {
    return Filter._fromMatcher(field, '$eq', value, metadata);
  }

  /**
   * Create a new "less than" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be less than
   * @param {Object} metadata Extra metadata for the filter
   * @returns {Filter}
   */
  static lessThan (field, value, metadata) {
    return Filter._fromMatcher(field, '$lt', value, metadata);
  }

  /**
   * Create a new "less than or equal to" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be less than or equal to
   * @param {Object} metadata Extra metadata for the filter
   * @returns {Filter}
   */
  static lessThanEqual (field, value, metadata) {
    return Filter._fromMatcher(field, '$le', value, metadata);
  }

  /**
   * Create a new "greater than" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be greater than
   * @param {Object} metadata Extra metadata for the filter
   * @returns {Filter}
   */
  static greaterThan (field, value, metadata) {
    return Filter._fromMatcher(field, '$gt', value, metadata);
  }

  /**
   * Create a new "greater than or equal to" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be greater than or equal to
   * @param {Object} metadata Extra metadata for the filter
   * @returns {Filter}
   */
  static greaterThanEqual (field, value, metadata) {
    return Filter._fromMatcher(field, '$ge', value, metadata);
  }

  /**
   * Create a new inclusive range filter
   * @param {string} field The subject field of the filter
   * @param {*} min The minimum value
   * @param {*} max The maximum value
   * @param {Object} metadata Extra metadata for the filter
   * @returns {Filter}
   */
  static inclusiveRange (field, min, max, metadata) {
    return new Filter({
      [field]: {
        '$ge': min,
        '$le': max,
        metadata
      }
    });
  }

  /**
   * Create a new exclusive range filter
   * @param {string} field The subject field of the filter
   * @param {*} min The minimum value
   * @param {*} max The maximum value
   * @param {Object} metadata Extra metadata for the filter
   * @returns {Filter}
   */
  static exclusiveRange (field, min, max, metadata) {
    return new Filter({
      [field]: {
        '$gt': min,
        '$lt': max,
        metadata
      }
    });
  }

  /**
   * Create a new position filter
   * @param {number} lat The latitude of the position
   * @param {number} lng The longitude of the position
   * @param {number} radius The search radius (in meters)
   * @param {Object} metadata Extra metadata for the filter
   */
  static position (lat, lng, radius, metadata) {
    return Filter._fromMatcher('builtin.location', '$near', { lat, lng, radius }, metadata);
  }

  /**
   * Create a new filter with the given matcher
   * @private
   * @param {string} field The subject field of the filter
   * @param {string} matcher The matcher for the filer
   * @param {*} value The value for the filter
   * @param {Object} metadata Extra metadata for the filter
   * @returns {Filter}
   */
  static _fromMatcher (field, matcher, value, metadata) {
    return new Filter({
      [field]: {
        [matcher]: value,
        metadata
      }
    });
  }

  /**
   * Stringify the filter to send in the request.
   * @param {Facet} filter
   */
  static stringify (filter) {
    return JSON.stringify(filter, (key, value) => {
      if (key !== 'metadata') {
        return value;
      }
    });
  }
}
