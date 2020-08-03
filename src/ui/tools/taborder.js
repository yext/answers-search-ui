import SearchParams from '../dom/searchparams';

export function getUrlParams () {
  return new SearchParams(window.location.search.substring(1));
}

export function getDefaultTabOrder (tabsConfig, urlParams) {
  let tabOrder = [];
  // Use the ordering from the URL as the primary configuration
  // And then merge it with the local configuration, if provided.
  if (urlParams && urlParams.has('tabOrder')) {
    tabOrder = urlParams.get('tabOrder').split(',');
  }
  for (const tab of tabsConfig) {
    const verticalKeyOrUrl = tab.verticalKey || tab.url;
    // Avoid duplicates if config was provided from URL
    if (tabOrder.includes(verticalKeyOrUrl)) {
      continue;
    }

    // isFirst should always be the first element in the list
    if (tab.isFirst) {
      tabOrder.unshift(verticalKeyOrUrl);
    } else {
      tabOrder.push(verticalKeyOrUrl);
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
export function mergeTabOrder (tabOrder, otherTabOrder, tabs) {
  for (const tabConfig of otherTabOrder) {
    if (tabOrder.includes(tabConfig)) {
      continue;
    }
    // isFirst should be an override to dynamic tab ordering.
    if (tabs[tabConfig] && tabs[tabConfig].isFirst) {
      tabOrder.unshift(tabConfig);
    } else {
      tabOrder.push(tabConfig);
    }
  }
  return tabOrder;
}

export function getTabOrder (tabsConfig, dataTabOrder) {
  let tabOrder = getDefaultTabOrder(tabsConfig, getUrlParams());
  // We want to persist the params from the existing URL to the new
  // URLS we create.
  if (tabOrder && dataTabOrder) {
    tabOrder = mergeTabOrder(dataTabOrder, tabOrder, tabsConfig);
  }
  return tabOrder;
}
