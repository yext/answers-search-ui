export default class AutoCompleteData {
  constructor (data = {}) {
    this.sections = data.sections || [];
  }

  highlightResults (section) {
    return section.results.map(highlightResult);
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
    this.shortValue = data.shortValue || data.value;
  }

  // TODO(jdelerme): consolidate with other highlight functions
  highlight (data) {
    const { value, matchedSubstrings } = data;

    if (!matchedSubstrings || matchedSubstrings.length === 0) {
      return value;
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

      highlightedValue += [value.slice(nextStart, start), '<strong>', value.slice(start, end), '</strong>'].join('');

      if (j === matchedSubstrings.length - 1 && end < value.length) {
        highlightedValue += value.slice(end);
      }

      nextStart = end;
    }

    return highlightedValue;
  }
}
