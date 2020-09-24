/**
 * Generates a runtime call to the translation processor
 *
 * @param {string|Object} translationResult
 * @param {Object} interpValues
 * @param {number} count
 * @returns {string}
 */
function generateProcessTranslationJsCall (translationResult, interpValues, count) {
  let parsedParams = JSON.stringify(interpValues);
  parsedParams = parsedParams.replace(/['"]/g, '');
  const needsPluralization = (typeof translationResult !== 'string');

  if (needsPluralization) {
    const pluralForms = formatPluralForms(translationResult);
    return `ANSWERS.processTranslation(${pluralForms}, ${parsedParams}, ${count})`;
  }

  const escapedTranslatorResult = escapeSingleQuotes(translationResult);
  return `ANSWERS.processTranslation('${escapedTranslatorResult}', ${parsedParams})`;
}

exports.generateProcessTranslationJsCall = generateProcessTranslationJsCall;

/**
 * Constructs a string representation of a translatorResult Object. This output is
 * similar to JSON.stringiy(), however keys are not surrounded by quotes, and values
 * are surrounded by single quotes.
 *
 * @param {Object<number,string>} translatorResult
 * @returns {string}
 */
function formatPluralForms (translatorResult) {
  const pluralFormPairs = Object.entries(translatorResult)
    .reduce((params, [pluralFormIndex, pluralForm], index, array) => {
      const escapedPluralForm = escapeSingleQuotes(pluralForm);
      const accumulatedParams = params + `${pluralFormIndex}:'${escapedPluralForm}'`;
      const isLastParam = (index === array.length - 1);

      return isLastParam
        ? accumulatedParams
        : accumulatedParams + ',';
    }, '');

  return '{' + pluralFormPairs + '}';
}

/**
 * Escape single quotes in the string
 * @param {string} str
 *
 * @returns {string}
 */
function escapeSingleQuotes (str) {
  const regex = new RegExp('\'', 'g');
  return str.replace(regex, '\\\'');
}
