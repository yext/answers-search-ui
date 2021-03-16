import Filter from '../../../src/core/models/filter';
import { filterIsPersisted, findSimpleFiltersWithFieldId, getPersistedRangeFilterContents } from '../../../src/ui/tools/filterutils';

describe('filterIsPersisted', () => {
  it('can detect when a filter is equal to the persisted filter', () => {
    const testFilter = Filter.from({
      c_randomField: {
        $eq: 'someValue'
      }
    });
    const persistedFilter = Filter.from({
      c_randomField: {
        $eq: 'someValue'
      }
    });
    expect(filterIsPersisted(testFilter, persistedFilter)).toBeTruthy();
  });

  it('can detect when a filter is a child of the persisted filter', () => {
    const testFilter = Filter.from({
      c_randomField: {
        $eq: 'someValue'
      }
    });
    const persistedFilter = Filter.from({
      $or: [
        {
          c_randomField: {
            $eq: 'someValue'
          }
        },
        {
          c_randomField: {
            $eq: 'otherValue'
          }
        }
      ]
    });
    expect(filterIsPersisted(testFilter, persistedFilter)).toBeTruthy();
  });

  it('can detect when a filter is not equal to the persisted filter', () => {
    const testFilter = Filter.from({
      c_randomField: {
        $eq: 'otherValue'
      }
    });
    const persistedFilter = Filter.from({
      c_randomField: {
        $eq: 'someValue'
      }
    });
    expect(filterIsPersisted(testFilter, persistedFilter)).toBeFalsy();
  });

  it('can detect when a filter is NOT a child of the persisted filter', () => {
    const testFilter = Filter.from({
      c_randomField: {
        $eq: 'someValue'
      }
    });
    const persistedFilter = Filter.from({
      $or: [
        {
          c_differentField: {
            $eq: 'someValue'
          }
        },
        {
          c_differentField: {
            $eq: 'otherValue'
          }
        }
      ]
    });
    expect(filterIsPersisted(testFilter, persistedFilter)).toBeFalsy();
  });

  it('assumes that the tested filter will be an instance of Filter', () => {
    const rawFilter = {
      c_randomField: {
        $eq: 'someValue'
      }
    };
    const persistedFilter = Filter.from({
      c_randomField: {
        $eq: 'someValue'
      }
    });
    expect(filterIsPersisted(rawFilter, persistedFilter)).toBeFalsy();
  });
});

describe('findSimpleFiltersWithFieldId', () => {
  it('returns an array of filters that have the given fieldId', () => {
    const fieldId = 'c_differentField';
    const filter1 = {
      c_aField: { $eq: 5 }
    };
    const filter2 = {
      [fieldId]: { $gt: 123 }
    };
    const filter3 = {
      [fieldId]: { $eq: 'someValue' }
    };
    const filter4 = {
      [fieldId]: { $eq: 'otherValue' }
    };
    const persistedFilter = Filter.from({
      $or: [
        {
          $and: [filter1, filter2]
        },
        filter3,
        filter4
      ]
    });
    expect(findSimpleFiltersWithFieldId(fieldId, persistedFilter))
      .toContainEqual(filter2, filter3, filter4);
  });

  it('returns an empty array when none match', () => {
    const filter1 = {
      c_aField: { $eq: 5 }
    };
    const filter2 = {
      c_anotherOne: { $gt: 123 }
    };
    const persistedFilter = Filter.from({
      $or: [filter1, filter2]
    });
    expect(findSimpleFiltersWithFieldId('bob_id', persistedFilter)).toEqual([]);
  });

  it('works when the persisted filter is a simple filter', () => {
    const filter1 = Filter.from({
      c_aField: { $eq: 5 }
    });
    expect(findSimpleFiltersWithFieldId('c_aField', filter1)).toEqual([ filter1 ]);
  });
});

describe('getPersistedRangeFilterContents', () => {
  it('will find the persisted min and max range for a fieldId', () => {
    const persistedFilter = Filter.from({
      c_aField: {
        $ge: 5,
        $lt: 10
      }
    });
    expect(getPersistedRangeFilterContents(persistedFilter, 'c_aField')).toMatchObject({
      $ge: 5,
      $lt: 10
    });
  });

  it('ignores non range filters', () => {
    const persistedFilter = Filter.from({
      c_aField: {
        $gab: 5,
        $lab: 10
      }
    });
    expect(getPersistedRangeFilterContents(persistedFilter, 'c_aField')).toEqual({});
  });

  it('will return empty object if persisted filter is empty', () => {
    const persistedFilter = Filter.from({});
    expect(getPersistedRangeFilterContents(persistedFilter, 'c_aField')).toEqual({});
  });
});
