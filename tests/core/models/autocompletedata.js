import AutoCompleteData from '../../../src/core/models/autocompletedata';

describe('constructing from a response', () => {
  it('creates a section if response has no sections', () => {
    const response = {
      input: {
        queryIntents: []
      },
      results: [
        { key: 'jesse', value: 'Jesse Sharps', queryIntents: [] },
        { key: 'billy', value: 'Billy Bastardi', queryIntents: [] }
      ]
    };

    const expectedResults = [
      {
        key: 'jesse',
        value: 'Jesse Sharps',
        shortValue: 'Jesse Sharps',
        filter: {},
        matchedSubstrings: [],
        intents: []
      },
      {
        key: 'billy',
        value: 'Billy Bastardi',
        shortValue: 'Billy Bastardi',
        filter: {},
        matchedSubstrings: [],
        intents: []
      }
    ];

    const data = AutoCompleteData.from(response);
    expect(data.sections).not.toBeUndefined();
    expect(data.sections).toHaveLength(1);

    const actualResults = data.sections[0].results;
    expect(actualResults).toHaveLength(2);
    expect(actualResults).toEqual(expectedResults);
  });

  it('properly handles full length match', () => {
    const response = {
      input: {
        queryIntents: []
      },
      sections: [
        {
          label: 'Team Watson',
          results: [
            {
              key: 'jesse',
              value: 'Jesse',
              matchedSubstrings: [ { offset: 0, length: 5 } ],
              queryIntents: []
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
        intents: []
      }
    ];

    const data = AutoCompleteData.from(response);
    const actualResults = data.sections[0].results;
    expect(actualResults).toHaveLength(1);
    expect(actualResults).toEqual(expectedResults);
  });

  it('properly handles queryIntents', () => {
    const inputIntents = ['INTENT_1'];
    const resultIntents = ['INTENT_2'];
    const response = {
      input: {
        queryIntents: inputIntents
      },
      sections: [
        {
          label: 'Team Watson',
          results: [
            {
              key: 'jesse',
              value: 'Jesse',
              matchedSubstrings: [ { offset: 0, length: 5 } ],
              queryIntents: resultIntents
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
        intents: resultIntents
      }
    ];

    const data = AutoCompleteData.from(response);
    expect(data.inputIntents).toEqual(inputIntents);
    const actualResults = data.sections[0].results;
    expect(actualResults).toHaveLength(1);
    expect(actualResults).toEqual(expectedResults);
  });
});
