import adaptSimpleFilter from './adaptsimplefilter';
import AppliedQueryFilter from '../models/appliedqueryfilter';

/**
 * Constructs an SDK AppliedQueryFilter from an answers-core AppliedQueryFilter
 *
 * @param {AppliedQueryFilter} appliedFilter from answers-core
 * @returns {@link AppliedQueryFilter}
 */
export default function adaptAppliedQueryFilter (appliedFilter) {
  return new AppliedQueryFilter({
    key: appliedFilter.displayKey,
    value: appliedFilter.displayValue,
    filter: adaptSimpleFilter(appliedFilter.filter),
    fieldId: appliedFilter.filter.fieldId
  });
}
