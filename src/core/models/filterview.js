/** @module FilterView */

import Filter from './filter';

/**
 * Contains a {@link Filter} and associated metadata.
 */
export default class FilterView {
  constructor (filter, metadata) {
    /**
     * The exactly formatted filter to send to the backend.
     * @type {Filter}
     */
    this.filter = filter;

    /**
     * Any extra metadata for the filters.
     * @type {Object}
     */
    this.metadata = metadata;
    Object.freeze(this);
  }

  /**
   * A filter should have exactly ONE key. That key is EITHER the field name to filter by, or
   * a special string such as $or or $and.
   * @type {string}
   */
  getFilterKey () {
    if (this.filter && Object.keys(this.filter).length > 0) {
      return Object.keys(this.filter)[0];
    }
  }

  /**
   * Parse a JSON format filter returned from the server into a FilterView
   * @param {*} responseFilter A filter in JSON format returned from the backend
   * @returns {Filter}
   */
  static fromResponse (responseFilter, metadata) {
    const filter = new Filter(JSON.parse(responseFilter));
    return new FilterView(filter, metadata);
  }

  /**
   * OR filter views with the same keys, then AND the resulting groups
   * @param  {...FilterView} filterViews The filter views to group
   * @returns {FilterView}
   */
  static group (...filterViews) {
    const groups = {};
    for (const fv of filterViews) {
      const key = fv.getFilterKey();
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(fv);
    }

    const groupFilters = [];
    for (const key of Object.keys(groups)) {
      groupFilters.push(groups[key].length > 1 ? FilterView.or(...groups[key]) : groups[key][0]);
    }
    if (groupFilters.length === 0) {
      return {};
    }
    return groupFilters.length > 1 ? FilterView.and(...groupFilters) : groupFilters[0];
  }

  /**
   * Return a new FilterView combining the given filters with the given combinator,
   * such as '$or' or '$and'.
   * @param {string} combinator
   * @param  {...FilterView} filterViews
   */
  static _combinedFilter (combinator, ...filterViews) {
    const filters = filterViews.map(fv => fv.filter);
    const filter = new Filter({
      [combinator]: filters
    });
    const metadata = {
      combinedMetadata: filterViews.map(fv => fv.metadata),
      combinator
    };
    return new FilterView(filter, metadata);
  }

  /**
   * Return a new Filter representing the OR of all provided filters
   * @param  {...FilterView} filtersViews The filters to OR together
   * @returns {FilterView}
   */
  static or (...filterViews) {
    return FilterView._combinedFilter('$or', ...filterViews);
  }

  /**
   * Return a new Filter representing the AND of all provided filters
   * @param  {...FilterView} filtersViews The filters to AND together
   * @returns {FilterView}
   */
  static and (...filterViews) {
    return FilterView._combinedFilter('$and', ...filterViews);
  }

  /**
   * Create a new "equal to" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be equal to
   * @param {Object} metadata Additional metadata for the FilterView
   * @returns {FilterView}
   */
  static equal (field, value, metadata) {
    const filter = Filter._fromMatcher(field, '$eq', value);
    return new FilterView(filter, metadata);
  }

  /**
   * Create a new "less than" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be less than
   * @param {Object} metadata Additional metadata for the FilterView
   * @returns {FilterView}
   */
  static lessThan (field, value, metadata) {
    const filter = Filter._fromMatcher(field, '$lt', value);
    return new FilterView(filter, metadata);
  }

  /**
   * Create a new "less than or equal to" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be less than or equal to
   * @param {Object} metadata Additional metadata for the FilterView
   * @returns {FilterView}
   */
  static lessThanEqual (field, value, metadata) {
    const filter = Filter._fromMatcher(field, '$le', value);
    return new FilterView(filter, metadata);
  }

  /**
   * Create a new "greater than" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be greater than
   * @param {Object} metadata Additional metadata for the FilterView
   * @returns {FilterView}
   */
  static greaterThan (field, value, metadata) {
    const filter = Filter._fromMatcher(field, '$gt', value);
    return new FilterView(filter, metadata);
  }

  /**
   * Create a new "greater than or equal to" filter for a field
   * @param {string} field The subject field of the filter
   * @param {*} value The value the field should be greater than or equal to
   * @param {Object} metadata Additional metadata for the FilterView
   * @returns {FilterView}
   */
  static greaterThanEqual (field, value, metadata) {
    const filter = Filter._fromMatcher(field, '$ge', value);
    return new FilterView(filter, metadata);
  }

  /**
   * Create a new inclusive range filter
   * @param {string} field The subject field of the filter
   * @param {*} min The minimum value
   * @param {*} max The maximum value
   * @param {Object} metadata Additional metadata for the FilterView
   * @returns {FilterView}
   */
  static inclusiveRange (field, min, max, metadata) {
    const filter = new Filter({
      [field]: {
        '$ge': min,
        '$le': max
      }
    });
    return new FilterView(filter, metadata);
  }

  /**
   * Create a new exclusive range filter
   * @param {string} field The subject field of the filter
   * @param {*} min The minimum value
   * @param {*} max The maximum value
   * @param {Object} metadata Additional metadata for the FilterView
   * @returns {FilterView}
   */
  static exclusiveRange (field, min, max, metadata) {
    const filter = new Filter({
      [field]: {
        '$gt': min,
        '$lt': max
      }
    });
    return new FilterView(filter, metadata);
  }

  /**
   * Create a new position filter
   * @param {number} lat The latitude of the position
   * @param {number} lng The longitude of the position
   * @param {number} radius The search radius (in meters)
   * @param {Object} metadata Additional metadata for the FilterView
   */
  static position (lat, lng, radius, metadata) {
    const filter = Filter._fromMatcher('builtin.location', '$near', { lat, lng, radius });
    return new FilterView(filter, metadata);
  }
}
