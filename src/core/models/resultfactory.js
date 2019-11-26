/** @module ResultFactory */

import Result from './result';

export default class ResultFactory {
  /**
   * Converts an API result object into a Result view model.
   * Includes default mappings of GoogleCustomSearchEngine results to
   * the fields exposed by the template.
   * @param resultsData  {Array} expected format: { data: { ... }, highlightedFields: { ... }}
   * @param {Object.<string, function>} formatters The formatters to apply to the result
   * @param {string} verticalId The vertical of these results
   * @param {string} source Backend source of these results
   * @returns {Result[]}
   */
  static from (resultsData, formatters, verticalId, source) {
    let results = [];
    for (let i = 0; i < resultsData.length; i++) {
      // TODO use resultData.highlightedFields to
      // transform resultData.data into html-friendly strings that highlight values.
      // Check for new data format, otherwise fallback to legacy

      const data = resultsData[i].data || resultsData[i];
      if (resultsData[i].distance) {
        data.distance = resultsData[i].distance;
      }
      const formattedData = {};
      if (Object.keys(formatters).length > 0) {
        Object.entries(data).forEach(([key, val]) => {
          if (formatters[key]) {
            formattedData[key] = formatters[key](val, data, verticalId, false);
          }
        });
      }

      switch (source) {
        case 'GOOGLE_CSE':
          results.push(ResultFactory.fromGoogleCustomSearchEngine(data));
          break;
        case 'BING_CSE':
          results.push(ResultFactory.fromBingCustomSearchEngine(data));
          break;
        case 'ZENDESK':
          results.push(ResultFactory.fromZendeskSearchEngine(data));
          break;
        case 'ALGOLIA':
          results.push(ResultFactory.fromAlgoliaSearchEngine(data));
          break;
        default:
          results.push(ResultFactory.fromGeneric(data, formattedData, i));
      }
    }

    return results;
  }

  /**
   * Converts an API result object into a generic result view model.
   * @param data
   * @param formattedData
   * @param index
   * @returns {Result}
   */
  static fromGeneric (data, formattedData, index) {
    return new Result({
      raw: data,
      formatted: formattedData,
      title: formattedData.name || data.name,
      details: formattedData.description || this.truncate(data.description),
      link: data.website,
      id: data.id,
      ordinal: index + 1
    });
  }

  /**
   * Converts an API result object into a result view model.
   * Maps view model fields based on the API data for a Google Custom Search Engine object.
   * @param data
   * @returns {Result}
   */
  static fromGoogleCustomSearchEngine (data) {
    return new Result({
      raw: data,
      title: data.htmlTitle.replace(/(<([^>]+)>)/ig, ''),
      details: data.htmlSnippet,
      link: data.link
    });
  }

  /**
   * Converts an API result object into a result view model.
   * Maps view model fields based on the API data for a Bing Custom Search Engine object.
   * @param data
   * @returns {Result}
   */
  static fromBingCustomSearchEngine (data) {
    return new Result({
      raw: data,
      title: data.name,
      details: data.snippet,
      link: data.url
    });
  }

  /**
   * Converts an API result object into a result view model.
   * Maps view model fields based on the API data for a Zendesk Search Engine object.
   * @param data
   * @returns {Result}
   */
  static fromZendeskSearchEngine (data) {
    return new Result({
      raw: data,
      title: data.title,
      details: data.snippet,
      link: data.html_url
    });
  }

  /**
   * Converts an API result object into a result view model.
   * Maps view model fields based on the API data for a Algolia Search Engine object.
   * Details field is set to objectID since response has only one general field objectID.
   * @param data
   * @returns {Result}
   */
  static fromAlgoliaSearchEngine (data) {
    return new Result({
      raw: data,
      details: data.objectID,
      id: data.objectID
    });
  }

  /**
   * Truncates strings to 250 characters, attempting to preserve whole words
   * @param str {string} the string to truncate
   * @param limit {Number} the maximum character length to return
   * @param trailing {string} a trailing string to denote truncation, e.g. '...'
   * @param sep {string} the word separator
   * @returns {string}
   */
  static truncate (str, limit = 250, trailing = '...', sep = ' ') {
    if (!str || str.length <= limit) {
      return str;
    }

    // TODO (bmcginnis): split punctuation too so we don't end up with "foo,..."
    const words = str.split(sep);
    const max = limit - trailing.length;
    let truncated = '';

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (truncated.length + word.length > max ||
        (i !== 0 && truncated.length + word.length + sep.length > max)) {
        truncated += trailing;
        break;
      }

      truncated += i === 0 ? word : sep + word;
    }

    return truncated;
  }
}
