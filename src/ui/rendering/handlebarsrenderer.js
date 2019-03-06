import Renderer from './renderer';
import TemplateLoader from './templateloader';

export default class HandlebarsRenderer extends Renderer {
  constructor() {
    super();

    this._loader = new TemplateLoader();

    this._templates = {};

    this.setup();
  }

  setup() {
    this._loader.onLoaded((templates) => {
      this._templates = templates;
    })
  }

  render(template, data) {
    return this._templates[template](data);
  }
}