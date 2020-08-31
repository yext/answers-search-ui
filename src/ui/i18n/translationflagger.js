/**
 * TranslationFlagger is a class used to flag Translation calls. The usages of this class
 * are handled and removed during SDK bundling.
 */
export default class TranslationFlagger {
  /**
   * Any calls of this method will be removed during a preprocessing step during SDK
   * bundling.
   *
   * To support cases where someone may want to bundle without using our
   * bundling tasks, this function attempts to return the same-language interpolated
   * and pluralized value based on the information given.
   *
   * @param {string} phrase
   * @param {string} pluralPhrase
   * @param {string | number} count
   * @param {string} context
   * @param {Object} interpolationValues
   * @returns {string}
   */
  static flag ({ phrase, pluralPhrase, count, context, interpolationValues }) {
    const isPlural = count && count > 1 && pluralPhrase;
    const declensionOfPhrase = isPlural ? pluralPhrase : phrase;
    if (!interpolationValues) {
      return declensionOfPhrase;
    }

    let interpolatedPhrase = declensionOfPhrase;
    Object.entries(interpolationValues).forEach((key, value) => {
      interpolatedPhrase = declensionOfPhrase.replace(`[[${key}]]`, value);
    });
    return interpolatedPhrase;
  }
}
