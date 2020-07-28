/** @module Navigation */

import SearchParams from '../../ui/dom/searchparams';
import StorageKeys from '../storage/storagekeys';
// import globalStorage from '../storage/globalstorage';

export default class Navigation {
  // constructor (tabOrder) {
  //   this.tabOrder = tabOrder || [];
  //   Object.freeze(this);
  // }

  constructor (tabOrder) {
    this.tabsConfig = this.core.globalStorage.getState(StorageKeys.VERTICAL_PAGES_CONFIG).get();
    this.urlParams = getUrlParams();
    this.tabOrder = mergeTabOrder(tabOrder, getDefaultTabOrder()) || getDefaultTabOrder();
    Object.freeze(this);
  }

  static from (modules) {
    let nav = [];
    if (!modules || !Array.isArray(modules)) {
      return nav;
    }
    for (let i = 0; i < modules.length; i++) {
      nav.push(modules[i].verticalConfigId);
    }
    return new Navigation(nav);
  }

  getUrlParams () {
    return new SearchParams(window.location.search.substring(1));
  }

  getDefaultTabOrder () {
    let tabOrder = [];
  
    // Use the ordering from the URL as the primary configuration
    // And then merge it with the local configuration, if provided.
    if (this.urlParams && this.urlParams.has('tabOrder')) {
      tabOrder = this.urlParams.get('tabOrder').split(',');
    }
  
    for (let i = 0; i < tabsConfig.length; i++) {
      const tab = this.tabsConfig[i];
      // Some tabs don't have verticalKey, so we map it from URL
      if (!tab.verticalKey) {
        tab.verticalKey = tab.url;
      }
      // Avoid duplicates if config was provided from URL
      if (tabOrder.includes(tab.verticalKey)) {
        continue;
      }
  
      // isFirst should always be the first element in the list
      if (tab.isFirst) {
        tabOrder.unshift(tab.verticalKey);
      } else {
        tabOrder.push(tab.verticalKey);
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
      if (this.tabsConfig[tabConfig] && this.tabsConfig[tabConfig].isFirst) {
        tabOrder.unshift(tabConfig);
      } else {
        tabOrder.push(tabConfig);
      }
    }
    return tabOrder;
  }
}
