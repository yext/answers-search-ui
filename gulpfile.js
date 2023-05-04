const { parallel } = require('gulp');

const templates = require('./conf/gulp-tasks/templates.gulpfile.js');
const library = require('./conf/gulp-tasks/library.gulpfile.js');
const extractTranslations = require('./conf/gulp-tasks/extracttranslations.gulpfile.js');

const languageEnv = process.env.LANGUAGE;
let languages;
if (languageEnv && typeof languageEnv === 'string') {
  languages = languageEnv.split(',');
}

const cloudRegionEnv = process.env.CLOUD_REGION;
let cloudRegion;
if (cloudRegionEnv && typeof cloudRegionEnv === 'string') {
  cloudRegion = cloudRegionEnv;
}

exports.default = exports.build = parallel(
  templates.default,
  library.default
);
exports.dev = parallel(
  templates.dev,
  library.dev
);
exports.unminifiedLegacy = parallel(
  templates.unminifiedLegacy,
  library.unminifiedLegacy
);
exports.buildLanguages = parallel(
  templates.buildLanguages,
  library.buildLanguages
);
exports.buildLocales = parallel(
  library.buildLocales.bind(null, languages, cloudRegion),
  templates.buildLocales.bind(null, languages)
);

exports.extractTranslations = extractTranslations;
exports.templates = templates.default;

exports.buildSearchBarOnlyAssets = parallel(
  library.buildSearchBarOnlyAssets.bind(null, languages, cloudRegion),
  templates.buildSearchBarOnlyAssets.bind(null, languages)
);
