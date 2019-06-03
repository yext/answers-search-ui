/**
 * The core MapProvider interface to implement for various types of map providers.
 * Implementations should extend this interface
 */
export default class MapProvider {
  constructor(opts = {}) {
    /**
     * The API Key used for interacting with the map provider
     * @type {string}
     */
    this._apiKey = opts.mapApiKey;

    /**
     * The height of the map to append to the DOM, defaults to 100%
     * @type {number}
     */
    this._height = opts.height || '100%';

    /**
     * The width of the map to append to the DOM, defaults to 100%
     * @type {number}
     */
    this._width = opts.width || '100%';

    /**
     * The zoom level of the map, defaults to 20
     * @type {number}
     */
    this._zoom = opts.zoom || 20;

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
  }

  isLoaded() {
    return this._isLoaded;
  }

  loadJS() {
    throw new Error('Unimplemented Method: loadJS');
  }

  init(mapData) {
    // TODO(billy) This should be based off a promise that gets created from loadJS
    throw new Error('Unimplemented Method: init')
  }
}