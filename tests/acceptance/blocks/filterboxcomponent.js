import { Selector, t } from 'testcafe';
import FilterOptionsComponentBlock from './filteroptionscomponent';
/**
 * This class models user interactions with the {@link FilterBoxComponent}.
 */
export default class FilterBoxComponentBlock {
  constructor (selector) {
    this._container = '.yxt-FilterBox-container';
    this._selector = selector || Selector(this._container);
  }

  /**
   * Gets the child FilterOptions block with the given title.
   * @param {String} title
   */
  async getFilterOptions (title) {
    const filterOptions = await this._selector.find('.yxt-FilterOptions-fieldSet').withText(title);
    return new FilterOptionsComponentBlock(filterOptions);
  }

  /**
   * Apply the filters in this filter box.
   */
  async applyFilters () {
    const applyButton = await this._selector.find('.js-yext-filterbox-apply');
    await t.click(applyButton);
  }

  /**
   * Reset the child filters.
   */
  async reset () {
    const reset = await this._selector.find('.js-yxt-FilterBox-reset');
    await t.click(reset);
  }
}
