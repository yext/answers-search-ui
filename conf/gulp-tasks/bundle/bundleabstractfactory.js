const fs = require('fs');

const { dest } = require('gulp');

const rollup = require('gulp-rollup-lightweight');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const insert = require('rollup-plugin-insert');

const source = require('vinyl-source-stream');
const replace = require('gulp-replace');

// An enum describing the different types of SDK bundle.
const BundleType = {
  MODERN: 'modern',
  LEGACY_IIFE: 'legacy-iife',
  LEGACY_UMD: 'legacy-umd'
};
Object.freeze(BundleType);

/**
 * A class providing factories for building different types of SDK bundle.
 */
class BundleAbstractFactory {
  constructor () {
    this._namespace = 'ANSWERS';
  }

  /**
   * Creates a factory for building a specific type of SDK bundle.
   *
   * @param {BundleType} bundleType The type of SDK bundle to build.
   * @returns {Function} Factory method for building an SDK bundle of the
   *                     the specified type.
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
   * A factory method for producing the modern SDK bundle.
   *
   * @returns {File} The modern SDK bundle.
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
      .pipe(replace('@@LIB_VERSION', this._getLibVersion()))
      .pipe(dest('dist'));
  }

  /**
   * A factory method for producing the legacy, IIFE-style SDK bundle.
   *
   * @returns {File} The legacy, IIFE-style SDK bundle.
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
   * A factory method for producing the legacy, UMD-style SDK bundle.
   *
   * @returns {File} The legacy, UMD-style SDK bundle.
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
   * A helper method that can produce either variant of the legacy SDK bundle.
   *
   * @param {Object<string, ?>} outputConfig Any variant-specific configuration
   *                                         for the legacy bundle.
   * @param {string} fileName The filename of the created bundle.
   * @returns {File} The legacy SDK bundle.
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
      .pipe(replace('@@LIB_VERSION', this._getLibVersion()))
      .pipe(dest('dist'));
  }

  /**
   * Attempts to compute the correct library version for an SDK bundle.
   *
   * @returns {string} The SDK bundle's library version.
   */
  _getLibVersion () {
    try {
      const insideWorkTree = require('child_process')
        .execSync('git rev-parse --is-inside-work-tree 2>/dev/null')
        .toString().trim();
      if (insideWorkTree === 'true') {
        return require('child_process')
          .execSync('git describe --tags')
          .toString().trim();
      }
    } catch (e) {
      // if above command fails, catch error and continue, as we are not in a git repository
    }

    console.warn('Warning: Not in a github repository, using default hardcoded library version.');
    return 'TEST';
  }
}

exports.BundleType = BundleType;
exports.BundleAbstractFactory = BundleAbstractFactory;
