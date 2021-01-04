import { Selector } from 'testcafe';

/**
 * This class models user interactions with the {@link NavigationComponent}.
 */
export default class NavigationComponentBlock {
  constructor () {
    this._navList = Selector('.yxt-Nav-expanded');
  }

  /**
   * Get an array of the labels of the nav bar tabs
   *
   * @returns {Array<string>}
   */
  async getTabLabels () {
    const tabList = this._navList.child();
    const tabListCount = await tabList.count;
    const tabLabels = [];

    for (let i = 0; i < tabListCount; i++) {
      const nthTab = tabList.nth(i);
      tabLabels[i] = await nthTab.find('a').innerText;
    }

    return tabLabels;
  }
}
