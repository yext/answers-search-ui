/**
 * This class provides methods that resolve a {@link TranslationPlaceholder} into
 * either an exact translation or the proper run-time translation call.
 */
class TranslationResolver {
  /**
   * Creates a new {@link TranslationResolver}.
   * 
   * @param {Translator} translator A {@link Translator} instance to provide the
   *                                build-time translations.
   * @param {Function} runtimeCallGenerator A function to construct the proper run-time
   *                                        translation call.
   */
  constructor (translator, runtimeCallGenerator) {
    this._translator = translator;
    this._runtimeCallGenerator = runtimeCallGenerator;
  }

  /**
   * Converts the {@link TranslationPlaceholder} of a simple phrase into either
   * an exact translation or the appropriate run-time call.
   * 
   * @param {TranslationPlaceholder} placeholder The {@link TranslationPlaceholder}.
   * @returns {string} A fully translated string or the correct call for getting the
   *                   translated string at run-time.
   */
  resolve(placeholder) {
    const translationResult =
      this._translator.translate(placeholder.getPhrase());
    const interpValues = placeholder.getInterpolationValues();
    return this._resolveInternal(translationResult, interpValues);
  }

  /**
   * Converts the {@link TranslationPlaceholder} of a phrase with added context 
   * into either an exact translation or the appropriate run-time call.
   * 
   * @param {TranslationPlaceholder} placeholder The {@link TranslationPlaceholder}.
   * @returns {string} A fully translated string or the correct call for getting the
   *                   translated string at run-time.
   */
  resolveWithContext(placeholder) {
    const translationResult = this._translator.translate(
      placeholder.getPhrase(), placeholder.getContext());
    const interpValues = placeholder.getInterpolationValues();
    return this._resolveInternal(translationResult, interpValues);
  }

  /**
   * Converts the {@link TranslationPlaceholder} of a phrase needing both
   * translation and pluralization into the appropriate run-time call.
   * 
   * @param {TranslationPlaceholder} placeholder The {@link TranslationPlaceholder}.
   * @returns {string} The correct call for getting the translated, pluralized
   *                   string at run-time.
   */
  resolveWithPlural(placeholder) {
    const translationResult = this._translator.translatePlural(
      placeholder.getPhrase(), placeholder.getPluralForm());
    const interpValues = placeholder.getInterpolationValues();
    return this._resolveInternal(
      translationResult, interpValues, placeholder.getCount());
  }

  /**
   * Given the translated form(s) of a phrase, this method produces either a 
   * translated string or the proper call for obtaining this string at run-time.
   * 
   * @param {string|Object} translationResult The translation(s) given by the
   *                                          {@link Translator}.
   * @param {Object} interpValues The object containing the interpolation parameters
   *                              and their values.
   * @param {string} count The attribute, as a string, that will provide the count.
   * @returns {string} A fully translated string or the correct call for getting the
   *                   translated string at run-time.
   */
  _resolveInternal(translationResult, interpValues, count) {
    const isRuntimeTranslation = count || interpValues;
    return !isRuntimeTranslation ?
       translationResult :
       this._runtimeCallGenerator(translationResult, interpValues, count);
  }
}

module.exports = TranslationResolver;