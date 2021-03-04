/** @module ApiRequest */

import HttpRequester from './httprequester';
import { LIB_VERSION, PRODUCTION } from '../constants';
import SearchParams from '../../ui/dom/searchparams'; // TODO ideally this would be passed in as a param

export default class ApiRequest {
  constructor (opts = {}) {
    /**
     * An abstraction used for making network request and handling errors
     * @type {HttpRequester}
     * @private
     */
    this._requester = new HttpRequester();

    /**
     * The environment the request should be made to
     * @type {string}
     * @private
     */
    this._environment = opts.environment || PRODUCTION;

    /**
     * The baseUrl to use for making a request
     * @type {string}
     * @private
     */
    this._baseUrl = opts.baseUrl;

    /**
     * The endpoint to use in the url (appended to the {baseUrl})
     * @type {string}
     * @private
     */
    this._endpoint = opts.endpoint || null;

    /**
     * The API Key to use for the request
     * @type {string}
     * @private
     */
    this._apiKey = opts.apiKey || null;

    /**
     * The version of the API to make a request to
     * @type {string}
     * @private
     */
    this._version = opts.version || 20190101;

    /**
     * Additional data params that are sent along with the request
     * @type {string}
     * @private
     */
    this._params = opts.params || {};

    this._sessionTrackingEnabled = opts.sessionTrackingEnabled;
  }

  /**
   * get creates a new `GET` request to the server using the configuration of the request class
   *
   * @param {Object} opts Any configuration options to use for the GET request.
   * @returns {Promise<Response>}
   */
  get (opts) {
    return this._requester.get(
      this._baseUrl + this._endpoint,
      Object.assign({}, this.baseParams(), this.sanitizeParams(this._params)),
      opts
    );
  }

  /**
   * @param {Object} opts
   * @returns {Promise<Response>}
   */
  post (opts) {
    return this._requester.post(
      this._baseUrl + this._endpoint,
      this.baseParams() /* urlParams */,
      this.sanitizeParams(this._params) /* jsonBody */,
      opts /* requestConfig */);
  }

  /**
   * @returns {Object}
   * @private
   */
  baseParams () {
    let baseParams = {
      'v': this._version,
      'api_key': this._apiKey,
      'jsLibVersion': LIB_VERSION,
      'sessionTrackingEnabled': this._sessionTrackingEnabled
    };

    const urlParams = new SearchParams(window.location.search.substring(1));
    if (urlParams.has('beta')) {
      baseParams['beta'] = urlParams.get('beta');
    }

    return baseParams;
  }

  sanitizeParams (params = {}) {
    // Remove any paramaters whos value is `undefined`.
    //
    // NOTE(billy) Probably better to be explicit about how to handle this at the request building level,
    // but I can't see any cases where we'd ever want to send 'undefined' as a value to the server.
    // So it's probably fine to 'clean' the params object here
    Object.keys(params).forEach(key => {
      if (params[key] === undefined || params[key] === null) {
        delete params[key];
      }
    });

    return params;
  }
}
