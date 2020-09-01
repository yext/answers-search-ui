const TranslateCallParser = require('../translatecallparser');
const { TRANSLATION_FLAGGER_REGEX } = require('../constants');

class JsPlaceholderParser {
  /**
   * Parses {@link TranslationPlaceholder}s from javascript code.
   *
   * @param {string} code
   * @param {string} filepath
   * @returns {Array<TranslationPlaceholder>}
   */
  parse (code, filepath) {
    const matches = [...code.matchAll(TRANSLATION_FLAGGER_REGEX)];
    return matches.map(match => this._parseJsCall(match, filepath));
  }

  /**
   * Parses a {@link TranslationPlacehodler} from a regex match.
   *
   * @param {Array<string>} match the regex match
   * @param {string} filepath
   * @returns {TranslationPlaceholder}
   */
  _parseJsCall (match, filepath) {
    const { index, input } = match;
    const translateCall = match[0];
    const lineNumber = input.substring(0, index).match(/\n/g).length + 1;
    const placeholder = new TranslateCallParser().parse(translateCall, lineNumber, filepath);
    return placeholder;
  }
}

module.exports = JsPlaceholderParser;
