import { AnswersConfigError } from '../errors/errors';

/** @module SearchConfig */

export default class SearchConfig {
  constructor (config = {}) {
    /**
     * The max results per search.
     * Also defines the number of results per page, if pagination is enabled
     * @type {number}
     */
    this.limitForVertical = config.limit || 20;

    /**
     * The max results per vertical for universal search.
     * @type {Object<string, number>}
     */
    this.universalLimit = config.universalLimit;

    /**
     * The vertical key to use for all searches
     * @type {string}
     */
    this.verticalKey = config.verticalKey || null;

    /**
     * A default search to use on initialization when the user hasn't provided a query
     * @type {string}
     */
    this.defaultInitialSearch = config.defaultInitialSearch;

    this.validate();
    Object.freeze(this);
  }

  validate () {
    if (typeof this.limitForVertical !== 'number' || this.limitForVertical < 1 || this.limitForVertical > 50) {
      throw new AnswersConfigError('Search Limit must be between 1 and 50', 'SearchConfig');
    }
  }
}
