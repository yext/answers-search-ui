import SearchDataTransformer from '../../../src/core/search/searchdatatransformer';
import StorageKeys from '../../../src/core/storage/storagekeys';
import Navigation from '../../../src/core/models/navigation';
import VerticalResults from '../../../src/core/models/verticalresults';
import SpellCheck from '../../../src/core/models/spellcheck';
import DynamicFilters from '../../../src/core/models/dynamicfilters';
import SearchIntents from '../../../src/core/models/searchintents';
import LocationBias from '../../../src/core/models/locationbias';
import Response from '../../fixtures/responseWithResults.json';
import ResultsContext from '../../../src/core/storage/resultscontext';

describe('tranform vertical search response', () => {
  let response;

  beforeEach(() => {
    response = Response;
  });

  it('transforms vertical response correctly', () => {
    const data = response;
    const formatters = [];
    const result = SearchDataTransformer.transformVertical(data, formatters, 'vkey');
    expect(result).toMatchObject(
      {
        [StorageKeys.QUERY_ID]: data.response.queryId,
        [StorageKeys.NAVIGATION]: new Navigation(), // Vertical doesn't respond with ordering, so use empty nav.
        [StorageKeys.VERTICAL_RESULTS]: VerticalResults.from(data.response, formatters, 'vkey', ResultsContext.NORMAL),
        [StorageKeys.DYNAMIC_FILTERS]: DynamicFilters.from(data.response.facets),
        [StorageKeys.INTENTS]: SearchIntents.from(data.response.searchIntents),
        [StorageKeys.SPELL_CHECK]: SpellCheck.from(data.response.spellCheck),
        [StorageKeys.LOCATION_BIAS]: LocationBias.from(data.response.locationBias)
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
          'fieldId': 'c_features',
          'displayName': 'Features',
          'options': []
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
            'fieldId': 'c_features',
            'displayName': 'Features',
            'options': [
              {
                'displayName': 'Dog Friendly',
                'count': 1,
                'selected': false,
                'filter': {
                  'c_features': {
                    '$eq': 'Dog Friendly'
                  }
                }
              }
            ]
          }
        ]
      },
      appliedQueryFilters: []
    };
  });

  it('does not alter original response ', () => {
    const initialResponse = { ...response };
    SearchDataTransformer._formVerticalResponseWithContext(response, ResultsContext.NO_RESULTS);

    expect(response).toEqual(initialResponse);
  });

  it('properly converts response with data', () => {
    const convertedResponse = SearchDataTransformer._formVerticalResponseWithContext(response, ResultsContext.NO_RESULTS);

    expect(convertedResponse).toEqual({
      resultsCount: 2,
      facets: response.allResultsForVertical.facets,
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
      allResultsForVertical: response.allResultsForVertical,
      appliedQueryFilters: []
    });
  });

  it('properly converts response with empty results', () => {
    const responseEmptyResults = {
      results: [],
      resultsCount: 0,
      allResultsForVertical: [],
      appliedQueryFilters: []
    };
    const convertedResponse = SearchDataTransformer._formVerticalResponseWithContext(responseEmptyResults, ResultsContext.NO_RESULTS);

    expect(convertedResponse).toEqual({
      results: [],
      resultsCount: 0,
      allResultsForVertical: [],
      appliedQueryFilters: []
    });
  });

  it('properly converts response with non-present results', () => {
    const responseEmptyResults = {
      results: [],
      resultsCount: 0,
      appliedQueryFilters: []
    };
    const convertedResponse = SearchDataTransformer._formVerticalResponseWithContext(responseEmptyResults, ResultsContext.NO_RESULTS);

    expect(convertedResponse).toEqual({
      results: [],
      resultsCount: 0,
      appliedQueryFilters: []
    });
  });
});
