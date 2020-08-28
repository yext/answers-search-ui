const { series, parallel, src, dest, watch } = require('gulp');
const path = require('path');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');

const getLibraryVersion = require('./utils/libversion');
const { BundleType, BundleTaskFactory } = require('./bundle/bundletaskfactory');
const { DEV_LOCALE, BUILD_LOCALES } = require('../i18n/constants');
const LocalFileParser = require('../i18n/localfileparser');
const TranslationResolver = require('../i18n/translationresolver');
const Translator = require('../i18n/translator');

/**
 * Creates the un-minified legacy JS bundle, compiles CSS, and kicks off the watch task.
 * @returns {Promise<Function>}
 */
exports.dev = function devJSBundle () {
  return createTaskFactory(DEV_LOCALE).then(devTaskFactory => {
    return new Promise(resolve => {
      return parallel(
        series(devTaskFactory.create(BundleType.LEGACY_IIFE), watchJS(devTaskFactory)),
        series(compileCSS, watchCSS)
      );
    });
  });
};

/**
 * Creates a build task per locale, and combines them into a parallel task.
 * @returns {Promise<Function>}
 */
exports.default = function defaultJSBundle () {
  const localizedTaskPromises = BUILD_LOCALES.map(locale => {
    return createTaskFactory(locale).then(createBundles);
  });
  return Promise.all(localizedTaskPromises).then(localizedTasks => {
    return new Promise(resolve => parallel(...localizedTasks)(resolve));
  });
};

/**
 * Creates modern, legacy and legacyUMD bundles in parallel.
 *
 * @param {BundleTaskFactory} bundleTaskFactory
 */
async function createBundles (bundleTaskFactory) {
  return parallel(
    series(
      bundleTaskFactory.create(BundleType.MODERN),
      bundleTaskFactory.minify(BundleType.MODERN)
    ),
    series(
      bundleTaskFactory.create(BundleType.LEGACY_IIFE),
      bundleTaskFactory.minify(BundleType.LEGACY_IIFE)
    ),
    series(
      bundleTaskFactory.create(BundleType.LEGACY_UMD),
      bundleTaskFactory.minify(BundleType.LEGACY_UMD)
    ),
    series(compileCSS)
  );
}

/**
 * Creates a BundleTaskFactory configured with translations for the given locale.
 *
 * @param {string} locale
 * @returns {BundleTaskFactory} bundleTaskFactory
 */
async function createTaskFactory (locale) {
  const localFileParser = new LocalFileParser(path.join(__dirname, '../i18n/translations'));
  const translation = await localFileParser.fetch(locale);

  const translator = await Translator.create(locale, [], { [locale]: { translation } });
  const translationResolver = new TranslationResolver(
    translator,
    (translationResult, interpValues, count) => {
      let parsedParams = JSON.stringify(interpValues);
      parsedParams = parsedParams.replace(/['"]/g, '');
      return `ANSWERS.translateJS(${JSON.stringify(translationResult)}, ${parsedParams}, ${count});`;
    });

  return new BundleTaskFactory(getLibraryVersion(), translationResolver, locale);
}

function compileCSS () {
  return src('./src/ui/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss())
    .pipe(dest('./dist/'));
}

/**
 * Creates a new legacy bundle on JS file updates
 *
 * @param {BundleTaskFactory} bundleTaskFactory
 */
function watchJS (bundleTaskFactory) {
  return watch(['./src/**/*.js'], {
    ignored: './dist/'
  }, bundleTaskFactory.create(BundleType.LEGACY_IIFE));
}

function watchCSS (cb) {
  return watch(['./src/ui/sass/**/*.scss'], {
    ignored: './dist/'
  }, series(compileCSS));
}
