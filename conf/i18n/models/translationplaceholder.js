/**
 * A data model representing a phrase needing translation in the SDK's
 * source code. The model can be used for translations requiring added context
 * or pluralization as well.
 */
class TranslationPlaceholder {
  constructor ({ phrase, pluralForm, context, count, interpolationValues, lineNumber, filepath }) {
    this._phrase = phrase;
    this._pluralForm = pluralForm;
    this._context = context;
    this._count = count;
    this._interpolationValues = interpolationValues;
    this._lineNumber = lineNumber;
    this._filepath = filepath;
  }

  /**
   * The candidate phrase for translation.
   *
   * @returns {string}
   */
  getPhrase () {
    return this._phrase;
  }

  /**
   * The untranslated, plural form of the candidate phrase. This is only present
   * if pluralization is required.
   *
   * @returns {string}
   */
  getPluralForm () {
    return this._pluralForm;
  }

  /**
   * Any added context needed in translating the phrase.
   *
   * @returns {string}
   */
  getContext () {
    return this._context;
  }

  /**
   * The run-time parameter, wrapped in a string, for determing count in the case
   * of pluralization. This quantity must be wrapped in a string to prevent evaluation
   * before run-time.
   *
   * @returns {string}
   */
  getCount () {
    return this._count;
  }

  /**
   * An object containing any interpolation parameters, and their values, needed
   * in the translation. Note that all values are wrapped in a string. This is
   * to prevent them from being evaluated prior to run-time.
   *
   * @returns {Object<string, string>}
   */
  getInterpolationValues () {
    return this._interpolationValues;
  }

  /**
   * The line number of this translation placeholder in its source file.
   *
   * @returns {number}
   */
  getLineNumber () {
    return this._lineNumber;
  }

  /**
   * The filepath of the original source file.
   *
   * @returns {number}
   */
  getFilePath () {
    return this._filepath;
  }

  /**
   * Returns true if there are no interpolation values.
   * @returns {boolean}
   */
  hasNoInterpolation () {
    return Object.keys(this._interpolationValues).length === 0;
  }
}

module.exports = TranslationPlaceholder;
