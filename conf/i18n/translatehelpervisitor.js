const Handlebars = require('handlebars');
const TranslationPlaceholder = require('./models/translationplaceholder');

/**
 * TranslateHelperVisitor accepts a handlebars AST, and replaces all translate placeholders
 * with either static translations, or a runtime translation helper.
 */
class TranslateHelperVisitor {
  constructor (translationResolver) {
    this._visitor = new Handlebars.Visitor();
    // This line puts the Handlebars.Visitor instance into mutation mode.
    // https://github.com/handlebars-lang/handlebars.js/blob/master/docs/compiler-api.md#ast-visitor.
    this._visitor.mutating = true;
    this._visitor.MustacheStatement = this._MustacheStatement.bind(this);

    this._translationResolver = translationResolver;
    this._validHelpers = ['translate'];
    this._runtimeTranslationHelper = 'runtimeTranslation';
    this._contextParam = 'context';
    this._pluralFormParam = 'pluralForm';
  }

  /**
   * Dispatches TranslateHelperVisitor on a Handlebars AST.
   * @param {hbs.AST.Program} ast
   */
  accept (ast) {
    this._visitor.accept(ast);
  }

  /**
   * _MustacheStatement() is automatically called on any MustacheStatement nodes by the visitor.
   * Returning undefined leaves the node unaffected, otherwise it replaces it with the
   * returned value.
   * @param {hbs.AST.MustacheStatement} statement
   * @returns {hbs.AST.MustacheStatment|undefined}
   */
  _MustacheStatement (statement) {
    if (!this._validHelpers.includes(statement.path.original)) {
      return;
    }
    const placeholder = TranslationPlaceholder.fromMustacheStatementNode(statement);
    const translatedPhrase = this._resolveTranslationPlaceholder(placeholder);
    const canBeTranslatedStatically =
      typeof translatedPhrase === 'string' && placeholder.hasNoInterpolation();
    if (canBeTranslatedStatically) {
      return this._replaceHelperWithStaticTranslation(statement, translatedPhrase);
    } else {
      const renamedStatement = this._renameHelperToRuntimeTranslation(statement);
      return this._updateHashPairsForRuntimeTranslations(renamedStatement, translatedPhrase);
    }
  }

  _resolveTranslationPlaceholder (placeholder) {
    const count = placeholder.getCount();
    const context = placeholder.getContext();
    if (count && context) {
      throw new Error('Translate plural with context not currently supported');
    }

    if (count) {
      return this._translationResolver.resolveWithPlural(placeholder);
    }

    if (context) {
      return this._translationResolver.resolveWithContext(placeholder);
    }

    return this._translationResolver.resolve(placeholder);
  }

  /**
   * Updates the hash pairs of the given statement, first updating the
   * phrase param with the resolved translation, then removing params
   * that are not needed for runtime translations.
   * @param {hbs.AST.MustacheStatement} statement
   * @param {Object} translatedPhrase
   */
  _updateHashPairsForRuntimeTranslations (statement, translatedPhrase) {
    const translatedPairs = this._updatePhraseHashPair(statement.hash.pairs, translatedPhrase);
    const filteredAndTranslatedPairs = this._filterUnusedRuntimeHashPairs(translatedPairs);
    return {
      ...statement,
      hash: {
        ...statement.hash,
        pairs: filteredAndTranslatedPairs
      }
    };
  }

  /**
   * Transforms the given translation helper mustache statement into
   * static content.
   * @param {hbs.AST.MustacheStatement} statement
   * @param {string} staticTranslatedPhrase
   * @returns {hbs.AST.ContentStatement}
   */
  _replaceHelperWithStaticTranslation (statement, staticTranslatedPhrase) {
    return {
      type: 'ContentStatement',
      value: staticTranslatedPhrase,
      original: staticTranslatedPhrase,
      loc: statement.loc
    };
  }

  /**
   * Renames the name of the translation helper to the designated
   * runtime translation helper name.
   * @param {hbs.AST.MustacheStatement} statement
   */
  _renameHelperToRuntimeTranslation (statement) {
    return {
      ...statement,
      path: {
        ...statement.path,
        parts: [ this._runtimeTranslationHelper ],
        original: this._runtimeTranslationHelper
      }
    };
  }

  /**
   * Translates the phrase param, updates its hash pair, and returns the updated array.
   * @param {Array<hbs.AST.HashPair} hashPairs
   * @param {Object|string} translatedPhrase
   * @returns {Array<hbs.AST.HashPair}
   */
  _updatePhraseHashPair (hashPairs, translatedPhrase) {
    const value = typeof translatedPhrase === 'object'
      ? JSON.stringify(translatedPhrase)
      : translatedPhrase;
    return hashPairs.map(pair => {
      if (pair.key !== 'phrase') {
        return pair;
      }
      return {
        ...pair,
        value: {
          type: 'StringLiteral',
          value: value,
          original: value,
          loc: pair.value.loc
        }
      };
    });
  }

  /**
   * Removes parameters from the runtime translation helper that are only
   * needed for its resolution and not execution.
   * @param {Array<hbs.AST.HashPair} hashPairs
   * @returns {Array<hbs.AST.HashPair}
   */
  _filterUnusedRuntimeHashPairs (hashPairs) {
    return hashPairs.filter(pair => {
      const key = pair.key;
      return key !== this._pluralFormParam && key !== this._contextParam;
    });
  }
}

module.exports = TranslateHelperVisitor;
