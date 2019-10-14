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

    const results = ResultFactory.from(data, {}, null, 'KNOWLEDGE_MANAGER');
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

    let nameFormatter = formatterParams => {
      return formatterParams.entityFieldValue.toUpperCase();
    };

    let descriptionFormatter = formatterParams => {
      return formatterParams.entityFieldValue.substr(7);
    };

    const formatters = {
      'name': nameFormatter,
      'description': descriptionFormatter
    };

    const results = ResultFactory.from(data, formatters, null, 'KNOWLEDGE_MANAGER');
    expect(results[0].title).toBe('TEST');
    expect(results[0].details).toBe('description');
    expect(results[0]._formatted).toEqual({
      name: 'TEST',
      description: 'description'
    });
  });
});

describe('highlighting data', () => {
  const data = {
    name: 'ATM',
    address: {
      line1: '1745 Broadway',
      city: 'New York',
      region: 'NY'
    },
    featuredMessage: {
      description: 'Save time & bank on your terms at over 1,800 ATMs'
    },
    parentLevel1: {
      parentLevel2: {
        child1: 'Save time & bank on your terms at over 1,800 ATMs',
        child2: 'Save time & bank on your terms at over 1,800 ATMs'

      }
    }
  };

  it('highlighted data should be empty when no highlighted fields specified', () => {
    const highlightedData = ResultFactory.getHighlightedData(data, {});
    expect(highlightedData).toEqual({});
  });

  it('highlighted data should highlight & contain only fields with highlighting specified', () => {
    const highlightedFields = {
      name: {
        matchedSubstrings: [{
          length: 3,
          offset: 0
        }],
        value: 'ATM'
      }
    };

    const outputHighlightedData = ResultFactory.getHighlightedData(data, highlightedFields);

    expect(outputHighlightedData).toEqual({
      name: '<strong>ATM</strong>'
    });
  });

  it('highlighter should highlight nested highlighted fields', () => {
    const highlightedFields = {
      featuredMessage: {
        description: {
          matchedSubstrings: [{
            length: 4,
            offset: 45
          }],
          value: 'Save time & bank on your terms at over 1,800 ATMs'
        }
      }
    };

    const outputHighlightedData = ResultFactory.getHighlightedData(data, highlightedFields);

    expect(outputHighlightedData).toEqual({
      featuredMessage: {
        description: 'Save time & bank on your terms at over 1,800 <strong>ATMs</strong>'
      }
    });
  });

  it('highlighter should highlight deeply nested highlighted fields', () => {
    const highlightedFields = {
      parentLevel1: {
        parentLevel2: {
          child1: {
            matchedSubstrings: [{
              length: 4,
              offset: 45
            }],
            value: 'Save time & bank on your terms at over 1,800 ATMs'
          },
          child2: {
            matchedSubstrings: [{
              length: 4,
              offset: 45
            }],
            value: 'Save time & bank on your terms at over 1,800 ATMs'
          }
        }
      }
    };

    const outputHighlightedData = ResultFactory.getHighlightedData(data, highlightedFields);

    expect(outputHighlightedData).toEqual({
      parentLevel1: {
        parentLevel2: {
          child1: 'Save time & bank on your terms at over 1,800 <strong>ATMs</strong>',
          child2: 'Save time & bank on your terms at over 1,800 <strong>ATMs</strong>'
        }
      }
    });
  });
});
