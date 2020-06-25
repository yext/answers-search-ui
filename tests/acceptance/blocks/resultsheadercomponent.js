import { Selector, t } from 'testcafe';

/**
 * This class models user interactions with the {@link ResultsHeaderComponent}.
 */
export default class ResultsHeaderComponentBlock {
  constructor (selector) {
    this._container = '.yxt-ResultsHeader';
    this._selector = selector || Selector(this._container);
  }

  getFilterTagWithLabel (label) {
    return this._selector
      .find('.yxt-ResultsHeader-removableFilterValue')
      .withExactText(label)
      .parent(0);
  }

  getFilterTags () {
    return this._selector.find('.js-yxt-ResultsHeader-removableFilterTag');
  }

  async removeFilterTag (displayValue) {
    await t.click(this.getFilterTagWithLabel(displayValue));
  }
}
