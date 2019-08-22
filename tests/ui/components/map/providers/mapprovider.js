import MapProvider from '../../../../../src/ui/components/map/providers/mapprovider';

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

    const mapProvider = new MapProvider();

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
