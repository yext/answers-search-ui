import { MapBoxMarkerConfig } from '../../../../../src/ui/components/map/providers/mapboxmapprovider';

const map = { tmp: 'test value' };
const wrapper = `<button>this is the pin</button>`;

describe('create MapBoxMarkerConfig', () => {
  it('constructs a MapBoxMarkerConfig with provided options', () => {
    const mapboxMarkerConfig = new MapBoxMarkerConfig({
      map: map,
      position: { latitude: 91.234, longitude: 71.578 },
      wrapper: wrapper
    });

    const expected = {
      map: map,
      position: { latitude: 91.234, longitude: 71.578 },
      wrapper: `<button>this is the pin</button>`
    };

    expect(mapboxMarkerConfig).toMatchObject(expected);
  });
});

describe('serizalize an array of MapBoxMarker configs', () => {
  it('serializes a single marker', () => {
    const markers = [new MapBoxMarkerConfig({
      map: map,
      position: { latitude: 44, longitude: 45 },
      wrapper: wrapper,
      label: '1'
    })];

    const actual = MapBoxMarkerConfig.serialize(markers);
    const expected = 'pin-s-1(45,44)';

    expect(actual).toEqual(expected);
  });

  it('serializes an array of markers', () => {
    const markers = [new MapBoxMarkerConfig({
      map: map,
      position: { latitude: 44, longitude: 45 },
      label: '1'
    }),
    new MapBoxMarkerConfig({
      map: map,
      position: { latitude: 30, longitude: 31 },
      label: '2'
    })];

    const actual = MapBoxMarkerConfig.serialize(markers);
    const expected = 'pin-s-1(45,44),pin-s-2(31,30)';

    expect(actual).toEqual(expected);
  });

  it('serializes an array of markers using a custom img url', () => {
    const pinConfig = (item, config, marker) => {
      config.staticMapPin = encodeURIComponent('https://' + marker.label + '.png');
      return config;
    };
    const markers = MapBoxMarkerConfig.from([{
      latitude: 44,
      longitude: 45,
      label: '1'
    },
    {
      latitude: 30,
      longitude: 31,
      label: '2'
    }], pinConfig, map);

    const actual = MapBoxMarkerConfig.serialize(markers);
    const expected = 'url-https%3A%2F%2F1.png(45,44),url-https%3A%2F%2F2.png(31,30)';

    expect(actual).toEqual(expected);
  });
});

describe('converts array of markers into MapboxMarkers', () => {
  it('converts array of markers into MapboxMarkers using pinConfig', () => {
    const markers = [
      {
        latitude: 44,
        longitude: 45
      },
      {
        latitude: 24,
        longitude: 25
      }
    ];

    const expected = [
      new MapBoxMarkerConfig({
        map: map,
        position: {
          latitude: 44,
          longitude: 45
        },
        wrapper: wrapper
      }),
      new MapBoxMarkerConfig({
        map: map,
        position: {
          latitude: 24,
          longitude: 25
        },
        wrapper: wrapper
      })
    ];

    const pinConfig = {
      wrapper: `<button>this is the pin</button>`
    };

    const actual = MapBoxMarkerConfig.from(markers, pinConfig, map);

    expect(actual).toEqual(expected);
  });

  it('converts array of markers into MapboxMarkers using pinConfig function', () => {
    const markers = [
      {
        latitude: 44,
        longitude: 45,
        label: '1'
      },
      {
        latitude: 44,
        longitude: 45,
        label: '2'
      }
    ];

    const pinConfigFunc = (item, config, marker) => {
      config.wrapper = `<svg><tspan>${marker.label}</tspan></svg>`;
      return config;
    };

    const expected = [
      new MapBoxMarkerConfig({
        map: map,
        position: {
          latitude: 44,
          longitude: 45
        },
        wrapper: `<svg><tspan>1</tspan></svg>`,
        label: '1'
      }),
      new MapBoxMarkerConfig({
        map: map,
        position: {
          latitude: 44,
          longitude: 45
        },
        wrapper: `<svg><tspan>2</tspan></svg>`,
        label: '2'
      })
    ];

    const actual = MapBoxMarkerConfig.from(markers, pinConfigFunc, map);

    expect(actual).toEqual(expected);
  });
});
