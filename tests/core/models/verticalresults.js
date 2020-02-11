import VerticalResults from '../../../src/core/models/verticalresults';

describe('vertical results', () => {
  it('merges results together', () => {
    const data = {
      map: {
        mapCenter: 'test',
        mapMarkers: ['1', '2']
      },
      resultsCount: 4,
      results: ['1', '2'],
      searchState: 'test'
    };

    const initialResults = new VerticalResults(data);
    const mergedResults = initialResults.append({
      map: {
        mapCenter: 'test2',
        mapMarkers: ['3', '4']
      },
      resultsCount: 4,
      results: ['3', '4'],
      searchState: 'test2'
    });

    expect(mergedResults.map.mapCenter).toBe('test');
    expect(mergedResults.map.mapMarkers).toEqual(expect.arrayContaining(['1', '2', '3', '4']));
    expect(mergedResults.results).toEqual(expect.arrayContaining(['1', '2', '3', '4']));
    expect(mergedResults.searchState).toBe('test');
  });
});

describe('forming no results response', () => {
  let response;

  beforeEach(() => {
    response = {
      results: [],
      resultsCount: 0,
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
        ]
      },
      appliedQueryFilters: []
    };
  });

  it('does not alter original response ', () => {
    const initialResponse = { ...response };
    VerticalResults.formResponseWithAlternateResults(response);

    expect(response).toEqual(initialResponse);
  });

  it('properly converts response with data', () => {
    const convertedResponse = VerticalResults.formResponseWithAlternateResults(response);

    expect(convertedResponse).toEqual({
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
        ]
      },
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
    const convertedResponse = VerticalResults.formResponseWithAlternateResults(responseEmptyResults);

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
    const convertedResponse = VerticalResults.formResponseWithAlternateResults(responseEmptyResults);

    expect(convertedResponse).toEqual({
      results: [],
      resultsCount: 0,
      appliedQueryFilters: []
    });
  });
});
