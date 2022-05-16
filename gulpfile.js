const { parallel } = require('gulp');

const templates = require('./conf/gulp-tasks/templates.gulpfile.js');
const library = require('./conf/gulp-tasks/library.gulpfile.js');
const extractTranslations = require('./conf/gulp-tasks/extracttranslations.gulpfile.js');
// const args = require('yargs').argv;

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
  library.buildLocales.bind(null, process.env.LANGUAGES), // args.languages),
  templates.buildLocales.bind(null, process.env.LANGUAGES)
);
exports.extractTranslations = extractTranslations;
exports.templates = templates.default;

exports.buildSearchBarOnlyAssets = parallel(
  templates.buildSearchBarOnlyAssets,
  library.buildSearchBarOnlyAssets
);
