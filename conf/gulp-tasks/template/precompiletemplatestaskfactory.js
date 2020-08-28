
const TranslateHelperVisitor = require('../../i18n/translatehelpervisitor');

const precompileTemplates = require('./precompile');
const { addLocalePrefix, getPrecompiledFileName } = require('./filenameutils');

/**
 * PrecompileTemplatesTaskFactory is a class for generating localized template bundle tasks.
 */
class PrecompileTemplatesTaskFactory {
  constructor (translationResolver, locale) {
    this._locale = locale;
    this._translationResolver = translationResolver;
  }

  /**
   * Creates the precompileTemplates task for this factory's locale,
   * and customizes its name.
   * @returns {Function}
   */
  create () {
    const precompileTask = callback => this._precompileTemplates(callback);
    const taskName = addLocalePrefix('precompileTemplates', this._locale);
    Object.defineProperty(precompileTask, 'name', {
      value: taskName
    });
    return precompileTask;
  }

  /**
   * The precompileTemplates task for this factory's locale.
   * @param {Function} callback
   * @returns {stream.Readable}
   */
  _precompileTemplates (callback) {
    const precompiledFileName = getPrecompiledFileName(this._locale);
    if (this._locale === 'en') {
      return precompileTemplates(callback, precompiledFileName);
    }
    const processAST = ast => new TranslateHelperVisitor(this._translationResolver).accept(ast);
    return precompileTemplates(callback, precompiledFileName, processAST);
  }
}

module.exports = PrecompileTemplatesTaskFactory;
