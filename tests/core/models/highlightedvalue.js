import HighlightedValue from '../../../src/core/models/highlightedvalue';

describe('createing highlighted values', () => {
  it('properly creates highlightedValue from matchedSubstrings', () => {
    const data = {
      key: 'jesse',
      value: 'Jesse Sharps',
      matchedSubstrings: [ { offset: 8, length: 2 } ]
    };

    const expectedResult = 'Jesse Sh<strong>ar</strong>ps';
    const expectedInvertedResult = '<strong>Jesse Sh</strong>ar<strong>ps</strong>';

    let highlightedValue = new HighlightedValue(data);
    const result = highlightedValue.get();
    const invertedResult = highlightedValue.getInverted();

    expect(result).toEqual(expectedResult);
    expect(invertedResult).toEqual(expectedInvertedResult);
  });

  it('properly highlights multiple matchedSubstrings', () => {
    const data = {
      key: 'jesse',
      value: 'Jesse Sharps',
      matchedSubstrings: [ { offset: 7, length: 4 }, { offset: 1, length: 3 } ]
    };

    const expectedResult = 'J<strong>ess</strong>e S<strong>harp</strong>s';
    const expectedInvertedResult = '<strong>J</strong>ess<strong>e S</strong>harp<strong>s</strong>';

    let highlightedValue = new HighlightedValue(data);
    const result = highlightedValue.get();
    const invertedResult = highlightedValue.getInverted();

    expect(result).toEqual(expectedResult);
    expect(invertedResult).toEqual(expectedInvertedResult);
  });

  it('properly handles full length match', () => {
    const data = {
      key: 'jesse',
      value: 'Jesse',
      matchedSubstrings: [ { offset: 0, length: 5 } ]
    };

    const expectedResult = '<strong>Jesse</strong>';
    const expectedInvertedResult = 'Jesse';

    let highlightedValue = new HighlightedValue(data);
    const result = highlightedValue.get();
    const invertedResult = highlightedValue.getInverted();

    expect(result).toEqual(expectedResult);
    expect(invertedResult).toEqual(expectedInvertedResult);
  });

  it('properly handles no match', () => {
    const data = {};

    const expectedResult = '';
    const expectedInvertedResult = '';

    let highlightedValue = new HighlightedValue(data);
    const result = highlightedValue.get();
    const invertedResult = highlightedValue.getInverted();

    expect(result).toEqual(expectedResult);
    expect(invertedResult).toEqual(expectedInvertedResult);
  });

  it('properly handles a transformFunction', () => {
    const data = {
      key: 'jesse',
      value: 'Jes\'se Sharps',
      matchedSubstrings: [ { offset: 8, length: 4 }, { offset: 1, length: 4 } ]
    };

    const expectedResult = 'J<strong>es%27s</strong>e S<strong>harp</strong>s';
    const expectedInvertedResult = '<strong>J</strong>es%27s<strong>e S</strong>harp<strong>s</strong>';

    let highlightedValue = new HighlightedValue(data);
    const transformFn = (string) => {
      return string.replace(/'/gi, '%27');
    };
    const result = highlightedValue.getWithTransformFunction(transformFn);
    const invertedResult = highlightedValue.getInvertedWithTransformFunction(transformFn);

    expect(result).toEqual(expectedResult);
    expect(invertedResult).toEqual(expectedInvertedResult);
  });
});
