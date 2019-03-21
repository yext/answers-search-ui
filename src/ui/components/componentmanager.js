/**
 * ComponentManager is a Singletone that contains both an internal registry of
 * eligible components to be created, as well as keeps track of the current
 * instantiated and active components.
 *
 * ALL components should be constructed using the {ComponentManager} via its `create` method.
 *
 */
export default class ComponentManager {
  constructor() {
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
    this._activeComponents = {};

    /**
     * Storage is the source of truth for the state of all components.
     * Whenever state in the storage changes, it pushes the state down to each of the relevant components.
     */
    this._storage = null;
  }

  static setInstance(instance) {
    if (!this.instance) {
      this.instance = instance;
      return true;
    }
    return false;
  }

  static getInstance() {
    return this.instance;
  }

  useStorage(storage) {
    this._storage = storage;
    return this;
  }

  /**
   * registers a component to be eligible for creation and override.
   * @param {Component} The Component Class to register
   */
  register(componentClazz) {
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
  create(componentType, opts) {
    // Every component needs local access to the component manager
    // because sometimes components have subcomponents that need to be
    // constructed during creation
    opts = Object.assign({
      componentManager: this
    }, opts);

    // Instantiate our new component and keep track of it
    let component = new this._componentRegistry[componentType](opts);
    this._activeComponents[componentType] = component;

    // If there is a local storage to power state, apply the state
    // from the storage to the component, and then bind the component
    // state to the storage via its updates
    if (this._storage !== null) {
      if (component.moduleId === undefined || component.moduleId === null) {
        return component;
      }

      component.setState(this._storage.getState(component.moduleId));

      this._storage.on('update', component.moduleId, (data) => {
        component.setState(data);
      })
    }

    return component;
  }
}
