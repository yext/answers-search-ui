import Core from './core/core';
import {
  TemplateLoader,
  COMPONENT_MANAGER,
  Renderers
} from './ui/index';

/**
 * Our API should only be instantiable once
 * @type {JAPI} The instance of JAPI
 */
export default class JAPI {
  constructor(opts = {}) {
    if (!JAPI.setInstance(this)) {
      return JAPI.getInstance();
    }

    this.components = COMPONENT_MANAGER;

    // Templates are currently downloaded separately from the CORE and UI bundle.
    // Future enhancement is to ship the components with templates in a separate bundle.
    this.templates = new TemplateLoader().onLoaded((templates) => {
      COMPONENT_MANAGER
        .setCore(new Core({
          apiKey: opts.apiKey,
          experience: opts.experience
        }))
        .setRenderer(new Renderers.Handlebars(templates));

        this._onReady.call(this);
    });

    this._onReady = opts.onReady || function() {};

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

  onReady(cb) {
    this._onReady = cb;
    return this;
  }

  addComponent(type, opts) {
    console.log('Adding Standard Component...');
    this.components.create(type, opts).init().mount();
    return this;
  }

  createComponent(type, opts) {
    console.log('Create Custom Component...');
    this.components.create('Component', opts).init().mount();
    return;
  }
}

