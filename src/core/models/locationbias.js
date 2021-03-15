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

  /*
  * Constructs an SDK LocationBias model from an answers-core LocationBias
  *
  * @param {LocationBias} locationBias from answers-core
  * @returns {LocationBias}
  */
  static fromCore (locationBias) {
    if (!locationBias) {
      return new LocationBias({
        accuracy: 'UNKNOWN'
      });
    }

    return new LocationBias({
      accuracy: locationBias.method,
      latitude: locationBias.latitude,
      longitude: locationBias.longitude,
      locationDisplayName: locationBias.displayName
    });
  }
}
