import AutoCompleteData from '../../../src/core/models/autocompletedata';

describe('constructing from a response', () => {
  it('creates a section if response has no sections', () => {
    const response = {
      results: [
        { key: 'jesse', value: 'Jesse Sharps' },
        { key: 'billy', value: 'Billy Bastardi' }
      ]
    };

    const expectedResults = [
      {
        key: 'jesse',
        value: 'Jesse Sharps',
        shortValue: 'Jesse Sharps',
        filter: {},
        matchedSubstrings: [],
        highlightedValue: 'Jesse Sharps'
      },
      {
        key: 'billy',
        value: 'Billy Bastardi',
        shortValue: 'Billy Bastardi',
        filter: {},
        matchedSubstrings: [],
        highlightedValue: 'Billy Bastardi'
      }
    ];

    const data = AutoCompleteData.from(response);
    expect(data.sections).not.toBeUndefined();
    expect(data.sections).toHaveLength(1);

    const actualResults = data.sections[0].results;
    expect(actualResults).toHaveLength(2);
    expect(actualResults).toEqual(expectedResults);
  });

  it('properly creates highlightedValue from matchedSubstrings', () => {
    const response = {
      results: [
        {
          key: 'jesse',
          value: 'Jesse Sharps',
          matchedSubstrings: [ { offset: 8, length: 2 } ]
        },
        {
          key: 'billy',
          value: 'Billy Bastardi',
          matchedSubstrings: [ { offset: 10, length: 2 } ]
        }
      ]
    };

    const expectedResults = [
      {
        key: 'jesse',
        value: 'Jesse Sharps',
        shortValue: 'Jesse Sharps',
        filter: {},
        matchedSubstrings: [ { offset: 8, length: 2 } ],
        highlightedValue: '<strong>Jesse Sh</strong>ar<strong>ps</strong>'
      },
      {
        key: 'billy',
        value: 'Billy Bastardi',
        shortValue: 'Billy Bastardi',
        filter: {},
        matchedSubstrings: [ { offset: 10, length: 2 } ],
        highlightedValue: '<strong>Billy Bast</strong>ar<strong>di</strong>'
      }
    ];

    const data = AutoCompleteData.from(response);
    const actualResults = data.sections[0].results;
    expect(actualResults).toHaveLength(2);
    expect(actualResults).toEqual(expectedResults);
  });

  it('properly highlights multiple matchedSubstrings', () => {
    const response = {
      sections: [
        {
          label: 'Team Watson',
          results: [
            {
              key: 'jesse',
              value: 'Jesse Sharps',
              matchedSubstrings: [ { offset: 1, length: 3 }, { offset: 7, length: 4 } ]
            }
          ]
        }
      ]
    };

    const expectedResults = [
      {
        key: 'jesse',
        value: 'Jesse Sharps',
        shortValue: 'Jesse Sharps',
        filter: {},
        matchedSubstrings: [ { offset: 1, length: 3 }, { offset: 7, length: 4 } ],
        highlightedValue: '<strong>J</strong>ess<strong>e S</strong>harp<strong>s</strong>'
      }
    ];

    const data = AutoCompleteData.from(response);
    const actualResults = data.sections[0].results;
    expect(actualResults).toHaveLength(1);
    expect(actualResults).toEqual(expectedResults);
  });

  it('properly handles full length match', () => {
    const response = {
      sections: [
        {
          label: 'Team Watson',
          results: [
            {
              key: 'jesse',
              value: 'Jesse',
              matchedSubstrings: [ { offset: 0, length: 5 } ]
            }
          ]
        }
      ]
    };

    const expectedResults = [
      {
        key: 'jesse',
        value: 'Jesse',
        shortValue: 'Jesse',
        filter: {},
        matchedSubstrings: [ { offset: 0, length: 5 } ],
        highlightedValue: 'Jesse'
      }
    ];

    const data = AutoCompleteData.from(response);
    const actualResults = data.sections[0].results;
    expect(actualResults).toHaveLength(1);
    expect(actualResults).toEqual(expectedResults);
  });
});
