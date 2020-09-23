const Handlebars = require('handlebars');
const TranslationResolver = require('../i18n/translationresolver');
const { fromMustacheStatementNode } = require('./translationplaceholderutils');
const cloneDeep = require('lodash.clonedeep');

/**
 * TranslateHelperVisitor accepts a handlebars AST, and replaces all translate placeholders
 * with either static translations, or a runtime translation helper.
 */
class TranslateHelperVisitor {
  constructor (translator) {
    this._visitor = new Handlebars.Visitor();
    // This line puts the Handlebars.Visitor instance into mutation mode.
    // https://github.com/handlebars-lang/handlebars.js/blob/master/docs/compiler-api.md#ast-visitor.
    this._visitor.mutating = true;
    this._visitor.MustacheStatement = this._handleMustacheStatement.bind(this);

    const passThroughRuntimeGenerator = translationResult => translationResult;
    this._translationResolver = new TranslationResolver(translator, passThroughRuntimeGenerator);
    this._validHelpers = ['translate'];
    this._processTranslationHelper = 'processTranslation';
    this._contextParam = 'context';
    this._pluralFormParam = 'pluralForm';
  }

  /**
   * Dispatches TranslateHelperVisitor on a Handlebars AST.
   *
   * @param {hbs.AST.Program} ast
   */
  accept (ast) {
    this._visitor.accept(ast);
  }

  /**
   * _MustacheStatement() is automatically called on any MustacheStatement nodes by the visitor.
   * Returning undefined leaves the node unaffected, otherwise it replaces it with the
   * returned value.
   *
   * @param {hbs.AST.MustacheStatement} statement
   * @returns {hbs.AST.MustacheStatement|undefined} Either the new node, or undefined to leave the node as is
   */
  _handleMustacheStatement (statement) {
    const isTranslationHelper = this._validHelpers.includes(statement.path.original);
    if (!isTranslationHelper) {
      return;
    }
    statement.escaped = false;
    const placeholder = fromMustacheStatementNode(statement);
    const translatedPhrase = this._translationResolver.resolve(placeholder);
    const canBeTranslatedStatically =
      typeof translatedPhrase === 'string' && placeholder.hasNoInterpolation();
    if (canBeTranslatedStatically) {
      return this._replaceHelperWithStaticTranslation(statement, translatedPhrase);
    } else {
      const renamedStatement = this._renameHelperToProcessTranslation(statement);
      return this._updateHashPairsForRuntimeTranslations(renamedStatement, translatedPhrase);
    }
  }

  /**
   * Updates the hash pairs of the given statement, first updating the
   * phrase param with the resolved translation, then removing params
   * that are not needed for runtime translations.
   *
   * @param {hbs.AST.MustacheStatement} statement
   * @param {Object} translatedPhrase
   * @returns {hbs.AST.MustacheStatement} the updated mustache statement
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
   *
   * @param {hbs.AST.MustacheStatement} statement
   * @param {string} staticTranslatedPhrase
   * @returns {hbs.AST.ContentStatement} the new statement
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
   *
   * @param {hbs.AST.MustacheStatement} statement
   */
  _renameHelperToProcessTranslation (statement) {
    return {
      ...statement,
      path: {
        ...statement.path,
        parts: [ this._processTranslationHelper ],
        original: this._processTranslationHelper
      }
    };
  }

  /**
   * Translates the phrase param, updates its hash pair, and returns the updated array.
   *
   * @param {Array<hbs.AST.HashPair} hashPairs
   * @param {Object|string} translatedPhrase
   * @returns {Array<hbs.AST.HashPair}
   */
  _updatePhraseHashPair (hashPairs, translatedPhrase) {
    const isUsingPluralization = (typeof translatedPhrase === 'object');

    return isUsingPluralization
      ? this._getPluralizedHashPairs(hashPairs, translatedPhrase)
      : this._getNonPluralizedHashPairs(hashPairs, translatedPhrase);
  }

  /**
   * Returns an updated array of hash pairs which includes new hashPairs added for each
   * of the translated plural forms. The updated array also removes the original hashPair
   * with the key 'phrase'
   *
   * @param {Array<hbs.AST.HashPair} hashPairs
   * @param {Object} translatedPhrase
   * @returns {Array<hbs.AST.HashPair}
   */
  _getPluralizedHashPairs (hashPairs, translatedPhrase) {
    const hashPluralizations = Object.entries(translatedPhrase)
      .map(([key, value]) => {
        return {
          type: 'HashPair',
          key: `pluralForm${key}`,
          value: {
            type: 'StringLiteral',
            value: value
          }
        };
      });

    const updatedHashPairs = cloneDeep(hashPairs);
    updatedHashPairs.push(...hashPluralizations);
    return updatedHashPairs.filter(pair => pair.key !== 'phrase');
  }

  /**
   * Returns an updated array of hash pairs which changes the hashPair with key 'phrase'
   * to have the translatedPhrase as its value
   *
   * @param {Array<hbs.AST.HashPair} hashPairs
   * @param {Object} translatedPhrase
   * @returns {Array<hbs.AST.HashPair}
   */
  _getNonPluralizedHashPairs (hashPairs, translatedPhrase) {
    return hashPairs.map(pair => {
      if (pair.key !== 'phrase') {
        return pair;
      }
      return {
        ...pair,
        value: {
          type: 'StringLiteral',
          value: translatedPhrase,
          original: translatedPhrase,
          loc: pair.value.loc
        }
      };
    });
  }

  /**
   * Removes parameters from the runtime translation helper that are only
   * needed for its resolution and not execution.
   *
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
