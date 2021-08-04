#!/usr/bin/env node

const fs = require('fs');
const { ALL_LANGUAGES } = require('../i18n/constants');

/**
 * Add entry points to css bundles to the export field
 *
 * @param {Object} exportJSON
 * @param {string} lang
 */
function addCSSBundleEntries (exportJSON) {
  const cssEntries = {
    './css': './dist/answers.css',
    './rtl-css': './dist/answers.rtl.css'
  };
  Object.assign(exportJSON.exports, cssEntries);
}

/**
 * Add entry points to js and template bundles to the export field for default language en
 *
 * @param {Object} exportJSON
 * @param {string} lang
 */
function addDefaultLanguageBundleEntries (exportJSON) {
  const bundleEntries = {
    '.': './dist/answers-umd.js',
    './modern': './dist/answers-modern.js',
    './modern.min': './dist/answers-modern.min.js',
    './template': './dist/answerstemplates.compiled.min.js'
  };
  Object.assign(exportJSON.exports, bundleEntries);
}

/**
 * Add entry points to js and template bundles to the export field for the provided language
 *
 * @param {Object} exportJSON
 * @param {string} lang
 */
function addLanguageBundleEntries (exportJSON, lang) {
  const bundleEntries = {
    [`./${lang}`]: `./dist/${lang}-answers-umd.js`,
    [`./${lang}/modern`]: `./dist/${lang}-answers-modern.js`,
    [`./${lang}/modern.min`]: `./dist/${lang}-answers-modern.min.js`,
    [`./${lang}/template`]: `./dist/${lang}-answerstemplates.compiled.min.js`
  };
  Object.assign(exportJSON.exports, bundleEntries);
}

/**
 * Append the exports field in the package.json. This defines a public interface for the package,
 * mapping entry points (path from import requests) to bundles. Any other paths not specified
 * in exports field will lead to a ModuleNotFound Error or ERR_PACKAGE_PATH_NOT_EXPORTED Error.
 *
 * @param {string} inputFile name of file to append exports field to
 */
function appendExportsField (inputFile) {
  const packageData = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
  const exportJSON = { exports: {} };
  addCSSBundleEntries(exportJSON);
  ALL_LANGUAGES.forEach(lang => {
    lang === 'en'
      ? addDefaultLanguageBundleEntries(exportJSON)
      : addLanguageBundleEntries(exportJSON, lang);
  });
  Object.assign(packageData, exportJSON);
  fs.writeFileSync(inputFile, JSON.stringify(packageData, null, 2));
}

appendExportsField(process.argv[2]);
