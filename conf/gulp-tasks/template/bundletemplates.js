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
  * @param {Function} callback
  * @param {Object} bundleConfig
  * @param {string} precompiledFile
  * @param {string} outputFile
  * @returns {stream.Readable}
  */
function bundleTemplates (callback, bundleConfig, precompiledFile, outputFile) {
  return rollup({
    input: `./dist/${precompiledFile}`,
    output: bundleConfig,
    plugins: [
      resolve(),
      insert.prepend(
        fs.readFileSync('./conf/gulp-tasks/templates-polyfill-prefix.js').toString(),
        {
          include: `./dist/${precompiledFile}`
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
    .pipe(source(outputFile))
    .pipe(dest('dist'))
    .on('end', callback);
}

module.exports = bundleTemplates;
