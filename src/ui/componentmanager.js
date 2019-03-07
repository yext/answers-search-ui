export default class ComponentManager {
  constructor() {
    this._components = {};
  }

  register(component) {
    this._components[component.type] = component;
    return this;
  }

  create(componentType, opts) {
    return new this._components[componentType](opts);
  }
}
