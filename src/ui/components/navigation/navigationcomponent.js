/** @module NavigationComponent */

import Component from '../component';
import { AnswersComponentError } from '../../../core/errors/errors';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchParams from '../../dom/searchparams';
import DOM from '../../dom/dom';

/**
 * The debounce duration for resize events
 * @type {number}
 */
const RESIZE_DEBOUNCE = 100;

/**
 * The Tab is a model that is used to power the Navigation tabs in the view.
 * It's initialized through the configuration provided to the component.
 */
export class Tab {
  constructor (config) {
    /**
     * The name of the tab that is exposed for the link
     * @type {string}
     */
    this.label = config.label;
    if (typeof this.label !== 'string') {
      throw new AnswersComponentError('label is a required configuration option for tab.', 'NavigationComponent');
    }

    /**
     * The complete URL, including the params
     * @type {string}
     */
    this.url = config.url;
    if (typeof this.url !== 'string') {
      throw new AnswersComponentError('url is a required configuration option for tab.', 'NavigationComponent');
    }

    /**
     * The serverside vertical config id that this is referenced to.
     * By providing this, enables dynamic sorting based on results.
     * @type {string}
     */
    this.configId = config.configId || null;

    /**
     * The base URL used for constructing the URL with params
     * @type {string}
     */
    this.baseUrl = config.url;

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

  /**
   * helper to construct the eventOptions for analytics
   * @returns {string}
   */
  get eventOptions () {
    return JSON.stringify({
      verticalConfigId: this.configId
    });
  }

  /**
   * from will construct a map of configId to {Tab} from
   * a configuration file
   * @param {object} tabsConfig the configuration to use
   */
  static from (tabsConfig) {
    let tabs = {};
    // Parse the options and build out our tabs and
    for (let i = 0; i < tabsConfig.length; i++) {
      let tab = tabsConfig[i];
      // For tabs without config ids, map their URL to the configID
      // to avoid duplication of renders
      if (tab.configId === undefined && tabs[tab.configId] === undefined) {
        tab.configId = tab.url;
      }

      tabs[tab.configId] = new Tab(tab);
    }
    return tabs;
  }
}

/**
 * NavigationComponent exposes an interface for building a dynamic
 * navigation that is powered by universal search updates.
 * @extends Component
 */
export default class NavigationComponent extends Component {
  constructor (config = {}) {
    super(config);

    /**
     * The label to show on the dropdown menu button
     * @type {string}
     */
    this.dropdownLabel = config.dropdownLabel || 'More';

    /**
     * The optional icon to show on the dropdown menu button
     * @type {string}
     */
    this.dropdownIcon = config.dropdownIcon || 'kabob';

    /**
     * If true, render a static navigation with no "more" menu
     * @type {boolean}
     */
    this.static = config.static || false;

    /**
     * The data storage key
     * @type {string}
     */
    this.moduleId = StorageKeys.NAVIGATION;

    /**
     * Unordered map of each tab, keyed by VS configId
     * @type {Object.<String, Object>}
     * @private
     */
    this._tabs = Tab.from(config.tabs);

    /**
     * The order of the tabs, parsed from configuration or URL.
     * This gets updated based on the server results
     * @type {Array.<String>} The list of VS configIds
     * @private
     */
    this._tabOrder = this.getDefaultTabOrder(config.tabs, this.getUrlParams());

    /**
     * Breakpoints at which navigation items move to the "more" dropdown
     * @type {number[]}
     * @private
     */
    this._navBreakpoints = [];
  }

  static get type () {
    return 'Navigation';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'navigation/navigation';
  }

  onCreate () {
    if (!this.static) {
      DOM.on(window, 'resize', () => {
        if (this._debounceTimer) {
          clearTimeout(this._debounceTimer);
        }

        this._debounceTimer = setTimeout(this.refitNav.bind(this), RESIZE_DEBOUNCE);
      });
      DOM.on(window, 'click', this.checkOutsideClick.bind(this));
    }
  }

  onMount () {
    if (!this.static) {
      this.refitNav();
      DOM.on(DOM.query(this._container, '.yxt-Nav-more'), 'click', this.toggleMoreDropdown.bind(this));
    }
  }

  refitNav () {
    const container = DOM.query(this._container, '.yxt-Nav-container');
    const moreButton = DOM.query(this._container, '.yxt-Nav-more');
    const mainLinks = DOM.query(this._container, '.yxt-Nav-expanded');
    const collapsedLinks = DOM.query(this._container, '.yxt-Nav-modal');

    const navWidth = moreButton.classList.contains('yxt-Nav-item--more')
      ? container.offsetWidth
      : container.offsetWidth - moreButton.offsetWidth;
    let numBreakpoints = this._navBreakpoints.length;

    // sum child widths instead of using parent's width to avoid
    // browser inconsistencies
    let mainLinksWidth = 0;
    for (let el of mainLinks.children) {
      mainLinksWidth += el.offsetWidth;
    }

    if (mainLinksWidth > navWidth) {
      this._navBreakpoints.push(mainLinksWidth);
      const lastLink = mainLinks.children.item(mainLinks.children.length - 1);
      if (lastLink === null) {
        return;
      }
      collapsedLinks.prepend(lastLink);

      if (moreButton.classList.contains('yxt-Nav-item--more')) {
        moreButton.classList.remove('yxt-Nav-item--more');
      }
    } else {
      if (numBreakpoints && navWidth > this._navBreakpoints[numBreakpoints - 1]) {
        const firstLink = collapsedLinks.children.item(0);
        if (firstLink === null) {
          return;
        }
        mainLinks.append(firstLink);
        this._navBreakpoints.pop();
        numBreakpoints--;
      }

      if (collapsedLinks.children.length === 0) {
        moreButton.classList.add('yxt-Nav-item--more');
      }
    }

    this.closeMoreDropdown();
    if (mainLinksWidth > navWidth ||
      (numBreakpoints > 0 && navWidth > this._navBreakpoints[numBreakpoints - 1])) {
      this.refitNav();
    }
  }

