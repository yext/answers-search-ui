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
