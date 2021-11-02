import SearchDataTransformer from '../../../src/core/search/searchdatatransformer';
import StorageKeys from '../../../src/core/storage/storagekeys';
import Navigation from '../../../src/core/models/navigation';
import VerticalResults from '../../../src/core/models/verticalresults';
import SpellCheck from '../../../src/core/models/spellcheck';
import DynamicFilters from '../../../src/core/models/dynamicfilters';
import LocationBias from '../../../src/core/models/locationbias';
import ResponseWithResults from '../../fixtures/responseWithResults.json';
import ResponseWithoutResults from '../../fixtures/responseWithNoResults.json';
import ResultsContext from '../../../src/core/storage/resultscontext';
import AlternativeVerticals from '../../../src/core/models/alternativeverticals';
import DirectAnswer from '../../../src/core/models/directanswer';

describe('tranform vertical search response', () => {
  let response;
  let responseWithNoResults;

  beforeEach(() => {
    response = ResponseWithResults;
    responseWithNoResults = ResponseWithoutResults;
  });

  it('transforms vertical response correctly with results', () => {
    const data = response;
    const result = SearchDataTransformer.transformVertical(data);
    const formatters = {};

    expect(result).toEqual(
      {
        [StorageKeys.QUERY_ID]: data.queryId,
        [StorageKeys.NAVIGATION]: new Navigation(), // Vertical doesn't respond with ordering, so use empty nav.
        [StorageKeys.DIRECT_ANSWER]: DirectAnswer.fromCore(response.directAnswer, formatters, 'VERTICAL'),
        [StorageKeys.VERTICAL_RESULTS]: VerticalResults.fromCore(
          data.verticalResults, {}, {}, ResultsContext.NORMAL),
        [StorageKeys.DYNAMIC_FILTERS]: DynamicFilters.fromCore(data.facets, ResultsContext.NORMAL),
        [StorageKeys.SPELL_CHECK]: SpellCheck.fromCore(data.spellCheck),
        [StorageKeys.ALTERNATIVE_VERTICALS]: AlternativeVerticals.fromCore(data.alternativeVerticals),
        [StorageKeys.LOCATION_BIAS]: LocationBias.fromCore(data.locationBias)
      }
    );
  });

  it('transforms vertical response correctly with no results', () => {
    const data = responseWithNoResults;
    const result = SearchDataTransformer.transformVertical(data);
    const convertedResponse = SearchDataTransformer._reshapeForNoResults(data);
    const formatters = {};

    expect(result).toEqual(
      {
        [StorageKeys.QUERY_ID]: convertedResponse.queryId,
        [StorageKeys.NAVIGATION]: new Navigation(), // Vertical doesn't respond with ordering, so use empty nav.
        [StorageKeys.DIRECT_ANSWER]: DirectAnswer.fromCore(response.directAnswer, formatters, 'VERTICAL'),
        [StorageKeys.VERTICAL_RESULTS]: VerticalResults.fromCore(
          convertedResponse.verticalResults, {}, {}, ResultsContext.NO_RESULTS),
        [StorageKeys.DYNAMIC_FILTERS]: DynamicFilters.fromCore(
          convertedResponse.facets, ResultsContext.NO_RESULTS),
        [StorageKeys.SPELL_CHECK]: SpellCheck.fromCore(convertedResponse.spellCheck),
        [StorageKeys.ALTERNATIVE_VERTICALS]: AlternativeVerticals.fromCore(
          convertedResponse.alternativeVerticals),
        [StorageKeys.LOCATION_BIAS]: LocationBias.fromCore(convertedResponse.locationBias)
      }
    );
  });
});

describe('forming no results response', () => {
  let response;

  beforeEach(() => {
    response = {
      results: [],
      resultsCount: 0,
      facets: [
        {
          fieldId: 'c_features',
          displayName: 'Features',
          options: []
        }
      ],
      allResultsForVertical: {
        resultsCount: 2,
        results: [
          {
            data: {
              id: 'faq-0',
              type: 'faq',
              answer: 'black',
              name: 'what is alexis\' favorite color?'
            },
            highlightedFields: {}
          }
        ],
        facets: [
          {
            fieldId: 'c_features',
            displayName: 'Features',
            options: [
              {
                displayName: 'Dog Friendly',
                count: 1,
                selected: false,
                filter: {
                  c_features: {
                    $eq: 'Dog Friendly'
                  }
                }
              }
            ]
          }
        ]
      },
      directAnswer: {
        type: 'FEATURED_SNIPPET',
        relatedResult: {
          rawData: {},
          source: 'KNOWLEDGE_MANAGER'
        },
        verticalKey: 'help_articles',
        snippet: {
          value: 'Lorem ipsum dolor sit amet.\n consectetur adipiscing elit.',
          matchedSubstrings: [
            {
              offset: 0,
              length: 10
            }
          ]
        }
      },
      appliedQueryFilters: []
    };
  });

  it('does not alter original response ', () => {
    const initialResponse = { ...response };
    SearchDataTransformer._reshapeForNoResults(response);

    expect(response).toEqual(initialResponse);
  });

  it('properly converts response with empty results', () => {
    const responseEmptyResults = {
      results: [],
      resultsCount: 0,
      allResultsForVertical: [],
      directAnswer: {},
      appliedQueryFilters: []
    };
    const convertedResponse = SearchDataTransformer._reshapeForNoResults(responseEmptyResults);

    expect(convertedResponse).toEqual({
      results: [],
      facets: undefined,
      resultsCount: 0,
      allResultsForVertical: [],
      directAnswer: {},
      appliedQueryFilters: []
    });
  });

  it('properly converts response with non-present results', () => {
    const responseEmptyResults = {
      results: [],
      resultsCount: 0,
      directAnswer: {},
      appliedQueryFilters: []
    };
    const convertedResponse = SearchDataTransformer._reshapeForNoResults(responseEmptyResults);

    expect(convertedResponse).toEqual({
      results: [],
      facets: undefined,
      resultsCount: 0,
      directAnswer: {},
      appliedQueryFilters: []
    });
  });
});
