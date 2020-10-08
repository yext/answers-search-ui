const { exec } = require("child_process");
const { ALL_LANGUAGES } = require("../constants");
const path = require("path");

const translationValidationPromises = ALL_LANGUAGES
  .filter(language => language !== 'en')
  .map(language => validateTranslationsForLanguage(language));

Promise.allSettled(translationValidationPromises)
  .then((results) => {
    results.filter(result => result.status === 'rejected')
      .map(result => {
        const missingTranslationsMessage = result.reason;
        console.log(missingTranslationsMessage);
      });

    results.some(result => result.status === 'rejected')
      ? process.exitCode = 1
      : console.log("All translation files are valid!");
  });

/**
 * Validate a translation .po file by executing the utility 'msgcmp'
 * 
 * @param {string} language
 * @returns {Promise} Resolves if all translations are present. Rejects if translations
 *                    are missing
 */
function validateTranslationsForLanguage(language) {
  const pathToTranslations = path.join(__dirname, `../translations/${language}.po`);
  const pathToTranslationsTemplate = path.join(__dirname, '../translations/messages.pot');

  return new Promise((resolve, reject) => {
    exec(`msgcmp -N ${pathToTranslations} ${pathToTranslationsTemplate}`, 
    (error, stdout, stderr) => {
      if (stderr) {
        reject(`Error: Missing translations for ${language}.po\n${stderr.toString()}`);
      }
      resolve();
    });
  });
}