/** @module */

/**
 * StorageIndexes is an ENUM are considered the root context
 * for how data is stored and scoped in the storage.
 *
 * @enum {string}
 */
export default {
  /**
   * The global index that should contain all application
   * specific globals for the application (e.g. search params)
   */
  GLOBAL: 'global',

  /**
   * The Navigation index contains all data to power the navigation component.
   * Sometimes other components might depend directly on this as well, but
   * we've opted to try to store some of that data in the global index instead.
   */
  NAVIGATION: 'navigation',

  /**
   * The Universal Results index for all data related to search results
   * for universal search
   */
  UNIVERSAL_RESULTS: 'universal-results',

  /**
   * The Vertical Results index for all data related to search results
   * for vertical search
   */
  VERTICAL_RESULTS: 'vertical-results',

  /**
   * The Autocomplete index contains state to power the auto complete component
   * This data is powered by network requests for both vertical and universal.
   */
  AUTOCOMPLETE: 'autocomplete',

  /**
   * The direct answer index contains all the data to power the Direct Answer component
   * Typically this index is powered from universal results, in the response to a search query
   */
  DIRECT_ANSWER: 'direct-answer',

  /**
   * The Filter index is the global source of truth for all filters on a page.
   * It should contain all the latest state that is used for search.
   */
  FILTER: 'filter'
};
