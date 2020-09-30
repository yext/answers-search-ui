const { LANGUAGES_TO_LOCALES, ALL_LANGUAGES } = require('./constants');
const fs = require('fs');

/**
 * Iterate through SDK language build files and create symlinks for each locale defined
 * in LANGUAGES_TO_LOCALES. If the symlink already exists, delete it before creating a
 * new one.
 *
 * For example, if assetNames includes 'answers.js' and LANGUAGES_TO_LOCALES includes
 * 'fr_CA' and 'fr_FR' for the language 'fr', symlinks named 'fr_CA-answers.js' and
 * 'fr_FR-answers.js' will be created which point to 'fr-answers.js'. Builds for each
 * language must be created before this function is run.
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
        if (fs.existsSync(`./dist/${localeBundleName}`)) {
          fs.unlinkSync(`./dist/${localeBundleName}`);
        }
        fs.symlinkSync(`./${languageBundleName}`, `./dist/${localeBundleName}`);
      });
    });
  });
}

exports.copyAssetsForLocales = copyAssetsForLocales;
