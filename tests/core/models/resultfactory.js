import ResultFactory from '../../../src/core/models/resultfactory';

describe('truncating a long description', () => {
  it('returns the string if it is less than the limit', () => {
    expect(ResultFactory.truncate('abc')).toEqual('abc');
  });
  it('limits the length to the prescribed value', () => {
    expect(ResultFactory.truncate('abcdefghijklmnopqrstuvw xyz', 26)).toHaveLength(26);
  });
  it('preserves whole words', () => {
    expect(ResultFactory.truncate('abc def ghij klmnop qrs tuv wxyz', 15)).toEqual('abc def ghij...');
  });
  it('preserve whole words but account for the separator', () => {
    expect(ResultFactory.truncate('abc def gj ij klmnop qrs tuv wxyz', 15)).toEqual('abc def gj...');
  });
});
