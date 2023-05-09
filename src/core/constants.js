/** @module */

/** The current lib version, reported with errors and analytics, injected by the build process */
export const LIB_VERSION = '@@LIB_VERSION';

/** The current locale, injected by the build process */
export const LOCALE = '@@LOCALE';

/** The speech recognition locales supported by Microsoft Edge */
export const SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE = '@@SPEECH_RECOGNITION_LOCALES_SUPPORTED_BY_EDGE';

/** The cloud region being used, injected by the build process */
export const CLOUD_REGION = '@@CLOUD_REGION';

/** The identifier of the production environment */
export const PRODUCTION = 'production';

/** The identifier of the sandbox environment */
export const SANDBOX = 'sandbox';

/** The default url for compiled component templates */
export const COMPILED_TEMPLATES_URL = `https://assets.sitescdn.net/answers/${LIB_VERSION}/answerstemplates.compiled.min.js`;

/** The default query source reported with analytics */
export const QUERY_SOURCE = 'STANDARD';

export const ENDPOINTS = {
  UNIVERSAL_SEARCH: '/v2/accounts/me/answers/query',
  VERTICAL_SEARCH: '/v2/accounts/me/answers/vertical/query',
  QUESTION_SUBMISSION: '/v2/accounts/me/createQuestion',
  UNIVERSAL_AUTOCOMPLETE: '/v2/accounts/me/answers/autocomplete',
  VERTICAL_AUTOCOMPLETE: '/v2/accounts/me/answers/vertical/autocomplete',
  FILTER_SEARCH: '/v2/accounts/me/answers/filtersearch'
};
