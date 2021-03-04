/** @module ComponentManager */

import { COMPONENT_REGISTRY } from './registry';

export default class ComponentManager {
  constructor () {
    this._activeComponents = [];
    this._core = null;
    this._renderer = null;
    this._analyticsReporter = null;
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

  create (componentType, opts) {
    let systemOpts = {
      core: this._core,
      renderer: this._renderer,
      analyticsReporter: this._analyticsReporter,
      componentManager: this
    };

    let component =
      new COMPONENT_REGISTRY[componentType](opts, systemOpts)
        .init(opts);

    this._activeComponents.push(component);

    return component;
  }

  /**
   * Remove the provided component from the list of active components and remove
   * the associated storage event listener
   * @param {Component} component The component to remove
   */
  remove (component) {
    this._core.globalStorage.off('update', component.moduleId);

    const index = this._activeComponents.findIndex(c => c.name === component.name);
    this._activeComponents.splice(index, 1);
  }
}
