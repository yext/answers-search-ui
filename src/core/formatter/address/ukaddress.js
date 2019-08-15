import Address from './address.js';

export default class UKAddress extends Address {
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

    if (this.sublocality || this.postalCode || this.city) {
      let lineContent = '';

      if (this.sublocality) {
        lineContent += this.formattedSublocality();
      }

      if (this.city || this.postalCode) {
        lineContent += ' ';
      }

      if (this.city) {
        lineContent += this.formattedCity();

        if (this.postalCode) {
          lineContent += ' ';
        }
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
