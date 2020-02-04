/** @module HandlebarsRenderer */

import Renderer from './renderer';
import Icons from '../icons';

/**
 * HandlebarsRenderer is a wrapper around the nativate handlebars renderer.
 * @extends Renderer
 */
export default class HandlebarsRenderer extends Renderer {
  constructor (templates = {}, opts = {}) {
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
   * registerHelper is a public interface for external dependencies to
   * register their own custom helpers to our internal Handlebars Compiler
   */
  SafeString (string) {
    return new this._handlebars.SafeString(string);
  }

  /**
   * compile a handlebars template so that it can be rendered,
   * using the {Handlebars} compiler
   * @param {string} template The template string to compile
   */
  compile (template) {
    if (typeof template !== 'string') {
      return '';
    }
    return this._handlebars.compile(template);
  }

  /**
   * render will render a template with data
   * @param {Object} config Provide either a templateName or a pre-compiled template
   * @param {Object} data The data to provide to the template
   */
  render (config, data) {
    // If a custom template is provided, use it,
    // otherwise fall back to the template name
    // TODO(billy) This interface should probably be less ugly
    if (config.template !== null) {
      return config.template(data);
    }

    try {
      return this._templates[config.templateName](data);
    } catch (e) {
      throw new Error('Can not find/render template: ' + config.templateName, e);
    }
  }

  _registerCustomHelpers () {
    this.registerHelper('ifeq', function (arg1, arg2, options) {
      return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
    });

    this.registerHelper('ifnoteq', function (arg1, arg2, options) {
      return (arg1 !== arg2) ? options.fn(this) : options.inverse(this);
    });

    this.registerHelper('formatPhoneNumber', function (phoneNumberString) {
      var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
      var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        var intlCode = (match[1] ? '+1 ' : '');
        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
      }
      return null;
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
    self.registerHelper('icon', function (name, value, options) {
      let icon = Icons.default;
      if (Icons[name]) {
        icon = Icons[name];
      }
      return self.SafeString(icon);
    });
  }
}
