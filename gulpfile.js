const { series, src, dest, watch } = require('gulp')

const path = require('path');

const rollup = require('gulp-rollup-lightweight');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');

const handlebars = require('gulp-handlebars');
const concat = require('gulp-concat');
const declare = require('gulp-declare');
const wrap = require('gulp-wrap');

const NAMESPACE = 'JAPI';

function precompileTemplates() {
    return src('./src/ui/templates/**/*.hbs')
      .pipe(handlebars())
      .pipe(wrap('Handlebars.template(<%= contents %>); \
          \n\nHandlebars.registerPartial(<%= processPartialName(file.relative) %>, <%= customContext(file.relative) %> )', {}, {
        imports: {
          processPartialName: function(fileName, a, b, c) {
            // Strip the extension and the underscore
            // Escape the output with JSON.stringify
            let name = fileName.split('.')[0];
            console.log(name);
            if (name.charAt(0) === '_') {
              return JSON.stringify(name.substr(1));
            } else {
              return JSON.stringify(name);
            }
          },
          // Strangly, the way that declare works is by creating a new namespace for each file name
          // that
          customContext: function(fileName) {
            let name = fileName.split('.')[0];
            let keys = name.split('.');
            let context = 'context';
            for (let i = 0; i < keys.length; i ++) {
              context = context += '["' + keys[i] + '"]'
            }
            return context;
          }
        }
      }))
      .pipe(declare({
        root: 'context',
        noRedeclare: true,
        processName: function(filePath) {
          let path = filePath.replace('src/ui/templates', '');
          return declare.processNameByPath(path, '').replace('.', '/');
        }
      }))
      .pipe(concat('japitemplates.compiled.js'))
      .pipe(wrap({ src: './conf/templates/handlebarswrapper.txt' }))
      .pipe(dest('dist'));
}

function bundleTemplates() {
  return rollup({
    input: './dist/japitemplates.compiled.js',
    output: {
      format: 'iife',
      name: '__$japitemplateinit'
    },
    plugins: [
      resolve(),
      commonjs({
        include: './node_modules/**'
      })
    ]
  })
  .pipe(source('japitemplates.compiled.bundle.min.js'))
  .pipe(dest('dist'));
}

function bundle() {
  return rollup({
    input: './src/japi-umd.js',
    output: {
      format: 'umd',
      name: NAMESPACE,
      exports: 'default',
      sourcemap: true
    },
    plugins: [
      resolve(),
      commonjs({
        include: './node_modules/**'
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env']
      })
    ]
  })
  .pipe(source('japi.min.js'))
  .pipe(dest('dist'));
}

function minify(cb) {
  return src('./dist/japi.min.js').pipe(uglify());
}

function watchJS(cb) {
  return watch(['./src/**/*.js'], {
    ignored: './dist/'
  }, bundle);
}

exports.templates = series(precompileTemplates, bundleTemplates);

exports.default = exports.build = series(bundle, minify);
exports.dev = series(precompileTemplates, bundleTemplates, bundle, watchJS);