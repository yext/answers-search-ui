/** @module NavigationConfig */

export class TabConfig {
  constructor (config = {}) {
    /**
     * The name of the tab that is exposed for the link
     * @type {string}
     */
    this.label = config.label || null;

    /**
     * The complete URL, including the params
     * @type {string}
     */
    this.url = config.url || null;

    /**
     * The serverside vertical config id that this is referenced to.
     * By providing this, enables dynamic sorting based on results.
     * @type {string}
     */
    this.configId = config.configId || null;

    /**
     * Determines whether to show this tab first in the order
     * @type {boolean}
     */
    this.isFirst = config.isFirst || false;

    /**
     * Determines whether or not to apply a special class to the
     * markup to determine if it's an active tab
     * @type {boolean}
     */
    this.isActive = config.isActive || false;
  }

  validate () {
  }

  static from (tabs) {
    let tabConfigs = [];
    if (tabs === undefined) {
      return tabConfigs;
    }
    for (let i = 0; i < tabs.length; i++) {
      let tab = tabs[i];
      tabConfigs.push(new TabConfig(tab));
    }
    return tabConfigs;
  }
}

export default class NavigationConfig {
  constructor (config = {}) {
    this.tabsConfig = TabConfig.from(config.tabs);
  }
}
