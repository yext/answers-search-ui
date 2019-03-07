import Renderer from './renderer';
import TemplateLoader from './templateloader';

export default class HandlebarsRenderer extends Renderer {
  constructor() {
    super();

    this._handlebars = null;

    this._loader = new TemplateLoader();

    this._templates = {};

    this.setup();
  }

  setup() {
    this._loader.onLoaded((templates) => {
      this._handlebars = templates._hb;
      this._templates = templates;
    })
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