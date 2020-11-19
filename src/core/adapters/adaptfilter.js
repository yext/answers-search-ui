import Filter from '../models/filter';

/**
 * Constructs an SDK Filter model from an answers-core SimpleFilter model
 * 
 * @param {SimpleFilter} filter
 */
export default function adaptFilter(filter) {
  return new Filter({
    [filter.fieldId]: {
      [filter.comparator]: filter.comparedValue
    }
  })
}