/** @module */

/** The current lib version, reported with errors and analytics, injected by the build process */
export const LIB_VERSION = '@@LIB_VERSION';

/** The current locale, injected by the build process */
export const LOCALE = '@@LOCALE';

/** The identifier of the production environment */
export const PRODUCTION = 'production';

/** The identifier of the sandbox environment */
export const SANDBOX = 'sandbox';

/** The default url for compiled component templates */
export const COMPILED_TEMPLATES_URL = `https://assets.sitescdn.net/answers/${LIB_VERSION}/answerstemplates.compiled.min.js`;

/** The query source, reported with analytics */
export const QUERY_SOURCE = 'STANDARD';
