/* eslint no-dupe-keys: 0 */
import FilterNodeFactory from '../../../src/core/filters/filternodefactory';

describe('haveEqualSimpleFilters helper', () => {
  const joeFilterNode = FilterNodeFactory.from({
    filter: { name: { '$eq': 'joe' } }
  });
  const bobFilterNode = FilterNodeFactory.from({
    filter: { name: { '$eq': 'bob' } }
  });

  it('works for equivalent simple filters', () => {
    const joeClone = FilterNodeFactory.from(joeFilterNode);
    expect(joeFilterNode.hasSameFilterAs(joeClone)).toBeTruthy();
    expect(joeClone.hasSameFilterAs(joeFilterNode)).toBeTruthy();
  });

  it('returns false for different simple filters', () => {
    expect(bobFilterNode.hasSameFilterAs(joeFilterNode)).toBeFalsy();
  });

  it('does not care about order within filter object', () => {
    const rangeFilterNode = FilterNodeFactory.from({
      filter: {
        fieldId: {
          '$ge': 5,
          '$le': 7
        }
      }
    });

    const rangeFilterNodeReverse = FilterNodeFactory.from({
      filter: {
        fieldId: {
          '$le': 7,
          '$ge': 5
        }
      }
    });
    expect(rangeFilterNode.hasSameFilterAs(rangeFilterNodeReverse)).toBeTruthy();
  });

  it('returns false for different fieldId', () => {
    const rangeFilterNode = FilterNodeFactory.from({
      filter: {
        iamDifferent: {
          '$ge': 5,
          '$le': 7
        }
      }
    });

    const rangeFilterNodeReverse = FilterNodeFactory.from({
      filter: {
        thanBefore: {
          '$le': 7,
          '$ge': 5
        }
      }
    });
    expect(rangeFilterNode.hasSameFilterAs(rangeFilterNodeReverse)).toBeFalsy();
  });

  it('works with duplicate matchers', () => {
    const rangeFilterNode = FilterNodeFactory.from({
      filter: {
        aFieldId: {
          '$eq': 5,
          '$eq': 5,
          '$le': 7
        }
      }
    });

    const rangeFilterNodeReverse = FilterNodeFactory.from({
      filter: {
        aFieldId: {
          '$eq': 5,
          '$le': 7,
          '$le': 7
        }
      }
    });
    expect(rangeFilterNode.hasSameFilterAs(rangeFilterNodeReverse)).toBeTruthy();
  });
});
