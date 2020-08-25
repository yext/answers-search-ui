const fs = require('fs');

const { dest } = require('gulp');

const rollup = require('gulp-rollup-lightweight');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const insert = require('rollup-plugin-insert');

const source = require('vinyl-source-stream');
const replace = require('gulp-replace');

const TranslationPlaceholder = require('../../i18n/models/translationplaceholder');

// An enum describing the different types of SDK bundle.
const BundleType = {
  MODERN: 'modern',
  LEGACY_IIFE: 'legacy-iife',
  LEGACY_UMD: 'legacy-umd'
};
Object.freeze(BundleType);

/**
 * A factory class that provides Gulp tasks for the different kinds of SDK bundle.
 */
class BundleTaskFactory {
  constructor (libVersion, translationResolver) {
    this._libVersion = libVersion;
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
        return () => this._modernBundle();
      case BundleType.LEGACY_IIFE:
        return () => this._legacyBundleIIFE();
      case BundleType.LEGACY_UMD:
        return () => this._legacyBundleUMD();
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
  _modernBundle () {
    const rollupConfig = {
      input: './src/answers-umd.js',
      output: {
        format: 'umd',
        name: this._namespace,
        exports: 'default',
        sourcemap: true
      },
      plugins: [
        resolve(),
        commonjs({
          include: './node_modules/**'
        }),
        babel({
          babelrc: false,
          exclude: 'node_modules/**',
          presets: ['@babel/env']
        })
      ]
    };
    return rollup(rollupConfig)
      .pipe(source('answers-modern.js'))
      .pipe(replace('@@LIB_VERSION', this._libVersion))
      .pipe(replace(/translatePluralJS\([^;]+\);/, translateCall => {
        const translationPlaceholder = new TranslationPlaceholder({
          phrase: "There is {{count}} item {{name}}",
          pluralPhrase: "There are {{count}} items {{name}}",
          count: 'this._config.details.length', 
          interpolationValues: { name: 'this._config.title' }
        });
        return this._translationResolver.resolveWithPlural(translationPlaceholder);
      }))
      .pipe(dest('dist'));
  }

  /**
   * The Gulp task for producing the legacy, IIFE-style SDK bundle.
   *
   * @returns {stream.Writable} A {@link Writable} stream containing the legacy,
   *                            IIFE-style SDK bundle.
   */
  _legacyBundleIIFE () {
    const legacyBundleConfig = {
      format: 'iife',
      name: this._namespace,
      sourcemap: true
    };
    return this._legacyBundle(legacyBundleConfig, 'answers.js');
  }

  /**
   * The Gulp task for producing the legacy, UMD-style SDK bundle.
   *
   * @returns {stream.Writable} A {@link Writable} stream containing the legacy,
   *                            UMD-style SDK bundle.
   */
  _legacyBundleUMD () {
    const legacyBundleConfig = {
      format: 'umd',
      name: this._namespace,
      export: 'default',
      sourcemap: true
    };
    return this._legacyBundle(legacyBundleConfig, 'answers-umd.js');
  }

  /**
   * The Gulp task for producing either variant of the legacy SDK bundle.
   *
   * @param {Object<string, ?>} outputConfig Any variant-specific configuration
   *                                         for the legacy bundle.
   * @param {string} fileName The filename of the created bundle.
   * @returns {stream.Writable} A {@link Writable} stream cotaining the legacy
   *                            SDK bundle.
   */
  _legacyBundle (outputConfig, fileName) {
    const rollupConfig = {
      input: './src/answers-umd.js',
      output: outputConfig,
      plugins: [
        resolve(),
        insert.prepend(
          fs.readFileSync('./conf/gulp-tasks/polyfill-prefix.js').toString(),
          {
            include: './src/answers-umd.js'
          }),
        commonjs({
          include: './node_modules/**'
        }),
        babel({
          runtimeHelpers: true,
          babelrc: false,
          exclude: 'node_modules/**',
          presets: [
            [
              '@babel/preset-env',
              {
                loose: true,
                modules: false
              }
            ]
          ],
          plugins: [
            '@babel/syntax-dynamic-import',
            ['@babel/plugin-transform-runtime', {
              corejs: 3
            }],
            '@babel/plugin-transform-arrow-functions',
            '@babel/plugin-proposal-object-rest-spread'
          ]
        })
      ]
    };
    return rollup(rollupConfig)
      .pipe(source(fileName))
      .pipe(replace('@@LIB_VERSION', this._libVersion))
      .pipe(dest('dist'));
  }
}

exports.BundleType = BundleType;
exports.BundleTaskFactory = BundleTaskFactory;
