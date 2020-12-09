import AutoCompleteData, { AutoCompleteResult } from '../models/autocompletedata';

/**
 * A data transformer that takes the response object from an
 * AutoComplete request and transforms it into a front-end oriented
 * data structure that our component library and core storage understand.
 */
export default class AutoCompleteResponseTransformer {

  /**
   * Converts a universal or vertical autocomplete response from the
   * core library into an object that the SDK understands.
   *
   * @param {import('@yext/answers-core').AutoCompleteResponse} response
   *  the response passed from the core library
   */
  static transformAutoCompleteResponse (response) {
    const sections = [{
      results: response.results.map(result => new AutoCompleteResult(result)),
      resultsCount: response.results.length
    }];
    return new AutoCompleteData({
      sections: sections,
      queryId: response.queryId,
      inputIntents: response.inputIntents
    });
  }

  /**
   * Converts a filter autocomplete response from the
   * core library into an object that the SDK understands.
   *
   * @param {import('@yext/answers-core').FilterAutoCompleteResponse} response
   *  the response passed from the core library
   */
  static transformFilterAutoCompleteResponse (response) {
    if (response.sectioned && response.sections) {
      const transformedSections = response.sections.map(section => ({
        label: section.label,
        results: section.results.map(result => new AutoCompleteResult(result)),
        resultsCount: section.results.length
      }));
      return new AutoCompleteData({
        sections: transformedSections,
        queryId: response.queryId,
        inputIntents: response.inputIntents
      });
    } else {
      return this.transformAutoCompleteResponse(response);
    }
  }
}
