/**
 * A data model representing a phrase needing translation in the SDK's
 * source code. The model can be used for translations requiring added context
 * or pluralization as well.
 */
class TranslationPlaceholder {
  constructor ({ phrase, pluralForm, context, count, interpolationValues }) {
    this._phrase = phrase;
    this._pluralForm = pluralForm;
    this._context = context;
    this._count = count;
    this._interpolationValues = interpolationValues;
  }

  /**
   * The candidate phrase for translation.
   *
   * @returns {string}
   */
  getPhrase () {
    return this._phrase;
  }

  /**
   * The untranslated, plural form of the candidate phrase. This is only present
   * if pluralization is required.
   *
   * @returns {string}
   */
  getPluralForm () {
    return this._pluralForm;
  }

  /**
   * Any added context needed in translating the phrase.
   *
   * @returns {string}
   */
  getContext () {
    return this._context;
  }

  /**
   * The run-time parameter, wrapped in a string, for determing count in the case
   * of pluralization. This quantity must be wrapped in a string to prevent evaluation
   * before run-time.
   *
   * @returns {string}
   */
  getCount () {
    return this._count;
  }

  /**
   * An object containing any interpolation parameters, and their values, needed
   * in the translation. Note that all values are wrapped in a string. This is
   * to prevent them from being evaluated prior to run-time.
   *
   * @returns {Object<string, string>}
   */
  getInterpolationValues () {
    return this._interpolationValues;
  }

  /**
   * Returns true if there are no interpolation values.
   * @returns {boolean}
   */
  hasNoInterpolation () {
    return Object.keys(this._interpolationValues).length === 0;
  }

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

module.exports = TranslationPlaceholder;
