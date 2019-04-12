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

  query(queryString, experienceKey, barKey) {
    return this._requester
      .get(this._baseUrl + '/v2/accounts/me/entities/autocomplete', this.data({
        'input': queryString,
        'experienceKey': experienceKey,
        'barKey': barKey
      }))
      .then(response => response.json())
      .then(response => DataTransformer.transform(response, barKey))
      .catch(error => console.error(error))
  }

  data(opts) {
    return Object.assign({
      'v': this._version,
      'api_key': this._apiKey
    }, opts || {});
  }
}

// Create our own front-end data models
class DataTransformer {
  static transform(data, barKey) {
    let moduleId = 'search.'+barKey;

    data = {
      sections: data.response.sections
    }

    if (data.sections && data.sections.length === 0) {
      delete data.sections;
    }

    if (data.sections && data.sections.length === 1 && data.sections[0].results.length === 0) {
      delete data.sections;
    }

    return {
       [moduleId]: data
    };
  }
}
