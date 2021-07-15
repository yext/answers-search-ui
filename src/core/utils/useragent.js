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
