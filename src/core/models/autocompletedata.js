/** @module AutoCompleteData */

export default class AutoCompleteData {
  constructor (data = {}) {
    this.sections = data.sections || [];
    this.queryId = data.queryId || '';
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
    return new AutoCompleteData({ sections, queryId: response.queryId });
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

    // Invert highlighted substrings
    const invertedSubstrings = [];

    for (let i = 0; i < matchedSubstrings.length; i++) {
      const substring = matchedSubstrings[i];
      const nextOffset = substring.offset + substring.length;
      if (i === 0 && substring.offset !== 0) {
        invertedSubstrings.push({ offset: 0, length: substring.offset });
      }

      if (val.length > nextOffset) {
        invertedSubstrings.push({
          offset: nextOffset,
          length: i < matchedSubstrings.length - 1
            ? matchedSubstrings[i + 1].offset - nextOffset
            : val.length - nextOffset
        });
      }
    }

    // Build our new value based on the highlights
    let highlightedValue = '';
    let nextStart = 0;

    for (let j = 0; j < invertedSubstrings.length; j++) {
      let start = Number(invertedSubstrings[j].offset);
      let end = start + invertedSubstrings[j].length;

      highlightedValue += [val.slice(nextStart, start), '<strong>', val.slice(start, end), '</strong>'].join('');

      if (j === invertedSubstrings.length - 1 && end < val.length) {
        highlightedValue += val.slice(end);
      }

      nextStart = end;
    }

    return highlightedValue;
  }
}
