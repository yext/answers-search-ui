const { src } = require('gulp');
const { Writable } = require('stream');
const path = require('path');
const TranslationExtractor = require('../i18n/extract/translationextractor');

module.exports = function extractTranslations () {
  const extractor = new TranslationExtractor();

  /**
   * Extracts messages from a given source file into the extractor.
   *
   * @param {vinyl.File} file
   * @param {string} encoding
   * @param {Function} next
   */
  function extractMessagesFromFile (file, encoding, next) {
    const contents = file.contents.toString();
    const pathFromBase = path.relative('./', file.path);
    extractor.extract(contents, pathFromBase);
    next();
  }

  const processSourceFiles = new Writable({
    objectMode: true,
    write: extractMessagesFromFile
  });

  return src(['./src/ui/templates/**/*.hbs', './src/**/*.js'])
    .pipe(processSourceFiles)
    .on('finish', () => {
      extractor.savePotFile('./conf/i18n/translations/messages.pot');
    });
};
