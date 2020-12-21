const { default: AutoCompleteResponseTransformer } = require('../../../src/core/search/autocompleteresponsetransformer');

describe('transform autocomplete response', () => {
  it('transform universal/vertical autocomplete response', () => {
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

  it('transform filter autocomplete response with sections', () => {
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

  it('transform filter autocomplete response without sections', () => {
    const responseFromCore = {
      sectioned: false,
      sections: [],
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
      ],
      inputIntents: [],
      queryId: '42d5b709-3b9f-464a-b9b5-764467cbf540'
    };
    const expectedTransformedResponse = {
      inputIntents: [],
      queryId: '42d5b709-3b9f-464a-b9b5-764467cbf540',
      sections: [
        {
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

  it('transform filter', () => {
    const filterFromCore = {
      comparator: '$eq',
      comparedValue: 'Arlington',
      fieldId: 'c_name'
    };
    const expectedTransformedFilter = {
      c_name: {
        $eq: 'Arlington'
      }
    };
    const actualTransformedFilter =
      AutoCompleteResponseTransformer._transformFilter(filterFromCore);
    expect(actualTransformedFilter).toEqual(expectedTransformedFilter);
  });

  it('transform autocomplete result with filter', () => {
    const resultFromCore = {
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
    };
    const expectedTransformedResult = {
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
    };
    const actualTransformedResult =
      AutoCompleteResponseTransformer._transformAutoCompleteResult(resultFromCore);
    expect(actualTransformedResult).toEqual(expectedTransformedResult);
  });

  it('transform autocomplete result without filter', () => {
    const resultFromCore = {
      value: 'salesforce',
      matchedSubstrings: [
        {
          offset: 0,
          length: 10
        }
      ]
    };
    const expectedTransformedResult = {
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
    };
    const actualTransformedResult =
      AutoCompleteResponseTransformer._transformAutoCompleteResult(resultFromCore);
    expect(actualTransformedResult).toEqual(expectedTransformedResult);
  });
});
