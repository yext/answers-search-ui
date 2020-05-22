import FilterBoxComponentBlock from './filterboxcomponent';
import { Selector } from 'testcafe';

/**
 * This class models user interactions with the {@link FacetsComponent}.
 */
export default class FacetsComponentBlock {
  constructor () {
    const filterBoxSelector = Selector('.js-yxt-Facets .yxt-FilterBox-container');
    this._filterBox = new FilterBoxComponentBlock(filterBoxSelector);
  }

  /**
   * Return the child filter box component's block.
   */
  getFilterBox () {
    return this._filterBox;
  }
}
