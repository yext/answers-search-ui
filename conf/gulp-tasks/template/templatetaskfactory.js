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
    if (locale === 'en') {
      this.filenamePrecompiled = 'answerstemplates.precompiled.min.js';
      this.filenameUMD = 'answerstemplates.compiled.min.js';
      this.filenameIIFE = 'answerstemplates-iife.compiled.min.js';
    } else {
      this.filenamePrecompiled = `${locale}-answerstemplates.precompiled.min.js`;
      this.filenameUMD = `${locale}-answerstemplates.compiled.min.js`;
      this.filenameIIFE = `${locale}-answerstemplates-iife.compiled.min.js`;
    }
    this.precompileTemplates = this.precompileTemplates.bind(this);
    Object.defineProperty(this.precompileTemplates, 'name', { value: `${locale}-precompileTemplates` });

    this.bundleTemplatesUMD = this.bundleTemplatesUMD.bind(this);
    Object.defineProperty(this.bundleTemplatesUMD, 'name', { value: `${locale}-bundleTemplatesUMD` });

    this.bundleTemplatesIIFE = this.bundleTemplatesIIFE.bind(this);
    Object.defineProperty(this.bundleTemplatesIIFE, 'name', { value: `${locale}-bundleTemplatesIIFE` });

    this.minifyTemplatesIIFE = this.minifyTemplatesIIFE.bind(this);
    Object.defineProperty(this.minifyTemplatesIIFE, 'name', { value: `${locale}-minifyTemplatesIIFE` });

    this.minifyTemplatesUMD = this.minifyTemplatesUMD.bind(this);
    Object.defineProperty(this.minifyTemplatesUMD, 'name', { value: `${locale}-minifyTemplatesUMD` });

    this.cleanFiles = this.cleanFiles.bind(this);
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
}

module.exports = TemplateTaskFactory;
