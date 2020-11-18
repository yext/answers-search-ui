export default class AppliedQueryFilter {
  // Support legacy model and new model until fully migrated.
  // TODO(billy) Remove the left expression during assignment when migrated.
  // TODO(SPR-2394): convert this into a FilterNode here instead of in VerticalResults
  constructor (appliedQueryFilter) {
    this.key = appliedQueryFilter.key || appliedQueryFilter.displayKey;
    this.value = appliedQueryFilter.value || appliedQueryFilter.displayValue;
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
