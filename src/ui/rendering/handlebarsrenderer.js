import Renderer from './renderer';
import TemplateLoader from './templateloader';

export default class HandlebarsRenderer extends Renderer {
  constructor(templates, opts = {}) {
    super();

    this._handlebars = templates._hb || null;

    this._templates = templates || {};
  }

  render(config, data) {
    if (config.template !== null) {
      // TODO(billy) these templates need to be pre-compiled with handlebars,
      // and so we need to somehow ship the compiler.
      return config.template;
    }
    return this._templates[config.templateName](data);
  }
}