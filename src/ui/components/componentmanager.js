export default class ComponentManager {
  constructor() {
    if (!ComponentManager.setInstance(this)) {
      return ComponentManager.getInstance();
    }

    this._componentRegistry = {};

    this._activeComponents = {};

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

  register(component) {
    this._componentRegistry[component.type] = component;
    return this;
  }

  get(componentType) {
    return this._componentRegistry[componentType];
  }

  create(componentType, opts) {
    // Make sure every component has access to the component manager
    opts = Object.assign({
      componentManager: this
    }, opts);

    let component = new this._componentRegistry[componentType](opts);
    this._activeComponents[componentType] = component;

    if (this._storage) {
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
