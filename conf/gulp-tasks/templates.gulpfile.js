const { parallel, series, watch } = require('gulp');
const path = require('path');
const LocalFileParser = require('../i18n/localfileparser');
const TemplateTaskFactory = require('./template/templatetaskfactory');
const Translator = require('../i18n/translator');
const TranslationResolver = require('../i18n/translationresolver');

const localFileParser = new LocalFileParser(path.join(__dirname, '../i18n/translations'));
const { DEV_LOCALE, BUILD_LOCALES } = require('../i18n/constants');

async function createTaskFactory (locale) {
  const translation = await localFileParser.fetch(locale);
  const translator = await Translator.create(locale, [], { [locale]: { translation } });
  const passThroughRuntimeGenerator = translationResult => translationResult;
  const translationResolver = new TranslationResolver(translator, passThroughRuntimeGenerator);
  return new TemplateTaskFactory(translationResolver, locale);
}

/**
 * Precompiles templates together, bundles them together, deletes the precompiled template
 * file, and kicks off the watch task.
 * @returns {Promise<Function>}
 */
function devTemplates () {
  return createTaskFactory(DEV_LOCALE).then(devTaskFactory => {
    const { precompileTemplates, bundleTemplatesUMD, cleanFiles } = devTaskFactory;

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
  });
}

exports.dev = devTemplates;

/**
 * Creates a template build task for a specific locale.
 * @param {TemplateTaskFactory} taskFactory
 * @returns {Function}
 */
function createDefaultTask (taskFactory) {
  return series(
    taskFactory.precompileTemplates,
    parallel(
      series(taskFactory.bundleTemplatesIIFE, taskFactory.minifyTemplatesIIFE),
      series(taskFactory.bundleTemplatesUMD, taskFactory.minifyTemplatesUMD)
    ),
    taskFactory.cleanFiles
  );
}

/**
 * Creates a build task per locale, and combines them into a parallel task.
 * @returns {Promise<Function>}
 */
function defaultTemplates () {
  const localizedTaskPromises = BUILD_LOCALES.map(locale => {
    return createTaskFactory(locale).then(createDefaultTask);
  });
  return Promise.all(localizedTaskPromises).then(localizedTasks => {
    return new Promise(resolve => parallel(...localizedTasks)(resolve));
  });
}

exports.default = defaultTemplates;
