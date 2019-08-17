import Formatter from '../../../src/core/formatter/formatter.js';

describe('address formatting', () => {
  it('should return null if the profile is missing address', () => {
    expect(Formatter.address({})).toBeNull();
  });
  it('should properly format uk addresses', () => {
    const profile = {
      address: {
        line1: '1 Madison Ave',
        line2: '5th Floor',
        city: 'New York',
        region: 'NY',
        postalCode: '10010',
        countryCode: 'US'
      }
    };
    const expectedFormat = `<div class="yxt-Address"><div class="yxt-AddressRow"><span class="yxt-Address-line1">1 Madison Ave</span> </div><div class="yxt-AddressRow"><span class="yxt-Address-line2">5th Floor</span> </div><div class="yxt-AddressRow"><span class="yxt-Address-city">New York</span><yxt-comma>,</yxt-comma> <span class="yxt-Address-region">NY</span> <span class="yxt-Address-postalCode">10010</span> </div><div class="yxt-AddressRow"><span class="yxt-Address-country yxt-Address-country--us">US</span></div></div>`;

    const actualFormat = Formatter.address(profile);
    expect(actualFormat).toEqual(expectedFormat);
  });

  it('should properly format us addresses', () => {
    const profile = {
      address: {
        line1: '2 Great Titchfield Street',
        line2: '7th Floor, United Kingdom House',
        city: 'London',
        region: 'Greater London',
        sublocality: 'Fitzrovia',
        postalCode: 'W1D 1NN',
        countryCode: 'GB'
      }
    };

    const expectedFormat = `<div class="yxt-Address"><div class="yxt-AddressRow"><span class="yxt-Address-line1">2 Great Titchfield Street</span> </div><div class="yxt-AddressRow"><span class="yxt-Address-line2">7th Floor, United Kingdom House</span> </div><div class="yxt-AddressRow"><span class="yxt-Address-sublocality">Fitzrovia</span> <span class="yxt-Address-city">London</span> <span class="yxt-Address-postalCode">W1D 1NN</span> </div><div class="yxt-AddressRow"><span class="yxt-Address-country yxt-Address-country--gb">GB</span></div></div>`;

    const actualFormat = Formatter.address(profile);
    expect(actualFormat).toEqual(expectedFormat);
  });
});

describe('open status empty or unknown', () => {
  it('should return null if the field is missing', () => {
    expect(Formatter.openStatus({})).toBeNull();
  });
});

describe.each([])('open status message', (profile, currentTime, expectedMessage) => {
  test(`returns ${expectedMessage}`, () => {
    const message = Formatter.openStatus(profile, currentTime);
    expect(message).toBe(expectedMessage);
  });
});

describe('date range formatting', () => {
  it('should return null if the field is missing', () => {
    expect(Formatter.dateRange({})).toBeNull();
  });
  // it('should ')
});
