import { Selector, t } from 'testcafe';

/**
 * This class models user interactions with the {@link ResultsHeaderComponent}.
 */
export default class ResultsHeaderComponentBlock {
  constructor (selector) {
    this._container = '.yxt-ResultsHeader';
    this._selector = selector || Selector(this._container);
  }

  getAllFilterTags () {
    return this._selector.find('.js-yxt-ResultsHeader-removableFilterTag');
  }

  getFilterTag (displayValue) {
    return this._selector.find('.js-yxt-ResultsHeader-removableFilterTag').withText(displayValue);
  }

  async removeFilterTag (displayValue) {
    await t.click(this.getFilterTag(displayValue));
  }
}
