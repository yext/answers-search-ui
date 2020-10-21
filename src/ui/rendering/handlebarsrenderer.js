/** @module HandlebarsRenderer */

import Renderer from './renderer';
import Icons from '../icons';
import HighlightedValue from '../../core/models/highlightedvalue';
import TranslationProcessor from '../../core/i18n/translationprocessor';

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

  init (templates, locale) {
    // Assign the handlebars compiler and templates based on
    // information provided from external dep (in default case, it comes from external server request)
    this._handlebars = templates._hb;
    this._templates = templates;

    // Store the locale that ANSWERS was initialized with
    this._initLocale = locale;

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
   * compile a handlebars template so that it can be rendered,
   * using the {Handlebars} compiler
   * @param {string} template The template string to compile
   * @returns {Function}
   */
  compile (template) {
    if (typeof template !== 'string') {
      return '';
    }
    return this._handlebars.compile(template);
  }

  /**
   * compile a template and then add it to the current template bundle
   * @param {string} templateName The unique name for the template
   * @param {string} template The handlebars template string
   */
  registerTemplate (templateName, template) {
    this._templates[templateName] = this.compile(template);
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

    this.registerHelper({
      eq: function (v1, v2) {
        return v1 === v2;
      },
      ne: function (v1, v2) {
        return v1 !== v2;
      },
      lt: function (v1, v2) {
        return v1 < v2;
      },
      gt: function (v1, v2) {
        return v1 > v2;
      },
      lte: function (v1, v2) {
        return v1 <= v2;
      },
      gte: function (v1, v2) {
        return v1 >= v2;
      },
      and: function () {
        return Array.prototype.slice.call(arguments).every(Boolean);
      },
      or: function () {
        return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
      }
    });

    this.registerHelper({
      add: (a1, a2) => a1 + a2,
      sub: (a1, a2) => a1 - a2,
      mul: (a1, a2) => a1 * a2,
      div: (a1, a2) => a1 / a2,
      mod: (a1, a2) => a1 % a2
    });

    this.registerHelper('every', function (...args) {
      const values = args.slice(0, args.length - 1);
      const options = args[args.length - 1];
      return (values.every(v => v)) ? options.fn(this) : options.inverse(this);
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

    this.registerHelper('plural', function (number, singularText, pluralText) {
      return number === 1
        ? singularText
        : pluralText;
    });

    let self = this;

    this.registerHelper('processTranslation', function (options) {
      const pluralizationInfo = {};
      const interpolationParams = {};
      let { phrase, count, locale } = options.hash;

      Object.entries(options.hash).forEach(([key, value]) => {
        if (key.startsWith('pluralForm')) {
          const pluralFormIndex = parseInt(key.substring(10));
          pluralizationInfo[pluralFormIndex] = value;
        } else {
          interpolationParams[key] = value;
        }
      });

      const isUsingPluralization = (typeof phrase !== 'string');

      locale = locale || self._initLocale;
      const language = locale.substring(0, 2);

      return isUsingPluralization
        ? TranslationProcessor.process(pluralizationInfo, interpolationParams, count, language)
        : TranslationProcessor.process(phrase, interpolationParams);
    });

    self.registerHelper('icon', function (name, complexContentsParams, options) {
      let icon = Icons.default;
      if (!Icons[name]) {
        return self.SafeString(icon);
      }
      if (typeof Icons[name] === 'function') {
        icon = Icons[name](complexContentsParams);
      } else {
        icon = Icons[name];
      }
      return self.SafeString(icon);
    });

    self.registerHelper('highlightValue', function (value, getInverted) {
      const input = value.value || value.shortValue;

      const highlightedVal = new HighlightedValue({
        value: input,
        matchedSubstrings: value.matchedSubstrings
      });
      const escapeFunction = (val) => self.escapeExpression(val);

      return getInverted
        ? self.SafeString(highlightedVal.getInvertedWithTransformFunction(escapeFunction))
        : self.SafeString(highlightedVal.getWithTransformFunction(escapeFunction));
    });
  }
}
