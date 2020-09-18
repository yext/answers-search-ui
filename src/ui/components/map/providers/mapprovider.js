/** @module MapProvider */

import ResultsContext from '../../../../core/storage/resultscontext';

/**
 * A MapProvider is an interface that represents that should be implemented
 * in order to integrate with a Third Party Map provider for
 * interactive maps. MapProviders are used by the MapComponent.
 *
 * Implementations should extend this interface.
 */
export default class MapProvider {
  constructor (config = {}) {
    /**
     * The API Key used for interacting with the map provider
     * @type {string}
     */
    this._apiKey = config.apiKey;

    /**
     * The zoom level of the map, defaults to 14
     * @type {number}
     */
    this._zoom = config.zoom || 14;

    /**
     * The default coordinates to display if there are no results returned
     * Only used if showEmptyMap is set to true
     * @type {Object}
     */
    this._defaultPosition = config.defaultPosition || { lat: 37.0902, lng: -95.7129 };

    /**
     * Configuration for the behavior when there are no vertical results.
     * @type {Object}
     */
    this._noResults = config.noResults || {};

    /**
     * Determines if an empty map should be shown when there are no results
     * @type {boolean}
     */
    this._showEmptyMap = config.showEmptyMap || false;

    /**
     * A reference to the underlying map instance, created by the external lib.
     * @type {number}
     */
    this._map = null;

    /**
     * Temporary boolean tracking whether or not the external JS library is loaded (see TODO below)
     * @type {boolean}
     */
    this._isLoaded = false;

    /**
     * Callback to invoke when a pin is clicked. The clicked item(s) are passed to the callback
     * @type {function}
     */
    this._onPinClick = config.onPinClick || null;

    /**
     * Callback to invoke when a pin is hovered. The hovered item is passed to the callback
     * @type {function}
     */
    this._onPinMouseOver = config.onPinMouseOver || null;

    /**
     * Callback to invoke when a pin is no longer hovered after being hovered.
     * The hovered item is passed to the callback
     * @type {function}
     */
    this._onPinMouseOut = config.onPinMouseOut || null;

    /**
     * Callback to invoke once the Javascript is loaded
     * @type {function}
     */
    this._onLoaded = config.onLoaded || function () {};

    /**
     * The custom configuration override to use for the map markers
     * @type {Object|Function}
     */
    this._pinConfig = typeof config.pin === 'function' ? config.pin : Object.assign(MapProvider.DEFAULT_PIN_CONFIG, config.pin);

    /**
     * Determines whether or not to collapse pins at the same lat/lng
     * @type {boolean}
     */
    this._collapsePins = config.collapsePins || false;

    /**
     * Locale of the map. MapComponent supplies the locale specifed by
     * ANSWERS.init() by default
     * @type {string}
     */
    this._locale = this._getValidatedLocale(config.locale);
  }

  /**
   * Returns the locale if it passes validation, otherwise returns 'en'
   * @param {string} locale
   */
  _getValidatedLocale (locale) {
    if (locale.length < 2) {
      console.error(`Locale '${locale}' must include at least two characters. Falling back to 'en'`);
      return 'en';
    }
    return locale;
  }

  /**
   * The default configuration to use for the map markers
   * @type {Object}
   * TODO(billy) Create a configuration model
   */
  static get DEFAULT_PIN_CONFIG () {
    return {
      icon: {
        anchor: null, // e.g. { x: 1, y: 1 }
        svg: null,
        url: null,
        scaledSize: null // e.g. { w: 20, h: 20 }
      },
      labelType: 'numeric'
    };
  }

  static shouldHideMap (mapData, resultsContext, showEmptyMap, visibleForNoResults) {
    if (resultsContext === ResultsContext.NO_RESULTS && visibleForNoResults !== undefined) {
      return !visibleForNoResults;
    }
    const hasEmptyMap = !mapData || mapData.mapMarkers.length <= 0;
    return hasEmptyMap && !showEmptyMap;
  }

  onLoaded (cb) {
    if (typeof cb !== 'function') {
      return;
    }

    this._onLoaded = cb;
    if (this.isLoaded()) {
      this._onLoaded();
    }
  }

  isLoaded () {
    return this._isLoaded;
  }

  loadJS () {
    throw new Error('Unimplemented Method: loadJS');
  }

  init (mapData) {
    // TODO(billy) This should be based off a promise that gets created from loadJS
    throw new Error('Unimplemented Method: init');
  }

  /**
   * Given a list of markers, combine markers with the same lat/lng into a single marker
   * @param {object[]} markers The markers to collapse
   */
  _collapseMarkers (markers) {
    const locationToItem = {};
    markers.forEach(m => {
      locationToItem[`${m.latitude}${m.longitude}`]
        ? locationToItem[`${m.latitude}${m.longitude}`].push(m)
        : locationToItem[`${m.latitude}${m.longitude}`] = [m];
    });

    const collapsedMarkers = [];
    for (let [, markers] of Object.entries(locationToItem)) {
      if (markers.length > 1) {
        const collapsedMarker = {
          item: markers.map(m => m.item),
          label: markers.length,
          latitude: markers[0].latitude,
          longitude: markers[0].longitude
        };
        collapsedMarkers.push(collapsedMarker);
      } else {
        collapsedMarkers.push(markers[0]);
      }
    }

    return collapsedMarkers;
  }
}
