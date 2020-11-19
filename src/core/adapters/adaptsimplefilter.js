import Filter from '../models/filter';

/**
 * Constructs an SDK Filter model from an answers-core SimpleFilter model
 *
 * @param {SimpleFilter} filter from answers-core
 * @returns {@link Filter}
 */
export default function adaptSimpleFilter (filter) {
  return new Filter({
    [filter.fieldId]: {
      [filter.comparator]: filter.comparedValue
    }
  });
}
