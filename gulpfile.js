const { series, src, dest, watch } = require('gulp')
const rollup = require('rollup-stream');
const babel = require('rollup-plugin-babel');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');

function bundle() {
  return rollup({
      input: './japi.js',
      format: 'iife',
      name: 'JAPI',
      plugins: [
        babel({
          exclude: 'node_modules/**',
          presets: ['@babel/env']
        })
      ],
      sourcemap: true
    })
    .pipe(source('japi.min.js'))
    .pipe(buffer())
    .pipe(uglify())
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