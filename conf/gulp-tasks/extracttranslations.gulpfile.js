const { src } = require('gulp');
const { Transform } = require('readable-stream');
const path = require('path');
const TranslationExtractor = require('../i18n/extract/translationextractor');

module.exports = function precompileTemplates (callback) {
  const extractor = new TranslationExtractor();

  const transform = new Transform({
    objectMode: true,
    transform (chunk, encoding, callback) {
      const contents = chunk.contents.toString();
      const extname = path.extname(chunk.path);
      const pathFromBase = path.relative('./', chunk.path);
      switch (extname) {
        case '.js':
          extractor.extractFromJS(contents, pathFromBase);
          break;
        case '.hbs':
          extractor.extractFromHBS(contents, pathFromBase);
          break;
      }
      callback();
    }
  });

  const templatesStream = src(['./src/ui/templates/**/*.hbs', './src/**/*.js'])
    .pipe(transform)
    .on('end', () => {
      extractor.savePotFile('./conf/i18n/translations/messages.pot');
    });
  return templatesStream;
};
