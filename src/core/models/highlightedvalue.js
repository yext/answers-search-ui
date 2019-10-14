/** @module HighlightedValue */

/**
 * Model representing a highlighted value.
 */
export default class HighlightedValue {
  constructor (data = {}) {
    this.value = data.value || data.shortValue || '';
    this.matchedSubstrings = data.matchedSubstrings || [];
  }

  /**
   * get highlighted value string
   * @returns {string}
   */
  get () {
    this._sortMatchedSubstrings();
    return this.buildHighlightedValue(this.value, this.matchedSubstrings);
  }

  /**
   * get inverted highlighted value string
   * @returns {string}
   */
  getInverted () {
    this._sortMatchedSubstrings();
    const invertedSubstrings = this._getInvertedSubstrings(this.matchedSubstrings, this.value.length);
    return this.buildHighlightedValue(this.value, invertedSubstrings);
  }

  /**
   * introduces highlighting to input data according to highlighting specifiers
   *
   * @param val input object to apply highlighting to
   *
   *  example object :
   *  {
   *    name: 'ATM',
   *    featuredMessage: {
   *      description: 'Save time & bank on your terms at over 1,800 ATMs'
   *    }
   *  }
   *
   * @param highlightedSubstrings highlighting specifiers to apply to input object
   *
   *  example object :
   *  {
   *    name: {
   *      matchedSubstrings: [{
   *        length: 3,
   *        offset: 0
   *      }],
   *      value: 'ATM'
   *    },
   *    featuredMessage: {
   *      description: {
   *        matchedSubstrings: [{
   *          length: 4,
   *          offset: 45
   *        }],
   *        value: 'Save time & bank on your terms at over 1,800 ATMs'
   *      }
   *    }
   *  }
   *
   * @returns {string} copy of input value with highlighting applied
   *
   *  example object :
   *  {
   *    name: '<strong>ATM</strong>',
   *    featuredMessage: {
   *      description: 'Save time & bank on your terms at over 1,800 <strong>ATMs</strong>'
   *    }
   *  }
   *
   */
  buildHighlightedValue (val, highlightedSubstrings) {
    let highlightedValue = '';
    let nextStart = 0;

    if (highlightedSubstrings.length === 0) {
      return val;
    }

    for (let j = 0; j < highlightedSubstrings.length; j++) {
      let start = Number(highlightedSubstrings[j].offset);
      let end = start + highlightedSubstrings[j].length;

      highlightedValue += [val.slice(nextStart, start), '<strong>', val.slice(start, end), '</strong>'].join('');

      if (j === highlightedSubstrings.length - 1 && end < val.length) {
        highlightedValue += val.slice(end);
      }

      nextStart = end;
    }

    return highlightedValue;
  }

  _sortMatchedSubstrings () {
    this.matchedSubstrings.sort((a, b) => {
      if (a.offset < b.offset) {
        return -1;
      }

      if (a.offset > b.offset) {
        return 1;
      }

      return 0;
    });
  }

  _getInvertedSubstrings (matchedSubstrings, valueLength) {
    const invertedSubstrings = [];
    for (let i = 0; i < matchedSubstrings.length; i++) {
      const substring = matchedSubstrings[i];
      const nextOffset = substring.offset + substring.length;
      if (i === 0 && substring.offset !== 0) {
        invertedSubstrings.push({ offset: 0, length: substring.offset });
      }

      if (valueLength > nextOffset) {
        invertedSubstrings.push({
          offset: nextOffset,
          length: i < matchedSubstrings.length - 1
            ? matchedSubstrings[i + 1].offset - nextOffset
            : valueLength - nextOffset
        });
      }
    }
    return invertedSubstrings;
  }
}
