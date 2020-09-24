const { parallel, series, watch } = require('gulp');
const path = require('path');

const LocalFileParser = require('../i18n/localfileparser');
const Translator = require('../i18n/translator');
const { DEV_LOCALE, BUILD_LOCALES } = require('../i18n/constants');

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
    new BundleTemplatesTaskFactory(DEV_LOCALE).create(TemplateType.UMD);
  const cleanFiles = createCleanFilesTask(DEV_LOCALE);
  const translator = await createTranslator(DEV_LOCALE);
  const precompileTemplates = createPrecompileTemplatesTask(DEV_LOCALE, translator);

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
 * Creates a build task per locale, and combines them into a parallel task.
 *
 * @returns {Promise<Function>}
 */
async function defaultTemplates () {
  const localizedTaskPromises = BUILD_LOCALES.map(async locale => {
    const translator = await createTranslator(locale);
    return createDefaultTask(locale, translator);
  });
  const localizedTasks = await Promise.all(localizedTaskPromises);
  return new Promise(resolve => parallel(...localizedTasks)(resolve));
}

exports.default = defaultTemplates;

/**
 * A test build  task used for testing the precompile task
 *
 * @returns {Promise<Function>}
 */
async function test () {
  const bundleTemplatesUMD =
    new BundleTemplatesTaskFactory(DEV_LOCALE).create(TemplateType.UMD);
  const cleanFiles = createCleanFilesTask(DEV_LOCALE);
  const translator = await createTranslator(DEV_LOCALE);
  const precompileTemplates = createPrecompileTemplatesTask(DEV_LOCALE, translator);

  return new Promise(resolve => {
    return series(
      precompileTemplates,
      bundleTemplatesUMD,
      cleanFiles
    )(resolve);
  });
}

exports.test = test;
