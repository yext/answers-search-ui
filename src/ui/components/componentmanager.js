/** @module ComponentManager */

import { AnswersComponentError } from '../../core/errors/errors';

/**
 * ComponentManager is a Singletone that contains both an internal registry of
 * eligible components to be created, as well as keeps track of the current
 * instantiated and active components.
 *
 * ALL components should be constructed using the {ComponentManager} via its `create` method.
 */
export default class ComponentManager {
  constructor () {
    if (!ComponentManager.setInstance(this)) {
      return ComponentManager.getInstance();
    }

    /**
     * The component registry is an internal map, that contains
     * all available component CLASSES used for creation or override.
     * Each component class has a unique TYPE, which is used as the key for the registry
     * @type {Object}
     */
    this._componentRegistry = {};

    /**
     * The active components is an internal container to keep track
     * of all of the components that have been constructed
     */
    this._activeComponents = [];

    /**
     * A local reference to the core library dependency
     *
     * The Core contains both the storage AND services that are needed for performing operations
     * like search and auto complete.
     *
     * The storage is the source of truth for the state of ALL components.
     * Whenever the storage is updated, the state gets pushed down to the necessary components.
     * @type {Core}
     */
    this._core = null;

    /**
     * The primary renderer to use for all components
     * @type {HandlebarsRenderer}
     */
    this._renderer = null;

    /**
     * A local reference to the analytics reporter dependency
     */
    this._analyticsReporter = null;
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

  setRenderer (renderer) {
    this._renderer = renderer;
    return this;
  }

  setCore (core) {
    this._core = core;
    return this;
  }

  setAnalyticsReporter (reporter) {
    this._analyticsReporter = reporter;
    return this;
  }

  /**
   * registers a component to be eligible for creation and override.
   * @param {Component} The Component Class to register
   */
  register (componentClazz) {
    this._componentRegistry[componentClazz.type] = componentClazz;
    return this;
  }

  /**
   * create is the entry point for constructing any and all components.
   * It will instantiate a new instance of the component, and both apply
   * initial state from the storage and bind it to the storage for updates.
   * @param {string} componentType The component type to create
   * @param {Object} opts The options to pipe to the construction of the component
   */
  create (componentType, opts) {
    // Every component needs local access to the component manager
    // because sometimes components have subcomponents that need to be
    // constructed during creation
    opts = Object.assign({
      core: this._core,
      renderer: this._renderer,
      analyticsReporter: this._analyticsReporter,
      componentManager: this
    }, opts);

    let componentClass = this._componentRegistry[componentType];

    if (
      !componentClass.areDuplicateNamesAllowed() &&
      this._activeComponents.some(c => c.name === opts.name)
    ) {
      throw new AnswersComponentError(
        `Another component with name ${opts.name} already exists`,
        componentType);
    }

    // Instantiate our new component and keep track of it
    let component =
      new this._componentRegistry[componentType](opts)
        .init(opts);

    this._activeComponents.push(component);

    // If there is a local storage to power state, apply the state
    // from the storage to the component, and then bind the component
    // state to the storage via its updates
    if (this._core && this._core.storage !== null) {
      if (component.moduleId === undefined || component.moduleId === null) {
        return component;
      }

      this._core.storage
        .on('update', component.moduleId, (data) => {
          component.setState(data);
        });
    }

    return component;
  }

  /**
   * Remove the provided component from the list of active components and remove
   * the associated storage event listener
   * @param {Component} component The component to remove
   */
  remove (component) {
    this._core.storage.off('update', component.moduleId);

    const index = this._activeComponents.findIndex(c => c.name === component.name);
    this._activeComponents.splice(index, 1);
  }

  getActiveComponent (type) {
    return this._activeComponents.find(c => c.constructor.type === type);
  }
}
