import Renderer from './renderer';
import TemplateLoader from './templateloader';

export default class HandlebarsRenderer extends Renderer {
  constructor(templates, opts = {}) {
    super();

    this._handlebars = templates._hb || null;

    this._templates = templates || {};

    this._init();
  }

  _init() {
    this._handlebars.registerHelper('ifeq', function(arg1, arg2, options) {
      return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    })

    this._handlebars.registerHelper('ifnoteq', function(arg1, arg2, options) {
      return (arg1 != arg2) ? options.fn(this) : options.inverse(this);
    })

    this._handlebars.registerHelper('assign', function(name, value, options) {
      let args = arguments;
      options = args[args.length - 1];

      if (!options.data.root) {
        options.data.root = {};
      }

      let v = '';
      for (let i = 1; i < args.length - 1; i ++) {
        v = v + args[i];
      }

      options.data.root[name] = v;
    })
  }

  compile(template) {
    if (typeof template !== 'string') {
      return '';
    }
    return this._handlebars.compile(template);
  }

  render(config, data) {
    if (config.template !== null) {
      // TODO(billy) these templates need to be pre-compiled with handlebars,
      // and so we need to somehow ship the compiler.
      return config.template(data);
    }
    return this._templates[config.templateName](data);
  }
}