import FilterType from '../filters/filtertype';
import AnalyticsEvent from '../analytics/analyticsevent';
import { AnswersAnalyticsError } from '../errors/errors';

/**
 * Create the 'REMOVED_FILTER' analytics event, using the given {@link FilterNode}.
 * @param {SimpleFilterNode} filterNode
 * @returns {AnalyticsEvent}
 */
export function createRemovedFilterEvent (filterNode, removedFromComponent, verticalKey) {
  const { filterType } = filterNode.getMetadata();
  const analyticsEvent = new AnalyticsEvent('REMOVED_FILTER');
  const optionType = _parseOptionType(filterType);
  const removedFilter = _parseRemovedFilter(filterNode.getFilter(), filterType);
  analyticsEvent.addOptions({
    verticalKey: verticalKey,
    removedFromComponent: removedFromComponent,
    optionType: optionType,
    removedFilter: removedFilter
  });
  return analyticsEvent;
}

/**
 * Parse the 'removedFilter' analytics event param.
 * @param {Filter} filter 
 * @param {FilterType} filterType 
 */
function _parseRemovedFilter (filter, filterType) {
  switch (filterType) {
    case (FilterType.RADIUS):
      return filter.value || 0
    default:
      return JSON.stringify(filter);
  }
}

/**
 * Parse the 'optionType' analytics event param.
 * @param {FilterType} filterType 
 */
function _parseOptionType (filterType) {
  switch (filterType) {
    case (FilterType.FACET):
      return 'FACET_FILTER'
    case (FilterType.STATIC):
      return 'STATIC_FILTER'
    case (FilterType.RADIUS):
      return 'RADIUS_FILTER'
    default:
      throw new AnswersAnalyticsError(`Cannot parse filterType ${filterType}`);
  }
}