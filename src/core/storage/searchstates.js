/** @module SearchStates */

/**
 * @typedef {string} SearchState
 */

/**
 * SearchStates is an ENUM for the various stages of searching,
 * used to show different templates
 * @enum {string}
 */
const SearchStates = {
  PRE_SEARCH: 'pre-search',
  SEARCH_LOADING: 'search-loading',
  SEARCH_COMPLETE: 'search-complete'
};
export default SearchStates;
