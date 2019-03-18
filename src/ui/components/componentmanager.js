export default class ComponentManager {
  constructor() {
    if (!ComponentManager.setInstance(this)) {
      return ComponentManager.getInstance();
    }
    this._components = {};
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
    this._components[component.type] = component;
    return this;
  }

  get(componentType) {
    return this._components[componentType];
  }

  create(componentType, opts) {
    // Make sure every component has access to the component manager
    opts = Object.assign({
      componentManager: this
    }, opts);
    return new this._components[componentType](opts);
  }
}
