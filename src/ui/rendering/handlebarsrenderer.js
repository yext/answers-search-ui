import Renderer from './renderer';
import HandleBars from 'handlebars/runtime';
import TemplateLoader from './templateloader';

export default class HandleBarsRenderer extends Renderer {
  constructor() {
    super();

    this._loader = new TemplateLoader();

    this._templates = {};

    this.setup();
  }

  setup() {
    this._loader.onLoaded((templates) => {
      this._templates = templates(HandleBars);
      HandleBars.partials = this._templates;
    })
  }

  render(template, data) {
    return this._templates[template](data);
  }
}