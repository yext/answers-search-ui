const Handlebars = require('handlebars');

const { fromMustacheStatementNode } = require('../translationplaceholderutils');

class HbsPlaceholderParser {
  constructor () {
    this._translateHelpers = ['translate'];
  }

  /**
   * Parses {@link TranslationPlaceholder}s from a given hbs template.
   *
   * @param {string} template
   * @param {string} filepath
   * @returns {Array<TranslationPlaceholder>}
   */
  parse (template, filepath) {
    const tree = Handlebars.parseWithoutProcessing(template);
    const visitor = new Handlebars.Visitor();
    const placeholderAccumulator = [];
    visitor.MustacheStatement = statement => {
      const placeholder = this._parseFromMustacheNode(statement, filepath);
      if (placeholder) {
        placeholderAccumulator.push(placeholder);
      }
    };
    visitor.accept(tree);
    return placeholderAccumulator;
  }

  /**
   * Parses a {@link TranslationPlaceholder} from a single MustacheStatement.
   *
   * @param {hbs.AST.MustacheStatement} statement
   * @param {string} filepath
   * @returns {TranslationPlaceholder}
   */
  _parseFromMustacheNode (statement, filepath) {
    const isTranslationHelper = this._translateHelpers.includes(statement.path.original);
    if (!isTranslationHelper) {
      return;
    }
    const placeholder = fromMustacheStatementNode(statement, filepath);
    return placeholder;
  }
}

module.exports = HbsPlaceholderParser;
