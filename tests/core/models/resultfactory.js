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

describe('formatting data', () => {
  it('doesn\'t format anything with empty formatters', () => {
    const data = [{
      data: {
        name: 'Test',
        description: 'Result description'
      }
    }];

    const results = ResultFactory.from(data, {}, null);
    expect(results[0].title).toBe('Test');
    expect(results[0].details).toBe('Result description');
    expect(results[0]._formatted).toEqual({});
  });

  it('provides formatted data with formatters', () => {
    const data = [{
      data: {
        name: 'Test',
        description: 'Result description'
      }
    }];

    const formatters = {
      'name': name => name.toUpperCase(),
      'description': desc => desc.substr(7)
    };

    const results = ResultFactory.from(data, formatters, null);
    expect(results[0].title).toBe('TEST');
    expect(results[0].details).toBe('description');
    expect(results[0]._formatted).toEqual({
      name: 'TEST',
      description: 'description'
    });
  });
});
