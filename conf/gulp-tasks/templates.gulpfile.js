const { parallel, series, watch } = require('gulp');
const path = require('path');
const LocalFileParser = require('../i18n/localfileparser');
const PrecompileTemplatesTaskFactory = require('./template/precompiletemplatestaskfactory');
const Translator = require('../i18n/translator');
const TranslationResolver = require('../i18n/translationresolver');

const localFileParser = new LocalFileParser(path.join(__dirname, '../i18n/translations'));
const { DEV_LOCALE, BUILD_LOCALES } = require('../i18n/constants');
const createCleanFilesTask = require('./template/createcleanfilestask');
const BundleTemplatesTaskFactory = require('./template/bundletemplatestaskfactory');
const TemplateType = require('./template/templatetype');
const MinifyTemplatesTaskFactory = require('./template/minifytemplatestaskfactory');

async function createPrecompileTaskFactory (locale) {
  const translation = await localFileParser.fetch(locale);
  const translator = await Translator.create(locale, [], { [locale]: { translation } });
  const passThroughRuntimeGenerator = translationResult => translationResult;
  const translationResolver = new TranslationResolver(translator, passThroughRuntimeGenerator);
  return new PrecompileTemplatesTaskFactory(translationResolver, locale);
}

/**
 * Precompiles templates together, bundles them together, deletes the precompiled template
 * file, and kicks off the watch task.
 * @returns {Promise<Function>}
 */
async function devTemplates () {
  const bundleTemplatesUMD =
    new BundleTemplatesTaskFactory(DEV_LOCALE).create(TemplateType.UMD);
  const cleanFiles = createCleanFilesTask(DEV_LOCALE);
  const precompileTaskFactory = await createPrecompileTaskFactory(DEV_LOCALE);
  const precompileTemplates = precompileTaskFactory.create();

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
 * Creates a template build task for a specific {@link PrecompileTemplatesTaskFactory} and locale.
 * @param {PrecompileTemplatesTaskFactory} precompileTaskFactory
 * @param {string} locale
 * @returns {Function}
 */
function createDefaultTask (precompileTaskFactory, locale) {
  const precompileTemplates = precompileTaskFactory.create();

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
 * @returns {Promise<Function>}
 */
async function defaultTemplates () {
  const localizedTaskPromises = BUILD_LOCALES.map(async locale => {
    const precompileTaskFactory = await createPrecompileTaskFactory(locale);
    return createDefaultTask(precompileTaskFactory, locale);
  });
  const localizedTasks = await Promise.all(localizedTaskPromises);
  return new Promise(resolve => parallel(...localizedTasks)(resolve));
}

exports.default = defaultTemplates;
