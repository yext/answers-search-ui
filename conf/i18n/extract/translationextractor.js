const path = require('path');
const fsExtra = require('fs-extra');
const { GettextExtractor } = require('gettext-extractor');

const HbsPlaceholderParser = require('./hbsplaceholderparser');
const JsPlaceholderParser = require('./jsplaceholderparser');

/**
 * TranslationExtractor extracts translations to a gettext style file.
 */
class TranslationExtractor {
  constructor () {
    this._extractor = new GettextExtractor();
  }

  /**
   * Extracts translations from a specific file's contents.
   *
   * @param {string} contents
   * @param {string} filepath
   */
  extract (contents, filepath) {
    const extname = path.extname(filepath);
    let parser;
    switch (extname) {
      case '.js':
        parser = new JsPlaceholderParser();
        break;
      case '.hbs':
        parser = new HbsPlaceholderParser();
        break;
      default:
        throw new Error(`Unknown file extension for ${filepath}`);
    }
    const placeholders = parser.parse(contents, filepath);
    for (const placeholder of placeholders) {
      this._registerTranslationPlaceholder(placeholder);
    }
  }

  /**
   * Exports the currently extracted messages to the given output file.
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
   * Returns the extracted messages as a pot file string.
   * //github.com/lukasgeiter/gettext-extractor/wiki/API-Reference#getpotstringheaders
   * @returns {Array<Object>}
   */
  getPotString () {
    return this._extractor.getPotString();
  }

  /**
   * Registers a given {@link TranslationPlaceholder}'s message.
   *
   * @param {TranslationPlaceholder} placeholder
   */
  _registerTranslationPlaceholder (placeholder) {
    this._extractor.addMessage({
      text: placeholder.getPhrase(),
      textPlural: placeholder.getPluralForm(),
      context: placeholder.getContext(),
      references: [`${placeholder.getFilePath()}:${placeholder.getLineNumber()}`]
    });
  }
}

module.exports = TranslationExtractor;
