import ApiRequest from '../http/apirequest';

export default class AutoComplete {
  constructor(opts = {}) {
    let params = new URL(window.location.toString()).searchParams;
    let isLocal = params.get('local');

    this._baseUrl = this._isLocal ? 'http://' + window.location.hostname : 'https://liveapi.yext.com';

    this._version = opts.version || 20190101 || 20190301;

    this._apiKey = opts.apiKey || null;

    this._answersKey = opts.answersKey || null;
  }

  query(queryString, experienceKey, barKey) {
    if (experienceKey || barKey) {
      return this._queryVeritcal(queryString, experienceKey, barKey)
    }

    return this._queryUniversal(queryString);
  }

  _queryVeritcal(queryString, experienceKey, barKey) {
    let request = new ApiRequest({
        baseUrl: this._baseUrl,
        endpoint: '/v2/accounts/me/entities/autocomplete',
        apiKey: this._apiKey,
        version: this._version,
        params: {
          'input': queryString,
          'experienceKey': experienceKey,
          'barKey': barKey
        }
      })

    return request.get(queryString)
      .then(response => response.json())
      .then(response => DataTransformer.vertical(response.response, request._params.barKey))
      .catch(error => console.error(error))
  }

  _queryUniversal(queryString) {
    let request = new ApiRequest({
      baseUrl: this._baseUrl,
      endpoint: '/v2/accounts/me/answers/autocomplete',
      apiKey: this._apiKey,
      version: this._version,
      params: {
        'input': queryString,
        'answersKey': this._answersKey
      }
    });

    return request.get(queryString)
      .then(response => response.json())
      .then(response => DataTransformer.universal(response.response))
      .catch(error => console.error(error));
  }
}

// Create our own front-end data models
class DataTransformer {
  static clean(moduleId, data) {
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

  static universal(response) {
    let moduleId = 'autocomplete',
        results = response.results;

    let data = [];
    for (let i = 0; i < results.length; i ++) {
      let value = results[i].value,
          highlightedValue = value,
          subStrings = results[i].matchedSubstrings;

      for (let j = 0; j < subStrings.length; j ++) {
        let start = Number(subStrings[j].offset),
            end = start + subStrings[j].length;

        highlightedValue = [value.slice(0, start), '<strong>', value.slice(start)].join();
        highlightedValue = [value.slice(0, end), '</strong>', value.slice(end)].join();
      }

      data.push({
        shortValue: value,
        highlightedValue: highlightedValue,
      });
    }

    return DataTransformer.clean('autocomplete', {
      'sections': [{
        'results': data
      }]
    });
  }

  static vertical(response, barKey) {
    let moduleId = 'autocomplete.' + barKey,
        sections = response.sections;

    return DataTransformer.clean(moduleId, {
      'sections': sections
    })
  }
}
