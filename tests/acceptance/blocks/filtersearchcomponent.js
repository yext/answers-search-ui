import { Selector, t } from 'testcafe';

/**
 * This class models user interactions with the {@link FilterSearchComponent}.
 */
export default class FilterSearchComponentBlock {
  constructor () {
    this._selector = Selector('.yext-search-container');
    this._input = this._selector.find('.js-yext-query');
  }

  /**
   * Selects the filter with the given display value in FilterSearch's autocomplete.
   *
   * @param {string} displayValue
   * @returns {Promise<Selector>}
   */
  async selectFilter (displayValue) {
    return t
      .click(this._input)
      .pressKey('ctrl+a')
      .pressKey('backspace')
      .typeText(this._input, displayValue)
      .wait(500)
      .click(this._selector.find('.js-yext-autocomplete-option').withText(displayValue));
  }
}
