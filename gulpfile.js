const { parallel } = require('gulp');

const templates = require('./conf/gulp-tasks/templates.gulpfile.js');
const library = require('./conf/gulp-tasks/library.gulpfile.js');
const extractTranslations = require('./conf/gulp-tasks/extracttranslations.gulpfile.js');

const languageEnv = process.env.LANGUAGE;
let languages;
if (languageEnv && typeof languageEnv === 'string') {
  languages = languageEnv.split(',');
}

exports.default = exports.build = parallel(
  templates.default,
  library.default
);
exports.dev = parallel(
  templates.dev,
  library.dev
);
exports.buildLanguages = parallel(
  templates.buildLanguages,
  library.buildLanguages
);
exports.buildLocales = parallel(
  library.buildLocales.bind(null, languages),
  templates.buildLocales.bind(null, languages)
);

exports.extractTranslations = extractTranslations;
exports.templates = templates.default;

exports.buildSearchBarOnlyAssets = parallel(
  templates.buildSearchBarOnlyAssets,
  library.buildSearchBarOnlyAssets
);
