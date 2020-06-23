import { Selector, t } from 'testcafe';

/**
 * This class models user interactions with the {@link FilterOptionsComponent}.
 */
export default class FilterOptionsComponentBlock {
  constructor (selector) {
    this._container = '.yxt-FilterOptions-fieldSet';
    this._selector = selector || Selector(this._container);
  }

  /**
   * Returns whether this FilterOptions is collapsed or not.
   */
  async isCollapsed () {
    return this._selector.find('.yxt-FilterOptions--collapsed').exists;
  }

  async getLabel (label) {
    return this._selector.find('.yxt-FilterOptions-optionLabel--name').withText(label).parent(0);
  }

  /**
   * Return a selector for the option with the given label.
   * @param {String} label
   */
  async _getOption (label) {
    const labelNode = await this.getLabel(label);
    const attributes = await labelNode.attributes;
    const inputId = attributes.for;
    // We have to use withAttribute here instead of a css selector
    // because the sdk is dumb and uses a period in its element ids.
    return Selector('input').withAttribute('id', inputId);
  }

  /**
   * Get the number of results associated with a particular option.
   * This value is enclosed within parenthesis at the end of an option's
   * label.
   * @param {String} label
   */
  async getOptionCount (label) {
    const labelNode = await this.getLabel(label);
    const labelText = await labelNode.innerText;
    const countString = labelText.substring(0, labelText.length - 1).split('(')[1];
    return Number.parseInt(countString);
  }

  /**
   * Toggle the option with the given label.
   * @param {String} label
   */
  async toggleOption (label) {
    const isCollapsed = await this.isCollapsed();
    if (isCollapsed) {
      await this.toggleExpand();
    }
    const labelSelector = await this.getLabel(label);
    await t.click(labelSelector);
  }

  /**
   * Expand the FilterOptions if collapsed, otherwise collapse it.
   */
  async toggleExpand () {
    const clickableLegend = await this._selector.find('.yxt-FilterOptions-clickableLegend');
    await t.click(clickableLegend);
  }
}
