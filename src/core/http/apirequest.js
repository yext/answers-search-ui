import HttpRequester from './httprequester';

/**
 * ApiRequest is the base class for all API requests.
 * It defines all of the core properties required to make a request
 */
export default class ApiRequest {
  constructor(opts = {}) {
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
    this._baseUrl = opts.baseUrl || null;

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
   * @returns {Promise}
   */
  get() {
    return this._requester.get(this._baseUrl + this._endpoint, this.params(this._params));
  }

  params(params) {
    var baseParams = {
      'v': this._version,
      'api_key': this._apiKey
    };
    const urlParams = new URL(window.location.toString()).searchParams;
    if (urlParams.has('beta')) {
      baseParams['beta'] = urlParams.get('beta');
    }

    return Object.assign(baseParams, params || {});
  }
}
