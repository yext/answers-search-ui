import HttpRequester from './httprequester';

export default class ApiRequest {
  constructor(opts = {}) {
    this._requester = new HttpRequester();

    this._baseUrl = opts.baseUrl || null;

    this._endpoint = opts.endpoint || null;

    this._apiKey = opts.apiKey || null;

    this._answersKey = opts.answersKey;

    this._version = opts.version || 20190101;

    this._params = opts.params || {};
  }

  get(queryString) {
    return this._requester.get(this._baseUrl + this._endpoint, this.params(this._params));
  }

  params(params) {
    return Object.assign({
      'v': this._version,
      'api_key': this._apiKey
    }, params || {});
  }
}