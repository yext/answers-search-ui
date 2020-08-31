const { src } = require('gulp');
const { Writable } = require('stream');
const path = require('path');
const TranslationExtractor = require('../i18n/extract/translationextractor');

module.exports = function extractTranslations () {
  const extractor = new TranslationExtractor();

  /**
   * Extracts messages from a given source file.
   * 
   * @param {vinyl.File} file 
   * @param {string} encoding 
   * @param {Function} next 
   */
  function extractMessagesFromFile(file, encoding, next) {
    const contents = file.contents.toString();
    const extname = path.extname(file.path);
    const pathFromBase = path.relative('./', file.path);
    switch (extname) {
      case '.js':
        extractor.extractFromJS(contents, pathFromBase);
        break;
      case '.hbs':
        extractor.extractFromHBS(contents, pathFromBase);
        break;
      default: 
        throw new Error(`Unknown file extension for ${pathFromBase}`);
    }
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
