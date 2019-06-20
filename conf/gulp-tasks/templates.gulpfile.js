const { series, parallel, src, dest, watch } = require('gulp');

const path = require('path');

const rollup = require('gulp-rollup-lightweight');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const builtins = require('rollup-plugin-node-builtins');

const uglify = require('gulp-uglify-es').default;

const handlebars = require('gulp-handlebars');
const concat = require('gulp-concat');
const declare = require('gulp-declare');
const wrap = require('gulp-wrap');

const source = require('vinyl-source-stream');

function precompileTemplates () {
  return src('./src/ui/templates/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>); \
          \n\nHandlebars.registerPartial(<%= processPartialName(file.relative) %>, <%= customContext(file.relative) %> )', {}, {
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
    .pipe(concat('answerstemplates.compiled.min.js'))
    .pipe(wrap({ src: './conf/templates/handlebarswrapper.txt' }))
    .pipe(dest('dist'));
}

function bundleTemplates () {
  return rollup({
    input: './dist/answerstemplates.compiled.min.js',
    output: {
      format: 'umd',
      name: 'TemplateBundle',
      exports: 'named'
    },
    plugins: [
      resolve(),
      builtins(),
      commonjs({
        include: './node_modules/**'
      }),
      babel({
        presets: ['@babel/env']
      })
    ]
  })
    .pipe(source('answerstemplates.compiled.min.js'))
    .pipe(dest('dist'));
}

function minifyTemplates (cb) {
  return src('./dist/answerstemplates.compiled.min.js')
    .pipe(uglify())
    .pipe(dest('dist'));
}

function watchTemplates (cb) {
  return watch(['./src/ui/templates/**/*.hbs'], {
    ignored: './dist/'
  }, series(precompileTemplates, bundleTemplates));
}

exports.default = series(precompileTemplates, bundleTemplates, minifyTemplates);
exports.dev = series(precompileTemplates, bundleTemplates, watchTemplates);
