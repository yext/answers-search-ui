/** @module LocationBias */

import SearchStates from '../storage/searchstates';

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

    /**
     * Whether the search is loading or completed
     */
    this.searchState = data.searchState;
  }

  /**
   * Construct a LocationBias object representing loading results
   * @return {LocationBias}
   */
  static searchLoading () {
    return new LocationBias({ searchState: SearchStates.SEARCH_LOADING });
  }

  /*
  * Constructs an SDK LocationBias model from an search-core LocationBias
  *
  * @param {LocationBias} locationBias from search-core
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
      locationDisplayName: locationBias.displayName,
      searchState: SearchStates.SEARCH_COMPLETE
    });
  }
}
