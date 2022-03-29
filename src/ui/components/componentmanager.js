/** @module ComponentManager */

import { AnswersComponentError } from '../../core/errors/errors';
import DOM from '../dom/dom';

/** @typedef {import('../../core/core').default} Core */

/**
 * ComponentManager contains both a registry of eligible components to be created,
 * as well as keeps track of the current instantiated and active components.
 *
 * ALL components should be constructed using the {ComponentManager} via its `create` method.
 */
export default class ComponentManager {
  constructor (componentRegistry) {
    /**
     * The active components is an internal container to keep track
     * of all of the components that have been constructed
     */
    this._activeComponents = [];

    /**
     * The registry of possible components that can be instantiated.
     */
    this._componentRegistry = componentRegistry;

    /**
     * A counter for the id the give to the next component that is created.
     */
    this._componentIdCounter = 0;

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

    /**
     * A mapping from component types to component names, as these may be configured by a user
     */
    this._componentTypeToComponentNames = {};

    /**
     * A mapping of Components to moduleId storage listeners, for removal purposes.
     */
    this._componentToModuleIdListener = new Map();
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
   * Returns components with names similar to the passed in component class.
   * @param {string} componentType
   */
  getSimilarComponents (componentType) {
    let similarComponents = Object.keys(this._componentRegistry).filter(type =>
      type.startsWith(componentType.substring(0, 2))
    );
    if (similarComponents.length === 0) {
      similarComponents = Object.keys(this._componentRegistry);
    }
    return similarComponents;
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
    const systemOpts = {
      core: this._core,
      renderer: this._renderer,
      analyticsReporter: this._analyticsReporter,
      componentManager: this,
      uniqueId: this._componentIdCounter
    };
    this._componentIdCounter++;

    const componentClass = this._componentRegistry[componentType];
    if (!componentClass) {
      throw new AnswersComponentError(
        `Component type ${componentType} is not recognized as a valid component.` +
        ` You might have meant ${this.getSimilarComponents(componentType).join(', ')}?`);
    }

    if (
      !componentClass.areDuplicateNamesAllowed() &&
      this._activeComponents.some(c => c.name === opts.name)
    ) {
      throw new AnswersComponentError(
        `Another component with name ${opts.name} already exists`,
        componentType);
    }

    const config = {
      isTwin: this._activeComponents.some(component => component.constructor.type === componentType),
      ...opts
    };

    // Instantiate our new component and keep track of it
    const component =
      new this._componentRegistry[componentType](config, systemOpts)
        .init(config);

    this._activeComponents.push(component);
    if (!this._componentTypeToComponentNames[componentType]) {
      this._componentTypeToComponentNames[componentType] = [];
    }
    this._componentTypeToComponentNames[componentType].push(component.name);

    // If there is a storage to power state, apply the state
    // from the storage to the component, and then bind the component
    // state to the storage via its updates
    if (this._core && this._core.storage !== null) {
      if (component.moduleId === undefined || component.moduleId === null) {
        return component;
      }
      const listener = {
        eventType: 'update',
        storageKey: component.moduleId,
        callback: data => component.setState(data)
      };
      this._core.storage.registerListener(listener);
      this._componentToModuleIdListener.set(component, listener);
    }

    return component;
  }

  /**
   * Remove the provided component from the list of active components and remove
   * the associated storage event listener
   * @param {Component} component The component to remove
   */
  remove (component) {
    this._core.storage.removeListener(this._componentToModuleIdListener.get(component));

    const index = this._activeComponents.findIndex(c => c.uniqueId === component.uniqueId);
    if (index !== -1) {
      this._activeComponents.splice(index, 1);
    }
  }

  /**
   * Remove the component with the given name
   * @param {string} name The name of the compnent to remove
   */
  removeByName (name) {
    const component = this._activeComponents.find(c => c.name === name);
    component.remove();
    DOM.empty(component._container);
  }

  getActiveComponent (type) {
    return this._activeComponents.find(c => c.constructor.type === type);
  }

  getActiveComponents (type) {
    return this._activeComponents.filter(c => c.constructor.type === type);
  }

  /**
   * Returns a concatenated list of all names associated with the given component types
   * @param {string[]} type The types of the component
   * @returns {string[]} The component names for the component types
   */
  getComponentNamesForComponentTypes (types) {
    return types.reduce((names, type) => {
      return names.concat(this._componentTypeToComponentNames[type] || []);
    }, []);
  }

  /**
   * Returns the number of active components
   * @returns {number} The number of active componets
   */
  getNumActiveComponents () {
    return this._activeComponents.length;
  }
}
