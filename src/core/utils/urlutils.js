import { PRODUCTION, SANDBOX } from '../constants';

/**
 * Returns the base url for the live api backend in the desired environment.
 * @param {string} env The desired environment.
 */
export function getLiveApiUrl (env = PRODUCTION) {
  return env === SANDBOX ? 'https://liveapi-sandbox.yext.com' : 'https://liveapi.yext.com';
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
 * Returns the passed in url with the query appended to it.
 * @param {string} url
 * @returns {string}
 */
export function addQueryToUrl (url, query) {
  return url.split('?')[0] + '?query=' + query;
}
