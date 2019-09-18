const { series, parallel, src, dest, watch } = require('gulp');

const rollup = require('gulp-rollup-lightweight');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const insert = require('rollup-plugin-insert');

const source = require('vinyl-source-stream');
const rename = require('gulp-rename');

const sass = require('gulp-sass');

const postcss = require('gulp-postcss');

const uglify = require('gulp-uglify-es').default;

const NAMESPACE = 'ANSWERS';

function bundle () {
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
        babelrc: false,
        exclude: 'node_modules/**',
        presets: ['@babel/env']
      })
    ]
  })
    .pipe(source('answers.js'))
    .pipe(dest('dist'));
}

function legacyBundle () {
  return rollup({
    input: './src/answers-umd.js',
    output: {
      format: 'iife',
      name: NAMESPACE,
      sourcemap: true
    },
    plugins: [
      resolve(),
      insert.prepend(`
        import '@babel/polyfill/noConflict';
        import 'whatwg-fetch';
        if (!Element.prototype.matches) { // Element.matches polyfill from MDN
          Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                      Element.prototype.webkitMatchesSelector;
        }`,
      {
        include: './src/answers-umd.js'
      }),
      commonjs({
        include: './node_modules/**'
      }),
      babel({
        runtimeHelpers: true,
        babelrc: false,
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/preset-env',
            {
              'loose': true,
              'modules': false,
              'corejs': 3,
              'useBuiltIns': 'entry'
            }
          ]
        ],
        plugins: [
          '@babel/syntax-dynamic-import',
          '@babel/plugin-transform-runtime',
          '@babel/plugin-transform-arrow-functions',
          '@babel/plugin-proposal-object-rest-spread'
        ]
      })
    ]
  })
    .pipe(source('answers-legacy.js'))
    .pipe(dest('dist'));
}

function minifyJS () {
  return src('./dist/answers.js')
    .pipe(rename('answers.min.js'))
    .pipe(uglify())
    .pipe(dest('dist'));
}

function minifyLegacy () {
  return src('./dist/answers-legacy.js')
    .pipe(rename('answers-legacy.min.js'))
    .pipe(uglify())
    .pipe(dest('dist'));
}

function compileCSS () {
  return src('./src/ui/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss())
    .pipe(dest('./dist/'));
}

function watchJS (cb) {
  return watch(['./src/**/*.js'], {
    ignored: './dist/'
  }, series(bundle));
}

function watchCSS (cb) {
  return watch(['./src/ui/sass/**/*.scss'], {
    ignored: './dist/'
  }, series(compileCSS));
}

exports.default = parallel(
  series(bundle, minifyJS),
  series(legacyBundle, minifyLegacy),
  series(compileCSS)
);

exports.dev = parallel(
  series(bundle, watchJS),
  series(compileCSS, watchCSS)
);
