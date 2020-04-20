import { Selector, t } from 'testcafe';
import FilterOptionsComponentBlock from './filteroptionscomponent';
/**
 * This class models user interactions with the {@link FilterBoxComponent}.
 */
export default class FilterBoxComponentBlock {
  constructor (container) {
    this._container = container || '';
  }

  /**
   * Toggle the given option for the given filter.
   */
  async toggleOption (filterIndex, optionIndex) {
    const filterOptions = await this.getFilter(filterIndex);
    const isExpanded = await filterOptions.isExpanded();
    if (isExpanded) {
      await filterOptions.expand();
    }
    filterOptions.toggleOption(optionIndex);
  }

  /**
   * Get the number of results associated with a particular option.
   * This value is enclosed within parenthesis at the end of an option's
   * label.
   * @param {number} index
   */
  async getOptionCount (filterIndex, optionIndex) {
    const filterOptions = await this.getFilter(filterIndex);
    return filterOptions.getOptionCount(optionIndex);
  }

  /**
   * Return a selector within this block's container context.
   * @param {string} selector selector for desired element
   */
  _Selector (selector) {
    return Selector(`${this._container} ${selector}`);
  }

  /**
   * Gets the child filter component of the given index.
   * Currently assume all filter components are FilterOptions, since that is
   * By far the primary use case
   * @param {number} index
   */
  getFilter (index) {
    return new FilterOptionsComponentBlock(`${this._container} .js-yext-filterbox-filter${index}`);
  }

  /**
   * Gets the total number of filters.
   */
  getFilterCount () {
    return this._Selector('.yxt-FilterBox-filter').count;
  }

  /**
   * Gets all filter blocks.
   */
  getAllFilters () {
    const filters = [];
    const count = this.getFilterCount();
    for (let index = 0; index < count; index++) {
      filters[index] = this.getFilter(index);
    }
    return filters;
  }

  /**
   * Apply the filters in this filter box.
   */
  async applyFilters () {
    const applyButton = this._Selector('.js-yext-filterbox-apply');
    await t.click(applyButton);
    // TODO more sophisticated waiting mechanism, docs suggest waiting for some DOM change
    await t.wait(1000);
  }

  /**
   * Reset the child filters.
   */
  async reset () {
    const reset = this._Selector('.js-yxt-FilterBox-reset');
    await t.click(reset);
  }
}
