/** @module AutoCompleteData */

export default class AutoCompleteData {
  constructor (data = {}) {
    this.sections = data.sections || [];
    this.queryId = data.queryId || '';
    this.inputIntents = data.inputIntents || [];
    Object.freeze(this);
  }

  static from (response) {
    let sections;
    if (response.sections) {
      sections = response.sections.map(s => ({
        label: s.label,
        results: s.results.map(r => new AutoCompleteResult(r)),
        resultsCount: s.results.length
      }));
    } else {
      sections = [{
        results: response.results.map(r => new AutoCompleteResult(r)),
        resultsCount: response.results.length
      }];
    }
    let inputIntents = response.input ? response.input.queryIntents : [];
    return new AutoCompleteData({
      sections,
      queryId: response.queryId,
      inputIntents });
  }
}

export class AutoCompleteResult {
  constructor (data = {}) {
    this.filter = data.filter || {};
    this.key = data.key || '';
    this.matchedSubstrings = data.matchedSubstrings || [];
    this.value = data.value || '';
    this.shortValue = data.shortValue || this.value;
    this.intents = data.queryIntents || [];
    Object.freeze(this);
  }
}
