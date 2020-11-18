import adaptFilter from './adaptfilter';
import AppliedQueryFilter from '../models/appliedqueryfilter';

export default function adaptAppliedFilter(appliedFilter) {
  return new AppliedQueryFilter({
    key: appliedFilter.displayKey,
    value: appliedFilter.displayValue,
    filter: adaptFilter(appliedFilter.filter),
    fieldId: appliedFilter.filter.fieldId
  })
}