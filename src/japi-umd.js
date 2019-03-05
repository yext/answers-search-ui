import * as Core from './core/index';
import * as UI from './ui/index';

/**
 * Our API should only be instantiable once
 * @type {JAPI} The instance of JAPI
 */
export default class JAPI {
  constructor(opts) {
    if (!JAPI.setInstance(this)) {
      return JAPI.getInstance();
    }

    opts = opts || {};

    this.components = new UI.ComponentManager();

    this.templates = new UI.TemplateLoader();

    return this;
  }

  static setInstance(instance) {
    if (!this.instance) {
      this.instance = instance;
      return true;
    }
    return false;
  }

  static getInstance(opts) {
    return this.instance;
  }

  static get templates() {
    return this.instance.templates;
  }

  static init(opts) {
    return new JAPI(opts);
  }

  addComponent() {
    console.log('Add Component');
    return this;
  }

  createComponent(type, opts) {
    console.log('Create Custom Component');
    new UI.Component(type, opts).init().mount();
    return;
  }
}

