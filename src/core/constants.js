/** @module */

/** The current lib version, reported with errors and analytics */
export const LIB_VERSION = 'v0.9.2';

/** The base url for the api backend */
export const API_BASE_URL = 'https://liveapi-dev.yext.com';

/** The default url for compiled component templates */
//export const COMPILED_TEMPLATES_URL = `https://assets.sitescdn.net/answers/${LIB_VERSION}/answerstemplates.compiled.min.js`;
export const COMPILED_TEMPLATES_URL = `/home/vramesh/Projects/answers_js/answers/dist/answerstemplates.compiled.min.js`;

/** The base urls for the analytics backend  */
export const ANALYTICS_BASE_URL = 'https://realtimeanalytics.yext.com';
export const ANALYTICS_BASE_URL_NO_COOKIE = 'https://answers.yext-pixel.com';
