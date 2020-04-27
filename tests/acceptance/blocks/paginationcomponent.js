import { Selector, t } from 'testcafe';

/**
 * This class models user interactions with the {@link PaginationComponent}.
 */
export default class PaginationComponentBlock {
  constructor () {
    this._currentPage = Selector('#active-page');
    this._links = Selector('.yxt-Pagination-link');
  }

  /**
   * Find the next-page button and click it
   */
  async clickNextButton () {
    await t.click(this._links.filter('.js-yxt-Pagination-next'));
  }

  /**
   * Find the current page label+number, if it exists
   */
  async getActivePageLabelAndNumber () {
    return this._currentPage.textContent;
  }
}
