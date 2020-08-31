const { GettextExtractor } = require('gettext-extractor');
const Handlebars = require('handlebars');
const fsExtra = require('fs-extra');
const { fromMustacheStatementNode } = require('../translationplaceholderutils');
const { TRANSLATION_FLAGGER_REGEX } = require('../constants');
const TranslateCallParser = require('../translatecallparser');

/**
 * TranslationExtractor extracts translations to a gettext style file.
 */
class TranslationExtractor {
  constructor () {
    this._extractor = new GettextExtractor();
    this._translateHelpers = ['translate'];
  }

  /**
   * Extracts messages from a given hbs template.
   * 
   * @param {string} template 
   * @param {string} filepath 
   */
  extractFromHBS (template, filepath) {
    const tree = Handlebars.parseWithoutProcessing(template);
    const visitor = new Handlebars.Visitor();
    visitor.MustacheStatement = statement =>
      this._extractFromMustacheNode(statement, filepath);
    visitor.accept(tree);
  }

  /**
   * Extracts messages from javascript code.
   * 
   * @param {string} code
   * @param {string} filepath
   */
  extractFromJS (code, filepath) {
    const matches = [...code.matchAll(TRANSLATION_FLAGGER_REGEX)];
    for (const match of matches) {
      this._extractFromJSCall(match, filepath);
    }
  }

  /**
   * Returns the extracted messages as a string.
   *
   * @returns {Array<Object>}
   */
  getPotString () {
    return this._extractor.getPotString();
  }

  /**
   * Saves the currently extracted messages to te given output path.
   * Creates any parent directories as necessary.
   *
   * @param {string} outputPath
   */
  savePotFile (outputPath) {
    const parentDirectory = outputPath.substring(0, outputPath.lastIndexOf('/'));
    parentDirectory && fsExtra.mkdirpSync(parentDirectory);
    this._extractor.savePotFile(outputPath);
  }

  /**
   * Register a given {@link TranslationPlaceholder}'s message.
   * 
   * @param {TranslationPlaceholder} placeholder 
   * @param {string} filepath 
   */
  _registerTranslationPlaceholder (placeholder, filepath) {
    this._extractor.addMessage({
      text: placeholder.getPhrase(),
      textPlural: placeholder.getPluralForm(),
      context: placeholder.getContext(),
      references: [`${filepath}:${placeholder.getLineNumber()}`]
    });
  }

  /**
   * @param {Array<string>} match also contains additional index and input properties
   * @param {string} filepath
   */
  _extractFromJSCall (match, filepath) {
    const { index, input } = match;
    const translateCall = match[0];
    const lineNumber = input.substring(0, index).match(/\n/g).length + 1;
    const placeholder = new TranslateCallParser().parse(translateCall, lineNumber);
    this._registerTranslationPlaceholder(placeholder, filepath);
  }

  /**
   * Extracts translations from a given handlebars mustache node.
   *
   * @param {hbs.AST.MustacheStatement} statement
   * @param {string} filepath
   */
  _extractFromMustacheNode (statement, filepath) {
    const isTranslationHelper = this._translateHelpers.includes(statement.path.original);
    if (!isTranslationHelper) {
      return;
    }
    const placeholder = fromMustacheStatementNode(statement);
    this._registerTranslationPlaceholder(placeholder, filepath);
  }
}

module.exports = TranslationExtractor;
