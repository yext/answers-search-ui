import ResultFactory from '../../../src/core/models/resultfactory';
import { AnswersCoreError } from '../../../src/core/errors/errors';

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
  it('invalid field formatter throws exception', () => {
    const data = [{
      data: {
        name: 'Test',
        description: 'Result description'
      }
    }];

    // this is a valid field formatter
    let nameFormatter = formatterParams => {
      return formatterParams.entityFieldValue.toUpperCase();
    };

    // this is an invalid field formatter since it is an object instead of a function
    let invalidDescriptionFormatter = {
      description: 'make it this value'
    };

    const formatters = {
      'name': nameFormatter,
      'description': invalidDescriptionFormatter
    };

    expect(() => {
      ResultFactory.from(data, formatters, null, 'KNOWLEDGE_MANAGER');
    }).toThrow(AnswersCoreError);
  });

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

  it('highlighting a field name that does not exist in entity profile throws exception', () => {
    const highlightedFields = {
      name: {
        matchedSubstrings: [{
          length: 3,
          offset: 0
        }],
        value: 'ATM'
      },
      thisFieldDoesNotExist: {
        matchedSubstrings: [{
          length: 3,
          offset: 0
        }],
        value: 'ATM'
      }
    };

    expect(() => {
      ResultFactory.computeHighlightedData(data, highlightedFields);
    }).toThrow(AnswersCoreError);
  });

  it('highlighted data should be empty when no highlighted fields specified', () => {
    const highlightedData = ResultFactory.computeHighlightedData(data, {});
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

    const outputHighlightedData = ResultFactory.computeHighlightedData(data, highlightedFields);

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

    const outputHighlightedData = ResultFactory.computeHighlightedData(data, highlightedFields);

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

    const outputHighlightedData = ResultFactory.computeHighlightedData(data, highlightedFields);

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

describe('highlighting and formatting data', () => {
  const data = [{
    data: {
      name: 'ATM',
      description: 'Result description'
    },
    highlightedFields: {
      name: {
        matchedSubstrings: [{
          length: 3,
          offset: 0
        }],
        value: 'ATM'
      }
    }
  }];

  it('field formatter works as expected with highlighting specifiers present', () => {
    let nameFormatter = formatterParams => {
      return formatterParams.entityFieldValue.toLowerCase();
    };

    let descriptionFormatter = formatterParams => {
      // since no highlighter specified for this field, highlightedEntityFieldValue should be null
      expect(formatterParams.highlightedEntityFieldValue).toBeNull();
      return formatterParams.entityFieldValue; // do no formatting
    };

    const formatters = {
      'name': nameFormatter,
      'description': descriptionFormatter
    };

    const results = ResultFactory.from(data, formatters, null, 'KNOWLEDGE_MANAGER');
    expect(results[0].title).toBe('atm');
    expect(results[0].details).toBe('Result description');
    expect(results[0]._formatted).toEqual({
      name: 'atm',
      description: 'Result description'
    });
    expect(results[0]._highlighted).toEqual({
      name: '<strong>ATM</strong>'
    });
  });

  it('highlighed field value can be used by field formatter', () => {
    let nameFormatter = formatterParams => {
      return formatterParams.highlightedEntityFieldValue.toLowerCase();
    };

    const formatters = {
      'name': nameFormatter
    };

    const results = ResultFactory.from(data, formatters, null, 'KNOWLEDGE_MANAGER');
    expect(results[0].title).toBe('<strong>atm</strong>');
    expect(results[0].details).toBe('Result description');
    expect(results[0]._formatted).toEqual({
      name: '<strong>atm</strong>'
    });
  });
});

describe('result details', () => {
  const data = [{
    data: {
      description: 'Result description'
    },
    highlightedFields: {
      description: {
        matchedSubstrings: [{
          length: 11,
          offset: 7
        }],
        value: 'Result description'
      }
    }
  }];

  it('formatted detail should be first priority', () => {
    let descriptionFormatter = formatterParams => {
      return formatterParams.entityFieldValue.toLowerCase();
    };

    const formatters = {
      'description': descriptionFormatter
    };

    const results = ResultFactory.from(data, formatters, null, 'KNOWLEDGE_MANAGER');

    expect(results[0].details).toBe('result description');
  });

  it('highlighted detail should be second priority', () => {
    const formatters = {};

    const results = ResultFactory.from(data, formatters, null, 'KNOWLEDGE_MANAGER');

    expect(results[0].details).toBe('Result <strong>description</strong>');
  });

  it('raw detail should be fallback and last priority', () => {
    const dataWithNoHighlighting = [{
      data: {
        description: 'Result description'
      }
    }];

    const formatters = {};
    const results = ResultFactory.from(dataWithNoHighlighting, formatters, null, 'KNOWLEDGE_MANAGER');

    expect(results[0].details).toBe('Result description');
  });
});
