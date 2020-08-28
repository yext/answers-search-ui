const { src, dest } = require('gulp');

const handlebars = require('gulp-handlebars');
const concat = require('gulp-concat');
const declare = require('gulp-declare');
const wrap = require('gulp-wrap');

/**
 * @param {Function} callback called when the task is finished
 * @param {string} outputFile
 * @param {Function} processAST a function that takes in and mutates a handlebars AST
 * @returns {stream.Readable}
 */
function precompileTemplates (callback, outputFile, processAST) {
  return src('./src/ui/templates/**/*.hbs')
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
    .pipe(wrap({ src: './conf/templates/handlebarswrapper.txt' }))
    .pipe(dest('dist'))
    .on('end', callback);
}

module.exports = precompileTemplates;
