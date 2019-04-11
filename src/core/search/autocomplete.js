import HttpRequester from '../http/httprequester';

export default class AutoComplete {
  constructor(opts = {}) {
    let isLocal = true;

    this._requester = new HttpRequester();

    this._baseUrl = isLocal ? 'http://' + window.location.hostname : 'https://liveapi.yext.com';

    this._version = opts.version || 20190101 || 20190301;

    this._apiKey = opts.apiKey || null;

    this._answersKey = opts.answersKey || null;
  }

  query(queryString, barKey) {
    return this._requester
      .get(this._baseUrl + '/v2/accounts/me/entities/autocomplete', this.data({
        'input': queryString,
        'barKey': barKey
      }))
      .then(response => response.json())
      .then(response => DataTransformer.transform(response, barKey))
      .catch(error => console.error(error))
  }

  data(opts) {
    return Object.assign({
      'v': this._version,
      'api_key': this._apiKey,
      'experienceKey': this._answersKey
    }, opts || {});
  }
}

// Create our own front-end data models
class DataTransformer {
  static transform(data, barKey) {
    let sections = data.response.sections;
    let moduleId = 'search.'+barKey;
    return {
       [moduleId]: {
        sections: sections
      }
    };
  }
}
