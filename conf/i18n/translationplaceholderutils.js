const TranslationPlaceholder = require('./models/translationplaceholder');

/**
 * Creates a {@link TranslateInvocation} from a Handlebars MustacheStatement.
 * @param {hbs.AST.MustacheStatement} mustacheStatement
 * @param {string} filepath
 */
function fromMustacheStatementNode (mustacheStatement, filepath) {
  const hashPairs = mustacheStatement.hash.pairs;
  const params = _convertHashPairsToParamsMap(hashPairs);
  // Exclude phrase, pluralForm, and context (but not count) from interpolationValues.
  const { phrase, pluralForm, context, ...interpolationValues } = params;
  const lineNumber = mustacheStatement.loc.start.line;
  return new TranslationPlaceholder({
    phrase: phrase,
    pluralForm: pluralForm,
    context: context,
    count: params.count,
    interpolationValues: interpolationValues,
    lineNumber: lineNumber,
    filepath: filepath
  });
}

exports.fromMustacheStatementNode = fromMustacheStatementNode;

/**
 * Converts an array of Handlebars HashPair parameters into a map of keys to values.
 * Errors out when given a parameter that is a SubExpression.
 *
 * @param {Array<hbs.AST.HashPair>} hashPairs
 * @returns {Object}
 */
function _convertHashPairsToParamsMap (hashPairs) {
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
