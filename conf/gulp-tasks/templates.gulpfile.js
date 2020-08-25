const { parallel, series, src, dest, watch } = require('gulp');

const del = require('del');

const rollup = require('gulp-rollup-lightweight');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const builtins = require('rollup-plugin-node-builtins');

const uglify = require('gulp-uglify-es').default;

const handlebars = require('gulp-handlebars');
const concat = require('gulp-concat');
const declare = require('gulp-declare');
const wrap = require('gulp-wrap');

const source = require('vinyl-source-stream');

const filenamePrecompiled = 'answerstemplates.precompiled.min.js';
const filenameUMD = 'answerstemplates.compiled.min.js';
const filenameIIFE = 'answerstemplates-iife.compiled.min.js';

function precompileTemplates () {
  return src('./src/ui/templates/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap(`Handlebars.template(<%= contents %>);
        Handlebars.registerPartial(<%= processPartialName(file.relative) %>, <%= customContext(file.relative) %> )`, {}, {
      imports: {
        processPartialName: function (fileName, a, b, c) {
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
        customContext: function (fileName) {
          let name = fileName.split('.')[0];
          let keys = name.split('.');
          let context = 'context';
          for (let i = 0; i < keys.length; i++) {
            context = context += '["' + keys[i] + '"]';
          }
          return context;
        }
      }
    }))
    .pipe(declare({
      root: 'context',
      noRedeclare: true,
      processName: function (filePath) {
        let path = filePath.replace('src/ui/templates', '');
        return declare.processNameByPath(path, '').replace('.', '/');
      }
    }))
    .pipe(concat(filenamePrecompiled))
    .pipe(wrap({ src: './conf/templates/handlebarswrapper.txt' }))
    .pipe(dest('dist'));
}

function bundleTemplates (outputConfig, fileName) {
  return rollup({
    input: `./dist/${filenamePrecompiled}`,
    output: outputConfig,
    plugins: [
      resolve(),
      builtins(),
      commonjs({
        include: './node_modules/**'
      }),
      babel({
        runtimeHelpers: true,
        babelrc: false,
        exclude: /node_modules\/(@babel|core-js).*/,
        presets: [
          '@babel/preset-env'
        ],
        plugins: [
          '@babel/syntax-dynamic-import',
          ['@babel/plugin-transform-runtime', {
            'corejs': 3
          }],
          '@babel/plugin-transform-arrow-functions',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-transform-object-assign'
        ]
      })
    ]
  })
    .pipe(source(fileName))
    .pipe(dest('dist'));
}

function bundleTemplatesUMD () {
  return bundleTemplates(
    {
      format: 'umd',
      name: 'TemplateBundle',
      exports: 'named'
    },
    filenameUMD
  );
}

function bundleTemplatesIIFE () {
  return bundleTemplates(
    {
      format: 'iife',
      name: 'TemplateBundle'
    },
    filenameIIFE
  );
}

function minifyTemplatesUMD (cb) {
  return src(`./dist/${filenameUMD}`)
    .pipe(uglify())
    .pipe(dest('dist'));
}

function minifyTemplatesIIFE (cb) {
  return src(`./dist/${filenameIIFE}`)
    .pipe(uglify())
    .pipe(dest('dist'));
}

function cleanFiles () {
  return del([
    `./dist/${filenamePrecompiled}`
  ]);
}

function watchTemplates (cb) {
  return watch(['./src/ui/templates/**/*.hbs'], {
    ignored: './dist/'
  }, series(precompileTemplates, bundleTemplatesUMD, cleanFiles));
}

exports.default = series(
  precompileTemplates,
  parallel(
    series(bundleTemplatesIIFE, minifyTemplatesIIFE),
    series(bundleTemplatesUMD, minifyTemplatesUMD)
  ),
  cleanFiles
);
exports.dev = series(precompileTemplates, bundleTemplatesUMD, cleanFiles, watchTemplates);
