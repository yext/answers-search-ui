export default class AutoCompleteData {
  constructor (data = {}) {
    this.sections = data.sections || [];
    Object.freeze(this);
  }

  static from (response) {
    let sections;
    if (response.sections) {
      sections = response.sections.map(s => ({
        label: s.label,
        results: s.results.map(r => new AutoCompleteResult(r))
      }));
    } else {
      sections = [{ results: response.results.map(r => new AutoCompleteResult(r)) }];
    }
    return new AutoCompleteData({ sections });
  }
}

export class AutoCompleteResult {
  constructor (data = {}) {
    this.filter = data.filter || {};
    this.highlightedValue = this.highlight(data);
    this.key = data.key || '';
    this.matchedSubstrings = data.matchedSubstrings || [];
    this.value = data.value || '';
    this.shortValue = data.shortValue || this.value;
    Object.freeze(this);
  }

  // TODO(jdelerme): consolidate with other highlight functions
  highlight (data) {
    const { value, shortValue, matchedSubstrings } = data;
    const val = value || shortValue;

    if (!matchedSubstrings || matchedSubstrings.length === 0) {
      return val;
    }

    // Make sure our highlighted substrings are sorted
    matchedSubstrings.sort((a, b) => {
      if (a.offset < b.offset) {
        return -1;
      }

      if (a.offset > b.offset) {
        return 1;
      }

      return 0;
    });

    // Build our new value based on the highlights
    let highlightedValue = '';
    let nextStart = 0;

    for (let j = 0; j < matchedSubstrings.length; j++) {
      let start = Number(matchedSubstrings[j].offset);
      let end = start + matchedSubstrings[j].length;

      highlightedValue += [val.slice(nextStart, start), '<strong>', val.slice(start, end), '</strong>'].join('');

      if (j === matchedSubstrings.length - 1 && end < val.length) {
        highlightedValue += val.slice(end);
      }

      nextStart = end;
    }

    return highlightedValue;
  }
}
