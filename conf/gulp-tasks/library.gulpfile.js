const { series, parallel, src, dest, watch } = require('gulp');

const path = require('path');

const rename = require('gulp-rename');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const uglify = require('gulp-uglify-es').default;

const getLibraryVersion = require('./utils/libversion');
const { BundleType, BundleTaskFactory } = require('./bundle/bundletaskfactory');
const LocalFileParser = require('../i18n/localfileparser');
const Translator = require('../i18n/translator');
const TranslationResolver = require('../i18n/translationresolver');

async function bundle () {
  const localFileParser = new LocalFileParser(path.join(__dirname, '../i18n/translations'));
  const translation = await localFileParser.fetch('fr-FR');
  
  const translator = await Translator.create('fr-FR', [], { 'fr-FR': { translation } });
  const translationResolver = new TranslationResolver(
    translator, 
    (translationResult, interpValues, count) => {
      let parsedParams = JSON.stringify(interpValues);
      parsedParams = parsedParams.replace(/[\'\"]/g, '');
      return `ANSWERS.translateJS(${JSON.stringify(translationResult)}, ${parsedParams}, ${count});`
    });

  const bundleTaskFactory = new BundleTaskFactory(getLibraryVersion(), translationResolver);

  return bundleTaskFactory.create(BundleType.MODERN)();
}

function legacyBundleIIFE () {
  return bundleTaskFactory.create(BundleType.LEGACY_IIFE)();
}

function legacyBundleUMD () {
  return bundleTaskFactory.create(BundleType.LEGACY_UMD)();
}

function minifyJS () {
  return src('./dist/answers-modern.js')
    .pipe(rename('answers-modern.min.js'))
    .pipe(uglify({
      mangle: { reserved: ['ANSWERS'] }
    }))
    .pipe(dest('dist'));
}

function minifyLegacy () {
  return src('./dist/answers.js')
    .pipe(rename('answers.min.js'))
    .pipe(uglify())
    .pipe(dest('dist'));
}

function minifyLegacyUMD () {
  return src('./dist/answers-umd.js')
    .pipe(rename('answers-umd.min.js'))
    .pipe(uglify())
    .pipe(dest('dist'));
}

function compileCSS () {
  return src('./src/ui/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss())
    .pipe(dest('./dist/'));
}

function watchJS (cb) {
  return watch(['./src/**/*.js'], {
    ignored: './dist/'
  }, parallel(legacyBundleIIFE));
}

function watchCSS (cb) {
  return watch(['./src/ui/sass/**/*.scss'], {
    ignored: './dist/'
  }, series(compileCSS));
}

exports.default = parallel(
  series(bundle, minifyJS),
  series(legacyBundleIIFE, minifyLegacy),
  series(legacyBundleUMD, minifyLegacyUMD),
  series(compileCSS)
);

exports.dev = parallel(
  series(legacyBundleIIFE, watchJS),
  series(compileCSS, watchCSS)
);
