const { series, parallel, src, dest, watch } = require('gulp');

const fs = require('fs');

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
    .pipe(source('answers-modern.js'))
    .pipe(dest('dist'));
}

function legacyBundleIIFE () {
  return legacyBundle({
    format: 'iife',
    name: NAMESPACE,
    sourcemap: true
  },
  'answers.js'
  );
}

function legacyBundleUMD () {
  return legacyBundle({
    format: 'umd',
    name: NAMESPACE,
    export: 'default',
    sourcemap: true
  },
  'answers-umd.js'
  );
}

function legacyBundle (outputConfig, fileName) {
  return rollup({
    input: './src/answers-umd.js',
    output: outputConfig,
    plugins: [
      resolve(),
      insert.prepend(
        fs.readFileSync('./conf/gulp-tasks/polyfill-prefix.js').toString(),
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
              'modules': false
            }
          ]
        ],
        plugins: [
          '@babel/syntax-dynamic-import',
          ['@babel/plugin-transform-runtime', {
            'corejs': 3
          }],
          '@babel/plugin-transform-arrow-functions',
          '@babel/plugin-proposal-object-rest-spread'
        ]
      })
    ]
  })
    .pipe(source(fileName))
    .pipe(dest('dist'));
}

function minifyJS () {
  return src('./dist/answers-modern.js')
    .pipe(rename('answers-modern.min.js'))
    .pipe(uglify())
    .pipe(dest('dist'));
}

function minifyLegacy () {
  return src('./dist/answers.js')
    .pipe(rename('answers.min.js'))
    .pipe(uglify())
    .pipe(dest('dist'));
}

function minifyLegacyUMD () {
  return src('./dist/answers-umd.js')
    .pipe(rename('answers-umd.min.js'))
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
  }, parallel(legacyBundleIIFE));
}

function watchCSS (cb) {
  return watch(['./src/ui/sass/**/*.scss'], {
    ignored: './dist/'
  }, series(compileCSS));
}

exports.default = parallel(
  series(bundle, minifyJS),
  series(legacyBundleIIFE, minifyLegacy),
  series(legacyBundleUMD, minifyLegacyUMD),
  series(compileCSS)
);

exports.dev = parallel(
  series(legacyBundleIIFE, watchJS),
  series(compileCSS, watchCSS)
);
