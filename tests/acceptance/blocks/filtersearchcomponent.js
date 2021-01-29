import { Selector, t } from 'testcafe';

/**
 * This class models user interactions with the {@link FilterSearchComponent}.
 */
export default class FilterOptionsComponentBlock {
  constructor () {
    this._selector = Selector('.yext-search-container');
    this._input = this._selector.find('.js-yext-query');
  }

  /**
   * Enters a query into the filtersearch input, without submitting it.
   * Will clear a preexisting query.
   *
   * @param {string} query The query to enter in the input.
   */
  async enterQuery (query) {
    return t
      .click(this._input)
      .pressKey('ctrl+a')
      .pressKey('backspace')
      .typeText(this._input, query)
      .wait(300);
  }

  /**
   * Returns a Selector for the desired autocomplete option
   *
   * @param {string} displayValue
   * @returns {Promise<Selector>}
   */
  async selectFilter (displayValue) {
    await t.click(this._input);
    const autocompleteOption =
      this._selector.find('.yxt-AutoComplete-option').withText(displayValue);
    return t.click(autocompleteOption);
  }
}
