import FilterType from '../filters/filtertype';
import AnalyticsEvent from '../analytics/analyticsevent';
import { AnswersAnalyticsError } from '../errors/errors';

/**
 * Create the 'REMOVED_FILTER' analytics event, using the given {@link FilterNode}.
 * @param {Filter} removedFilter The {@link Filter} that was removed.
 * @param {string} optionType The optionType to send in the request, either STATIC_FILTER, FACET_FILTER, or RADIUS_FILTER.
 * @param {string} removedFromComponent The component type that removed/reset this filter.
 * @param {string} verticalKey The current verticalKey
 * @returns {AnalyticsEvent}
 */
export function createRemovedFilterEvent (removedFilter, optionType, removedFromComponent, verticalKey) {
  const analyticsEvent = new AnalyticsEvent('REMOVED_FILTER');
  analyticsEvent.addOptions({
    verticalKey: verticalKey,
    removedFromComponent: removedFromComponent,
    optionType: optionType,
    removedFilter: removedFilter
  });
  return analyticsEvent;
}

/**
 * Parse the 'optionType' analytics event param.
 * @param {FilterType} filterType
 * @returns {string}
 */
export function optionTypeFromFilterType (filterType) {
  switch (filterType) {
    case (FilterType.FACET):
      return 'FACET_FILTER';
    case (FilterType.STATIC):
      return 'STATIC_FILTER';
    case (FilterType.RADIUS):
      return 'RADIUS_FILTER';
    default:
      throw new AnswersAnalyticsError(`Cannot parse filterType ${filterType}`);
  }
}
