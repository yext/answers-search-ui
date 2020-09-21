import { getNPlurals, getPluralFunc, hasLang } from 'plural-forms/dist/minimal';

export default class TranslationProcessor {
  /**
   * Processes a translation which includes performing interpolation, pluralization, or
   * both
   * @param {string | Object} translations The translation, or an object containing
   * translated plural forms
   * @param {Object} interpolationParams Params to use during interpolation
   * @param {number} count The count associated with the pluralization
   * @returns {string} The translation with any interpolation or pluralization applied
   */
  static process (translations, interpolationParams, count) {
    const stringToInterpolate = (typeof translations === 'string')
      ? translations
      : this._selectPluralForm(translations, count);

    return this._interpolate(stringToInterpolate, interpolationParams);
  }

  /**
   * Returns the correct plural form given a translations object and count.
   * @param {Object} translations
   * @param {number} count
   * @returns {string}
   */
  static _selectPluralForm (translations, count) {
    let locale = translations.locale;
    if (!hasLang(locale)) {
      locale = 'en';
    }
    const oneToNArray = this._generateArrayOneToN(locale);
    const pluralFormIndex = getPluralFunc(locale)(count, oneToNArray);
    return translations[pluralFormIndex];
  }

  /**
   * @param {string} locale
   * @returns {Array} an array of the form [0, 1, 2, ..., nPluralForms]
   */
  static _generateArrayOneToN (locale) {
    const numberOfPluralForms = getNPlurals(locale);
    return Array.from((new Array(numberOfPluralForms)).keys());
  }

  static _interpolate (stringToInterpolate, interpolationParams) {
    const interpolationRegex = new RegExp(/\[\[([a-zA-Z0-9]+)\]\]/, 'g');

    return stringToInterpolate.replace(interpolationRegex, (match, interpolationKey) => {
      return interpolationParams[interpolationKey];
    });
  }
}
