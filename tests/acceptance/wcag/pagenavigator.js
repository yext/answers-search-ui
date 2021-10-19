const { waitTillHTMLRendered, getQueryParamsString } = require('./utils');

/**
 * Responsible for navigating pages
 */
class PageNavigator {
  constructor (page, siteUrl) {
    this._page = page;
    this._siteUrl = siteUrl;
  }

  async goto (pageName, queryParams = {}) {
    const queryParamsString = getQueryParamsString(queryParams);
    const url = `${this._siteUrl}/${pageName}?${queryParamsString}`;
    await this._page.goto(url);
    await waitTillHTMLRendered(this._page);
  }

  /**
   * Click on an element of the current page
   *
   * @param {string} selector The CSS selector to click on
   */
  async click (selector) {
    this._page.evaluate((selector) => {
      console.log(document.querySelector(selector));
      document.querySelector(selector).click();
    }, selector);
    await waitTillHTMLRendered(this._page);
  }
}

module.exports = PageNavigator;
