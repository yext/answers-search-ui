import { localizedDistance } from '../../../src/core/utils/i18nutils';

describe('localizedDistance', () => {
  const givenDistance = 10000000; // Distance in meters

  it('Formats a distance in kilometers', () => {
    const distance = localizedDistance(givenDistance, 'en-GB');
    expect(distance).toEqual('10,000.0 km');
  });

  it('Formats a distance in miles', () => {
    const distance = localizedDistance(givenDistance, 'en');
    expect(distance).toEqual('6,213.7 mi');
  });

  it('Fallbacks to miles', () => {
    const distance = localizedDistance(givenDistance, 'unknown-unit');
    expect(distance).toEqual('6,213.7 mi');
  });

  it('Correctly formats distance for French display', () => {
    const distance = localizedDistance(givenDistance, 'fr');
    expect(distance).toEqual('10 000,0 km');
  });

  it('Correctly formats distance for Spanish display', () => {
    const distance = localizedDistance(givenDistance, 'es');
    expect(distance).toEqual('10.000,0 km');
  });

  it('Correctly formats distance for Italian display', () => {
    const distance = localizedDistance(givenDistance, 'it');
    expect(distance).toEqual('10.000,0 km');
  });

  it('Correctly formats distance for German display', () => {
    const distance = localizedDistance(givenDistance, 'de');
    expect(distance).toEqual('10.000,0 km');
  });

  it('Correctly formats distance for Japan display', () => {
    const distance = localizedDistance(givenDistance, 'ja');
    expect(distance).toEqual('10,000.0 km');
  });
});
