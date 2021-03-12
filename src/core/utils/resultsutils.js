import SearchStates from '../storage/searchstates';

/**
 * Returns a CSS class for the input searchState
 * @param {string} searchState - A search state from {@link SearchStates}
 * @returns {string}
 */
export function getContainerClass (searchState) {
  switch (searchState) {
    case SearchStates.PRE_SEARCH:
      return 'yxt-Results--preSearch';
    case SearchStates.SEARCH_LOADING:
      return 'yxt-Results--searchLoading';
    case SearchStates.SEARCH_COMPLETE:
      return 'yxt-Results--searchComplete';
  }
}
