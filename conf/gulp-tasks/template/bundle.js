const { dest } = require('gulp');

const fs = require('fs');
const insert = require('rollup-plugin-insert');

const rollup = require('gulp-rollup-lightweight');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const builtins = require('rollup-plugin-node-builtins');

const source = require('vinyl-source-stream');

/**
 * @param {Function} callback called when the stream ends
 * @param {string} filenameUMD the UMD output filename
 * @param {string} filenamePrecompiled the precompiled template file
 * @returns {stream.Readable}
 */
exports.bundleTemplatesUMD = function (callback, filenameUMD, filenamePrecompiled) {
  return bundleTemplates(
    callback,
    {
      format: 'umd',
      name: 'TemplateBundle',
      exports: 'named'
    },
    filenameUMD,
    filenamePrecompiled
  );
}

/**
 * @param {Function} callback called when the stream ends
 * @param {string} filenameIIFE the IIFE output filename
 * @param {string} filenamePrecompiled the precompiled template file
 */
exports.bundleTemplatesIIFE = function (callback, filenameIIFE, filenamePrecompiled) {
  return bundleTemplates(
    callback,
    {
      format: 'iife',
      name: 'TemplateBundle'
    },
    filenameIIFE,
    filenamePrecompiled
  );
}

/**
 * @param {Function} callback called when the stream ends
 * @param {Object} outputConfig
 * @param {string} fileName
 * @param {string} filenamePrecompiled
 */
function bundleTemplates (callback, outputConfig, fileName, filenamePrecompiled) {
  return rollup({
    input: `./dist/${filenamePrecompiled}`,
    output: outputConfig,
    plugins: [
      resolve(),
      insert.prepend(
        fs.readFileSync('./conf/gulp-tasks/templates-polyfill-prefix.js').toString(),
        {
          include: `./dist/${filenamePrecompiled}`
        }),
      builtins(),
      commonjs({
        include: './node_modules/**'
      }),
      babel({
        presets: ['@babel/env']
      })
    ]
  })
    .pipe(source(fileName))
    .pipe(dest('dist'))
    .on('end', callback);
}