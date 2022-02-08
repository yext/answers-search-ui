import Bowser from 'bowser';

/**
 * Returns whether the current browser is Microsoft Edge.
 *
 * @returns {boolean}
 */
export function isMicrosoftEdge () {
  const browserData = Bowser.parse(navigator.userAgent);

  return browserData.browser.name === 'Microsoft Edge';
}

/**
 * Returns whether the current browser is Safari.
 *
 * @returns {boolean}
 */
export function isSafari () {
  const browserData = Bowser.parse(navigator.userAgent);

  return browserData.browser.name === 'Safari';
}
