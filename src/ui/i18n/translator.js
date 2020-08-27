/**
 * A placeholder for Translation calls handled during preprocessing.
 *
 * Any calls of this method will be removed during a preprocessing step during SDK
 * bundling. To support cases where someone may want to bundle without using our
 * bundling tasks, this functions simply returns the phrase passed in.
 *
 * @param {string} phrase
 * @param {string} pluralPhrase
 * @param {string | number} count
 * @param {string} context
 * @param {Object} interpolationValues
 * @returns {string}
 */
export function replaceWithTranslation ({ phrase, pluralPhrase, count, context, interpolationValues }) {
  return phrase;
};