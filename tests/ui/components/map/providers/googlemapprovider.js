import { GoogleMapMarkerConfig } from '../../../../../src/ui/components/map/providers/googlemapprovider';

window.google = {};
window.google.maps = {
  Point: (a, b) => { return { x: a, y: b }; },
  Size: (a, b, c, d) => { return { width: a, height: b, l: c, j: d }; }
};

const map = { tmp: 'test value' };

describe('create GoogleMapMarkerConfig', () => {
  it('constructs a GoogleMapMarkerConfig with provided options', () => {
    const googleMapMarkerConfig = new GoogleMapMarkerConfig({
      map: map,
      position: { lat: 91.234, lng: 71.578 },
      icon: {
        anchor: { x: 0, y: 0 },
        url: 'url/path.svg',
        scaledSize: { w: 0, h: 0 }
      },
      label: 'test label'
    });

    const expected = {
      map: map,
      position: { lat: 91.234, lng: 71.578 },
      icon: {
        anchor: { x: 0, y: 0 },
        url: 'url/path.svg',
        scaledSize: { w: 0, h: 0 }
      },
      label: 'test label'
    };

    expect(googleMapMarkerConfig).toMatchObject(expected);
  });
});

describe('serizalize an array of GoogleAPIMarker configs', () => {
  it('serializes a single marker', () => {
    const markers = [new GoogleMapMarkerConfig({
      map: map,
      position: { lat: 44, lng: 45 },
      icon: {
        anchor: { x: 0, y: 0 },
        scaledSize: { width: 0, height: 0, j: undefined, l: undefined },
        url: 'data:image/svg+xml;charset=utf-8, %3Csvg%3E%3Cpath%3E%3C%2Fpath%3E%3C%2Fsvg%3E'
      },
      label: '1'
    })];

    const actual = GoogleMapMarkerConfig.serialize(markers);
    const expected = 'markers=label:1|44,45';

    expect(actual).toEqual(expected);
  });

  it('serializes an array of markers', () => {
    const markers = [new GoogleMapMarkerConfig({
      map: map,
      position: { lat: 44, lng: 45 },
      icon: {
        anchor: { x: 0, y: 0 },
        scaledSize: { width: 0, height: 0, j: undefined, l: undefined },
        url: 'data:image/svg+xml;charset=utf-8, %3Csvg%3E%3Cpath%3E%3C%2Fpath%3E%3C%2Fsvg%3E'
      },
      label: '1'
    }),
    new GoogleMapMarkerConfig({
      map: map,
      position: { lat: 30, lng: 31 },
      icon: {
        anchor: { x: 0, y: 0 },
        scaledSize: { width: 0, height: 0, j: undefined, l: undefined },
        url: 'data:image/svg+xml;charset=utf-8, %3Csvg%3E%3Cpath%3E%3C%2Fpath%3E%3C%2Fsvg%3E'
      },
      label: '2'
    })];

    const actual = GoogleMapMarkerConfig.serialize(markers);
    const expected = 'markers=label:1|44,45&markers=label:2|30,31';

    expect(actual).toEqual(expected);
  });
});

describe('converts array of markers into GoogleAPIMarkers', () => {
  it('converts array of markers into GoogleAPIMarkers using pinConfigFunction', () => {
    const markers = [
      {
        label: '1',
        latitude: 44,
        longitude: 45
      },
      {
        label: '2',
        latitude: 44,
        longitude: 45
      }
    ];

    const expected = [
      new GoogleMapMarkerConfig({
        map: map,
        position: {
          lat: 44,
          lng: 45
        },
        icon: {
          anchor: { x: 0, y: 0 },
          scaledSize: { width: 0, height: 0, j: undefined, l: undefined },
          url: 'data:image/svg+xml;charset=utf-8, %3Csvg%3E%3Cpath%3E%3C%2Fpath%3E%3C%2Fsvg%3E'
        },
        label: '1'
      }),
      new GoogleMapMarkerConfig({
        map: map,
        position: {
          lat: 44,
          lng: 45
        },
        icon: {
          anchor: { x: 0, y: 0 },
          scaledSize: { width: 0, height: 0, j: undefined, l: undefined },
          url: 'data:image/svg+xml;charset=utf-8, %3Csvg%3E%3Cpath%3E%3C%2Fpath%3E%3C%2Fsvg%3E'
        },
        label: '2'
      })
    ];

    const pinConfig = {
      anchor: { x: 0, y: 0 },
      scaledSize: { w: 0, h: 0 },
      svg: '<svg><path></path></svg>'
    };

    const actual = GoogleMapMarkerConfig.from(markers, pinConfig, map);

    expect(actual).toEqual(expected);
  });

  it('converts array of markers into GoogleAPIMarkers using pinConfig function', () => {
    const markers = [
      {
        label: '1',
        latitude: 44,
        longitude: 45
      },
      {
        label: '2',
        latitude: 44,
        longitude: 45
      }
    ];

    const pinConfigFunc = (item, config, marker) => {
      config.label = {
        text: marker.label.toString(),
        color: 'red'
      };

      config.anchor = { x: 0, y: 0 };
      config.scaledSize = { w: 0, h: 0 };
      config.svg = '<svg><path></path></svg>';

      return config;
    };

    const expected = [
      new GoogleMapMarkerConfig({
        map: map,
        position: { lat: 44, lng: 45 },
        icon: {
          anchor: { x: 0, y: 0 },
          scaledSize: { width: 0, height: 0, j: undefined, l: undefined },
          url: 'data:image/svg+xml;charset=utf-8, %3Csvg%3E%3Cpath%3E%3C%2Fpath%3E%3C%2Fsvg%3E'
        },
        label: { text: '1', color: 'red' }
      }),
      new GoogleMapMarkerConfig({
        map: map,
        position: { lat: 44, lng: 45 },
        icon: {
          anchor: { x: 0, y: 0 },
          scaledSize: { width: 0, height: 0, j: undefined, l: undefined },
          url: 'data:image/svg+xml;charset=utf-8, %3Csvg%3E%3Cpath%3E%3C%2Fpath%3E%3C%2Fsvg%3E'
        },
        label: {
          text: '2',
          color: 'red'
        }
      })
    ];

    const actual = GoogleMapMarkerConfig.from(markers, pinConfigFunc, map);

    expect(actual).toEqual(expected);
  });
});
