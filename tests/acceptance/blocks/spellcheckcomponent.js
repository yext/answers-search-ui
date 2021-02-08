import { Selector, t } from 'testcafe';

/**
 * This class models user interactions with the {@link SpellCheckComponent}.
 */
export default class SpellCheckComponentBlock {
  constructor () {
    this._spellCheck = Selector('.yxt-SpellCheck');
  }

  /**
   * Clicks the suggested
   */
  async clickLink () {
    await t.click(this._spellCheck.find('a'));
  }
}
