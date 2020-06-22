import { haveEqualSimpleFilters } from '../../../src/core/utils/filternodeutils';
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
    expect(haveEqualSimpleFilters(joeFilterNode, joeClone)).toBeTruthy();
    expect(haveEqualSimpleFilters(joeClone, joeFilterNode)).toBeTruthy();
  });

  it('returns false for different simple filters', () => {
    expect(haveEqualSimpleFilters(joeFilterNode, bobFilterNode)).toBeFalsy();
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
    expect(haveEqualSimpleFilters(rangeFilterNode, rangeFilterNodeReverse)).toBeTruthy();
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
    expect(haveEqualSimpleFilters(rangeFilterNode, rangeFilterNodeReverse)).toBeFalsy();
  });
});
