const TranslationPlaceholder = require('./models/translationplaceholder');

/**
 * TranslateCallParser is responsible for parsing translate calls from Javascript
 * and converting them into the domain model {@link TranslationPlaceholder}
 */
class TranslateCallParser {
  /**
   * TranslateCallParser accepts a string translationCall, and parses its arguments
   * to return a {@link TranslationPlaceholder}
   *
   * @param {string} translateCall
   * @param {number} lineNumber
   * @param {string} filepath
   * @returns {TranslationPlaceholder}
   */
  parse (translateCall, lineNumber, filepath) {
    const parsedTranslateCall = this._convertToObject(translateCall);

    return new TranslationPlaceholder({
      phrase: parsedTranslateCall.phrase,
      pluralForm: parsedTranslateCall.pluralForm,
      count: parsedTranslateCall.count,
      context: parsedTranslateCall.context,
      interpolationValues: parsedTranslateCall.interpolationValues,
      lineNumber: lineNumber,
      filepath: filepath
    });
  }

  /**
   * Converts the translateCall from a string into an Object, keyed by the
   * parameter names.
   * TODO (agrow): Use a JS parsing library to construct ASTs instead instead of regex here.
   *
   * @param {string} translateCall
   * @returns {Object}
   */
  _convertToObject (translateCall) {
    const parsedTranslationCall = this._parseParams(translateCall);

    const interpolationValuesRegex = /interpolationValues: \{[\s]*([a-zA-Z0-9]+:[\s]*([a-zA-Z\d_.]+)[,]*[\s]*)+\}/g;
    const interpolationValues = (translateCall.match(interpolationValuesRegex) || [])[0] || '';
    const parsedInterpolationValues = this._parseParams(interpolationValues);

    return {
      ...parsedTranslationCall,
      interpolationValues: parsedInterpolationValues
    };
  }

  /**
   * Parses params with the general format `key: value` from a string, returning an object.
   * TODO (agrow): Use a JS parsing library to construct ASTs instead instead of regex here.
   *
   * @param {string} translateCall
   * @returns {Object}
   */
  _parseParams (str) {
    const paramRegex =
      /[a-zA-Z0-9]+:[\s]*((['"`]([^'"`](\\'|\\"|\\`)*)+['"`])|\d+|([a-zA-Z\d_.]+))/g;
    return (str.match(paramRegex) || [])
      .reduce((accumulator, params) => {
        const paramOperands = params.split(/:(.+)/);
        const paramName = paramOperands[0];

        // Strip the wrapper quotes (" ' or `) for string params and unescape any other
        // single quotes and backticks
        const paramValue = paramOperands[1] && paramOperands[1]
          .trim()
          .replace(/(^['"`])|(['"`]$)/g, '')
          .replace('\\\'', '\'')
          .replace('\\`', '`');
        accumulator[paramName] = paramValue;
        return accumulator;
      }, {});
  }
}
module.exports = TranslateCallParser;
