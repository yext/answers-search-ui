import UKAddress from './ukaddress.js';
import USAddress from './usaddress.js';

export default class AddressFactory {
  static addressFrom (profile) {
    if (!profile.address) {
      return null;
    }

    switch (profile.address.countryCode) {
      case 'GB':
        return new UKAddress(profile);
      case 'US':
        return new USAddress(profile);
    }

    return '';
  }
}
