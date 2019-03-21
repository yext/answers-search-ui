import Core from './core/core';
import {
  TemplateLoader,
  COMPONENT_MANAGER
} from './ui/index';

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

    this.core = new Core();

    // TODO(billy) the components and templates should be contained within a broader UI class.
    // The UI should be registered to JAPI via an interface so that it can be pulled in separately
    this.components = COMPONENT_MANAGER.useStorage(this.core.storage);

    // Templates are currently downloaded separately from the CORE and UI bundle.
    // Future enhancement is to ship the components with templates in a separate bundle.
    this.templates = new TemplateLoader();

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

