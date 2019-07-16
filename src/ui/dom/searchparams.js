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

    if (window.URLSearchParams) {
      return new URLSearchParams(url);
    } else {
      this._params = this.parse(url);
    }
  }

  /**
   * parse creates a mapping of all query params in a given url
   * The query param values are decoded before being put in the map
   * @param {string} url The url
   * @returns {Object} mapping from query param -> value
   */
  parse (url) {
    let mapping = {};
    let search = url;
    if (url.indexOf('?') > -1) {
      search = url.slice(url.indexOf('?') + 1);
    }
    if (search === '') {
      return mapping;
    }
    const keyVals = search.split('&');
    for (let keyVal of keyVals) {
      let split = keyVal.split('=');
      if (split.length > 1) {
        mapping[split[0]] = SearchParams.decode(split[1]);
      } else {
        mapping[split[0]] = '';
      }
    }
    return mapping;
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
