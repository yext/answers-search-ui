export default class ComponentManager {
  constructor() {
    if (!ComponentManager.setInstance(this)) {
      return ComponentManager.getInstance();
    }

    this._componentRegistry = {};

    this._activeComponents = {};
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

    return component;
  }
}
