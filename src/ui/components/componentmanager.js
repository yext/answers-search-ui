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

  static getInstance(opts) {
    return this.instance;
  }

  register(component) {
    this._components[component.type] = component;
    return this;
  }

  create(componentType, opts) {
    return new this._components[componentType](opts);
  }
}
