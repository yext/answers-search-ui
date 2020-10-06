import mockManager from '../../../setup/managermocker';
import FilterNodeFactory from 'src/core/filters/filternodefactory';
import Filter from 'src/core/models/filter';
import FilterMetadata from '../../../../src/core/filters/filtermetadata';

describe('GeoLocationFilter', () => {
  let setStaticFilterNodes, COMPONENT_MANAGER, getCurrentPosition;

  beforeEach(() => {
    setStaticFilterNodes = jest.fn();
    getCurrentPosition = jest.fn();
    COMPONENT_MANAGER = mockManager({ setStaticFilterNodes });

    const mockGeolocation = { getCurrentPosition };
    global.navigator.geolocation = mockGeolocation;
  });

  it('builds FilterNodes correctly for manually choosing a location', () => {
    const title = 'abcdefg';
    const config = { title };
    const geolocation = COMPONENT_MANAGER.create('GeoLocationFilter', config);
    const query = 'Herndon, Virginia, USA, EARTH, MILKY WAY, UNIVERSE 7';
    const filter = JSON.stringify({ 'builtin.location': { $eq: 'P-place.9519240260937770' } });
    geolocation._handleSubmit(query, filter);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(1);
    const filterNode = setStaticFilterNodes.mock.calls[0][1];
    const expectedFilterNode = FilterNodeFactory.from({
      filter: Filter.fromResponse(filter),
      metadata: {
        fieldName: title,
        displayValue: `${query}`
      }
    });
    expect(filterNode.filter).toEqual(expectedFilterNode.filter);
    expect(filterNode.metadata).toEqual(expectedFilterNode.metadata);
  });

  it('builds FilterNodes correctly when "use my location" is clicked', () => {
    const title = 'abcdefg';
    const config = { title };
    const geolocation = COMPONENT_MANAGER.create('GeoLocationFilter', config);
    geolocation._toggleGeoFilter();
    expect(getCurrentPosition.mock.calls).toHaveLength(1);
    const positionCallback = getCurrentPosition.mock.calls[0][0];
    expect(typeof positionCallback).toEqual('function');
    const mockPosition = {
      coords: {
        latitude: 123,
        longitude: 456,
        accuracy: 999999
      }
    };
    expect(setStaticFilterNodes.mock.calls).toHaveLength(0);
    positionCallback(mockPosition);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(1);
    const filterNode = setStaticFilterNodes.mock.calls[0][1];
    expect(filterNode.filter).toEqual(Filter.position(123, 456, 999999));
    expect(filterNode.metadata).toEqual(new FilterMetadata({
      displayValue: 'Current Location',
      fieldName: title
    }));
  });
});
