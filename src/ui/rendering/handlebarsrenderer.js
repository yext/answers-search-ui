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
      return '';
//      let t = this._handlebars.compile(config.template);
//      return this._handlebars.template(t)(data);
    }
    return this._templates[config.templateName](data);
  }
}