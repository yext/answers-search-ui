const { dest } = require('gulp');
const rollup = require('gulp-rollup-lightweight');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const builtins = require('rollup-plugin-node-builtins');
const source = require('vinyl-source-stream');

const TemplateType = require('./templatetype');
const {
  addLocalePrefix,
  getFileName,
  getPrecompiledFileName
} = require('./filenameutils');

/**
 * BundleTemplatesTaskFactory is a factory for creating SDK template bundling tasks.
 */
class BundleTemplatesTaskFactory {
  constructor (locale) {
    this._locale = locale;
  }

  /**
   * Creates a template bundling function for the given {@link TemplateType}.
   * Also customizes the name of the task (for display in the command line).
   *
   * @param {TemplateType} templateType
   * @returns {Function}
   */
  create (templateType) {
    const bundleFunction = this._createBundleFunction(templateType);
    Object.defineProperty(bundleFunction, 'name', {
      value: this._getTaskName(templateType)
    });
    return bundleFunction;
  }

  /**
   * @param {TemplateType} templateType
   * @returns {Function}
   */
  _createBundleFunction (templateType) {
    const bundleConfig = this._getOutputConfig(templateType);
    const outputFile = getFileName(templateType, this._locale);
    const precompiledFile = getPrecompiledFileName(this._locale);
    return callback =>
      this._bundleTemplates(callback, bundleConfig, precompiledFile, outputFile);
  }

  /**
   * Returns the output config for the specified {@link TemplateType}.
   *
   * @param {TemplateType} templateType
   * @returns {Object}
   */
  _getOutputConfig (templateType) {
    const typeToConfig = {
      [TemplateType.UMD]: {
        format: 'umd',
        name: 'TemplateBundle',
        exports: 'named'
      },
      [TemplateType.IIFE]: {
        format: 'iife',
        name: 'TemplateBundle'
      }
    };
    return typeToConfig[templateType];
  }

  /**
   * Returns the customized task name for the given template type.
   *
   * @param {TemplateType} templateType
   * @returns {string}
   */
  _getTaskName (templateType) {
    const typeToTaskName = {
      [TemplateType.UMD]: 'bundleTemplatesUMD',
      [TemplateType.IIFE]: 'bundleTemplatesIIFE'
    };
    const taskName = typeToTaskName[templateType];
    return addLocalePrefix(taskName, this._locale);
  }

  /**
   * @param {Function} callback called when the task is finished
   * @param {Object} bundleConfig
   * @param {string} precompiledFile
   * @param {string} outputFile
   * @returns {stream.Readable}
   */
  _bundleTemplates (callback, bundleConfig, precompiledFile, outputFile) {
    return rollup({
      input: `./dist/${precompiledFile}`,
      output: bundleConfig,
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
      .pipe(source(outputFile))
      .pipe(dest('dist'))
      .on('end', callback);
  }
}

module.exports = BundleTemplatesTaskFactory;
