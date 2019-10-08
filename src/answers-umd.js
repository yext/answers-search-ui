/** @module */

import Core from './core/core';

import {
  TemplateLoader,
  COMPONENT_MANAGER,
  Renderers,
  DOM
} from './ui/index';
import Component from './ui/components/component';

import ErrorReporter from './core/errors/errorreporter';
import { AnalyticsReporter } from './core';
import PersistentStorage from './ui/storage/persistentstorage';
import GlobalStorage from './core/storage/globalstorage';
import { AnswersComponentError } from './core/errors/errors';

/**
 * The main Answers interface
 */
class Answers {
  constructor () {
    if (!Answers.setInstance(this)) {
      return Answers.getInstance();
    }

    /**
     * A reference to the Component base class for custom
     * components to extend
     */
    this.Component = Component;

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
     * A local reference to the core api
     * @type {Core}
     */
    this.core = null;

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
    const globalStorage = new GlobalStorage();
    const persistentStorage = new PersistentStorage({
      updateListener: config.onStateChange,
      resetListener: data => globalStorage.setAll(data)
    });
    globalStorage.setAll(persistentStorage.getAll());

    this.core = new Core({
      apiKey: config.apiKey,
      globalStorage: globalStorage,
      persistentStorage: persistentStorage,
      answersKey: config.answersKey,
      fieldFormatters: config.fieldFormatters,
      experienceVersion: config.experienceVersion,
      locale: config.locale
    });

    if (config.onStateChange && typeof config.onStateChange === 'function') {
      config.onStateChange(persistentStorage.getAll(), window.location.search.substr(1));
    }

    this.components
      .setCore(this.core)
      .setRenderer(this.renderer);

    if (config.businessId) {
      this.components.setAnalyticsReporter(
        new AnalyticsReporter(
          this.core,
          config.answersKey,
          config.experienceVersion,
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
      this._errorReporter = new ErrorReporter(config.apiKey, config.answersKey, config.experienceVersion);
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

  /**
   * Register a custom component type so it can be created via
   * addComponent and used as a child component
   * @param {Component} componentClass
   */
  registerComponentType (componentClass) {
    this.components.register(componentClass);
  }

  addComponent (type, opts) {
    if (typeof opts === 'string') {
      opts = {
        container: opts
      };
    }

    try {
      this.components.create(type, opts).mount();
    } catch (e) {
      throw new AnswersComponentError('Failed to add component', type, e);
    }
    return this;
  }

  /**
   * Remove the component - and all of its children - with the given name
   * @param {string} name The name of the component to remove
   */
  removeComponent (name) {
    this.components.removeByName(name);
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
