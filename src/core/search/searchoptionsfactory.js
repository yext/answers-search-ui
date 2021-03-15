import QueryTriggers from '../models/querytriggers';

/**
 * SearchOptionsFactory is responsible for determining what search options to use
 * for a given QUERY_TRIGGER.
 */
export default class SearchOptionsFactory {
  /**
   * Given a QUERY_TRIGGER, return the search options for the given trigger.
   *
   * @returns {Object}
   */
  create (queryTrigger) {
    switch (queryTrigger) {
      case QueryTriggers.FILTER_COMPONENT:
        return {
          setQueryParams: true,
          resetPagination: true,
          useFacets: true
        };
      case QueryTriggers.PAGINATION:
        return {
          setQueryParams: true,
          resetPagination: false,
          useFacets: true,
          sendQueryId: true
        };
      case QueryTriggers.QUERY_PARAMETER:
      case QueryTriggers.INITIALIZE:
        return {
          setQueryParams: true,
          resetPagination: false
        };
      case QueryTriggers.SUGGEST:
      default:
        return {
          setQueryParams: true,
          resetPagination: true
        };
    }
  }
}
