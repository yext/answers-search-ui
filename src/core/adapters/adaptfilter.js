import Filter from '../models/filter';

export default function adaptFilter(filter) {
  return new Filter({
    [filter.fieldId]: {
      [filter.comparator]: filter.comparedValue
    }
  })
}