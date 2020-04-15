import { Selector, t } from 'testcafe';

export default class PaginationComponentBlock {
  constructor () {
    this._currentPage = Selector('span.yxt-Pagination-page');
    this._buttons = Selector('.yxt-Pagination-button');
    this._links = Selector('.yxt-Pagination-link');
  }

  /**
   * Find the next-page button and click it
   */
  async clickNextPage () {
    await t.click(this._buttons.filter('.js-yxt-Pagination-next'));
  }

  /**
   * Find the current page
   */
  async getCurrentPage () {
    return this._currentPage.textContent;
  }
}
