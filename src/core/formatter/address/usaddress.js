import Address from './address.js';

export default class USAddress extends Address {
  formatted () {
    let result = '';

    if (this.line1) {
      result += this.line(this.formattedLine1() + ' ');
    }

    if (this.line2) {
      result += this.line(this.formattedLine2() + ' ');
    }

    if (this.line3) {
      result += this.line(this.formattedLine3() + ' ');
    }

    if (this.region || this.postalCode || this.city) {
      let lineContent = '';
      if (this.city) {
        lineContent += this.formattedCity();
      }

      if (this.region || this.postalCode) {
        lineContent += this.comma();
      }

      if (this.region) {
        lineContent += this.formattedRegion() + ' ';
      }

      if (this.postalCode) {
        lineContent += this.formattedPostalCode() + ' ';
      }

      result += this.line(lineContent);
    }

    if (this.countryCode) {
      result += this.line(this.formattedCountryCode());
    }

    return this.container(result);
  }
}
