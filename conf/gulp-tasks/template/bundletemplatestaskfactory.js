const bundleTemplates = require('./bundletemplates');
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
      bundleTemplates(callback, bundleConfig, precompiledFile, outputFile);
  }

  /**
   * Returns the output config for the specified {@link TemplateType}.
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
}

module.exports = BundleTemplatesTaskFactory;
