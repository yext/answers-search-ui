#!/usr/bin/env node

const fs = require('fs');
const { ALL_LANGUAGES } = require('../i18n/constants');

/**
 * return entry points to js and template bundles for the provided language
 *
 * @param {string} lang
 * @returns {Object}
 */
function getLanguageBundleEntries (lang) {
  const bundleEntries = {
    [`./${lang}`]: `./dist/${lang}-answers-umd.js`,
    [`./${lang}/modern`]: `./dist/${lang}-answers-modern.js`,
    [`./${lang}/modern.min`]: `./dist/${lang}-answers-modern.min.js`,
    [`./${lang}/template`]: `./dist/${lang}-answerstemplates.compiled.min.js`
  };
  return bundleEntries;
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
  const cssEntries = {
    './css': './dist/answers.css',
    './rtl-css': './dist/answers.rtl.css'
  };
  const defaultBundleEntries = {
    '.': './dist/answers-umd.js',
    './modern': './dist/answers-modern.js',
    './modern.min': './dist/answers-modern.min.js',
    './template': './dist/answerstemplates.compiled.min.js'
  };
  let exports = { ...cssEntries, ...defaultBundleEntries };

  ALL_LANGUAGES.forEach(lang => {
    if (lang !== 'en') {
      exports = { ...exports, ...getLanguageBundleEntries(lang) };
    }
  });
  Object.assign(packageData, { exports: exports });
  fs.writeFileSync(inputFile, JSON.stringify(packageData, null, 2));
}

appendExportsField(process.argv[2]);
