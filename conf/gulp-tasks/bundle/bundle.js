const { dest } = require('gulp');

const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('gulp-replace');
const resolve = require('rollup-plugin-node-resolve');
const svg = require('rollup-plugin-svg');
const rollup = require('gulp-rollup-lightweight');
const source = require('vinyl-source-stream');
const {
  TRANSLATION_FLAGGER_REGEX,
  SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE
} = require('../../i18n/constants');
const rollupJson = require('@rollup/plugin-json');

const TranslateCallParser = require('../../i18n/translatecallparser');

/**
 * The Gulp task for producing the modern bundle of an SDK asset.
 *
 * @param {Function} callback
 * @param {string} entryPoint The entry point for the asset.
 * @param {Object<string, ?>} outputConfig Any variant-specific configuration
 *                                         for the modern bundle.
 * @param {string} bundleName The name of the created bundle.
 * @param {string} locale The current locale
 * @param {string} libVersion The current JS library version
 * @param {TranslationResolver} translationResolver
 * @param {string} cloudRegion The current cloud region
 *
 * @returns {stream.Writable} A {@link Writable} stream containing the modern
 *                            SDK bundle.
 */
exports.modernBundle = function (
  callback,
  entryPoint,
  outputConfig,
  bundleName,
  locale,
  libVersion,
  translationResolver,
  cloudRegion) {
  const rollupConfig = {
    input: entryPoint,
    output: outputConfig,
    plugins: [
      resolve({ browser: true }),
      commonjs({
        include: [/node_modules/]
      }),
      babel({
        babelrc: false,
        exclude: [/node_modules/],
        presets: ['@babel/env']
      }),
      svg(),
      rollupJson()
    ]
  };
  return _buildBundle(
    callback, rollupConfig, bundleName, locale, libVersion, translationResolver, cloudRegion);
};

/**
 * The Gulp task for producing any variant of a legacy SDK asset.
 *
 * @param {Function} callback
 * @param {string} entryPoint The entry point for the asset.
 * @param {Object<string, ?>} outputConfig Any variant-specific configuration
 *                                         for the legacy bundle.
 * @param {string} bundleName The name of the created bundle.
 * @param {string} locale The current locale
 * @param {string} libVersion The current JS library version
 * @param {TranslationResolver} translationResolver
 * @param {string} cloudRegion The cloud region
 * @returns {stream.Writable} A {@link Writable} stream containing the legacy
 *                            SDK bundle.
 */
exports.legacyBundle = function (
  callback,
  entryPoint,
  outputConfig,
  bundleName,
  locale,
  libVersion,
  translationResolver,
  cloudRegion
) {
  const rollupConfig = {
    input: entryPoint,
    output: outputConfig,
    plugins: [
      resolve({ browser: true }),
      commonjs({
        include: [/node_modules/]
      }),
      babel({
        runtimeHelpers: true,
        babelrc: false,
        exclude: /node_modules\/(?!cross-fetch)(?!@yext\/answers-storage)(?!@yext\/search-core).*/,
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
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-transform-object-assign'
        ]
      }),
      svg(),
      rollupJson()
    ]
  };
  return _buildBundle(
    callback, rollupConfig, bundleName, locale, libVersion, translationResolver, cloudRegion);
};

/**
 * Bundles the JS based on the given Rollup config.
 *
 * @param {Function} callback
 * @param {Object} rollupConfig config for the Rollup plugin used for JS module bundling
 * @param {string} bundleName The filename of the created bundle.
 * @param {string} locale The current locale
 * @param {string} libVersion The current JS library version
 * @param {TranslationResolver} translationResolver for the given locale
 * @param {string} cloudRegion The cloud region
 * @returns {stream.Writable} A {@link Writable} stream containing the SDK bundle.
 */
function _buildBundle (
  callback,
  rollupConfig,
  bundleName,
  locale,
  libVersion,
  translationResolver,
  cloudRegion
) {
  return rollup(rollupConfig)
    .pipe(source(`${bundleName}.js`))
    .pipe(replace('@@LIB_VERSION', libVersion))
    .pipe(replace('@@LOCALE', locale))
    .pipe(replace('\'@@SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE\'',
      JSON.stringify(SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE)))
    .pipe(replace(TRANSLATION_FLAGGER_REGEX, translateCall => {
      const placeholder = new TranslateCallParser().parse(translateCall);
      const translationResult = translationResolver.resolve(placeholder);
      const canBeTranslatedStatically = typeof translationResult === 'string' &&
        !placeholder.getPluralForm() &&
        placeholder.hasNoInterpolation();
      return canBeTranslatedStatically ? `"${translationResult}"` : translationResult;
    }))
    .pipe(replace('@@CLOUD_REGION', cloudRegion))
    .pipe(dest('dist'))
    .on('end', callback);
}
