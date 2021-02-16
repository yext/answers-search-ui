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
  /** Filters stored in the url */
  FILTERS: 'filters',
  /** FilterNodes stored in the FilterRegistry for non-Facet filters*/
  STATIC_FILTER_NODES: 'static-filter-nodes',
  /** The currently active FilterNode for the locationRadius param */
  LOCATION_RADIUS_FILTER_NODE: 'location-radius-filter-node',
  QUERY: 'query',
  QUERY_ID: 'query-id',
  /** FiltersNodes stored in the FilterRegistry for Facet filters*/
  FACET_FILTER_NODES: 'facet-filter-nodes',
  DYNAMIC_FILTERS: 'dynamic-filters',
  GEOLOCATION: 'geolocation',
  QUESTION_SUBMISSION: 'question-submission',
  SEARCH_CONFIG: 'search-config',
  SEARCH_OFFSET: 'search-offset',
  SPELL_CHECK: 'spell-check',
  SKIP_SPELL_CHECK: 'skipSpellCheck',
  LOCATION_BIAS: 'location-bias',
  SESSIONS_OPT_IN: 'sessions-opt-in',
  VERTICAL_PAGES_CONFIG: 'vertical-pages-config',
  LOCALE: 'locale',
  SORT_BYS: 'sort-bys',
  NO_RESULTS_CONFIG: 'no-results-config',
  RESULTS_HEADER: 'results-header', // DEPRECATED
  API_CONTEXT: 'context',
  REFERRER_PAGE_URL: 'referrerPageUrl',
  QUERY_TRIGGER: 'queryTrigger',
  FACETS_LOADED: 'facets-loaded',
  QUERY_SOURCE: 'query-source',
  HISTORY_POP_STATE: 'history-pop-state'
};
