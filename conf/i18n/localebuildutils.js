const { ALL_LOCALES } = require('./constants');
const { src, dest } = require('gulp');
const rename = require('gulp-rename');

/**
 * Iterate through SDK language build files and create copies for each locale defined in
 * ALL_LOCALES.
 *
 * For example, if baseFileNames includes 'answers.js' and ALL_LOCALES includes 'fr_CA'
 * and 'fr_FR' for the language 'fr', the file 'fr-answers.js' will be copied to
 * 'fr_CA-answers.js' and 'fr_FR-answers.js'. Builds for each language must be created
 * before this function is run.
 *
 * @param {Array<string>} baseFileNames File names used for iteration and file generation
 */
function createLocaleFilesPerLanguage (baseFileNames) {
  Object.keys(ALL_LOCALES).forEach((language) => {
    baseFileNames.forEach((baseFileName) => {
      const languageBundleName = language !== 'en'
        ? `${language}-${baseFileName}`
        : `${baseFileName}`;
      ALL_LOCALES[language].forEach((locale) => {
        const localeBundleName = `${locale}-${baseFileName}`;
        src(`./dist/${languageBundleName}`)
          .pipe(rename(localeBundleName))
          .pipe(dest('./dist/'));
      });
    });
  });
}

exports.createLocaleFilesPerLanguage = createLocaleFilesPerLanguage;
