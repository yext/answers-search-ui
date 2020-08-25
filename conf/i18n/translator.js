const i18next = require('i18next');

/**
 * This class wraps an instance of the i18next library and provides methods supporting
 * run-time and compile-time translation. These methods allow for interpolation, pluralization,
 * and added context.
 */
class Translator {
  /**
   * Creates a new {@link Translator} that wraps the provided {@link i18next} instance.
   * 
   * @param {i18next} i18nextInstance The instance to wrap.
   */
  constructor(i18nextInstance) {
    this._i18next = i18nextInstance;
  }

  /**
   * Performs a simple translation of the given phrase. If the phrase includes
   * interpolation, a translated format string, with the relevant placeholders,
   * is returned.
   * 
   * @param {string} phrase The phrase to translate.
   * @returns {string} The translated phrase or format string.
   */
  translate(phrase) {
    const interpPlaceholders = this._getInterpolationPlaceholders(phrase);    

    return this._i18next.t(phrase, interpPlaceholders);
  }

  /**
   * Provides all the translated singular and plural forms of the given phrase. 
   * The forms will include any of the needed interpolation placeholders.
   * 
   * @param {string} phrase The phrase to translate.
   * @param {string} pluralForm The untranslated, plural form of the phrase.
   * @returns {Object<string|number, string>} A map containing the various forms.
   *                                          A form is keyed by the
   *                                          corresponding count or 'plural'.
   */
  translatePlural(phrase, pluralForm) {
    const pluralKeyRegex = new RegExp(`${phrase}_([0-9]+|plural)`);

    const i18nextOptions = this._i18next.options;

    // We first look for the translations in the given locale. If none can be
    // found there, we iterate through the fallbacks, in order.
    const localeWithPluralTranslations = this._findLocaleWithTranslationKey(
      [i18nextOptions.lng, ...i18nextOptions.fallbackLng], pluralKeyRegex);

    if (localeWithPluralTranslations) {
      const localeTranslations = 
        i18nextOptions.resources[localeWithPluralTranslations].translation;
      
      // Create a map of count (or 'plural') to the correct translated form.
      return Object.keys(localeTranslations)
        .filter(translationKey => pluralKeyRegex.test(translationKey))
        .reduce(
          (pluralForms, translationKey) => {
            const pluralFormIndex = translationKey.split('_')[1];
            pluralForms[pluralFormIndex] = localeTranslations[translationKey];
            return pluralForms;
          }, 
          { 1: localeTranslations[phrase] });
    } 
    
    // If no translations can be found, we return a map containing the provided
    // singular and plural forms.
    return {
      1: phrase,
      plural: pluralForm
    };
  }

  /**
   * Translates the provided phrase depending on the context. If the phrase includes
   * interpolation, a translated format string, with the relevant placeholders,
   * is returned.
   * 
   * @param {string} phrase The phrase to translate.
   * @param {string} context The context of the translation.
   * @returns {string} The translated phrase or format string.
   */
  translateWithContext(phrase, context) {
    const interpPlaceholders = this._getInterpolationPlaceholders(phrase);

    return this._i18next.t(phrase, { context, ...interpPlaceholders});
  }

  /**
   * Creates an object containing the interpolation placeholders for the given 
   * phrase. Such an object must be passed to i18next to ensure interpolation can 
   * be performed on the translated phrase.
   * 
   * @param {string} phrase The phrase. 
   * @returns {Object<string, string>} A map of interpolation parameter to placeholder.
   *                                   As an example, if the phrase was: 'My {{name}} is', 
   *                                   the object would contains { name: '{{name}}' }.
   */
  _getInterpolationPlaceholders(phrase) {
    const placeholders = {};
    let placeholderMatch;

    const placeholderRegex = new RegExp(/\{\{([a-zA-Z0-9]+)\}\}/, 'g');
    while ((placeholderMatch = placeholderRegex.exec(phrase)) != null) {
      if (placeholderMatch.length >= 2) {
        placeholders[placeholderMatch[1]] = placeholderMatch[0];
      }
    }

    return placeholders;
  }

  /**
   * Finds the first of the provided locales with a translation whose key matches
   * the regex.
   * 
   * @param {Array<string>} locales The list of locales.
   * @param {RegExp} keyRegex The pattern to match translation keys against.
   * @returns {string} The first matching locale. 
   */
  _findLocaleWithTranslationKey(locales, keyRegex) {
    const i18nextOptions = this._i18next.options;

    return locales.find(locale => {
      const localeTranslations = i18nextOptions.resources[locale].translation;
      const hasMatchingTranslationKey = Object.keys(localeTranslations)
        .some(translationKey => keyRegex.test(translationKey));
      return hasMatchingTranslationKey;
    });
  }

  /**
   * Creates a {@link Translator} for the given locale, wrapping a properly configured,
   * new {@link i18next} instance.
   * 
   * @param {string} locale The desired locale.
   * @param {Array<string>} fallbacks A prioritized list of translation fallbacks
   *                                  for the locale.
   * @param {string} translations The translations for the locale and associated fallbacks.
   */
  static async create(locale, fallbacks, translations) {
    const i18nextInstance = i18next.createInstance();
    await i18nextInstance.init({
      lng: locale,
      fallbackLng: fallbacks,
      resources: translations,
    });
    const translator = new Translator(i18nextInstance);

    return translator;
  }
}

module.exports = Translator;