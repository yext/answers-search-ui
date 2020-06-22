import FilterNodeFactory from '../filters/filternodefactory';
import Filter from '../models/filter';
import FilterMetadata from '../filters/filtermetadata';

/**
 * Converts an array of {@link AppliedQueryFilter}s into equivalent {@link SimpleFilterNode}s.
 * @param {Array<AppliedQueryFilter>} nlpFilters
 * @returns {Array<SimpleFilterNode>}
 */
export function convertNlpFiltersToFilterNodes (nlpFilters) {
  return nlpFilters.map(nlpFilter => FilterNodeFactory.from({
    filter: Filter.from(nlpFilter.filter),
    metadata: new FilterMetadata({
      fieldName: nlpFilter.key,
      displayValue: nlpFilter.value
    })
  }));
}

/**
 * Flattens an array of {@link FilterNode}s into an array
 * of their constituent leaf {@link SimpleFilterNode}s.
 * @param {Array<FilterNode>} filterNodes
 * @returns {Array<SimpleFilterNode>}
 */
export function flattenFilterNodes (filterNodes) {
  return filterNodes.flatMap(fn => fn.getSimpleAncestors());
}

/**
 * Returns the given array of {@link FilterNode}s,
 * removing FilterNodes that are empty or have a field id listed as a hidden.
 * @param {Array<FilterNode>} filterNodes
 * @param {Array<string>} hiddenFields
 * @returns {Array<FilterNode>}
 */
export function pruneFilterNodes (filterNodes, hiddenFields) {
  return filterNodes
    .filter(fn => {
      const { fieldName, displayValue } = fn.getMetadata();
      if (!fieldName || !displayValue) {
        return false;
      }
      const fieldId = fn.getFilter().getFilterKey();
      return !hiddenFields.includes(fieldId);
    });
}

/**
 * Check whether two non-combined (i.e. do not contain an array of child Filters) filters
 * are equal to each other.
 * @param {Filter} filterNode1
 * @param {Filter} filterNode2
 * @returns {boolean}
 */
export function haveEqualSimpleFilters (filterNode1, filterNode2) {
  const filter1 = filterNode1.getFilter();
  const filter2 = filterNode2.getFilter();
  if (filter1.getFilterKey() !== filter2.getFilterKey()) {
    return false;
  }
  const fieldIdsToValues1 = filter1[filter1.getFilterKey()];
  const fieldIdsToValues2 = filter2[filter2.getFilterKey()];
  const fieldIds1 = Object.keys(fieldIdsToValues1).sort();
  const fieldIds2 = Object.keys(fieldIdsToValues2).sort();
  if (fieldIds1.length !== fieldIds2.length) {
    return false;
  }
  for (let i = 0; i < fieldIds1.length; i++) {
    const fieldId1 = fieldIds1[i];
    const fieldId2 = fieldIds2[i];
    const value1 = fieldIdsToValues1[fieldId1];
    const value2 = fieldIdsToValues2[fieldId2];
    if (fieldId1 !== fieldId2 || value1 !== value2) {
      return false;
    }
  }
  return true;
}
