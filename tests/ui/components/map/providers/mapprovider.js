import MapProvider from '../../../../../src/ui/components/map/providers/mapprovider';
import ResultsContext from '../../../../../src/core/storage/resultscontext';

describe('collapsing markers', () => {
  it('collapses markers with the same lat/lng', () => {
    const markers = [
      {
        item: { test: 'one' },
        label: 'One',
        latitude: 123,
        longitude: 234
      },
      {
        item: { test: 'two' },
        label: 'Two',
        latitude: 123,
        longitude: 234
      },
      {
        item: { test: 'three' },
        label: 'Three',
        latitude: 234,
        longitude: 123
      }
    ];

    const mapProvider = new MapProvider({
      locale: 'en'
    });

    const collapsedMarkers = mapProvider._collapseMarkers(markers);

    expect(collapsedMarkers).toHaveLength(2);

    const [collapsedMarker, thirdMarker] = collapsedMarkers;
    expect(collapsedMarker.item).toHaveLength(2);
    expect(collapsedMarker.item[0]).toEqual({ test: 'one' });
    expect(collapsedMarker.item[1]).toEqual({ test: 'two' });
    expect(collapsedMarker.label).toBe(2);
    expect(collapsedMarker.latitude).toBe(123);
    expect(collapsedMarker.longitude).toBe(234);

    expect(thirdMarker).toEqual({
      item: { test: 'three' },
      label: 'Three',
      latitude: 234,
      longitude: 123
    });
  });
});

describe('can show/hide map behavior for no results with blank map data', () => {
  const resultsContext = ResultsContext.NO_RESULTS;
  describe('when visibleForNoResults is undefined', () => {
    const visibleForNoResults = undefined;
    const mapData = { mapMarkers: [1] };
    it('shows map if showEmptyMap is true and tehre is no mapt data', () => {
      let showEmptyMap = true;
      expect(MapProvider.shouldHideMap(null, resultsContext, showEmptyMap, visibleForNoResults)).toBeFalsy();
    });

    it('hides map if showEmptyMap is false and there is no map data', () => {
      let showEmptyMap = false;
      expect(MapProvider.shouldHideMap(null, resultsContext, showEmptyMap, visibleForNoResults)).toBeTruthy();
    });

    it('shows map when there is mapData', () => {
      let showEmptyMap = true;
      expect(MapProvider.shouldHideMap(mapData, resultsContext, showEmptyMap, visibleForNoResults)).toBeFalsy();
      showEmptyMap = false;
      expect(MapProvider.shouldHideMap(mapData, resultsContext, showEmptyMap, visibleForNoResults)).toBeFalsy();
    });
  });

  it('hide map when visibleForNoResults = false', () => {
    const visibleForNoResults = false;
    let showEmptyMap = false;
    expect(MapProvider.shouldHideMap(null, resultsContext, showEmptyMap, visibleForNoResults)).toBeTruthy();
    showEmptyMap = true;
    expect(MapProvider.shouldHideMap(null, resultsContext, showEmptyMap, visibleForNoResults)).toBeTruthy();
  });

  it('show map when visibleForNoResults = true', () => {
    const visibleForNoResults = true;
    let showEmptyMap = false;
    expect(MapProvider.shouldHideMap(null, resultsContext, showEmptyMap, visibleForNoResults)).toBeFalsy();
    showEmptyMap = true;
    expect(MapProvider.shouldHideMap(null, resultsContext, showEmptyMap, visibleForNoResults)).toBeFalsy();
  });
});

describe('can show/hide map for normal results', () => {
  const resultsContext = ResultsContext.NORMAL;
  it('hide the map when showEmptyMap = false and has empty map data', () => {
    let visibleForNoResults = false;
    const showEmptyMap = false;
    expect(MapProvider.shouldHideMap(null, resultsContext, showEmptyMap, visibleForNoResults)).toBeTruthy();

    // Should be unaffected by the no results config
    visibleForNoResults = true;
    expect(MapProvider.shouldHideMap(null, resultsContext, showEmptyMap, visibleForNoResults)).toBeTruthy();
  });

  it('show the map when showEmptyMap = true and has empty map data', () => {
    let visibleForNoResults = false;
    const showEmptyMap = true;
    expect(MapProvider.shouldHideMap(null, resultsContext, showEmptyMap, visibleForNoResults)).toBeFalsy();

    // Should be unaffected by the no results config
    visibleForNoResults = true;
    expect(MapProvider.shouldHideMap(null, resultsContext, showEmptyMap, visibleForNoResults)).toBeFalsy();
  });
});
