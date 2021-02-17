import Filter from '../../../src/core/models/filter';
import { filterIsPersisted } from '../../../src/ui/tools/filterutils';

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