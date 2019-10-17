/**
 * @module SearchIndexes
 */

/*
 * SearchIndexes is an ENUM that represents the main partitions of the storage
 * @enum {string}
 */
export default {
  /**
   * An index used to maintain global application state
   * @type {string}
   */
  GLOBAL: 'global',

  /**
   * A temporary index used for backwards compatability
   * @type {string}
   */
  DEFAULT: 'default',

  /**
   * An index to contain state related to search
   * e.g. query, filters, limit, offset
   * @type {string}
   */
  SEARCH: 'search',

  /**
   * An index to contain component application state
   * @type {string}
   */
  MODELS: 'models'
};