const { series, src, dest, watch } = require('gulp')
const rollup = require('rollup-stream');
const babel = require('rollup-plugin-babel');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');

function bundle() {
  return rollup({
      input: './src/japi-umd.js',
      format: 'umd',
      name: 'JAPI',
      exports: 'default',
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
    .pipe(dest('dist'));
}

function minify(cb) {
  return uglify()
}

function watchJS(cb) {
  watch(['./src/**/*.js'], {
    ignored: './dist/'
  }, bundle);
}

exports.default = exports.build = series(bundle, minify, watchJS);
exports.dev = series(bundle, watchJS);