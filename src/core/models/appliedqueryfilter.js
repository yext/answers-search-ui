export default class AppliedQueryFilter {
  constructor (appliedQueryFilter) {
    this.key =  appliedQueryFilter.displayKey;
    this.value = appliedQueryFilter.displayValue;
    this.filter = appliedQueryFilter.filter;
    this.fieldId = appliedQueryFilter.fieldId;
  }

  static from (appliedQueryFilters) {
    let filters = [];
    for (let i = 0; i < appliedQueryFilters.length; i++) {
      filters.push(new AppliedQueryFilter(appliedQueryFilters[i]));
    }
    return filters;
  }
}
