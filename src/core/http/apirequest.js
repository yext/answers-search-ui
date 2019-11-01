/** @module ApiRequest */

import HttpRequester from './httprequester';
import { API_BASE_URL, LIB_VERSION } from '../constants';
import SearchParams from '../../ui/dom/searchparams'; // TODO ideally this would be passed in as a param

/**
 * ApiRequest is the base class for all API requests.
 * It defines all of the core properties required to make a request
 */
export default class ApiRequest {
  constructor (opts = {}) {
    /**
     * An abstraction used for making network request and handling errors
     * @type {HttpRequester}
     * @private
     */
    this._requester = new HttpRequester();

    /**
     * The baseUrl to use for making a request
     * @type {string}
     * @private
     */
    this._baseUrl = opts.baseUrl || API_BASE_URL;

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
  }

  /**
   * get creates a new `GET` request to the server using the configuration of the request class
   * @returns {Promise<Response>}
   */
  get () {
    return this._requester.get(
      this._baseUrl + this._endpoint,
      Object.assign({}, this.baseParams(), this.sanitizeParams(this._params))
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
      'jsLibVersion': LIB_VERSION
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
