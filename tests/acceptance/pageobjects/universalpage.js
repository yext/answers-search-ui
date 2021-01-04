import NavigationComponentBlock from '../blocks/navigationcomponent';
import SearchComponentBlock from '../blocks/searchcomponent';
import UniversalResultsComponentBlock from '../blocks/universalresultscomponent';

/**
 * A model of a universal search page, containing block representations
 * of the various {@link Component}s a user would interact with.
 */
class UniversalPage {
  constructor () {
    this._searchComponent = new SearchComponentBlock();
    this._universalResultsComponent = new UniversalResultsComponentBlock();
    this._navigationComponent = new NavigationComponentBlock();
  }

  /**
     * Returns the {@link SearchComponentBlock} on the page.
     */
  getSearchComponent () {
    return this._searchComponent;
  }

  /**
     * Returns the {@link UniversalResultsComponentBlock} on the page.
     */
  getUniversalResultsComponent () {
    return this._universalResultsComponent;
  }

  /**
   * Returns the {@link NavigationComponentBlock} on the page.
   */
  getNavigationComponent () {
    return this._navigationComponent;
  }
}

export default new UniversalPage();
