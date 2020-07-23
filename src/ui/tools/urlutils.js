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

  for (let i = 0; i < tabsConfig.length; i++) {
    const tab = tabsConfig[i];
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
export function mergeTabOrder (tabOrder, otherTabOrder, tabs) {
  for (let i = 0; i < otherTabOrder.length; i++) {
    const tabConfig = otherTabOrder[i];
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

export function generateTabUrl (baseUrl, params, tabOrder) {
  params.set('tabOrder', tabOrder);
  return baseUrl + '?' + params.toString();
}
