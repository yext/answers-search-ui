const Methods = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
}

export default class HttpRequester {
  constructor() {

  }

  get(url, data, opts) {
    return this.request(Methods.GET, this.encodeParams(url, data), opts)
  }

  post(url, data) {
    return this.request(Methods.POST, url, {
      body: JSON.stringify(data)
    });
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