  closeMoreDropdown () {
    const collapsed = DOM.query(this._container, '.yxt-Nav-modal');
    collapsed.classList.remove('is-active');
    const moreButton = DOM.query(this._container, '.yxt-Nav-more');
    moreButton.setAttribute('aria-expanded', false);
  }

  openMoreDropdown () {
    const collapsed = DOM.query(this._container, '.yxt-Nav-modal');
    collapsed.classList.add('is-active');
    const moreButton = DOM.query(this._container, '.yxt-Nav-more');
    moreButton.setAttribute('aria-expanded', true);
  }

  toggleMoreDropdown () {
    const collapsed = DOM.query(this._container, '.yxt-Nav-modal');
    collapsed.classList.toggle('is-active');
    const moreButton = DOM.query(this._container, '.yxt-Nav-more');
    moreButton.setAttribute('aria-expanded', collapsed.classList.contains('is-active'));
  }

  checkOutsideClick (e) {
    if (e.target.closest('.yxt-Nav-container')) {
      return;
    }

    this.closeMoreDropdown();
  }

  /**
   * Since the server data only provides a list of
   * VS configIds, we need to compute and transform
   * the data into the proper format for rendering.
   *
   * @override
   */
  setState (data) {
    if (data.tabOrder !== undefined) {
      this._tabOrder = this.mergeTabOrder(data.tabOrder, this._tabOrder);
    }

    // Since the tab ordering can change based on the server data
    // we need to update each tabs URL to include the order as part of their params.
    // This helps with persisting state across verticals.
    let tabs = [];
    for (let i = 0; i < this._tabOrder.length; i++) {
      let tab = this._tabs[this._tabOrder[i]];
      if (tab !== undefined) {
        tab.url = this.generateTabUrl(tab.baseUrl, this.getUrlParams());
        tabs.push(tab);
      }
    }

    return super.setState({
      tabs: tabs,
      dropdownLabel: this.dropdownLabel,
      dropdownIcon: this.dropdownIcon,
      static: this.static
    });
  }

  getUrlParams () {
    return new SearchParams(window.location.search.substring(1));
  }

  /**
   * getDefaultTabOrder will compute the initial tab ordering based
   * on a combination of the configuration provided directly to the component
   * and the url params.
   * @param {Object[]} tabsConfig
   * @param {SearchParams}
   */
  getDefaultTabOrder (tabsConfig, urlParams) {
    let tabOrder = [];

    // Use the ordering from the URL as the primary configuration
    // And then merge it with the local configuration, if provided.
    if (urlParams && urlParams.has('tabOrder')) {
      tabOrder = urlParams.get('tabOrder').split(',');
    }

    for (let i = 0; i < tabsConfig.length; i++) {
      const tab = tabsConfig[i];
      // Some tabs don't have configId, so we map it from URL
      if (tab.configId === undefined) {
        tab.configId = tab.url;
      }

      // Avoid duplicates if config was provided from URL
      if (tabOrder.includes(tab.configId)) {
        continue;
      }

      // isFirst should always be the first element in the list
      if (tab.isFirst) {
        tabOrder.unshift(tab.configId);
      } else {
        tabOrder.push(tab.configId);
      }
    }

    return tabOrder;
  }

  /**
   * mergeTabOrder merges two arrays into one
   * by appending additional tabs to the end of the original array
   * @param {string[]} tabOrder Tab order provided by the server
   * @param {string[]} otherTabOrder Tab order provided by configuration
   * @return {string[]}
   */
  mergeTabOrder (tabOrder, otherTabOrder) {
    for (let i = 0; i < otherTabOrder.length; i++) {
      const tabConfig = otherTabOrder[i];
      if (tabOrder.includes(tabConfig)) {
        continue;
      }

      // isFirst should be an override to dynamic tab ordering.
      if (this._tabs[tabConfig] && this._tabs[tabConfig].isFirst) {
        tabOrder.unshift(tabConfig);
      } else {
        tabOrder.push(tabConfig);
      }
    }

    return tabOrder;
  }

  generateTabUrl (baseUrl, params = new URLSearchParams()) {
    // We want to persist the params from the existing URL to the new
    // URLS we create.
    params.set('tabOrder', this._tabOrder);
    return baseUrl + '?' + params.toString();
  }
}
