exports.TRANSLATION_FLAGGER_REGEX = /TranslationFlagger.flag\((\s)*\{[^;]+?\}(\s)*\)/g;

exports.DEFAULT_LOCALE = 'en';

const LANGUAGES_TO_LOCALES = {
  en: [
    'en_AE',
    'en_AI',
    'en_AS',
    'en_AT',
    'en_AU',
    'en_BE',
    'en_BG',
    'en_BH',
    'en_CA',
    'en_CH',
    'en_CO',
    'en_CR',
    'en_CY',
    'en_CZ',
    'en_DE',
    'en_DK',
    'en_EE',
    'en_ES',
    'en_EU',
    'en_FI',
    'en_FR',
    'en_GB',
    'en_GD',
    'en_GR',
    'en_GT',
    'en_HI',
    'en_HK',
    'en_HR',
    'en_HU',
    'en_IE',
    'en_IL',
    'en_IT',
    'en_JM',
    'en_JP',
    'en_KR',
    'en_KW',
    'en_LC',
    'en_LT',
    'en_LU',
    'en_LV',
    'en_MS',
    'en_MT',
    'en_NL',
    'en_NO',
    'en_OM',
    'en_PL',
    'en_PS',
    'en_PT',
    'en_QA',
    'en_RE',
    'en_RO',
    'en_SA',
    'en_SE',
    'en_SG',
    'en_SH',
    'en_SI',
    'en_SK',
    'en_UA',
    'en_US',
    'en_ZA'
  ],
  es: [
    'es_BO',
    'es_CO',
    'es_CU',
    'es_ES',
    'es_EU',
    'es_GT',
    'es_HN',
    'es_MX',
    'es_NI',
    'es_US'
  ],
  fr: [
    'fr_BE',
    'fr_BL',
    'fr_CA',
    'fr_CH',
    'fr_EU',
    'fr_FR',
    'fr_IT',
    'fr_LU',
    'fr_MC',
    'fr_RE'
  ],
  it: [
    'it_CH',
    'it_IT'
  ],
  de: [
    'de_AT',
    'de_CH',
    'de_DE',
    'de_EU',
    'de_LU'
  ],
  ja: [
    'ja_JP'
  ],
  ar: [
    'ar_AE',
    'ar_BH',
    'ar_DZ',
    'ar_IQ',
    'ar_KW',
    'ar_LY',
    'ar_OM',
    'ar_PS',
    'ar_QA',
    'ar_SA'
  ],
  hi: [],
  ko: [],
  nl: [
    'nl_BE',
    'nl_NL',
    'nl_SX'
  ],
  pl: [],
  pt: [
    'pt_BR',
    'pt_CV',
    'pt_PT'
  ],
  ru: [
    'ru_UA'
  ],
  sv: [
    'sv_SE'
  ],
  'zh-Hans': [
    'zh-Hans_CN',
    'zh_Hans_HK',
    'zh_Hans_SG'
  ],
  'zh-Hant': [
    'zh-Hant_HK',
    'zh-Hant_MO',
    'zh-Hant_TW'
  ]
};
exports.LANGUAGES_TO_LOCALES = LANGUAGES_TO_LOCALES;

exports.ALL_LANGUAGES = Object.keys(LANGUAGES_TO_LOCALES);

/**
 * Of the 3 browsers that support speech recognition, only Edge will
 * error out if it encounters a locale it doesn't like.
 * Chrome and Safari still do their best to use a reasonable locale.
 *
 * This list of locales is used to manually default to the 2 character language code
 * for locales not in this list, when the user's browser is Edge.
 */
exports.SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE = [
  'en-ae',
  'en-au',
  'en-ca',
  'en-de',
  'en-gb',
  'en-hk',
  'en-ie',
  'en-jm',
  'en-sg',
  'en-us',
  'en-za',
  'es-bo',
  'es-co',
  'es-cu',
  'es-es',
  'es-gt',
  'es-hn',
  'es-mx',
  'es-ni',
  'es-us',
  'fr-be',
  'fr-ca',
  'fr-ch',
  'fr-fr',
  'it-it',
  'de-at',
  'de-ch',
  'de-de',
  'ja-jp'
];
