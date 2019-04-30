import HttpRequester from '../http/httprequester';
import SearchDataTransformer from './searchdatatransformer';

export default class Search {
  constructor(opts = {}) {
    let params = new URL(window.location.toString()).searchParams;
    let isLocal = params.get('local');

    this._requester = new HttpRequester();

    this._baseUrl = isLocal ? 'http://' + window.location.hostname : 'https://liveapi.yext.com';

    this._version = opts.version || 20190101 || 20190301;

    this._apiKey = opts.apiKey || null;

    this._answersKey = opts.answersKey || null;

    // http://localhost/v2/accounts/me/answers/query?v=20190301&api_key=0ac3132c65069700209f094b6768fcea&answersKey=abc123&input=panda
  }

  query(queryString) {
    return this._requester
      .get(this._baseUrl + '/v2/accounts/me/answers/query', this.params({
        'input': queryString
      }))
      .then(response => response.json())
      .then(response => SearchDataTransformer.transform(response))
      .catch(error => console.error(error))
  }

  params(opts) {
    return Object.assign({
      'v': this._version,
      'api_key': this._apiKey,
      'answersKey': this._answersKey
    }, opts || {});
  }
}



