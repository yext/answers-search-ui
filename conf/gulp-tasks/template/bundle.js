const { dest } = require('gulp');

const fs = require('fs');
const insert = require('rollup-plugin-insert');

const rollup = require('gulp-rollup-lightweight');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const builtins = require('rollup-plugin-node-builtins');

const source = require('vinyl-source-stream');

exports.bundleTemplatesUMD = function (done, filenameUMD, filenamePrecompiled) {
  return bundleTemplates(
    done,
    {
      format: 'umd',
      name: 'TemplateBundle',
      exports: 'named'
    },
    filenameUMD,
    filenamePrecompiled
  );
}
exports.bundleTemplatesIIFE = function (done, filenameIIFE, filenamePrecompiled) {
  return bundleTemplates(
    done,
    {
      format: 'iife',
      name: 'TemplateBundle'
    },
    filenameIIFE,
    filenamePrecompiled
  );
}
function bundleTemplates (done, outputConfig, fileName, filenamePrecompiled) {
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
    .on('end', done);
}