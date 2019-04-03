import HttpRequester from '../network/httprequester';

export default class Search {
  constructor(opts = {}) {
    let isLocal = true;

    this._requester = new HttpRequester();

    this._baseUrl = isLocal ? 'http://' + window.location.hostname : 'https://liveapi.yext.com';

    this._version = opts.version || 20190301;

    this._apiKey = opts.apiKey || '0ac3132c65069700209f094b6768fcea';

    this._answersKey = opts.answersKey || 'abc123';

    // http://localhost/v2/accounts/me/answers/query?v=20190301&api_key=0ac3132c65069700209f094b6768fcea&answersKey=abc123&input=panda
  }

  query(queryString) {
    return this._requester
      .get(this._baseUrl + '/v2/accounts/me/answers/query', this.data({
        'input': queryString
      }))
      .then(response => response.json())
      .then(response => DataTransformer.transform(response))
      .catch(error => console.error(error))
  }

  data(opts) {
    return Object.assign({
      'v': this._version,
      'api_key': this._apiKey,
      'answersKey': this._answersKey
    }, opts || {});
  }
}

// Create our own front-end data models
class DataTransformer {
  static transform(data) {
    let sections = data.response.modules;

    return {
      universalResults: {
        sections: sections
      }
    };
  }
}