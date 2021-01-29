/** @module HttpRequester */

/* global fetch, XMLHttpRequest, ActiveXObject */

import { fetch as fetchPolyfill } from 'whatwg-fetch';

/**
 * Types of HTTP requests
 */
const Methods = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete'
};

/**
 * HttpRequester is a wrapper around the native implementation of AJAX
 * related matters. It's used to make all types of network requests
 * and exposes a promise interface.
 */
export default class HttpRequester {
  /**
   * Create a GET HTTP request
   * @param {string} url The url to make a request to
   * @param {Object} data The data to provide (gets encoded into the URL)
   * @param {Object} opts Configuration options to use for the request
   */
  get (url, data, opts) {
    return this.request(Methods.GET, this.encodeParams(url, data), opts);
  }

  /**
   * Create a POST HTTP request
   * @param {string} url The url to make a request to
   * @param {Object} urlParams The params to encode into the URL
   * @param {Object} jsonBody The request body (json) to provide with the POST request
   * @param {Object} requestConfig Configuration options to use for the request
   */
  post (url, urlParams, jsonBody, requestConfig) {
    return this.request(
      Methods.POST,
      this.encodeParams(url, urlParams),
      Object.assign({}, {
        body: JSON.stringify(jsonBody),
        credentials: undefined
      }, requestConfig)
    );
  }

  request (method, url, opts) {
    const reqArgs = Object.assign({}, {
      'method': method,
      'credentials': 'include'
    }, opts);

    return this._fetch(url, reqArgs);
  }

  // TODO (agrow) investigate removing this
  // Use imported fetchPolyfill if it does not already exist on window
  _fetch (url, reqArgs) {
    if (!window.fetch) {
      return fetchPolyfill(url, reqArgs);
    }
    return fetch(url, reqArgs);
  }

  /**
   * Send a beacon to the provided url which will send a non-blocking request
   * to the server that is guaranteed to send before page load. No response is returned,
   * so beacons are primarily used for analytics reporting.
   * @param {string} url The url to send the beacon to
   * @param {object} data The data payload to send in the beacon
   * @return {boolean} true if the request is successfully queued
   */
  beacon (url, data) {
    return this._sendBeacon(url, JSON.stringify(data));
  }

  // TODO (agrow) investigate removing this
  // Navigator.sendBeacon polyfill
  // Combination of the compact Financial Times polyfill:
  // https://github.com/Financial-Times/polyfill-library/blob/master/polyfills/navigator/sendBeacon/polyfill.js
  // with the async-by-default behavior of Miguel Mota's polyfill:
  // https://github.com/miguelmota/Navigator.sendBeacon/blob/master/sendbeacon.js
  _sendBeacon (url, data) {
    if (window.navigator && window.navigator.sendBeacon) {
      return window.navigator.sendBeacon(url, data);
    }

    var event = window.event && window.event.type;
    var sync = event === 'unload' || event === 'beforeunload';
    var xhr = ('XMLHttpRequest' in window) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('POST', url, !sync);
    xhr.setRequestHeader('Accept', '*/*');
    if (typeof data === 'string') {
      xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
    } else if (Object.prototype.toString.call(data) === '[object Blob]') {
      if (data.type) {
        xhr.setRequestHeader('Content-Type', data.type);
      }
    }
    xhr.send(data);
    return true;
  }

  encodeParams (url, params) {
    if (typeof params !== 'object') {
      return;
    }

    let hasParam = url.indexOf('?') > -1;

    let searchQuery = '';
    for (let key in params) {
      if (!hasParam) {
        hasParam = true;
        searchQuery += '?';
      } else {
        searchQuery += '&';
      }

      searchQuery += key + '=' + encodeURIComponent(params[key]);
    }
    return url + searchQuery;
  }
}
