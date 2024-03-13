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
   * get highlighted value elements
   * @returns {Array<Element|string>}
   */
  getElements () {
    this._sortMatchedSubstrings();
    return this._buildHighlightedElements(this.value, this.matchedSubstrings);
  }

  /**
   * get highlighted value string
   * @param {Function} transformFunction takes a string and returns the transformed string
   * @returns {string} The value interpolated with highlighting markup and transformed in between
   */
  getWithTransformFunction (transformFunction) {
    this._sortMatchedSubstrings();
    return this.buildHighlightedValue(this.value, this.matchedSubstrings, transformFunction);
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
   * get inverted highlighted value string
   * @param {Function} transformFunction takes a string and returns the transformed string
   * @returns {string} The value interpolated with highlighting markup and transformed in between
   */
  getInvertedWithTransformFunction (transformFunction) {
    this._sortMatchedSubstrings();
    const invertedSubstrings = this._getInvertedSubstrings(this.matchedSubstrings, this.value.length);
    return this.buildHighlightedValue(this.value, invertedSubstrings, transformFunction);
  }

  /**
   * introduces highlighting to input data according to highlighting specifiers
   *
   * @param {Object} val input object to apply highlighting to
   *
   *  example object :
   *  {
   *    name: 'ATM',
   *    featuredMessage: {
   *      description: 'Save time & bank on your terms at over 1,800 ATMs'
   *    }
   *  }
   *
   * @param {Object} highlightedSubstrings highlighting specifiers to apply to input object
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
   * @param {Function} transformFunction function to apply to strings in between highlighting markup
   *
   *  example function :
   *  function (string) {
   *    return handlebars.escapeExpression(string);
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
  buildHighlightedValue (
    val,
    highlightedSubstrings,
    transformFunction = function (x) { return x; }
  ) {
    let highlightedValue = '';
    let nextStart = 0;

    if (highlightedSubstrings.length === 0) {
      return transformFunction(val);
    }

    for (let j = 0; j < highlightedSubstrings.length; j++) {
      const start = Number(highlightedSubstrings[j].offset);
      const end = start + highlightedSubstrings[j].length;

      highlightedValue += [
        transformFunction(val.slice(nextStart, start)),
        '<strong>',
        transformFunction(val.slice(start, end)),
        '</strong>'
      ].join('');

      if (j === highlightedSubstrings.length - 1 && end < val.length) {
        highlightedValue += transformFunction(val.slice(end));
      }

      nextStart = end;
    }

    return highlightedValue;
  }

  /**
   * introduces highlighting to input data according to highlighting specifiers and returns a
   * list of elements/strings
   *
   * @param {Object} val input object to apply highlighting to
   * @param {Object} highlightedSubstrings highlighting specifiers to apply to input object
   * @returns {Array<Element|string>} a list of elements/strings representing the val with
   * highlighting applied. Example returned value :
   *   [
   *     'Save time & bank on your terms at over 1,800',
   *     <strong>ATM</strong>,
   *   ]
   */
  _buildHighlightedElements (val, highlightedSubstrings) {
    const highlightedElements = [];
    let nextStart = 0;

    for (let j = 0; j < highlightedSubstrings.length; j++) {
      const start = Number(highlightedSubstrings[j].offset);
      const end = start + highlightedSubstrings[j].length;

      if (nextStart < start) {
        highlightedElements.push(val.slice(nextStart, start));
      }

      if (start < end) {
        const highlightedText = document.createElement('strong');
        highlightedText.textContent = val.slice(start, end);
        highlightedElements.push(highlightedText);
      }

      if (j === highlightedSubstrings.length - 1 && end < val.length) {
        highlightedElements.push(val.slice(end));
      }

      nextStart = end;
    }

    return highlightedElements;
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
