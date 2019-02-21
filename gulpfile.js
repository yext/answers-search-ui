const { series, src, dest, watch } = require('gulp')
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function bundle() {
  return rollup({
      input: './japi.js',
      name: 'JAPI',
      format: 'iife',
      sourcemap: true
    })
    .pipe(source('japi.min.js'))
    .pipe(buffer())
    .pipe(babel({
      presets: ['@babel/env']
    }))
//   .pipe(uglify())
   .pipe(dest('dist'));
}

function minify(cb) {
  console.log('minifying...');
  cb();
}

function umdify(cb) {
  console.log('umdifying...')
  cb();
}

function watchJS(cb) {
  watch(['src/*.js'], {
    ignored: './dist/'
  }, bundle);
}

exports.default = exports.build = series(bundle, watchJS);