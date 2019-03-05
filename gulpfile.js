const { series, src, dest, watch } = require('gulp')
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
    .pipe(wrap('HandleBars.template(<%= contents %>)'))
    .pipe(declare({
      root: 'context',
      noRedeclare: true
    }))
    .pipe(concat('japitemplates.compiled.js'))
    .pipe(wrap('JAPI.templates.register(function(HandleBars) { let context = {}; HandleBars.templates = HandleBars.templates || {}; <%= contents %> return context })'))
    .pipe(dest('dist'))
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

exports.templates = series(precompileTemplates);

exports.default = exports.build = series(bundle, minify);
exports.dev = series(precompileTemplates, bundle, watchJS);