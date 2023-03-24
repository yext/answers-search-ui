const { default: AutoCompleteResponseTransformer } = require('../../../src/core/search/autocompleteresponsetransformer');

describe('transform autocomplete response', () => {
  it('transform universal/vertical autocomplete response', () => {
    /**
     * @type {import('@yext/search-core').AutocompleteResult}
     */
    const responseFromCore = {
      inputIntents: ['NEAR_ME'],
      results: [
        {
          value: 'salesforce',
          inputIntents: ['NEAR_ME'],
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
      businessId: '',
      queryId: '',
      sections: [
        {
          results: [
            {
              filter: {},
              intents: ['NEAR_ME'],
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
                matcher: '$eq',
                value: 'Virginia Beach',
                fieldId: 'name'
              },
              key: 'name'
            }
          ]
        }
      ],
      queryId: '42d5b709-3b9f-464a-b9b5-764467cbf540'
    };
    const expectedTransformedResponse = {
      inputIntents: [],
      businessId: '',
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
      AutoCompleteResponseTransformer.transformFilterSearchResponse(responseFromCore);
    expect(actualTransformedResponse).toEqual(expectedTransformedResponse);
  });

  it('transform filter', () => {
    const filterFromCore = {
      matcher: '$eq',
      value: 'Arlington',
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
        matcher: '$eq',
        value: 'Virginia Beach',
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
      AutoCompleteResponseTransformer.transformAutoCompleteResult(resultFromCore);
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
      AutoCompleteResponseTransformer.transformAutoCompleteResult(resultFromCore);
    expect(actualTransformedResult).toEqual(expectedTransformedResult);
  });
});
