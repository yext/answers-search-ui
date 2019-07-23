/** @module NavigationComponent */

import Component from '../component';
import { AnswersComponentError } from '../../../core/errors/errors';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchParams from '../../dom/searchparams';
import DOM from '../../dom/dom';

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
     * Handles to the close modal click listeners, to be removed in unMount()
     * @type {array}
     * @private
     */
    this._listenersToTearDown = [];

    /**
     * Information on the mobile media query applied to the doc
     * @type {MediaQueryList}
     */
    this._mql = window.matchMedia('(max-width: 768px)');
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
      tabs: tabs
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

  /**
   * If there are too many tabs, create a "more"
   * dropdown menu to display tabs least relevant
   * to the query.
   *
   * @override
   */
  onMount () {
    const parentEl = DOM.query(this._container, '.js-yxt-navContainer');
    const navItemEls = DOM.queryAll(this._container, '.js-yxt-navItem');
    const modalEl = DOM.query(this._container, '.js-yxt-navModal');
    const moreButtonEl = DOM.query(this._container, '.js-yxt-navMore');
    const parentWidth = parentEl.offsetWidth;
    const moreButtonWidth = moreButtonEl.offsetWidth;
    let elsToMove = [];

    // Collect links that need to be added to the dropdown
    for (const navItemEl of navItemEls) {
      let childPos = navItemEl.offsetLeft;
      let childWidth = navItemEl.offsetWidth;

      // Determines if the nav item is overflowing and needs to be added to the dropdown
      // Offsets by the width of the more button to make sure there is enough space to add it
      if (childPos + childWidth > parentWidth - moreButtonWidth) {
        elsToMove.push(navItemEl);
      }
    }

    // Shows the 'More' button if there are verticals to display in the dropdown
    if (elsToMove.length) {
      moreButtonEl.classList.remove('yxt-Nav-item--more');
    }

    // Adds cutoff elements to the dropdown
    for (const el of elsToMove) {
      modalEl.appendChild(el);
      el.classList.add('yxt-Nav-dropDownItem');
      el.classList.remove('yxt-Nav-item');
    }

    // Click listener to display/hide dropwdown, will be removed by DOM.empty in onUnMount()
    moreButtonEl.addEventListener('click', () => {
      modalEl.classList.toggle('is-active');
    });

    // Close the modal when clicking outside of it, will be removed by DOM.empty in onUnMount()
    const closeModalClickListener = (e) => {
      // TODO (bmcginnis): this is not robust if they have an image in the button or modal
      if (e.target === modalEl || e.target === moreButtonEl) {
        return;
      }
      modalEl.classList.remove('is-active');
    };

    window.addEventListener('click', closeModalClickListener);
    this._listenersToTearDown.push({ type: 'click', fn: closeModalClickListener });

    // TODO: (bmcginnis) move keyboard key detection from Autocomplete into common object so we can detect escape key
    // here and close the modal.

    // TODO (creotutar) this is repeat code we probably want to split up set-up and showing/hiding
    // the more button
    if (this._mql.matches) {
      for (const el of elsToMove) {
        parentEl.appendChild(el);
        el.classList.remove('yxt-Nav-dropDownItem');
        el.classList.add('yxt-Nav-item');
      }
      moreButtonEl.style.display = 'none';
    }

    const breakpointChange = (e) => {
      if (e.matches) {
        // show scroll
        for (const el of elsToMove) {
          parentEl.appendChild(el);
          el.classList.remove('yxt-Nav-dropDownItem');
          el.classList.add('yxt-Nav-item');
        }
        // TODO (creotutar) we should use a class instead of a style change
        moreButtonEl.style.display = 'none'; 
      } else {
        // show more
        for (const el of elsToMove) {
          modalEl.appendChild(el);
          el.classList.add('yxt-Nav-dropDownItem');
          el.classList.remove('yxt-Nav-item');
        }
        moreButtonEl.style.display = 'flex';
      }
    };

    this._mql.addListener(breakpointChange);
    return super.onMount();
  }

  onUnMount () {
    this._listenersToTearDown.forEach(listener => window.removeEventListener(listener.type, listener.fn));

    return super.onUnMount();
  }
}
