import { Selector, t } from 'testcafe';

/**
 * This class models user interactions with the {@link AutoCompleteComponent}.
 */
class AutoCompleteComponentBlock {
  constructor () {
    this._options = Selector('.yxt-AutoComplete-option');
  }

  /**
     * Finds the autocomplete option with the provided value and
     * clicks it.
     *
     * @param {string} value The value of the autocomplete option to
     *                       select.
     */
  async selectOption (value) {
    const option = this._options.withExactText(value);
    await t.click(option);
  }
}

/**
 * This class models user interactions with the {@link SearchBarComponent}.
 */
export default class SearchComponentBlock {
  constructor () {
    this._input = Selector('.yxt-SearchBar-input');
    this._clearButton = Selector('.yxt-SearchBar-clear');
    this._submitButton = Selector('.yxt-SearchBar-button');
    this._autocomplete = new AutoCompleteComponentBlock();
  }

  /**
     * Enters a query into the search bar, without submitting it.
     *
     * @param {string} query The query to enter in the input.
     */
  async enterQuery (query) {
    await t.typeText(this._input, query);
  }

  /**
     * Submits whatever query is presently in the search bar.
     */
  async submitQuery () {
    await t.click(this._submitButton);
  }

  /**
     * Clears whatever query is presently in the search bar.
     */
  async clearQuery () {
    await t.click(this._clearButton);
  }

  /**
     * Returns the {@link AutoCompleteComponentBlock} associated
     * with this search bar.
     *
     * @returns {AutoCompleteComponentBlock} The autocomplete associated
     *                                       with the search bar.
     */
  getAutoComplete () {
    return this._autocomplete;
  }
}
