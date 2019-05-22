const { series, parallel, src, dest, watch } = require('gulp')

const rollup = require('gulp-rollup-lightweight');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const source = require('vinyl-source-stream');
const rename = require('gulp-rename');

const sass = require('gulp-sass');

const uglify = require('gulp-uglify-es').default;

const NAMESPACE = 'ANSWERS';

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
  .pipe(source('answers.js'))
  .pipe(dest('dist'));
}

function minifyJS(cb) {
  return src('./dist/answers.js')
    .pipe(rename('answers.min.js'))
    .pipe(uglify())
    .pipe(dest('dist'));
}

function compileCSS() {
  return src('./src/ui/sass/**/*.scss')
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
  return watch(['./src/ui/sass/**/*.scss'], {
    ignored: './dist/'
  }, series(compileCSS));
}

exports.default = parallel(
                    series(bundle, minifyJS),
                    series(compileCSS)
                  );

exports.dev = parallel(
                    series(bundle, watchJS),
                    series(compileCSS, watchCSS)
                  );