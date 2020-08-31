const { src, dest } = require('gulp');
const uglify = require('gulp-uglify-es').default;

const TemplateType = require('./templatetype');
const { addLocalePrefix, getFileName } = require('./filenameutils');

/**
 * MinifyTemplatesTaskFactory is a factory class for creating SDK template
 * minification tasks.
 */
class MinifyTemplatesTaskFactory {
  constructor (locale) {
    this._locale = locale;
  }

  /**
   * Creates a template minify task for the specified TemplateType,
   * and customizes the task's name.
   *
   * @param {TemplateType} templateType
   * @returns {Function}
   */
  create (templateType) {
    const minifyFunction = this._createMinifyFunction(templateType);
    Object.defineProperty(minifyFunction, 'name', {
      value: this._getTaskName(templateType)
    });
    return minifyFunction;
  }

  /**
   * Returns the minify task for the specified TemplateType.
   *
   * @param {TemplateType} templateType
   * @returns {Function}
   */
  _createMinifyFunction (templateType) {
    const fileName = getFileName(templateType, this._locale);
    return callback => this._minify(callback, fileName);
  }

  /**
   * Minifies the designated js file.
   *
   * @param {Function} callback
   * @param {string} filename
   * @returns {stream.Readable}
   */
  _minify (callback, filename) {
    return src(`./dist/${filename}`)
      .pipe(uglify())
      .pipe(dest('dist'))
      .on('end', callback);
  }

  /**
   * Returns the customized task name for the templateType.
   *
   * @param {TemplateType} templateType
   * @returns {string}
   */
  _getTaskName (templateType) {
    const typeToTaskName = {
      [TemplateType.UMD]: 'minifyTemplatesUMD',
      [TemplateType.IIFE]: 'minifyTemplatesIIFE'
    };
    const taskName = typeToTaskName[templateType];
    return addLocalePrefix(taskName, this._locale);
  }
}

module.exports = MinifyTemplatesTaskFactory;
