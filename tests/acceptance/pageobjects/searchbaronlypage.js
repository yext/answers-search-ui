import SearchComponentBlock from '../blocks/searchcomponent';

/**
 * A model of a SearchBar-only page, containing block representations
 * of the various {@link Component}s a user would interact with.
 */
class SearchBarOnlyPage {
  constructor () {
    this._searchComponent = new SearchComponentBlock();
  }

  /**
   * Returns the {@link SearchComponentBlock} on the page.
   */
  getSearchComponent () {
    return this._searchComponent;
  }
}

export default new SearchBarOnlyPage();
