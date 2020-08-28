const getBundleName = require('../utils/bundlename');
const { minifyBundle } = require('./bundle');

/**
 * A factory class that provides Gulp tasks to minify the SDK bundles.
 */
class MinifyTaskFactory {
  constructor (locale) {
    this._locale = locale;
  }

  /**
   * Provides a Gulp task to minify an SDK bundle of the specified type.
   *
   * @param {BundleType} bundleType The type of SDK bundle to minify.
   * @returns {Function} Gulp task for minifying the requested SDK bundle.
   */
  minify (bundleType) {
    const bundleName = getBundleName(bundleType, this._locale);
    const minifyFunction = (callback) => minifyBundle(callback, bundleName);
    Object.defineProperty(minifyFunction, 'name', { value: `minify ${bundleName}` });
    return minifyFunction;
  }
}

module.exports = MinifyTaskFactory;
