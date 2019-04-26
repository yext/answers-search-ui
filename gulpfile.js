const { series, parallel, src, dest, watch } = require('gulp')

const path = require('path');

const rollup = require('gulp-rollup-lightweight');
const babel = require('rollup-plugin-babel');

const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const source = require('vinyl-source-stream');

const uglify = require('gulp-uglify');

const handlebars = require('gulp-handlebars');
const concat = require('gulp-concat');
const declare = require('gulp-declare');
const wrap = require('gulp-wrap');

const sass = require('gulp-sass');

const NAMESPACE = 'ANSWERS';

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
            if (name.charAt(0) === '_') {
              return JSON.stringify(name.substr(1));
            } else {
              return JSON.stringify(name);
            }
          },
          // TBH, this isn't really needed anymore since we don't name files like so 'foo.bar.js', but this is here to
          // support that use case.
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
      .pipe(concat('answerstemplates.compiled.min.js'))
      .pipe(wrap({ src: './conf/templates/handlebarswrapper.txt' }))
      .pipe(dest('dist'));
}

function bundleTemplates() {
  return rollup({
    input: './dist/answerstemplates.compiled.min.js',
    output: {
      format: 'iife',
      name: '__$answerstemplateinit'
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
    ],
  })
  .pipe(source('answerstemplates.compiled.min.js'))
  .pipe(dest('dist'));
}

function bundle() {
  return rollup({
    input: './src/answers-umd.js',
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
  .pipe(source('answers.min.js'))
  .pipe(dest('dist'));
}

function minifyJS(cb) {
  return src('./dist/answers.min.js')
    .pipe(uglify())
    .pipe(dest('dist'));
}

function minifyTemplates(cb) {
  return src('./dist/answerstemplates.compiled.min.js')
    .pipe(uglify())
    .pipe(dest('dist'));
}

function compileCSS() {
  return src('./src/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(dest('./dist/'))
}

function watchJS(cb) {
  return watch(['./src/**/*.js'], {
    ignored: './dist/'
  }, series(bundle));
}

function watchCSS(cb) {
  return watch(['./src/**/*.scss'], {
    ignored: './dist/'
  }, series(compileCSS));
}

exports.default = exports.build = parallel(
                                    series(precompileTemplates, bundleTemplates, minifyTemplates),
                                    series(bundle, minifyJS),
                                    series(compileCSS)
                                  );
exports.dev = parallel(
                series(precompileTemplates, bundleTemplates),
                series(bundle, watchJS),
                series(compileCSS, watchCSS)
              );
