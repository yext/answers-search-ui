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
   * @param {import('@yext/search-core').AutocompleteResponse} response
   *  the response passed from the core library
   * @returns {AutoCompleteData}
   */
  static transformAutoCompleteResponse (response) {
    const sections = [{
      results: response.results.map(result => this.transformAutoCompleteResult(result)),
      resultsCount: response.results.length
    }];
    return new AutoCompleteData({
      sections: sections,
      queryId: response.queryId,
      inputIntents: response.inputIntents
    });
  }

  /**
   * Converts a filter search response from the
   * core library into an object that the SDK understands.
   *
   * @param {import('@yext/search-core').FilterSearchResponse} response
   *  the response passed from the core library
   * @returns {AutoCompleteData}
   */
  static transformFilterSearchResponse (response) {
    const transformedSections = response.sections.map(section => ({
      label: section.label,
      results: section.results.map(result => this.transformAutoCompleteResult(result)),
      resultsCount: section.results.length
    }));
    return new AutoCompleteData({
      sections: transformedSections,
      queryId: response.queryId,
      businessId: response.businessId
    });
  }

  /**
   * @param {import('@yext/search-core').AutocompleteResult} result
   * @returns {AutoCompleteResult}
   */
  static transformAutoCompleteResult (result) {
    const transformedFilter = result.filter ? this._transformFilter(result.filter) : {};
    return new AutoCompleteResult({
      filter: transformedFilter,
      key: result.key,
      matchedSubstrings: result.matchedSubstrings,
      value: result.value,
      queryIntents: result.inputIntents
    });
  }

  static _transformFilter (filter) {
    const fieldId = filter.fieldId;
    const matcher = filter.matcher;
    const value = filter.value;
    return {
      [fieldId]: {
        [matcher]: value
      }
    };
  }
}
