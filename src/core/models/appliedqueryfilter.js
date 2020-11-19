export default class AppliedQueryFilter {
  constructor (appliedQueryFilter) {
    this.key = appliedQueryFilter.key;
    this.value = appliedQueryFilter.value;
    this.filter = appliedQueryFilter.filter;
    this.fieldId = appliedQueryFilter.fieldId;
  }
}
