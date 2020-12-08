import AutoCompleteData, { AutoCompleteResult } from '../models/autocompletedata';

/**
 * A data transformer that takes the response object from an
 * AutoComplete request and transforms it into a front-end oriented
 * data structure that our component library and core storage understand.
 */
export default class AutoCompleteResponseTransformer {
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

  static transformFilterAutoCompleteResponse (response) {
    if (response.sections) {
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
