const { parallel, series, watch } = require('gulp');
const path = require('path');
const LocalFileParser = require('../i18n/localfileparser');
const TemplateTaskFactory = require('./template/templatetaskfactory');
const Translator = require('../i18n/translator');
const TranslationResolver = require('../i18n/translationresolver');

const localFileParser = new LocalFileParser(path.join(__dirname, '../i18n/translations'));
const { DEV_LOCALE, BUILD_LOCALES } = require('../i18n/constants')

async function createTaskFactory (locale) {
  const translation = await localFileParser.fetch(locale);
  const translator = await Translator.create(locale, [], { [locale]: { translation } });
  const translationResolver = new TranslationResolver(translator, translationResult => translationResult);
  return new TemplateTaskFactory(translationResolver, locale);
}

exports.dev = function () {
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
      )(resolve)
    });
  });
}

function createDefaultTask(taskFactory) {
  return series(
    taskFactory.precompileTemplates,
    parallel(
      series(taskFactory.bundleTemplatesIIFE, taskFactory.minifyTemplatesIIFE),
      series(taskFactory.bundleTemplatesUMD, taskFactory.minifyTemplatesUMD)
    ),
    taskFactory.cleanFiles
  );
}

exports.default = function () {
  const localizedTaskPromises = BUILD_LOCALES.map(locale => {
    return createTaskFactory(locale).then(createDefaultTask);
  });
  return Promise.all(localizedTaskPromises).then(localizedTasks => {
    return new Promise(resolve => parallel(...localizedTasks)(resolve));
  });
};
