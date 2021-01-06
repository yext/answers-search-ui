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
  async getTabLabelsLowerCase () {
    const tabList = this._navList.child();
    const tabListCount = await tabList.count;
    const tabLabels = [];

    for (let i = 0; i < tabListCount; i++) {
      const nthTab = tabList.nth(i);
      const innerText = await nthTab.find('a').innerText;
      tabLabels[i] = innerText.toLowerCase();
    }

    return tabLabels;
  }

  /**
   * Get an array of the links of the nav bar tabs
   *
   * @returns {Array<string>}
   */
  async getTabLinks () {
    const tabList = this._navList.child();
    const tabListCount = await tabList.count;
    const tabLinks = [];

    for (let i = 0; i < tabListCount; i++) {
      const nthTab = tabList.nth(i);
      tabLinks[i] = await nthTab.find('a').getAttribute('href');
    }

    return tabLinks;
  }
}
