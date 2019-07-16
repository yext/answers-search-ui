/** @module SearchParams */

/**
 * SearchParams is a class to get the search params in a URL.
 * It is a replacement for URL.searchParams and URLSearchParams for browsers like IE11
 */
export default class SearchParams {
  constructor (url) {
    if (window.URLSearchParams) {
      return new URLSearchParams(url);
    } else {
      this.params = this.parse(url);
    }
  }

  parse (url) {
    let mapping = {};
    let search = url;
    if (url.indexOf('?') > -1) {
      search = url.slice(url.indexOf('?'));
    }
    if (search === '') {
      return mapping;
    }
    const keyVals = search.split('&');
    for (let keyVal of keyVals) {
      let split = keyVal.split('=');
      if (split.length > 1) {
        mapping[split[0]] = this.decode(split[1]);
      } else {
        mapping[split[0]] = '';
      }
    }
    return mapping;
  }

  get (query) {
    return this.params[query];
  }

  set (name, value) {
    this.params[name] = value;
  }

  has (query) {
    return query in this.params;
  }

  toString () {
    let string = [];
    for (let key in this.params) {
      string.push(`${key}=${this.encode(this.params[key])}`);
    }
    return string.join('&');
  }

  decode (string) {
    return decodeURIComponent(string.replace(/[ +]/g, '%20'));
  }

  encode (string) {
    let replace = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
    };
    return encodeURIComponent(string).replace(/[!'()]/g, function (match) {
      return replace[match];
    });
  }
}
