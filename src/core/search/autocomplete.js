import HttpRequester from '../http/httprequester';

class UniversalAutoCompleteRequest {
  constructor(opts = {}) {
    this._requester = new HttpRequester();

    this._baseUrl = opts.baseUrl || null;

    this._apiKey = opts.apiKey || null;

    this._answersKey = opts.answersKey;

    this._version = opts.version || 20190101;
  }

  get(queryString) {
    return this._requester
      .get(this._baseUrl + '/v2/accounts/me/answers/autocomplete', this.params(queryString))
      .then(response => response.json())
      .then(response => DataTransformer.transform(response))
      .catch(error => console.error(error))

    return this._requester;
  }

  params(query) {
    return Object.assign({
      'input': query,
      'v': this._version,
      'api_key': this._apiKey,
      'answersKey': this._answersKey
    });
  }
}


class VSAutoCompleteRequest {
  constructor(opts = {}) {
    this._requester = new HttpRequester();

    this._baseUrl = opts.baseUrl || null;

    this._apiKey = opts.apiKey || null;

    this._answersKey = opts.answersKey;

    this._version = opts.version || 20190101;
  }

  get(queryString, experienceKey, barKey) {
      return this._requester
        .get(this._baseUrl + '/v2/accounts/me/entities/autocomplete', this.params({
          'input': queryString,
          'barKey': barKey,
          'experienceKey': experienceKey
        }))
        .then(response => response.json())
        .then(response => DataTransformer.transform(response, barKey))
        .catch(error => console.error(error))
  }

  params(opts) {
    return Object.assign({
      'v': this._version,
      'api_key': this._apiKey
    }, opts || {});
  }
}

export default class AutoComplete {
  constructor(opts = {}) {
    this._isLocal = true;

    this._requester = new HttpRequester();

    this._baseUrl = this._isLocal ? 'http://' + window.location.hostname : 'https://liveapi.yext.com';

    this._version = opts.version || 20190101 || 20190301;

    this._apiKey = opts.apiKey || null;

    this._answersKey = opts.answersKey || null;
  }

  query(queryString, experienceKey, barKey) {
    if (experienceKey && barKey) {
      return new VSAutoCompleteRequest({
        apiKey: this._apiKey,
        version: this._version,
        baseUrl: this._baseUrl,
      }).get(queryString, experienceKey, barKey);
    } else {
      return new UniversalAutoCompleteRequest({
        apiKey: this._apiKey,
        answersKey: this._answersKey,
        version: this._version,
        baseUrl: this._baseUrl
      }).get(queryString);
    }
  }
}

// Create our own front-end data models
class DataTransformer {
  static transform(data, barKey) {
    let moduleId = 'autocomplete';
    if (barKey !== undefined) {
      moduleId = 'autocomplete.' + barKey;
    }

    if (!data.response.sections) {
      data = {
        sections: [{
          'results': DataTransformer.universalResults(data.response.results)
        }]
      }
    } else {
      data = {
        sections: data.response.sections
      }
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

  static universalResults(results) {
    let data = [];
    for (let i = 0; i < results.length; i ++) {
      let value = results[i].value,
          highlightedValue = value,
          subStrings = results[i].matchedSubstrings;

      console.log(subStrings);
      for (let j = 0; j < subStrings.length; j ++) {
        let start = subStrings[j].offset,
            end = start + subStrings[j].length;

        highlightedValue = [value.slice(0, start), '<strong>', value.slice(start)].join();
        highlightedValue = [value.slice(0, end), '</strong>', value.slice(end)].join();
      }

      data.push({
        shortValue: value,
        highlightedValue: highlightedValue,
      });
    }
    return data;
  }
}
