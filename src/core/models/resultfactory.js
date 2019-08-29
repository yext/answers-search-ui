/** @module ResultFactory */

import Result from './result';

export default class ResultFactory {
  /**
   * Converts an API result object into a Result view model.
   * Includes default mappings of GoogleCustomSearchEngine results to
   * the fields exposed by the template.
   * @param resultsData  {Array} expected format: { data: { ... }, highlightedFields: { ... }}
   * @returns {Result[]}
   */
  static from (resultsData) {
    let results = [];
    for (let i = 0; i < resultsData.length; i++) {
      // TODO use resultData.highlightedFields to
      // transform resultData.data into html-friendly strings that highlight values.
      // Check for new data format, otherwise fallback to legacy

      const data = resultsData[i].data || resultsData[i];

      if (data.htmlSnippet) {
        results.push(ResultFactory.fromGoogleCustomSearchEngine(data));
        continue;
      }

      results.push(ResultFactory.fromGeneric(data, i));
    }

    return results;
  }

  /**
   * Converts an API result object into a generic result view model.
   * @param data
   * @returns {Result}
   */
  static fromGeneric (data, index) {
    return new Result({
      raw: data,
      title: data.name,
      details:
        data.description.length > 250
          ? data.description.substr(0, 247) + '...' : data.description,
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
}
