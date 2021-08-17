import { getParser } from 'bowser';


/**
 * Returns whether the current browser is Microsoft Edge.
 * Tries to use User-Agent clients hints, and defaults to
 * using the User-Agent string if clients hints are not supported.
 *
 * @returns {boolean}
 */
export function isMicrosoftEdge () {
  const browser = getParser(navigator.userAgent);
  return browser.getBrowserName() === 'Microsoft Edge';
}

/**
 * Returns whether the current browser is Safari.
 * Currently, Safari does not support User-Agent clients hints (userAgentData).
 * Chrome likes to pretend that it's Safari.
 * Edge also likes to pretend that it's Safari.
 *
 * @returns {boolean}
 */
export function isSafari () {
  const browser = getParser(navigator.userAgent);
  return browser.getBrowserName() === 'Safari';
}

/**
 * Returns whether the current browser is Chrome.
 * Edge likes to pretend that it is Chrome.
 *
 * @returns {boolean}
 */
export function isChrome () {
  const browser = getParser(navigator.userAgent);
  return browser.getBrowserName() === 'Chrome';
}
