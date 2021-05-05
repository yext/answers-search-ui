const getBundleName = require('../utils/bundlename');
const { modernBundle, legacyBundle } = require('./bundle');

// An enum outlining the namespaces for different SDK bundles.
const BundleNamespaces = {
  ANSWERS: 'ANSWERS',
  ANSWERS_SEARCH_BAR: 'ANSWERS_SEARCH_BAR'
};
Object.freeze(BundleNamespaces);

// An enum describing the different types of SDK bundle.
const BundleType = {
  MODERN: 'answers-modern',
  LEGACY_IIFE: 'answers',
  LEGACY_UMD: 'answers-umd',
  SEARCH_BAR_MODERN: 'answers-search-bar-modern',
  SEARCH_BAR_LEGACY_IIFE: 'answers-search-bar',
  SEARCH_BAR_LEGACY_UMD: 'answers-search-bar-umd'
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
      case BundleType.SEARCH_BAR_MODERN:
        // fall through
      case BundleType.MODERN:
        bundleFunction = (callback) => this._modernBundle(callback, bundleType);
        break;
      case BundleType.SEARCH_BAR_LEGACY_IIFE:
        // fall through
      case BundleType.LEGACY_IIFE:
        bundleFunction = (callback) => this._legacyBundleIIFE(callback, bundleType);
        break;
      case BundleType.SEARCH_BAR_LEGACY_UMD:
        // fall through
      case BundleType.LEGACY_UMD:
        bundleFunction = (callback) => this._legacyBundleUMD(callback, bundleType);
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
   * The Gulp task for producing the modern bundle of an SDK asset. Moden implies
   * the use of ES6 syntax and a lack of polyfills.
   *
   * @param {function} callback Function that will run after the Gulp task
   * @param {BundleType} bundleType The type of SDK asset to generate the bundle for.
   * @returns {stream.Writable} A {@link Writable} stream containing the modern,
   *                            bundled asset.
   */
  _modernBundle (callback, bundleType) {
    let namespace = BundleNamespaces.ANSWERS;
    let entryPoint = './src/answers-umd.js';

    if (bundleType === BundleType.SEARCH_BAR_MODERN) {
      namespace = BundleNamespaces.ANSWERS_SEARCH_BAR;
      entryPoint = './src/answers-search-bar.js';
    }

    const modernBundleConfig = {
      format: 'umd',
      name: namespace,
      exports: 'default',
      sourcemap: true
    };
    return modernBundle(
      callback,
      entryPoint,
      modernBundleConfig,
      getBundleName(bundleType, this._locale),
      this._locale,
      this._libVersion,
      this._translationResolver
    );
  }

  /**
   * The Gulp task for producing the legacy, IIFE-style SDK bundle.
   *
   * @param {function} callback function that will run after the Gulp task
   * @param {BundleType} bundleType The type of SDK asset to generate the bundle for.
   * @returns {stream.Writable} A {@link Writable} stream containing the legacy,
   *                            IIFE-style SDK bundle.
   */
  _legacyBundleIIFE (callback, bundleType) {
    let namespace = BundleNamespaces.ANSWERS;
    let entryPoint = './src/answers-umd.js';

    if (bundleType === BundleType.SEARCH_BAR_LEGACY_IIFE) {
      namespace = BundleNamespaces.ANSWERS_SEARCH_BAR;
      entryPoint = './src/answers-search-bar.js';
    }

    const legacyBundleConfig = {
      format: 'iife',
      name: namespace,
      sourcemap: true
    };
    return legacyBundle(
      callback,
      entryPoint,
      legacyBundleConfig,
      getBundleName(bundleType, this._locale),
      this._locale,
      this._libVersion,
      this._translationResolver
    );
  }

  /**
   * The Gulp task for producing the legacy, UMD-style SDK bundle.
   *
   * @param {function} callback function that will run after the Gulp task
   * @param {BundleType} bundleType The type of SDK asset to generate the bundle for.
   * @returns {stream.Writable} A {@link Writable} stream containing the legacy,
   *                            UMD-style SDK bundle.
   */
  _legacyBundleUMD (callback, bundleType) {
    let namespace = BundleNamespaces.ANSWERS;
    let entryPoint = './src/answers-umd.js';

    if (bundleType === BundleType.SEARCH_BAR_LEGACY_UMD) {
      namespace = BundleNamespaces.ANSWERS_SEARCH_BAR;
      entryPoint = './src/answers-search-bar.js';
    }
    
    const legacyBundleConfig = {
      format: 'umd',
      name: namespace,
      export: 'default',
      sourcemap: true
    };
    return legacyBundle(
      callback,
      entryPoint,
      legacyBundleConfig,
      getBundleName(bundleType, this._locale),
      this._locale,
      this._libVersion,
      this._translationResolver
    );
  }
}

exports.BundleType = BundleType;
exports.BundleTaskFactory = BundleTaskFactory;
