const { default: AutoCompleteResponseTransformer } = require('../../../src/core/search/autocompleteresponsetransformer');

describe('transform autocomplete response', () => {
  it('transforms universal/vertical autocomplete response', () => {
    const responseFromCore = {
      inputIntents: ['NEAR_ME'],
      results: [
        {
          value: 'salesforce',
          matchedSubstrings: [
            {
              offset: 0,
              length: 10
            }
          ]
        }
      ]
    };
    const expectedTransformedResponse = {
      inputIntents: ['NEAR_ME'],
      queryId: '',
      sections: [
        {
          results: [
            {
              filter: {},
              intents: [],
              key: '',
              matchedSubstrings: [
                {
                  length: 10,
                  offset: 0
                }
              ],
              shortValue: 'salesforce',
              value: 'salesforce'
            }
          ],
          resultsCount: 1
        }
      ]
    };
    const actualTransformedResponse =
      AutoCompleteResponseTransformer.transformAutoCompleteResponse(responseFromCore);
    expect(actualTransformedResponse).toEqual(expectedTransformedResponse);
  });

  it('transforms filter autocomplete response with sections', () => {
    const responseFromCore = {
      sectioned: true,
      sections: [
        {
          label: 'Name',
          results: [
            {
              value: 'Virginia Beach',
              matchedSubstrings: [
                {
                  offset: 0,
                  length: 8
                }
              ],
              filter: {
                comparator: '$eq',
                comparedValue: 'Virginia Beach',
                fieldId: 'name'
              },
              key: 'name'
            }
          ]
        }
      ],
      results: [],
      inputIntents: [],
      queryId: '42d5b709-3b9f-464a-b9b5-764467cbf540'
    };
    const expectedTransformedResponse = {
      inputIntents: [],
      queryId: '42d5b709-3b9f-464a-b9b5-764467cbf540',
      sections: [
        {
          label: 'Name',
          results: [
            {
              filter: {
                name: {
                  $eq: 'Virginia Beach'
                }
              },
              intents: [],
              key: 'name',
              matchedSubstrings: [
                {
                  length: 8,
                  offset: 0
                }
              ],
              shortValue: 'Virginia Beach',
              value: 'Virginia Beach'
            }
          ],
          resultsCount: 1
        }
      ]
    };
    const actualTransformedResponse =
      AutoCompleteResponseTransformer.transformFilterAutoCompleteResponse(responseFromCore);
    expect(actualTransformedResponse).toEqual(expectedTransformedResponse);
  });
});
