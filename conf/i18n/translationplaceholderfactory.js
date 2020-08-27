const TranslationPlaceholder = require('./models/translationplaceholder');

/**
 * TranslationPlaceholderFactory is a class for creating {@link TranslationPlaceholder}s.
 */
class TranslationPlaceholderFactory {
  /**
   * Creates a {@link TranslateInvocation} from a Handlebars MustacheStatement.
   * @param {hbs.AST.MustacheStatement} mustacheStatement
   */
  static fromMustacheStatementNode (mustacheStatement) {
    const hashPairs = mustacheStatement.hash.pairs;
    const params = this._convertHashPairsToParamsMap(hashPairs);
    // Exclude phrase, pluralForm, and context (but not count) from interpolationValues.
    const { phrase, pluralForm, context, ...interpolationValues } = params;
    return new TranslationPlaceholder({
      phrase: phrase,
      pluralForm: pluralForm,
      context: context,
      count: params.count,
      interpolationValues: interpolationValues
    });
  }

  /**
   * Converts an array of Handlebars HashPair parameters into a map of keys to values.
   * Errors out when given a parameter that is a SubExpression.
   * @param {Array<hbs.AST.HashPair>} hashPairs
   * @returns {Object}
   */
  static _convertHashPairsToParamsMap (hashPairs) {
    return hashPairs.reduce((map, pair) => {
      const expression = pair.value;
      if (expression.type === 'NullLiteral') {
        map[pair.key] = 'null';
      } else if (expression.type === 'UndefinedLiteral') {
        map[pair.key] = 'undefined';
      } else if (expression.type === 'SubExpression') {
        throw new Error('Subexpression translation parameters are not allowed.');
      } else {
        map[pair.key] = expression.original.toString();
      }
      return map;
    }, {});
  }
}

module.exports = TranslationPlaceholderFactory;
