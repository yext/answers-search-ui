/** @module QueryTriggers */

/**
 * QueryTriggers is an ENUM of the possible triggers for a
 * query update.
 *
 * @enum {string}
 */
const QueryTriggers = {
  INITIALIZE: 'initialize',
  QUERY_PARAMETER: 'query-parameter',
  SUGGEST: 'suggest',
  FILTER_COMPONENT: 'filter-component',
  PAGINATION: 'pagination',
  SEARCH_BAR: 'search-bar'
};
export default QueryTriggers;
