/** @module AutoCompleteData */

export default class AutoCompleteData {
  constructor (data = {}) {
    this.sections = data.sections || [];
    this.queryId = data.queryId || '';
    this.inputIntents = data.inputIntents || [];
    Object.freeze(this);
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
