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

    // TODO(jdelerme): have this populate by bundle instead
    // i.e. minified bundle is not dev, other bundle is
    this._isDev = new URL(window.location.toString()).searchParams.get('local');

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

  static getInstance (opts) {
    return this.instance;
  }

  init (opts) {
    this.components.setCore(new Core({
      apiKey: opts.apiKey,
      answersKey: opts.answersKey
    }))
      .setRenderer(this.renderer)
      .setAnalyticsReporter(new AnalyticsReporter(opts.apiKey, opts.answersKey));

    this._onReady = opts.onReady || function () {};

    if (opts.useTemplates === false || opts.templateBundle) {
      if (opts.templateBundle) {
        this.renderer.init(opts.templateBundle);
      }

      this._onReady();
      return this;
    }

    // Templates are currently downloaded separately from the CORE and UI bundle.
    // Future enhancement is to ship the components with templates in a separate bundle.
    this.templates = new TemplateLoader({
      templateUrl: opts.templateUrl
    }).onLoaded((templates) => {
      this.renderer.init(templates);

      this._onReady();
    });

    if (!this._isDev && !opts.suppressErrorReports) {
      this._errorReporter = new ErrorReporter(opts.apiKey, opts.answersKey);
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
