const { src, dest } = require('gulp');
const handlebars = require('gulp-handlebars');
const concat = require('gulp-concat');
const declare = require('gulp-declare');
const wrap = require('gulp-wrap');
const filter = require('gulp-filter');

const TranslateHelperVisitor = require('../../i18n/translatehelpervisitor');
const { addLocalePrefix, getPrecompiledFileName } = require('./filenameutils');

/**
 * Creates the precompileTemplates task for a given locale and translator.
 *
 * @param {string} locale
 * @param {boolean} isSearchBarOnly If only templates related to the SearchBar
 *                                  should be included.
 * @param {Translator} translator
 * @returns {Function}
 */
function createPrecompileTemplatesTask (locale, isSearchBarOnly, translator) {
  const precompileTask = callback =>
     _precompileTemplates(callback, locale, isSearchBarOnly, translator);
  const taskName = addLocalePrefix('precompileTemplates', locale);
  Object.defineProperty(precompileTask, 'name', {
    value: taskName
  });
  return precompileTask;
}

/**
 * The precompileTemplates task for this factory's locale.
 *
 * @param {Function} callback called when the task is finished
 * @param {string} locale
 * @param {boolean} isSearchBarOnly If only the templates related to the SearchBar
 *                                  should be included.
 * @param {Translator} translator
 * @returns {stream.Readable}
 */
function _precompileTemplates (callback, locale, isSearchBarOnly, translator) {
  const precompiledFileName = getPrecompiledFileName(locale, isSearchBarOnly);
  const processAST = ast => new TranslateHelperVisitor(translator).accept(ast);

  let templatesWrapper = './conf/templates/handlebarswrapper.txt';
  let templatesStream = src('./src/ui/templates/**/*.hbs');
  if (isSearchBarOnly) {
    templatesWrapper = './conf/templates/handlebarswrapper-search-bar.txt';
    templatesStream = 
      templatesStream.pipe(filter(['**/search/**/*.hbs', '**/icons/**/*.hbs']));
    ;
  }

  return precompileTemplates(
    callback, templatesStream, templatesWrapper, precompiledFileName, processAST);
}

/**
 * Precopmiles the provided templates to the given output file.
 *
 * @param {Function} callback called when the task is finished
 * @param {stream.Readable} templatesStream A stream containing the various HBS templates
 *                                          to pre-compile.
 * @param {string} templatesWrapper A JS file to wrap the pre-compiled templates.
 * @param {string} outputFile
 * @param {Function} processAST a function that takes in and mutates a handlebars AST
 * @returns {stream.Readable}
 */
function precompileTemplates (callback, templatesStream, templatesWrapper, outputFile, processAST) {
  return templatesStream
    .pipe(handlebars({ processAST: processAST }))
    .pipe(wrap(`Handlebars.template(<%= contents %>);
        Handlebars.registerPartial(<%= processPartialName(file.relative) %>, <%= customContext(file.relative) %> )`, {}, {
      imports: {
        processPartialName: function (fileName, a, b, c) {
          // Strip the extension and the underscore
          // Escape the output with JSON.stringify
          let name = fileName.split('.')[0];
          if (name.charAt(0) === '_') {
            return JSON.stringify(name.substr(1));
          } else {
            return JSON.stringify(name);
          }
        },
        // TBH, this isn't really needed anymore since we don't name files like so 'foo.bar.js', but this is here to
        // support that use case.
        customContext: function (fileName) {
          let name = fileName.split('.')[0];
          let keys = name.split('.');
          let context = 'context';
          for (let i = 0; i < keys.length; i++) {
            context = context += '["' + keys[i] + '"]';
          }
          return context;
        }
      }
    }))
    .pipe(declare({
      root: 'context',
      noRedeclare: true,
      processName: function (filePath) {
        let path = filePath.replace('src/ui/templates', '');
        return declare.processNameByPath(path, '').replace('.', '/');
      }
    }))
    .pipe(concat(outputFile))
    .pipe(wrap({ src: templatesWrapper }))
    .pipe(dest('dist'))
    .on('end', callback);
}

module.exports = createPrecompileTemplatesTask;
