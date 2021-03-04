/** @module HandlebarsRenderer */

import Renderer from './renderer';
import HighlightedValue from '../../core/models/highlightedvalue';

/**
 * HandlebarsRenderer is a wrapper around the nativate handlebars renderer.
 * @extends Renderer
 */
export default class HandlebarsRenderer extends Renderer {
  constructor (templates = {}) {
    super();

    /**
     * A local reference to the handlebars compiler
     * @type {Handlebars}
     * @private
     */
    this._handlebars = templates._hb || null;

    /**
     * A local reference to the pre-compiled handlebars templates
     * @type {Handlebars}
     * @private
     */
    this._templates = templates || {};
  }

  init (templates) {
    // Assign the handlebars compiler and templates based on
    // information provided from external dep (in default case, it comes from external server request)
    this._handlebars = templates._hb;
    this._templates = templates;

    // TODO(billy) Once we re-write templates using the new helpers library
    // we probably don't need these custom helpers anymore
    this._registerCustomHelpers();
  }

  /**
   * registerHelper is a public interface for external dependencies to
   * register their own custom helpers to our internal Handlebars Compiler
   */
  registerHelper (name, cb) {
    this._handlebars.registerHelper(name, cb);
  }

  /**
   * SafeString is a public interface for external dependencies to
   * mark a string as 'safe'. Handlebars will not escape a SafeString
   */
  SafeString (string) {
    return new this._handlebars.SafeString(string);
  }

  /**
   * EscapeExpression is a public interface for external dependencies to
   * escape a string
   */
  escapeExpression (string) {
    return this._handlebars.escapeExpression(string);
  }

  /**
   * render will render a template with data
   * @param {Object} config Provide either a templateName or a pre-compiled template
   * @param {Object} data The data to provide to the template
   */
  render (config, data) {
    return this._templates[config.templateName](data);
  }

  _registerCustomHelpers () {
    this.registerHelper('ifeq', function (arg1, arg2, options) {
      return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
    });

    this.registerHelper('assign', function (name, value, options) {
      let args = arguments;
      options = args[args.length - 1];

      if (!options.data.root) {
        options.data.root = {};
      }

      let v = '';
      for (let i = 1; i < args.length - 1; i++) {
        v = v + args[i];
      }

      options.data.root[name] = v;
    });

    this.registerHelper('json', function (name, value, options) {
      return name === undefined
        ? ''
        : JSON.stringify(name);
    });
    let self = this;
    self.registerHelper('highlightValue', function (value, getInverted) {
      const escapedInput = self.escapeExpression(value.value || value.shortValue);

      const highlightedVal = new HighlightedValue({
        value: escapedInput,
        matchedSubstrings: value.matchedSubstrings
      });

      return getInverted ? self.SafeString(highlightedVal.getInverted())
        : self.SafeString(highlightedVal.get());
    });
  }
}
