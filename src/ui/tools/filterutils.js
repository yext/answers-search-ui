import FilterCombinators from '../../core/filters/filtercombinators';
import isEqual from 'lodash.isequal';
import Filter from '../../core/models/filter';

/**
 * Checks whether the given filter is included or equal to
 * the filter persisted in the URL. Assumes the given filter
 * is a simple filter, i.e. does not have any child filters.
 *
 * @param {Filter} filter
 * @param {Filter} persistedFilter
 * @returns {boolean}
 */
export function filterIsPersisted (filter, persistedFilter) {
  const childFilters =
    persistedFilter[FilterCombinators.AND] || persistedFilter[FilterCombinators.OR];
  if (childFilters) {
    return !!childFilters.find(childFilter => filterIsPersisted(filter, Filter.from(childFilter)));
  }
  return isEqual(filter, persistedFilter);
}
