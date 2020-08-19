export default class Translator {
  /**
   * Performs a translation which supports
   * interpolation, pluralization, or both
   * @param {string} translations The translations, or a stringified JSON of possible translations
   * @param {Object} interpolationParams Params to use during interpolation
   * @param {number} count The count associated with the pluralization
   */
  static translate (translations, interpolationParams, count) {
    const stringToInterpolate = this._selectPluralization(translations, count);
    return this._interpolate(stringToInterpolate, interpolationParams);
  }

  static _selectPluralization (translations, count) {
    try {
      translations = JSON.parse(translations);
      return count > 1 ? translations.plural : translations['1'];
    } catch (e) {
      return translations;
    }
  }

  static _interpolate (stringToInterpolate, interpolationParams) {
    const interpolationRegex = new RegExp(/\{\{([a-zA-Z0-9]+)\}\}/, 'g');

    return stringToInterpolate.replace(interpolationRegex, (match, interpolationKey) => {
      return interpolationParams[interpolationKey];
    });
  }
}
