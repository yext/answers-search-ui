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
   * @returns {Result[]}
   */
  static from (resultsData, formatters, verticalId) {
    let results = [];
    for (let i = 0; i < resultsData.length; i++) {
      // TODO use resultData.highlightedFields to
      // transform resultData.data into html-friendly strings that highlight values.
      // Check for new data format, otherwise fallback to legacy

      const data = resultsData[i].data || resultsData[i];
      const formattedData = {};
      if (Object.keys(formatters).length > 0) {
        Object.entries(data).forEach(([key, val]) => {
          if (formatters[key]) {
            formattedData[key] = formatters[key](val, data, verticalId);
          }
        });
      }

      if (data.htmlSnippet) {
        results.push(ResultFactory.fromGoogleCustomSearchEngine(data));
        continue;
      }

      results.push(ResultFactory.fromGeneric(data, formattedData, i));
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
      link: formattedData.website || data.website,
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
