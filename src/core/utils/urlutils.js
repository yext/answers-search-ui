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
 * Returns the passed in url with the passed in params appended as query params
 * Note: query parameters in the url are stripped, you should include those query parameters
 * in `params` if you want to keep them
 * @param {string} url
 * @param {SearchParams} params to add to the url
 * @returns {string}
 */
export function replaceUrlParams (url, params = new SearchParams()) {
  return url.split('?')[0] + '?' + params.toString();
}

/**
 * Returns the given url without query params and hashes
 * @param {string} url Full url e.g. https://yext.com/?query=hello#Footer
 * @returns {string} Url without query params and hashes e.g. https://yext.com/
 */
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
  const entries1 = Array.from(params1.entries());
  const entries2 = Array.from(params2.entries());

  if (entries1.length !== entries2.length) {
    return false;
  }
  for (const [key, val] of params1.entries()) {
    if (val !== params2.get(key)) {
      return false;
    }
  }
  return true;
}
