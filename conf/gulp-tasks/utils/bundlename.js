/**
 * Gets the name for the bundle based on the type and locale.
 *
 * @param {BundleType|string} bundleType
 * @param {string} locale
 * @returns {string}
 */
function getBundleName (bundleType, locale) {
  const localePrefix = locale && locale !== 'en' ? `${locale}-` : '';
  return `${localePrefix}${bundleType}`;
}

module.exports = getBundleName;
