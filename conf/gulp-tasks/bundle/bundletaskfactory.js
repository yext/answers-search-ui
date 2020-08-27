const { modernBundle, legacyBundle, minifyBundle } = require('./bundle');

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
    this._localePrefix = locale && locale !== 'en' ? `${locale}-` : '';
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
    switch (bundleType) {
      case BundleType.MODERN:
        return (callback) => this._modernBundle(callback);
      case BundleType.LEGACY_IIFE:
        return (callback) => this._legacyBundleIIFE(callback);
      case BundleType.LEGACY_UMD:
        return (callback) => this._legacyBundleUMD(callback);
      default:
        throw new Error('Unrecognized BundleType');
    }
  }

  /**
   * Provides a Gulp task to minify an SDK bundle of the specified type.
   *
   * @param {BundleType} bundleType The type of SDK bundle to minify.
   * @returns {Function} Gulp task for minifying the requested SDK bundle.
   */
  minify (bundleType) {
    switch (bundleType) {
      case BundleType.MODERN:
        return (callback) => this._minifyModern(callback);
      case BundleType.LEGACY_IIFE:
        return (callback) => this._minifyLegacy(callback);
      case BundleType.LEGACY_UMD:
        return (callback) => this._minifyLegacyUMD(callback);
      default:
        throw new Error('Unrecognized BundleType');
    }
  }

  /**
   * The Gulp task for producing the modern version of the SDK bundle.
   *
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
      this._getBundleName(BundleType.MODERN),
      this._libVersion,
      this._translationResolver
    );
  }

  /**
   * The Gulp task for minifying the modern version of the SDK bundle.
   *
   * @returns {stream.Writable} A {@link Writable} stream containing the modern
   *                            SDK bundle.
   */
  _minifyModern (callback) {
    return minifyBundle(callback, this._getBundleName(BundleType.MODERN));
  }

  /**
   * The Gulp task for producing the legacy, IIFE-style SDK bundle.
   *
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
      this._getBundleName(BundleType.LEGACY_IIFE),
      this._libVersion,
      this._translationResolver
    );
  }

  /**
   * The Gulp task for minifying the legacy, IIFE-style SDK bundle.
   *
   * @returns {stream.Writable} A {@link Writable} stream containing the legacy,
   *                            IIFE-style SDK bundle.
   */
  _minifyLegacy (callback) {
    return minifyBundle(callback, this._getBundleName(BundleType.LEGACY_IIFE));
  }

  /**
   * The Gulp task for producing the legacy, UMD-style SDK bundle.
   *
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
      this._getBundleName(BundleType.LEGACY_UMD),
      this._libVersion,
      this._translationResolver
    );
  }

  /**
   * The Gulp task for minifying the legacy, UMD-style SDK bundle.
   *
   * @returns {stream.Writable} A {@link Writable} stream containing the legacy,
   *                            UMD-style SDK bundle.
   */
  _minifyLegacyUMD (callback) {
    return minifyBundle(callback, this._getBundleName(BundleType.LEGACY_UMD));
  }

  /**
   * Gets the name of the bundle based on its type
   *
   * @param {BundleType} bundleType
   * @returns {string}
   */
  _getBundleName (bundleType) {
    return `${this._localePrefix}${bundleType}`;
  }
}

exports.BundleType = BundleType;
exports.BundleTaskFactory = BundleTaskFactory;
