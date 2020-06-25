import SearchComponentBlock from '../blocks/searchcomponent';
import VerticalResultsComponentBlock from '../blocks/verticalresultscomponent';
import PaginationComponentBlock from '../blocks/paginationcomponent';
import FacetsComponentBlock from '../blocks/facetscomponent';
import FilterBoxComponentBlock from '../blocks/filterboxcomponent';
import { Selector } from 'testcafe';

/**
 * A model of a vertical search page, containing block representations
 * of the various {@link Component}s a user would interact with.
 */
class VerticalPage {
  constructor () {
    this._search = new SearchComponentBlock();
    this._verticalResults = new VerticalResultsComponentBlock();
    this._pagination = new PaginationComponentBlock();
    this._facets = new FacetsComponentBlock();
    this._filterBox = new FilterBoxComponentBlock(Selector('.filter-box .yxt-FilterBox-container'));
  }

  /**
   * Returns the {@link SearchComponentBlock} on the page.
   */
  getSearchComponent () {
    return this._search;
  }

  /**
   * Returns the {@link VerticalResultsComponentBlock} on the page.
   */
  getVerticalResultsComponent () {
    return this._verticalResults;
  }

  /**
   * Returns the {@link PaginationComponentBlock} on the page.
   */
  getPaginationComponent () {
    return this._pagination;
  }

  /**
   * Returns the {@link FacetsComponentBlock} on the page.
   */
  getFacetsComponent () {
    return this._facets;
  }

  /**
   * Returns the {@link FilterBoxComponentBlock} on the page.
   */
  getFilterBoxComponent () {
    return this._filterBox;
  }
}

export default new VerticalPage();
