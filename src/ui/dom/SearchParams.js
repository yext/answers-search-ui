export default class SearchParams {
  constructor (url) {
    this.useNative = false;
    if (window.URLSearchParams) {
      this.useNative = true;
      this.params = new URLSearchParams(url);
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
        mapping[split[0]] = split[1];
      } else {
        mapping[split[0]] = '';
      }
    }
    return mapping;
  }

  get (query) {
    if (this.useNative === true) {
      return this.params.get(query);
    }
    return this.params[query];
  }

  set (name, value) {
    if (this.useNative === true) {
      this.params.set(name, value);
    }
    this.params[name] = value;
  }

  has (query) {
    if (this.useNative === true) {
      return this.params.get(query);
    }
    return query in this.params;
  }

  toString () {
    if (this.useNative === true) {
      return this.params.toString();
    }
    let string = [];
    for (let key of this.params) {
      string.push(`${key}=${this.params[key]}`);
    }
    return string.join('&');
  }

  encode (string) {
    // from https://github.com/jerrybendy/url-search-params-polyfill/blob/master/index.js
    var replace = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\x00'
    };
    return encodeURIComponent(string).replace(/[!'()~]|%20|%00/g, function (match) {
      return replace[match];
    });
  }
}
