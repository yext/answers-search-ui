import { Selector, t } from 'testcafe';

/**
 * This class models user interactions with the {@link FilterOptionsComponent}.
 */
export default class FilterOptionsComponentBlock {
  constructor (container) {
    this._container = container || '';
  }

  /**
   * Return a selector within this block's container context.
   * @param {string} selector selector for desired element
   */
  _Selector (selector) {
    return Selector(`${this._container} ${selector}`);
  }

  async clickApply () {
    const applyButton = this._Selector('.js-yxt-FilterBox-reset');
    await t.click(applyButton);
  }

  /**
   * Return a selector for the option with the given index
   * @param {number} index
   */
  getOption (index) {
    return this._Selector(`[data-index="${index}"]`);
  }

  async getOptionCount (index) {
    const option = await this.getOption(index);
    const optionId = await option.id;
    const label = this._Selector(`[for="${optionId}"]`);
    const labelText = await label.innerText;
    const countString = labelText.substring(0, labelText.length - 1).split('(')[1];
    return Number.parseInt(countString);
  }

  /**
   * Click the option at the given index.
   * @param {number} index
   */
  async clickOption (index) {
    const option = this.getOption(index);
    await t.click(option);
  }

  async expand () {
    const clickableLegend = this._Selector('.yxt-FilterOptions-clickableLegend');
    await t.click(clickableLegend);
  }

  /**
   * Toggle the show more button.
   */
  async toggleShowMore () {
    const showMore = this._Selector('.yxt-FilterOptions-showToggle');
    await t.click(showMore);
  }

  /**
   * Click the reset button.
   */
  async reset () {
    const reset = this._Selector('.yxt-FilterOptions-reset');
    await t.click(reset);
  }
}
