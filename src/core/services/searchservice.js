/**
 * SearchService sends user queries to a backend and returns search results
 *
 * @interface
 */
export default class SearchService {
  /**
   * Search in the context of a vertical
   * @param {string} verticalKey vertical ID for the search
   * @param {object} query The query details
   * @param {string} query.input The input to search for
   * @param {string} query.filter The filter to use in the search
   * @param {string} query.facetFilter The facet filter to use in the search
   * @param {number} query.limit The max number of results to include, max of 50
   * @param {number} query.offset The results offset, for fetching more results of the same query
   * @param {string} query.id The query ID to use. If paging within a query, the same ID should be used
   * @param {Object} query.geolocation The user's geolocation position used to bias the results
   * @param {boolean} query.isDynamicFiltersEnabled If true, asks the server to return dynamic filters
   * @param {string} query.skipSpellCheck The boolean as string to indicate if it should skip spell checking
   * @param {string} query.queryTrigger The source that triggers query such as suggest
   * @param {boolean} query.sessionTrackingEnabled Indicates if session tracking is on
   * @param {string} query.sortBys stringified array of options to sort by
   * @returns {Promise<Object>} The backend response
   */
  verticalSearch (verticalKey, query) {}

  /**
   * Search across all verticals
   * @param {string} queryString The input to search for
   * @param {Object} params.geolocation the user's geolocation position used to bias the results
   * @param {string} params.skipSpellCheck The boolean as string to indicate if it should skip spell checking
   * @param {string} params.queryTrigger The source that triggers query such as suggest
   * @param {boolean} params.sessionTrackingEnabled Indicates if session tracking is on
   * @returns {Promise<Object>} The backend response
   */
  universalSearch (queryString, params) {}
}
