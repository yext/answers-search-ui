export default class Address {
  constructor (profile) {
    /**
     * address line 1
     * @type {string|null}
     */
    this.line1 = profile.address.line1;
    /**
     * address line 2
     * @type {string|null}
     */
    this.line2 = profile.address.line2;
    /**
     * address line 3
     * @type {string|null}
     */
    this.line3 = profile.address.line3;
    /**
     * extra description
     * @type {string|null}
     */
    this.extraDescription = profile.address.extraDescription;
    /**
     * city
     * @type {string|null}
     */
    this.city = profile.address.city;
    /**
     * sublocality (aka neighborhood)
     * @type {string|null}
     */
    this.sublocality = profile.address.sublocality;
    /**
     * postal code or zip code
     * @type {string|null}
     */
    this.postalCode = profile.address.postalCode;
    /**
     * state or region
     * @type {string|null}
     */
    this.region = profile.address.region;
    /**
     * countryCode
     * @type {string|null}
     */
    this.countryCode = profile.address.countryCode;
  }

  formattedLine1 () {
    return `<span class="yxt-Address-line1">${this.line1}</span>`;
  }

  formattedLine2 () {
    return `<span class="yxt-Address-line2">${this.line2}</span>`;
  }

  formattedLine3 () {
    return `<span class="yxt-Address-line3">${this.line3}</span>`;
  }

  formattedExtraDescription () {
    return `<span class="yxt-Address-extraDescription">${this.extraDescription}</span>`;
  }

  formattedCity () {
    return `<span class="yxt-Address-city">${this.city}</span>`;
  }

  formattedRegion () {
    return `<span class="yxt-Address-region">${this.region}</span>`;
  }

  formattedSublocality () {
    return `<span class="yxt-Address-sublocality">${this.sublocality}</span>`;
  }

  formattedPostalCode () {
    return `<span class="yxt-Address-postalCode">${this.postalCode}</span>`;
  }

  formattedCountryCode () {
    return `<span class="yxt-Address-country yxt-Address-country--${this.countryCode.toLowerCase()}">${this.countryCode}</span>`;
  }

  line (content) {
    return `<div class="yxt-AddressRow">${content}</div>`;
  }

  comma () {
    return `<yxt-comma>,</yxt-comma> `;
  }

  container (content) {
    return `<div class="yxt-Address">${content}</div>`;
  }

  /**
   * formatted returns the html formatted address
   * @returns string
   */
  formatted () {
    throw new Error('method not implemented');
  }
}
