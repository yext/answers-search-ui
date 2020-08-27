const { parallel, series, watch } = require('gulp');
const path = require('path');
const LocalFileParser = require('../i18n/localfileparser');
const TemplateTaskFactory = require('./template/templatetaskfactory');
const Translator = require('../i18n/translator');
const TranslationResolver = require('../i18n/translationresolver');

let devTaskFactory;
const localFileParser = new LocalFileParser(path.join(__dirname, '../i18n/translations'));
const devLocale = 'en';

async function createTaskFactory (locale) {
  const translation = await localFileParser.fetch(locale);
  const translator = await Translator.create(locale, [], { [locale]: { translation } });
  const translationResolver = new TranslationResolver(translator, translationResult => translationResult);
  return new TemplateTaskFactory(translationResolver, locale);
}

async function watchTemplates () {
  devTaskFactory = devTaskFactory || await createTaskFactory(devLocale);
  return watch(['./src/ui/templates/**/*.hbs'], {
    ignored: './dist/'
  }, series(
    devTaskFactory.precompileTemplates,
    devTaskFactory.bundleTemplatesUMD,
    devTaskFactory.cleanFiles
  ));
}

async function devTemplates () {
  devTaskFactory = devTaskFactory || await createTaskFactory(devLocale);
  return series(
    devTaskFactory.precompileTemplates,
    devTaskFactory.bundleTemplatesUMD,
    devTaskFactory.cleanFiles,
    watchTemplates
  )();
}

exports.dev = devTemplates;

async function defaultTask () {
  const locales = ['en'];
  const localizedTemplateTasks = await Promise.all(locales.map(async locale => {
    const taskFactory = await createTaskFactory(locale);
    return series(
      taskFactory.precompileTemplates,
      parallel(
        series(taskFactory.bundleTemplatesIIFE, taskFactory.minifyTemplatesIIFE),
        series(taskFactory.bundleTemplatesUMD, taskFactory.minifyTemplatesUMD)
      ),
      taskFactory.cleanFiles
    );
  }));
  return new Promise(resolve => parallel(...localizedTemplateTasks)(resolve));
}

exports.default = defaultTask;
