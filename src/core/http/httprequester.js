/**
 * Types of HTTP requests
 */
const Methods = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
}

export default class HttpRequester {
  constructor() {

  }

  /**
   * Create a GET HTTP request
   * @param {string} url The url to make a request to
   * @param {Object} data The data to provide (gets encoded into the URL)
   * @param {Object} opts Configuration options to use for the request
   */
  get(url, data, opts) {
    return this.request(Methods.GET, this.encodeParams(url, data), opts)
  }

  /**
   * Create a POST HTTP request
   * @param {string} url The url to make a request to
   * @param {Object} data The data to provide (gets encoded into the URL)
   * @param {Object} opts Configuration options to use for the request
   */
  post(url, data, opts) {
    return this.request(
      Methods.POST,
      url,
      Object.assign({
        body: JSON.stringify(data)
      }, opts)
    );
  }

  request(method, url, opts) {
    return fetch(url, Object.assign({
      method: 'get',
      credentials: 'include'
    }, opts));
  }

  encodeParams(url, params) {
    let hasParam = url.indexOf('?') > -1;
    for (let key in params) {
      if (!hasParam) {
        hasParam = true;
        url += '?';
      } else {
        url += '&';
      }

      url += key + '=' + params[key];
    }
    return url;
  }
}