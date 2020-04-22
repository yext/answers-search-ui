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
     * URL of an icon
     * @type {string}
     */
    this.iconUrl = config.iconUrl;

    /**
     * name of an icon from the default icon set
     * @type {string}
     */
    this.icon = config.icon;
    Object.freeze(this);
  }

  validate () {
  }
}

export default class VerticalPagesConfig {
  constructor (pages = []) {
    this.verticalPagesConfig = VerticalPagesConfig.from(pages);
  }

  /**
   * Using a getter that copies the data instead of providing a reference prevents it from being mutated.
   * This is important for global configuration.
   * @returns {Array<VerticalPageConfig>}
   */
  get () {
    return this.verticalPagesConfig.map(page => ({ ...page }));
  }

  static from (pages) {
    return pages.map(page => new VerticalPageConfig(page));
  }
}
