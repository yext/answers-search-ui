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
   * @param {string} pluralForm
   * @param {string | number} count
   * @param {string} context
   * @param {Object} interpolationValues
   * @returns {string}
   */
  static flag ({ phrase, pluralForm, count, context, interpolationValues }) {
    const isPlural = count && count > 1 && pluralForm;
    const declensionOfPhrase = isPlural ? pluralForm : phrase;
    if (!interpolationValues) {
      return declensionOfPhrase;
    }

    let interpolatedPhrase = declensionOfPhrase;
    for (const [key, value] of Object.entries(interpolationValues)) {
      interpolatedPhrase = interpolatedPhrase.replace(`[[${key}]]`, value);
    }
    return interpolatedPhrase;
  }
}
