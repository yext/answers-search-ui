/** @module LocationBias */

/**
 * LocationBias is the core state model
 * to power the LocationBias component
 */
export default class LocationBias {
  constructor (data) {
    /**
     * The location bias accuracy which are IP, DEVICE and UNKNWON
     * @type {string}
     */
    this.accuracy = data.accuracy || null;

    /**
     * The latitude used for location bias
     * @type {number}
     */
    this.latitude = data.latitude || null;

    /**
     * The longitude used for location bias
     * @type {number}
     */
    this.longitude = data.longitude || null;

    /**
     * The location display name
     * @type {string}
     */
    this.locationDisplayName = data.locationDisplayName || null;
  }

  /**
   * Create a location bias model from the provided data
   * @param {Object} response The location bias response
   */
  static from (response) {
    if (!response) {
      return new LocationBias({
        accuracy: 'UNKNOWN'
      });
    }

    return new LocationBias({
      accuracy: response.accuracy,
      latitude: response.latitude,
      longitude: response.longitude,
      locationDisplayName: response.locationDisplayName
    });
  }
}
