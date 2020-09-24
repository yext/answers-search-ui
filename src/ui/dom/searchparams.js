/** @module SearchParams */

/* global window */

/**
 * SearchParams is a class to get the search params in a URL.
 * It is a replacement for URL.searchParams and URLSearchParams for browsers like IE11
 */
export default class SearchParams {
  constructor (url) {
    /**
     * Mapping of all query parameters in the given url, query param -> value
     * Only used if URLSearchParams does not exist in the window
     * @type {Object}
     * @private
     */
    this._params = {};

    if (window && window.URLSearchParams) {
      return new URLSearchParams(url);
    } else {
      this._params = this.parse(url);
    }
  }

  /**
   * parse creates a mapping of all query params in a given url
   * The query param values are decoded before being put in the map
   * Three types of input are supported
   *   (1) full URL e.g. http://www.yext.com/?q=hello
   *   (2) params with ? e.g. ?q=hello
   *   (1) params without ? e.g. q=hello
   * @param {string} url The url
   * @returns {Object} mapping from query param -> value where value is '' if no value is provided
   */
  parse (url) {
    let params = {};
    let search = url;

    if (!search) {
      return params;
    }

    // Normalize all url inputs to string of query params separated by &
    if (url.indexOf('?') > -1) {
      search = url.slice(url.indexOf('?') + 1);
    }

    const encodedParams = search.split('&');
    for (let i = 0; i < encodedParams.length; i++) {
      const keyVal = encodedParams[i].split('=');
      if (keyVal.length > 1) {
        params[keyVal[0]] = SearchParams.decode(keyVal[1]);
      } else {
        params[keyVal[0]] = '';
      }
    }

    return params;
  }

  /**
   * get returns the value of the given query param
   * @param {string} query the query param key to get the value of
   * @return {string} param value, null otherwise
   */
  get (query) {
    if (typeof this._params[String(query)] === 'undefined') {
      return null;
    }
    return this._params[query];
  }

  /**
   * set changes the value of a given query param
   * @param {string} name the query param key
   * @param {string} value the value of the query param update with
   */
  set (name, value) {
    this._params[String(name)] = String(value);
  }

  /**
   * has checks to see if the given query param key exists in the params object
   * @param {string} query the query param to check
   * @return {boolean} true if the query param is in the params object, false o/w
   */
  has (query) {
    return query in this._params;
  }

  /**
   * delete removes the given query param and its associated value from the params object
   * @param {string} name the query param key
   */
  delete (name) {
    delete this._params[String(name)];
  }

  /**
   * toString returns a url with all the query params in the params object (without a ?)
   * @return {string}
   */
  toString () {
    let string = [];
    for (let key in this._params) {
      string.push(`${key}=${SearchParams.encode(this._params[key])}`);
    }
    return string.join('&');
  }

  entries () {
    let entries = [];
    for (let key in this._params) {
      entries.push([key, this._params[key]]);
    }
    return entries;
  }

  /**
   * decode returns the decoded representation of the given string
   * @param {string} string the string to decode
   * @return {string}
   */
  static decode (string) {
    return decodeURIComponent(string.replace(/[ +]/g, '%20'));
  }

  /**
   * decode returns the encoded representation of the given string (e.g. + -> %2B)
   * @param {string} string the string to encode
   * @return {string}
   */
  static encode (string) {
    let replace = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '%20': '+'
    };
    return encodeURIComponent(string).replace(/[!'()]|%20/g, function (match) {
      return replace[match];
    });
  }
}
