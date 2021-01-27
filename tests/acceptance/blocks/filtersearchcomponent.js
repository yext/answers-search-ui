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
    await t.click(this._input);
    await t.pressKey('ctrl+a');
    await t.pressKey('backspace');
    await t.typeText(this._input, query);
  }

  /**
   * Returns a Selector for the desired autocomplete option
   *
   * @param {string} displayValue
   * @returns {Selector}
   */
  async selectFilter (displayValue) {
    await t.click(this._input);
    const autocompleteOption =
      this._selector.find('.yxt-AutoComplete-option').withText(displayValue);
    await t.expect(autocompleteOption.exists).ok();
    await t.click(autocompleteOption);
  }
}
