export default class Formatter {
  /**
   * address returns a US or UK formatted address TODO (bmcginnis): setup full i18n or move server side
   * @param profile {Object} an entity profile
   * @returns string
   */
  static address (profile) {
    return '';
  }

  /**
   * openStatus returns a string representing the open/closed state of an entity that has hours on the profile,
   * e.g. Open Now - Closes 5PM or Closed - Opens at 9am Monday
   * @param profile {Object} an entity profile TODO (bmcginnis): setup full i18n or move server side
   * @returns string
   */
  static openStatus (profile) {
    return '';
  }

  /**
   * phoneLink provides returns a tel: protocol link for a phone number profile field
   * @param profile {Object} an entity profile
   * @param keyPath {string} the profile field or custom field dot-separated key path from which to retrieve the phone number
   * @returns string
   */
  static phoneLink (profile, keyPath = 'mainPhone') {
    return '';
  }

  /**
   * phoneDisplay returns a localized, formatted phone number from the given key path
   * @param profile {Object} an entity profile
   * @param keyPath {string} the profile field or custom field dot-separated key path from which to retrieve the phone number
   * @returns string
   */
  static phoneDisplay (profile, keyPath = 'mainPhone') {
    return '';
  }

  /**
   * getDirectionsUrl returns the Google My Business URL for a given profile,or an or a latitude / longitude based
   * fallback if missing, or an address based fallback if there is no address.
   * @param profile {Object} an entity profile
   * @returns string
   */
  static getDirectionsUrl (profile) {
    return '';
  }

  /**
   * _getProfileFieldAtKeyPath is a helper method for extracting a profile field value from a dot separated key path
   * @param profile {Object} an entity profile
   * @param keyPath {string} the profile field or custom field dot-separated key path from which to retrieve the value
   * @returns {Any|string}
   */
  static _getProfileFieldAtKeyPath (profile, keyPath) {
    return '';
  }

  /**
   * bigDate returns a BigDate for use in an event result
   * @param profile {Object} an entity profile
   * @param keyPath {string} the profile field or custom field dot-separated key path from which to retrieve the date
   * @returns BigDate
   */
  static bigDate (profile, keyPath = 'time.start') {
    const BigDate = {
      date: null,
      month: null
    };
    return Object.create(BigDate);
  }

  /**
   *
   * @param profile {Object} an entity profile
   * @param keyPath {string} the profile field or custom field key from which to retrieve the date range
   * @param dateFormatOptions {Object} a Date.toLocaleString options object
   * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString for details
   * @param separator {string} the separator to use between start & end dates
   * @returns string
   */
  static dateRange (
    profile,
    keyPath = 'time',
    dateFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    },
    separator = '-') {
  }

  /**
   * snakeToTitle convert's snake case strings, such as vertical config ID's to title case strings,
   * for example: frequently_asked_questions would be come Frequently Asked Questions.
   * @param snake {Object} an snake case string, e.g. a_b_c or A_B_C
   * @returns string
   */
  static snakeToTitle (snake) {
    return '';
  }

  /**
   * directAnswer takes a DirectAnswer and applies appropriate field formatting based on the field type,
   * e.g. converting address type fields to formatted address or hours fields to open status.
   * @param answer {DirectAnswer}
   * @returns string
   */
  static directAnswer (answer) {
    return '';
  }
}
