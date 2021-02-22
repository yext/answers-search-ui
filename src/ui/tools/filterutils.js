import FilterCombinators from '../../core/filters/filtercombinators';
import isEqual from 'lodash.isequal';
import Filter from '../../core/models/filter';

/**
 * Checks whether a filter is equal to or included somewhere within the persistedFilter.
 * Assumes the given filter is a simple filter, i.e. does not have any child filters.
 * The persistedFilter can be either combined or simple.
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
