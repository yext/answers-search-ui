/**
 * The core MapProvider interface to implement for various types of map providers.
 * Implementations should extend this interface
 */
export default class MapProvider {
  constructor (opts = {}) {
    /**
     * The API Key used for interacting with the map provider
     * @type {string}
     */
    this._apiKey = opts.apiKey;

    /**
     * The height of the map to append to the DOM, defaults to 100%
     * @type {number}
     */
    this._height = opts.height || 200;

    /**
     * The width of the map to append to the DOM, defaults to 100%
     * @type {number}
     */
    this._width = opts.width || 600;

    /**
     * The zoom level of the map, defaults to 9
     * @type {number}
     */
    this._zoom = opts.zoom || 9;

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

    this._onLoaded = opts.onLoaded || function () {};

    /**
     * The custom configuration override to use for the map markers
     * @type {Object|Function}
     */
    this._pinConfig = typeof opts.pin === 'function' ? opts.pin : Object.assign(MapProvider.DEFAULT_PIN_CONFIG, opts.pin);
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

  onLoaded (cb) {
    this._onLoaded = cb;
    if (this.isLoaded()) {
      cb();
    }
  }

  isLoaded () {
    return this._isLoaded;
  }

  loadJS () {
    throw new Error('Unimplemented Method: loadJS');
  }

  loadStatic () {
    throw new Error('Unimplemented Method: loadStatic');
  }

  init (mapData) {
    // TODO(billy) This should be based off a promise that gets created from loadJS
    throw new Error('Unimplemented Method: init');
  }
}
