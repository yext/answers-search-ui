/** @module */

import Core from './core/core';

import {
  TemplateLoader,
  COMPONENT_MANAGER,
  Renderers,
  DOM
} from './ui/index';

import ErrorReporter from './core/errors/errorreporter';
import { AnalyticsReporter } from './core';

/**
 * The main Answers interface
 */
class Answers {
  constructor () {
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
    this._onReady = function () {};
  }

  static setInstance (instance) {
    if (!this.instance) {
      this.instance = instance;
      return true;
    }
    return false;
  }

  static getInstance () {
    return this.instance;
  }

  init (config) {
    const core = new Core({
      apiKey: config.apiKey,
      answersKey: config.answersKey,
      locale: config.locale
    });

    this.components
      .setCore(core)
      .setRenderer(this.renderer);

    if (config.businessId) {
      this.components.setAnalyticsReporter(
        new AnalyticsReporter(
          core,
          config.answersKey,
          config.businessId,
          config.analyticsOptions)
      );
    }

    this._onReady = config.onReady || function () {};

    if (config.useTemplates === false || config.templateBundle) {
      if (config.templateBundle) {
        this.renderer.init(config.templateBundle);
      }

      this._onReady();
      return this;
    }

    // Templates are currently downloaded separately from the CORE and UI bundle.
    // Future enhancement is to ship the components with templates in a separate bundle.
    this.templates = new TemplateLoader({
      templateUrl: config.templateUrl
    }).onLoaded((templates) => {
      this.renderer.init(templates);

      this._onReady();
    });

    if (!config.suppressErrorReports) {
      this._errorReporter = new ErrorReporter(config.apiKey, config.answersKey);
      window.addEventListener('error', e => this._errorReporter.report(e.error));
      window.addEventListener('unhandledrejection', e => this._errorReporter.report(e.error));
    }

    return this;
  }

  domReady (cb) {
    DOM.onReady(cb);
  }

  onReady (cb) {
    this._onReady = cb;
    return this;
  }

  addComponent (type, opts) {
    if (typeof opts === 'string') {
      opts = {
        container: opts
      };
    }

    this.components.create(type, opts).mount();
    return this;
  }

  createComponent (opts) {
    return this.components.create('Component', opts).mount();
  }

  registerHelper (name, cb) {
    this.renderer.registerHelper(name, cb);
    return this;
  }
}

const ANSWERS = new Answers();
export default ANSWERS;
