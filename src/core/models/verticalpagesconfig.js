/** @module VerticalPagesConfig */

export class VerticalPageConfig {
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
    this.verticalKey = config.verticalKey || null;

    /**
     * Determines whether to show this tab in the navigation component
     * @type {boolean}
     */
    this.hideInNavigation = config.hideInNavigation || false;

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

    /**
     * name of an icon from the default icon set
     * @type {string}
     */
    this.icon = config.icon || 'star';
  }

  validate () {
  }
}

export default class VerticalPagesConfig {
  constructor (config = {}) {
    this.verticalPagesConfig = VerticalPagesConfig.from(config);
  }

  static from (pages) {
    let verticalPagesConfig = [];
    if (pages === undefined) {
      return verticalPagesConfig;
    }
    for (let i = 0; i < pages.length; i++) {
      let page = pages[i];
      verticalPagesConfig.push(new VerticalPageConfig(page));
    }
    return verticalPagesConfig;
  }
}
