const { src, dest } = require('gulp');
const del = require('del');

const TranslateHelperVisitor = require('../../i18n/translatehelpervisitor');
const uglify = require('gulp-uglify-es').default;

const precompileTemplates = require('./precompile');
const { bundleTemplatesIIFE, bundleTemplatesUMD } = require('./bundle');

/**
 * TemplateTaskFactory is a class for generating localized template bundle tasks.
 */
class TemplateTaskFactory {
  constructor (translationResolver, locale = 'en') {
    this.locale = locale;
    this.translationResolver = translationResolver;

    const { PRECOMPILED, UMD, IIFE } = this._getFileNames();
    this.filenamePrecompiled = PRECOMPILED;
    this.filenameUMD = UMD;
    this.filenameIIFE = IIFE;

    this._bindTasks();
    this._customizeTaskNames(locale);
  }

  _bindTasks () {
    this.precompileTemplates = this.precompileTemplates.bind(this);
    this.bundleTemplatesUMD = this.bundleTemplatesUMD.bind(this);
    this.bundleTemplatesIIFE = this.bundleTemplatesIIFE.bind(this);
    this.minifyTemplatesIIFE = this.minifyTemplatesIIFE.bind(this);
    this.minifyTemplatesUMD = this.minifyTemplatesUMD.bind(this);
    this.cleanFiles = this.cleanFiles.bind(this);
  }

  /**
   * Customize the gulp task names, e.g. "bound precompileTemplates" becomes "en-precompileTemplates".
   * @param {string} locale
   */
  _customizeTaskNames (locale) {
    Object.defineProperty(this.precompileTemplates, 'name', { value: `${locale}-precompileTemplates` });
    Object.defineProperty(this.bundleTemplatesUMD, 'name', { value: `${locale}-bundleTemplatesUMD` });
    Object.defineProperty(this.bundleTemplatesIIFE, 'name', { value: `${locale}-bundleTemplatesIIFE` });
    Object.defineProperty(this.minifyTemplatesIIFE, 'name', { value: `${locale}-minifyTemplatesIIFE` });
    Object.defineProperty(this.minifyTemplatesUMD, 'name', { value: `${locale}-minifyTemplatesUMD` });
    Object.defineProperty(this.cleanFiles, 'name', { value: `${locale}-cleanFiles` });
  }

  precompileTemplates (callback) {
    if (this.locale === 'en') {
      return precompileTemplates(callback, this.filenamePrecompiled);
    }
    const processAST = ast => new TranslateHelperVisitor(this.translationResolver).accept(ast);
    return precompileTemplates(callback, this.filenamePrecompiled, processAST);
  }

  bundleTemplatesUMD (callback) {
    return bundleTemplatesUMD(callback, this.filenameUMD, this.filenamePrecompiled);
  }

  bundleTemplatesIIFE (callback) {
    return bundleTemplatesIIFE(callback, this.filenameIIFE, this.filenamePrecompiled);
  }

  minifyTemplatesUMD (callback) {
    return src(`./dist/${this.filenameUMD}`)
      .pipe(uglify())
      .pipe(dest('dist'))
      .on('end', callback);
  }

  minifyTemplatesIIFE (callback) {
    return src(`./dist/${this.filenameIIFE}`)
      .pipe(uglify())
      .pipe(dest('dist'))
      .on('end', callback);
  }

  cleanFiles () {
    return del([ `./dist/${this.filenamePrecompiled}` ]);
  }

  _getFileNames () {
    const locale = this.locale;
    if (locale === 'en') {
      return {
        PRECOMPILED: 'answerstemplates.precompiled.min.js',
        UMD: 'answerstemplates.compiled.min.js',
        IIFE: 'answerstemplates-iife.compiled.min.js'
      };
    }
    return {
      PRECOMPILED: `${locale}-answerstemplates.precompiled.min.js`,
      UMD: `${locale}-answerstemplates.compiled.min.js`,
      IIFE: `${locale}-answerstemplates-iife.compiled.min.js`
    };
  }
}

module.exports = TemplateTaskFactory;
