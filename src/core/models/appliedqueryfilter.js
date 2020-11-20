import Filter from './filter';

export default class AppliedQueryFilter {
  constructor (appliedQueryFilter = {}) {
    this.key = appliedQueryFilter.key;
    this.value = appliedQueryFilter.value;
    this.filter = appliedQueryFilter.filter;
    this.fieldId = appliedQueryFilter.fieldId;
  }

  /**
 * Constructs an SDK AppliedQueryFilter from an answers-core AppliedQueryFilter
 *
 * @param {AppliedQueryFilter} appliedFilter from answers-core
 * @returns {@link AppliedQueryFilter}
 */
  static fromCore (appliedFilter) {
    if (!appliedFilter) {
      return new AppliedQueryFilter();
    }

    return new AppliedQueryFilter({
      key: appliedFilter.displayKey,
      value: appliedFilter.displayValue,
      filter: Filter.fromCoreSimpleFilter(appliedFilter.filter),
      fieldId: appliedFilter.filter.fieldId
    });
  }
}
