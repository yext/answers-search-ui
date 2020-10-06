const { parallel, series, watch } = require('gulp');
const path = require('path');

const LocalFileParser = require('../i18n/localfileparser');
const Translator = require('../i18n/translator');
const { DEFAULT_LOCALE, ALL_LANGUAGES } = require('../i18n/constants');
const { copyAssetsForLocales } = require('../i18n/localebuildutils');

const TemplateType = require('./template/templatetype');
const createPrecompileTemplatesTask = require('./template/createprecompiletemplates');
const BundleTemplatesTaskFactory = require('./template/bundletemplatestaskfactory');
const MinifyTemplatesTaskFactory = require('./template/minifytemplatestaskfactory');
const createCleanFilesTask = require('./template/createcleanfiles');

const localFileParser = new LocalFileParser(path.join(__dirname, '../i18n/translations'));

async function createTranslator (locale) {
  const translation = await localFileParser.fetch(locale);
  return Translator.create(locale, [], { [locale]: { translation } });
}

/**
 * Precompiles templates together, bundles them together,
 * cleans up any intermediary files, and kicks off the watch task.
 *
 * @returns {Promise<Function>}
 */
async function devTemplates () {
  const bundleTemplatesUMD =
    new BundleTemplatesTaskFactory(DEFAULT_LOCALE).create(TemplateType.UMD);
  const cleanFiles = createCleanFilesTask(DEFAULT_LOCALE);
  const translator = await createTranslator(DEFAULT_LOCALE);
  const precompileTemplates = createPrecompileTemplatesTask(DEFAULT_LOCALE, translator);

  function watchTemplates () {
    return watch(['./src/ui/templates/**/*.hbs'], {
      ignored: './dist/'
    }, series(precompileTemplates, bundleTemplatesUMD, cleanFiles));
  }

  return new Promise(resolve => {
    return series(
      precompileTemplates,
      bundleTemplatesUMD,
      cleanFiles,
      watchTemplates
    )(resolve);
  });
}

exports.dev = devTemplates;

/**
 * Creates a template build task for a specific locale and translator.
 *
 * @param {string} locale
 * @param {Translator} translator
 * @returns {Function}
 */
function createDefaultTask (locale, translator) {
  const precompileTemplates = createPrecompileTemplatesTask(locale, translator);

  const bundleFactory = new BundleTemplatesTaskFactory(locale);
  const bundleTemplatesIIFE = bundleFactory.create(TemplateType.IIFE);
  const bundleTemplatesUMD = bundleFactory.create(TemplateType.UMD);

  const minifyFactory = new MinifyTemplatesTaskFactory(locale);
  const minifyTemplatesIIFE = minifyFactory.create(TemplateType.IIFE);
  const minifyTemplatesUMD = minifyFactory.create(TemplateType.UMD);

  const cleanFiles = createCleanFilesTask(locale);

  return series(
    precompileTemplates,
    parallel(
      series(bundleTemplatesIIFE, minifyTemplatesIIFE),
      series(bundleTemplatesUMD, minifyTemplatesUMD)
    ),
    cleanFiles
  );
}

/**
 * Creates a build task per language, and combines them into a series task. This function
 * also supports locales, but it is named to reflect the current use case of creating
 * bundles for just languages.
 * @param {Array<string>} languages
 * @returns {Promise<Function>}
 */
async function createTemplatesForLanguages (languages) {
  const localizedTaskPromises = languages.map(async language => {
    const translator = await createTranslator(language);
    return createDefaultTask(language, translator);
  });
  const localizedTasks = await Promise.all(localizedTaskPromises);
  return new Promise(resolve => series(...localizedTasks)(resolve));
}

exports.default = function defaultTemplates () {
  return createTemplatesForLanguages([DEFAULT_LOCALE]);
};

exports.buildLanguages = function allLanguageTemplates () {
  return createTemplatesForLanguages(ALL_LANGUAGES);
};

exports.buildLocales = function allLocaleTemplates () {
  const assetNames = [
    'answerstemplates-iife.compiled.min.js',
    'answerstemplates.compiled.min.js'];

  return createTemplatesForLanguages(ALL_LANGUAGES).then(() => {
    copyAssetsForLocales(assetNames);
  });
};
