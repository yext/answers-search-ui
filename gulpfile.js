const { series, src, dest } = require('gulp')
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function defaultTask(cb) {
  return rollup({
      input: './src/index.js',
      name: 'JAPI',
      format: 'iife',
      sourcemap: true
    })
    .pipe(source('japi.min.js'))
    .pipe(buffer())
    // .pipe(babel({
    //   presets: ['@babel/env']
    // }))
//    .pipe(uglify())
    .pipe(dest('dist'));
}

function bundle(cb) {
  console.log('bundling...');
  cb();
}

function minify(cb) {
  console.log('minifying...');
  cb();
}

function umdify(cb) {
  console.log('umdifying...')
  cb();
}

exports.build = series(
  bundle,
  minify,
  umdify
)

exports.default = defaultTask;