/** @module StorageKeys */

/**
 * StorageKeys is an ENUM are considered the root context
 * for how data is stored and scoped in the storage.
 *
 * @enum {string}
 */
export default {
  NAVIGATION: 'navigation',
  UNIVERSAL_RESULTS: 'universal-results',
  VERTICAL_RESULTS: 'vertical-results',
  ALTERNATIVE_VERTICALS: 'alternative-verticals',
  AUTOCOMPLETE: 'autocomplete',
  DIRECT_ANSWER: 'direct-answer',
  FILTER: 'filter', // DEPRECATED
  STATIC_FILTER_NODE: 'static-filter-node',
  QUERY: 'query',
  QUERY_ID: 'query-id',
  FACET_FILTER_NODE: 'facet-filter-node',
  DYNAMIC_FILTERS: 'dynamic-filters',
  PARAMS: 'params',
  GEOLOCATION: 'geolocation',
  INTENTS: 'intents',
  QUESTION_SUBMISSION: 'question-submission',
  SEARCH_CONFIG: 'search-config',
  SEARCH_OFFSET: 'search-offset',
  SPELL_CHECK: 'spell-check',
  LOCATION_BIAS: 'location-bias',
  SESSIONS_OPT_IN: 'sessions-opt-in',
  VERTICAL_PAGES_CONFIG: 'vertical-pages-config',
  LOCALE: 'locale',
  SORT_BYS: 'sort-bys',
  NO_RESULTS_CONFIG: 'no-results-config',
  LOCATION_RADIUS: 'location-radius',
  RESULTS_HEADER: 'results-header',
  API_CONTEXT: 'context',
  REFERRER_PAGE_URL: 'referrerPageUrl',
  QUERY_TRIGGER: 'queryTrigger',
  FACETS_LOADED: 'facets-loaded',
  QUERY_SOURCE: 'query-source'
};
