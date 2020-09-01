const getBundleName = require('../utils/bundlename');
const { modernBundle, legacyBundle } = require('./bundle');

// An enum describing the different types of SDK bundle.
const BundleType = {
  MODERN: 'answers-modern',
  LEGACY_IIFE: 'answers',
  LEGACY_UMD: 'answers-umd'
};
Object.freeze(BundleType);

/**
 * A factory class that provides Gulp tasks for the different kinds of SDK bundle.
 */
class BundleTaskFactory {
  constructor (libVersion, translationResolver, locale) {
    this._libVersion = libVersion;
    this._locale = locale;
    this._translationResolver = translationResolver;
    this._namespace = 'ANSWERS';
  }

  /**
   * Provides a Gulp task to create an SDK bundle of the specified type.
   *
   * @param {BundleType} bundleType The type of SDK bundle to build.
   * @returns {Function} Gulp task for producing the requested SDK bundle.
   */
  create (bundleType) {
    let bundleFunction;
    switch (bundleType) {
      case BundleType.MODERN:
        bundleFunction = (callback) => this._modernBundle(callback);
        break;
      case BundleType.LEGACY_IIFE:
        bundleFunction = (callback) => this._legacyBundleIIFE(callback);
        break;
      case BundleType.LEGACY_UMD:
        bundleFunction = (callback) => this._legacyBundleUMD(callback);
        break;
      default:
        throw new Error('Unrecognized BundleType');
    }
    Object.defineProperty(bundleFunction, 'name', {
      value: `bundle ${getBundleName(bundleType, this._locale)}`
    });
    return bundleFunction;
  }

  /**
   * The Gulp task for producing the modern version of the SDK bundle.
   *
   * @param {function} callback function that will run after the Gulp task
   * @returns {stream.Writable} A {@link Writable} stream containing the modern
   *                            SDK bundle.
   */
  _modernBundle (callback) {
    const modernBundleConfig = {
      format: 'umd',
      name: this._namespace,
      exports: 'default',
      sourcemap: true
    };
    return modernBundle(
      callback,
      modernBundleConfig,
      getBundleName(BundleType.MODERN, this._locale),
      this._locale,
      this._libVersion,
      this._translationResolver
    );
  }

  /**
   * The Gulp task for producing the legacy, IIFE-style SDK bundle.
   *
   * @param {function} callback function that will run after the Gulp task
   * @returns {stream.Writable} A {@link Writable} stream containing the legacy,
   *                            IIFE-style SDK bundle.
   */
  _legacyBundleIIFE (callback) {
    const legacyBundleConfig = {
      format: 'iife',
      name: this._namespace,
      sourcemap: true
    };
    return legacyBundle(
      callback,
      legacyBundleConfig,
      getBundleName(BundleType.LEGACY_IIFE, this._locale),
      this._locale,
      this._libVersion,
      this._translationResolver
    );
  }

  /**
   * The Gulp task for producing the legacy, UMD-style SDK bundle.
   *
   * @param {function} callback function that will run after the Gulp task
   * @returns {stream.Writable} A {@link Writable} stream containing the legacy,
   *                            UMD-style SDK bundle.
   */
  _legacyBundleUMD (callback) {
    const legacyBundleConfig = {
      format: 'umd',
      name: this._namespace,
      export: 'default',
      sourcemap: true
    };
    return legacyBundle(
      callback,
      legacyBundleConfig,
      getBundleName(BundleType.LEGACY_UMD, this._locale),
      this._locale,
      this._libVersion,
      this._translationResolver
    );
  }
}

exports.BundleType = BundleType;
exports.BundleTaskFactory = BundleTaskFactory;
