/**
 * Returns whether the current browser is Microsoft Edge.
 * Tries to use User-Agent clients hints, and defaults to
 * using the User-Agent string if clients hints are not supported.
 *
 * @returns {boolean}
 */
export function isMicrosoftEdge () {
  const brands = navigator.userAgentData?.brands;
  if (brands && brands.length > 0) {
    return !!brands.find(b => b.brand === 'Microsoft Edge');
  } else if (navigator.userAgent) {
    return navigator.userAgent.includes('Edg');
  }
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
  if (isChrome()) {
    return false;
  }
  if (isMicrosoftEdge()) {
    return false;
  }
  return navigator.userAgent.includes('Safari');
}

/**
 * Returns whether the current browser is Chrome.
 * Edge likes to pretend that it is Chrome.
 *
 * @returns {boolean}
 */
export function isChrome () {
  if (isMicrosoftEdge()) {
    return false;
  }
  const brands = navigator.userAgentData?.brands;
  if (brands && brands.length > 0) {
    return !!brands.find(b => b.brand === 'Google Chrome');
  } else if (navigator.userAgent) {
    return navigator.userAgent.includes('Chrome');
  }
}
