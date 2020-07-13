import { PRODUCTION, SANDBOX } from '../constants';
import SearchParams from '../../ui/dom/searchparams';

/**
 * Returns the base url for the live api backend in the desired environment.
 * @param {string} env The desired environment.
 */
export function getLiveApiUrl (env = PRODUCTION) {
  return env === SANDBOX ? 'https://liveapi-sandbox.yext.com' : 'https://liveapi.yext.com';
}

/**
 * Returns the base url for the live api backend in the desired environment.
 * @param {string} env The desired environment.
 */
export function getCachedLiveApiUrl (env = PRODUCTION) {
  return env === SANDBOX ? 'https://liveapi-sandbox.yext.com' : 'https://liveapi-cached.yext.com';
}

/**
 * Returns the base url for the knowledge api backend in the desired environment.
 * @param {string} env The desired environment.
 */
export function getKnowledgeApiUrl (env = PRODUCTION) {
  return env === SANDBOX ? 'https://api-sandbox.yext.com' : 'https://api.yext.com';
}

/**
 * Returns the base url for the analytics backend in the desired environment.
 * @param {string} env The desired environment.
 * @param {boolean} conversionTrackingEnabled If conversion tracking has been opted into.
 */
export function getAnalyticsUrl (env = PRODUCTION, conversionTrackingEnabled = false) {
  if (conversionTrackingEnabled) {
    return env === SANDBOX
      ? 'https://sandbox-realtimeanalytics.yext.com'
      : 'https://realtimeanalytics.yext.com';
  }
  return env === SANDBOX
    ? 'https://sandbox-answers.yext-pixel.com'
    : 'https://answers.yext-pixel.com';
}

/**
 * Returns the passed in url, with all url params from the current url, as well as any
 * pasased in params, appended to it.
 * @param {string} url
 * @param {Object} params
 * @returns {string}
 */
export function addParamsToUrl (url, params = {}) {
  const urlParams = new SearchParams(window.location.search.substring(1));
  for (const paramKey in params) {
    urlParams.set(paramKey, params[paramKey]);
  }
  return url.split('?')[0] + '?' + urlParams;
}

export function urlWithoutQueryParamsAndHash (url) {
  return url.split('?')[0].split('#')[0];
}

/**
 * returns if two SearchParams objects have the same key,value entries
 * @param {SearchParams} params1
 * @param {SearchParams} params2
 * @return {boolean} true if params1 and params2 have the same key,value entries, false otherwise
 */
export function equivalentParams (params1, params2) {
  if (params1.entries().length !== params2.entries().length) {
    return false;
  }
  for (const [key, val] of params1.entries()) {
    if (val !== params2.get(key)) {
      return false;
    }
  }
  return true;
}
