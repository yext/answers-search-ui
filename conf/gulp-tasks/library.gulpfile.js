const fs = require('fs');

const { series, parallel, src, dest, watch } = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const uglify = require('gulp-uglify-es').default;
const rollup = require('gulp-rollup-lightweight');

const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const insert = require('rollup-plugin-insert');

const source = require('vinyl-source-stream');

const licenseCrawler = require('npm-license-crawler');

const fetch = require('node-fetch');

const through = require('through2');

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
    .pipe(source('answers.js'))
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

function compileCSS () {
  return src('./src/ui/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss())
    .pipe(dest('./dist/'));
}

function watchJS () {
  return watch(['./src/**/*.js'], {
    ignored: './dist/'
  }, parallel(bundle, legacyBundle));
}

function watchCSS () {
  return watch(['./src/ui/sass/**/*.scss'], {
    ignored: './dist/'
  }, series(compileCSS));
}

function createDistributionLicense () {
  return src('./LICENSE')
    .pipe(appendDependencyLicenses())
    .pipe(dest('./dist'));
}

function appendDependencyLicenses () {
  const licenseCrawlerOptions = {
    start: ['./'],
    exclude: ['./sample-app'],
    production: true,
    onlyDirectDependencies: true,
    noColor: true,
    omitVersion: true
  };

  return through.obj((file, _, cb) => {
    licenseCrawler.dumpLicenses(licenseCrawlerOptions, async (err, deps) => {
      if (err) {
        cb(err, null);
      }

      let allDepLicenses = await Object.keys(deps)
        .map(depName => ({
          name: depName,
          url: deps[depName].licenseUrl
        }))
        .map(async (license) => {
          const licenseTextRes = await fetch(license.url);
          const text = await licenseTextRes.text();
          if (!licenseTextRes.ok) {
            cb(text, file);
          }

          return {
            ...license,
            text: text.trim()
          };
        })
        .reduce(async (allLicensesPromise, licensePromise) => {
          const allLicenses = await allLicensesPromise;
          const license = await licensePromise;
          return [allLicenses, `${license.name} License`, license.text].join('\n\n');
        }, Promise.resolve(''))
        .catch(err => cb(err, file));

      file.contents = Buffer.concat([file.contents, Buffer.from(allDepLicenses)]);
      cb(null, file);
    });
  });
}

exports.default = parallel(
  series(createDistributionLicense),
  series(bundle, minifyJS),
  series(legacyBundle, minifyLegacy),
  series(compileCSS)
);

exports.dev = parallel(
  series(bundle, legacyBundle, watchJS),
  series(compileCSS, watchCSS)
);
