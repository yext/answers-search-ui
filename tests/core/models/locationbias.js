import LocationBias from '../../../src/core/models/locationbias';

it('constructs a location bias model from an answers-core location bias', () => {
  const coreLocationBias = {
    latitude: 42,
    longitude: 42,
    displayName: 'Earth',
    method: 'DEVICE'
  };

  const expectedLocationBias = {
    latitude: 42,
    longitude: 42,
    locationDisplayName: 'Earth',
    accuracy: 'DEVICE'
  };

  const actualLocationBias = LocationBias.fromCore(coreLocationBias);

  expect(actualLocationBias).toMatchObject(expectedLocationBias);
});
