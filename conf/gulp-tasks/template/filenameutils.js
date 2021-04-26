const TemplateType = require('./templatetype');

const fileNames = {
  [TemplateType.UMD]: 'answerstemplates.compiled.min.js',
  [TemplateType.IIFE]: 'answerstemplates-iife.compiled.min.js',
  [TemplateType.SEARCH_BAR_UMD]: 'answers-search-bar-templates.compiled.min.js'
};

/**
 * Prefixes the given fileName with the locale.
 *
 * @param {string} fileName
 * @param {string} locale
 * @returns {string}
 */
function addLocalePrefix (fileName, locale = 'en') {
  const prefix = (locale === 'en') ? '' : `${locale}-`;
  return prefix + fileName;
}
exports.addLocalePrefix = addLocalePrefix;

/**
 * Gets the output fileName for the specified templateType and locale.
 *
 * @param {TemplateType} templateType
 * @param {string} locale
 * @returns {string}
 */
exports.getFileName = function (templateType, locale) {
  const fileName = fileNames[templateType];
  return addLocalePrefix(fileName, locale);
};

/**
 * Gets the precompiled templates fileName for the given locale.
 *
 * @param {string} locale
 * @returns {string}
 */
exports.getPrecompiledFileName = function (locale, isSearchBarOnly) {
  const precompiledFileName = isSearchBarOnly
    ? 'answers-search-bar-templates.precompiled.min.js'
    : 'answerstemplates.precompiled.min.js';
  return addLocalePrefix(precompiledFileName, locale);
};
