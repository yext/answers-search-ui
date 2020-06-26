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
  return filterNodes.flatMap(fn => fn.getSimpleDescendants());
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
