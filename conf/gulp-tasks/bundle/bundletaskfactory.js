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
 * A factory class that provides Gulp tasks for the different kinds of SDK bundles.
 */
class BundleTaskFactory {
  constructor (libVersion, translationResolver, locale, cloudRegion) {
    this._libVersion = libVersion;
    this._locale = locale;
    this._translationResolver = translationResolver;
    this._namespace = 'ANSWERS';
    this._cloudRegion = cloudRegion;
  }

  /**
   * Provides a Gulp task to create an SDK bundle of the specified type.
   *
   * @param {BundleType} bundleType The type of SDK bundle to build.
   * @param {string} entryPoint The SDK asset's entry point.
   * @returns {Function} Gulp task for producing the requested SDK bundle.
   */
  create (bundleType, entryPoint = './src/answers-umd.js') {
    let bundleFunction;
    switch (bundleType) {
      case BundleType.MODERN:
        bundleFunction = (callback) => this._modernBundle(callback, entryPoint);
        break;
      case BundleType.LEGACY_IIFE:
        bundleFunction = (callback) => this._legacyBundleIIFE(callback, entryPoint);
        break;
      case BundleType.LEGACY_UMD:
        bundleFunction = (callback) => this._legacyBundleUMD(callback, entryPoint);
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
   * The Gulp task for producing the modern version of an SDK bundle.
   *
   * @param {function} callback function that will run after the Gulp task
   * @param {string} entryPoint The bundle's entry point.
   * @returns {stream.Writable} A {@link Writable} stream containing the modern
   *                            SDK bundle.
   */
  _modernBundle (callback, entryPoint) {
    const modernBundleConfig = {
      format: 'umd',
      name: this._namespace,
      exports: 'default',
      sourcemap: true
    };
    return modernBundle(
      callback,
      entryPoint,
      modernBundleConfig,
      getBundleName(BundleType.MODERN, this._locale),
      this._locale,
      this._libVersion,
      this._translationResolver,
      this._cloudRegion
    );
  }

  /**
   * The Gulp task for producing a legacy, IIFE-style SDK bundle.
   *
   * @param {function} callback function that will run after the Gulp task
   * @param {string} entryPoint The bundle's entry point.
   * @returns {stream.Writable} A {@link Writable} stream containing the legacy,
   *                            IIFE-style SDK bundle.
   */
  _legacyBundleIIFE (callback, entryPoint) {
    const legacyBundleConfig = {
      format: 'iife',
      name: this._namespace,
      sourcemap: true
    };
    return legacyBundle(
      callback,
      entryPoint,
      legacyBundleConfig,
      getBundleName(BundleType.LEGACY_IIFE, this._locale),
      this._locale,
      this._libVersion,
      this._translationResolver,
      this._cloudRegion
    );
  }

  /**
   * The Gulp task for producing a legacy, UMD-style SDK bundle.
   *
   * @param {function} callback function that will run after the Gulp task
   * @param {string} entryPoint The bundle's entry point.
   * @returns {stream.Writable} A {@link Writable} stream containing the legacy,
   *                            UMD-style SDK bundle.
   */
  _legacyBundleUMD (callback, entryPoint) {
    const legacyBundleConfig = {
      format: 'umd',
      name: this._namespace,
      export: 'default',
      sourcemap: true
    };
    return legacyBundle(
      callback,
      entryPoint,
      legacyBundleConfig,
      getBundleName(BundleType.LEGACY_UMD, this._locale),
      this._locale,
      this._libVersion,
      this._translationResolver,
      this._cloudRegion
    );
  }
}

exports.BundleType = BundleType;
exports.BundleTaskFactory = BundleTaskFactory;
