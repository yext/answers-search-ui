const { series, parallel, src, dest, watch } = require('gulp');
const path = require('path');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const rtlcss = require('gulp-rtlcss');
const rename = require('gulp-rename');

const getLibraryVersion = require('./utils/libversion');
const { BundleType, BundleTaskFactory } = require('./bundle/bundletaskfactory');
const { DEFAULT_LOCALE, ALL_LANGUAGES } = require('../i18n/constants');
const { copyAssetsForLocales } = require('../i18n/localebuildutils');
const LocalFileParser = require('../i18n/localfileparser');
const MinifyTaskFactory = require('./bundle/minifytaskfactory');
const TranslationResolver = require('../i18n/translationresolver');
const Translator = require('../i18n/translator');
const { generateProcessTranslationJsCall } = require('../i18n/runtimecallgeneratorutils');

/**
 * Creates the un-minified legacy JS bundle, compiles CSS, and kicks off the watch task.
 * @returns {Promise<Function>}
 */
exports.dev = function devJSBundle () {
  return createBundleTaskFactory(DEFAULT_LOCALE).then(devTaskFactory => {
    return new Promise(resolve => {
      return parallel(
        series(devTaskFactory.create(BundleType.LEGACY_IIFE), getWatchJSTask(devTaskFactory)),
        series(compileCSS, watchCSS)
      )(resolve);
    });
  });
};

/**
 * Creates a build task for each provided language and combines them into a series task.
 * This function also supports locales, but it is named to reflect the current use case
 * of creating bundles for just languages.
 *
 * @param {Array<string>} languages
 * @param {boolean} isSearchBarOnly If the build task is for the SearchBar-only assets.
 * @returns {Promise<Function>}
 */
function createJSBundlesForLanguages (languages, isSearchBarOnly = false) {
  const localizedTaskPromises = languages.map(language => {
    const minifyTaskFactory = new MinifyTaskFactory(language);
    return createBundleTaskFactory(language)
      .then(bundleTaskFactory => createBundles(bundleTaskFactory, minifyTaskFactory, isSearchBarOnly));
  });
  return Promise.all(localizedTaskPromises).then(localizedTasks => {
    return new Promise(resolve => series(compileCSS, ...localizedTasks)(resolve));
  });
}

/**
 * Creates a task for building all of the localized SDK assets.
 *
 * @param {boolean} isSearchBarOnly If the task is for the SearchBar-only assets.
 * @returns {Promise<Function>}
 */
function allLocaleJSBundles (isSearchBarOnly = false) {
  const assetNames = [
    'answers.js',
    'answers.min.js',
    'answers-modern.js',
    'answers-modern.min.js',
    'answers-umd.js',
    'answers-umd.min.js'];

  return createJSBundlesForLanguages(ALL_LANGUAGES, isSearchBarOnly).then(() => {
    copyAssetsForLocales(assetNames);
  });
}

exports.default = function defaultLanguageJSBundles () {
  return createJSBundlesForLanguages([DEFAULT_LOCALE]);
};

exports.buildLanguages = function allLanguageJSBundles () {
  return createJSBundlesForLanguages(ALL_LANGUAGES);
};

exports.buildLocales = function () {
  return allLocaleJSBundles();
};

exports.buildSearchBarOnlyAssets = function () {
  return allLocaleJSBundles(true);
};

/**
 * Creates modern, legacy and legacyUMD bundles in parallel.
 *
 * @param {BundleTaskFactory} bundleTaskFactory
 * @param {MinifyTaskFactory} minifyTaskFactory
 * @param {boolean} isSearchBarOnly If the bundles are for the SearchBar-only integration.
 */
function createBundles (bundleTaskFactory, minifyTaskFactory, isSearchBarOnly) {
  const entryPoint = isSearchBarOnly ? './src/answers-search-bar.js' : './src/answers-umd.js';
  return parallel(
    series(
      bundleTaskFactory.create(BundleType.MODERN, entryPoint),
      minifyTaskFactory.minify(BundleType.MODERN)
    ),
    series(
      bundleTaskFactory.create(BundleType.LEGACY_IIFE, entryPoint),
      minifyTaskFactory.minify(BundleType.LEGACY_IIFE)
    ),
    series(
      bundleTaskFactory.create(BundleType.LEGACY_UMD, entryPoint),
      minifyTaskFactory.minify(BundleType.LEGACY_UMD)
    )
  );
}

/**
 * Creates a BundleTaskFactory configured with translations for the given locale.
 *
 * @param {string} locale
 * @returns {BundleTaskFactory} bundleTaskFactory
 */
async function createBundleTaskFactory (locale) {
  const localFileParser = new LocalFileParser(path.join(__dirname, '../i18n/translations'));
  const translation = await localFileParser.fetch(locale);

  const translator = await Translator.create(locale, [], { [locale]: { translation } });
  const translationResolver = new TranslationResolver(
    translator,
    generateProcessTranslationJsCall);

  return new BundleTaskFactory(getLibraryVersion(), translationResolver, locale);
}

function compileCSS () {
  return new Promise(resolve => {
    return parallel(compileLtrCSS, compileRtlCSS)(resolve);
  });
}

/**
 * Compiles the standard left to right CSS
 */
function compileLtrCSS () {
  return src('./src/ui/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss())
    .pipe(dest('./dist/'));
}

/**
 * Compiles the right to left CSS which is used for languages such as Arabic
 */
function compileRtlCSS () {
  return src('./src/ui/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(rtlcss())
    .pipe(postcss())
    .pipe(rename(function (path) {
      path.basename += '.rtl';
    }))
    .pipe(dest('./dist/'));
}

/**
 * Returns a watchJS task that creates a new legacy bundle on JS file updates
 *
 * @param {BundleTaskFactory} bundleTaskFactory
 */
function getWatchJSTask (bundleTaskFactory) {
  return function watchJS () {
    return watch(['./src/**/*.js'], {
      ignored: './dist/'
    }, bundleTaskFactory.create(BundleType.LEGACY_IIFE));
  };
}

function watchCSS (cb) {
  return watch(['./src/ui/sass/**/*.scss'], {
    ignored: './dist/'
  }, series(compileCSS));
}
