import Core from './core/core';
import {
  TemplateLoader,
  COMPONENT_MANAGER,
  Renderers
} from './ui/index';

/**
 * Our API should only be instantiable once
 * @type {ANSWERS} The instance of ANSWERS
 */
class Answers {
  constructor() {
    if (!Answers.setInstance(this)) {
      return Answers.getInstance();
    }

    /**
     * A reference of the renderer to use for the components
     * This is provided during initialization.
     * @type {Renderer}
     */
    this.renderer = new Renderers.Handlebars();

    /**
     * A local reference to the component manager
     * @type {ComponentManager}
     */
    this.components = COMPONENT_MANAGER;

    /**
     * A callback function to invoke once the library is ready.
     * Typically fired after templates are fetched from server for rendering.
     */
    this._onReady = function() {};
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

  init(opts) {
    this.components.setCore(new Core({
      apiKey: opts.apiKey,
      answersKey: opts.answersKey
    }))
    .setRenderer(this.renderer);

    // Templates are currently downloaded separately from the CORE and UI bundle.
    // Future enhancement is to ship the components with templates in a separate bundle.
    this.templates = new TemplateLoader().onLoaded((templates) => {
      this.renderer.init(templates);

      this._onReady.call(this);
    });

    this._onReady = opts.onReady || function() {};

    return this;
  }

  onReady(cb) {
    this._onReady = cb;
    return this;
  }

  addComponent(type, opts) {
    console.log('Adding Standard Component...');
    if (typeof opts === 'string') {
      opts = {
        container: opts
      }
    }

    this.components.create(type, opts).mount();
    return this;
  }

  createComponent(type, opts) {
    console.log('Create Custom Component...');
    this.components.create('Component', opts).init().mount();
    return;
  }

  registerHelper(name, cb) {
    this.renderer.registerHelper(name, cb);
    return this;
  };
}

const ANSWERS = new Answers();
export default ANSWERS;
