exports.TRANSLATION_FLAGGER_REGEX = /TranslationFlagger.flag\((\s)*\{[^;]+?\}(\s)*\)/g;

exports.DEFAULT_LOCALE = 'ar';

const LANGUAGES_TO_LOCALES = {
  ar: [
    'ar_DZ'
  ]
};
exports.LANGUAGES_TO_LOCALES = LANGUAGES_TO_LOCALES;

exports.ALL_LANGUAGES = Object.keys(LANGUAGES_TO_LOCALES);
