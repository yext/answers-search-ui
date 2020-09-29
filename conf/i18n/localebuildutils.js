const { LANGUAGES_TO_LOCALES, ALL_LANGUAGES } = require('./constants');
const fs = require('fs');

/**
 * Iterate through SDK language build files and create copies for each locale defined in
 * LANGUAGES_TO_LOCALES.
 *
 * For example, if assetNames includes 'answers.js' and LANGUAGES_TO_LOCALES includes
 * 'fr_CA' and 'fr_FR' for the language 'fr', the file 'fr-answers.js' will be copied to
 * 'fr_CA-answers.js' and 'fr_FR-answers.js'. Builds for each language must be created
 * before this function is run.
 *
 * @param {Array<string>} assetNames File names used for iteration and file generation
 */
function copyAssetsForLocales (assetNames) {
  ALL_LANGUAGES.forEach((language) => {
    assetNames.forEach((assetName) => {
      const languageBundleName = language !== 'en'
        ? `${language}-${assetName}`
        : `${assetName}`;
      LANGUAGES_TO_LOCALES[language].forEach((locale) => {
        const localeBundleName = `${locale}-${assetName}`;
        fs.symlinkSync(`./${languageBundleName}`,
          `./dist/${localeBundleName}`);
      });
    });
  });
}

exports.copyAssetsForLocales = copyAssetsForLocales;
