import SearchComponentBlock from '../blocks/searchcomponent';
import VerticalResultsComponentBlock from '../blocks/verticalresultscomponent';
import FacetsComponentBlock from '../blocks/facetscomponent';

/**
 * A model of a vertical search page with facets, containing block representations
 * of the various {@link Component}s a user would interact with.
 */
class FacetsPage {
  constructor () {
    this._searchComponent = new SearchComponentBlock();
    this._verticalResultsComponent = new VerticalResultsComponentBlock();
    this._facetsComponent = new FacetsComponentBlock();
  }

  /**
   * Returns the {@link FacetsComponentBlock} on the page.
   */
  getFacetsComponent () {
    return this._facetsComponent;
  }

  /**
   * Returns the {@link SearchComponentBlock} on the page.
   */
  getSearchComponent () {
    return this._searchComponent;
  }

  /**
   * Returns the {@link VerticalResultsComponentBlock} on the page.
   */
  getVerticalResultsComponent () {
    return this._verticalResultsComponent;
  }
}

export default new FacetsPage();
