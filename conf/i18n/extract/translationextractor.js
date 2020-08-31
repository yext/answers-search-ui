const { GettextExtractor } = require('gettext-extractor');
const Handlebars = require('handlebars');
const fsExtra = require('fs-extra');
const { fromMustacheStatementNode } = require('../translationplaceholderutils');
const { TRANSLATION_FLAGGER_REGEX } = require('../constants');
const TranslateCallParser = require('../translatecallparser');

/**
 * TranslationExtractor extracts translation invocations from a file.
 */
class TranslationExtractor {
  constructor () {
    this._extractor = new GettextExtractor();
    this._translateHelpers = ['translate'];
  }

  extractFromHBS (template, filepath) {
    const tree = Handlebars.parseWithoutProcessing(template);
    const visitor = new Handlebars.Visitor();
    visitor.MustacheStatement = statement =>
      this._extractFromMustacheNode(statement, filepath);
    visitor.accept(tree);
  }

  /**
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
   * Returns the extracted messages as a pot file string.
   * @returns {Array<Object>}
   */
  getPotString () {
    return this._extractor.getPotString();
  }

  /**
   * Saves the currently extracted messages to a pot file with the designed path.
   * Creates any parent directories as necessary.
   *
   * @param {string} outputPath
   */
  savePotFile (outputPath) {
    const parentDirectory = outputPath.substring(0, outputPath.lastIndexOf('/'));
    parentDirectory && fsExtra.mkdirpSync(parentDirectory);
    this._extractor.savePotFile(outputPath);
  }

  _registerTranslationPlaceholder (placeholder, filepath) {
    this._extractor.addMessage({
      text: placeholder.getPhrase(),
      textPlural: placeholder.getPluralForm(),
      context: placeholder.getContext(),
      references: [`${filepath}:${placeholder.getLineNumber()}`]
    });
  }

  /**
   * Extracts translations from a given mustache node.
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
