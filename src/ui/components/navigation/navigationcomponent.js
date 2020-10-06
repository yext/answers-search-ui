/** @module NavigationComponent */

/* global Node */

import Component from '../component';
import { AnswersComponentError } from '../../../core/errors/errors';
import StorageKeys from '../../../core/storage/storagekeys';
import DOM from '../../dom/dom';
import { mergeTabOrder, getDefaultTabOrder, getUrlParams } from '../../tools/taborder';
import { filterParamsForExperienceLink, replaceUrlParams } from '../../../core/utils/urlutils.js';
import TranslationFlagger from '../../i18n/translationflagger';

/**
 * The debounce duration for resize events
 * @type {number}
 */
const RESIZE_DEBOUNCE = 100;

/**
 * The breakpoint for mobile
 * @type {number}
 */
const MOBILE_BREAKPOINT = 767;

/**
 * Enum options for mobile overflow beahvior
 * @type {Object.<string, string>}
 */
const MOBILE_OVERFLOW_BEHAVIOR_OPTION = {
  COLLAPSE: 'COLLAPSE',
  INNERSCROLL: 'INNERSCROLL'
};

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
    this.verticalKey = config.verticalKey || null;

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
   * from will construct a map of verticalKey to {Tab} from
   * a configuration file
   * @param {object} tabsConfig the configuration to use
   */
  static from (tabsConfig) {
    const tabs = {};
    // Parse the options and build out our tabs and
    for (let i = 0; i < tabsConfig.length; i++) {
      const tab = { ...tabsConfig[i] };

      // If a tab is configured to be hidden in this component,
      // do not process it
      if (tab.hideInNavigation) {
        continue;
      }

      // For tabs without config ids, map their URL to the configID
      // to avoid duplication of renders
      if (!tab.verticalKey && !tabs[tab.url]) {
        tab.verticalKey = tab.url;
      }

      tabs[tab.verticalKey] = new Tab(tab);
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
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    /**
     * The label to show on the dropdown menu button when overflow
     * @type {string}
     */
    this.overflowLabel = config.overflowLabel || TranslationFlagger.flag({
      phrase: 'More',
      context: 'Button label, displays more items'
    });

    /**
     * The optional icon to show on the dropdown menu button when overflow
     * @type {string}
     */
    this.overflowIcon = config.overflowIcon || 'kabob';

    /**
     * The data storage key
     * @type {string}
     */
    this.moduleId = StorageKeys.NAVIGATION;

    /**
     * Tabs config from global navigation config
     * @type {Array.<object>}
     * @private
     */
    this._tabsConfig = config.verticalPages ||
      this.core.globalStorage.getState(StorageKeys.VERTICAL_PAGES_CONFIG).get();

    /**
     * Unordered map of each tab, keyed by VS verticalKey
     * @type {Object.<String, Object>}
     * @private
     */
    this._tabs = Tab.from(this._tabsConfig);

    /**
     * The order of the tabs, parsed from configuration or URL.
     * This gets updated based on the server results
     * @type {Array.<String>} The list of VS verticalKeys
     * @private
     */
    this._tabOrder = getDefaultTabOrder(this._tabsConfig, getUrlParams());

    /**
     * Breakpoints at which navigation items move to the "more" dropdown
     * @type {number[]}
     * @private
     */
    this._navBreakpoints = [];

    /**
     *  The mobile overflow behavior config
     *  @type {string}
     */
    this._mobileOverflowBehavior = config.mobileOverflowBehavior || MOBILE_OVERFLOW_BEHAVIOR_OPTION.COLLAPSE;

    /**
     *  The ARIA label
     *  @type {string}
     */
    this._ariaLabel = config.ariaLabel || TranslationFlagger.flag({
      phrase: 'Search Page Navigation',
      context: 'Noun, labels the navigation for the search page'
    });

    this.checkOutsideClick = this.checkOutsideClick.bind(this);
    this.checkMobileOverflowBehavior = this.checkMobileOverflowBehavior.bind(this);

    const reRender = () => {
      this.setState(this.core.globalStorage.getState(StorageKeys.NAVIGATION) || {});
    };

    this.core.globalStorage.on('update', StorageKeys.API_CONTEXT, reRender);
    this.core.globalStorage.on('update', StorageKeys.SESSIONS_OPT_IN, reRender);
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
    // TODO: Re-rendering and re-mounting the component every tim e the window changes size
    // is not great.
    DOM.on(window, 'resize', this.checkMobileOverflowBehavior);
  }

  onDestroy () {
    DOM.off(window, 'resize', this.checkMobileOverflowBehavior);
  }

  onMount () {
    if (this.shouldCollapse()) {
      this._navBreakpoints = [];
      this.bindOverflowHandlers();
      this.refitNav();
      DOM.on(DOM.query(this._container, '.yxt-Nav-more'), 'click', this.toggleMoreDropdown.bind(this));
    }
  }

  onUnMount () {
    this.unbindOverflowHandlers();
  }

  bindOverflowHandlers () {
    DOM.on(window, 'click', this.checkOutsideClick);
  }

  unbindOverflowHandlers () {
    DOM.off(window, 'click', this.checkOutsideClick);
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
    for (const el of mainLinks.children) {
      mainLinksWidth += el.offsetWidth;
    }

    if (mainLinksWidth > navWidth) {
      this._navBreakpoints.push(mainLinksWidth);
      const lastLink = mainLinks.children.item(mainLinks.children.length - 1);
      if (lastLink === null) {
        return;
      }
      this._prepend(collapsedLinks, lastLink);

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
    if (this._closest(e.target, '.yxt-Nav-container')) {
      return;
    }

    this.closeMoreDropdown();
  }

  checkMobileOverflowBehavior () {
    if (this._checkMobileOverflowBehaviorTimer) {
      clearTimeout(this._checkMobileOverflowBehaviorTimer);
    }

    this._checkMobileOverflowBehaviorTimer = setTimeout(this.setState.bind(this), RESIZE_DEBOUNCE);
  }

  /**
   * Since the server data only provides a list of
   * VS verticalKeys, we need to compute and transform
   * the data into the proper format for rendering.
   *
   * @override
   */
  setState (data = {}) {
    if (data.tabOrder !== undefined) {
      this._tabOrder = mergeTabOrder(data.tabOrder, this._tabOrder, this._tabs);
    }

    const params = getUrlParams();
    params.set('tabOrder', this._tabOrder);
    const context = this.core.globalStorage.getState(StorageKeys.API_CONTEXT);
    if (context) {
      params.set(StorageKeys.API_CONTEXT, context);
    }
    const referrerPageUrl = this.core.globalStorage.getState(StorageKeys.REFERRER_PAGE_URL);
    if (referrerPageUrl !== null) {
      params.set(StorageKeys.REFERRER_PAGE_URL, referrerPageUrl);
    }

    const filteredParams = filterParamsForExperienceLink(
      params,
      types => this.componentManager.getComponentNamesForComponentTypes(types)
    );

    // Since the tab ordering can change based on the server data
    // we need to update each tabs URL to include the order as part of their params.
    // This helps with persisting state across verticals.
    const tabs = [];
    for (let i = 0; i < this._tabOrder.length; i++) {
      const tab = this._tabs[this._tabOrder[i]];
      if (tab !== undefined) {
        tab.url = replaceUrlParams(tab.baseUrl, filteredParams);
        tabs.push(tab);
      }
    }

    return super.setState({
      tabs: tabs,
      overflowLabel: this.overflowLabel,
      overflowIcon: this.overflowIcon,
      showCollapse: this.shouldCollapse(),
      ariaLabel: this._ariaLabel
    });
  }

  // TODO (agrow) investigate removing this
  // ParentNode.prepend polyfill
  // https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend#Polyfill
  _prepend (collapsedLinks, lastLink) {
    if (!collapsedLinks.hasOwnProperty('prepend')) {
      const docFrag = document.createDocumentFragment();
      const isNode = lastLink instanceof Node;
      docFrag.appendChild(isNode ? lastLink : document.createTextNode(String(lastLink)));

      collapsedLinks.insertBefore(docFrag, collapsedLinks.firstChild);
      return;
    }

    collapsedLinks.prepend(lastLink);
  }

  // TODO (agrow) investigate removing this
  // Adapted from Element.closest polyfill
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
  _closest (el, closestElSelector) {
    if (!el.hasOwnProperty('closest')) {
      do {
        if (DOM.matches(el, closestElSelector)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    }
    return el.closest(closestElSelector);
  }

  shouldCollapse () {
    switch (this._mobileOverflowBehavior) {
      case MOBILE_OVERFLOW_BEHAVIOR_OPTION.COLLAPSE:
        return true;
      case MOBILE_OVERFLOW_BEHAVIOR_OPTION.INNERSCROLL:
        const container = DOM.query(this._container, '.yxt-Nav-container') || this._container;
        const navWidth = container.offsetWidth;
        return navWidth > MOBILE_BREAKPOINT;
    }
  }
}
