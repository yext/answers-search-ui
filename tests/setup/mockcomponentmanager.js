import { Renderers } from '../../src/ui';
import templates from '../../dist/answerstemplates.compiled.min';
import { COMPONENT_REGISTRY } from '../../src/ui/components/registry';

/** @module MockComponentManager */

/**
 * A mock implementation of the component manager, intended
 * to be used in component unit tests.
 *
 * It is not necessary to create components to test via this
 * manager, but it is recommended to provide a mock manager to
 * each unit test component if manually created.
 */
export default class MockComponentManager {
  constructor (mockCore) {
    this.core = mockCore;

    this.renderer = new Renderers.Handlebars();
    this.renderer.init(templates);
  }

  create (componentType, config, analyticsReporter) {
    const systemConfig = {
      core: this.core,
      analyticsReporter,
      renderer: this.renderer,
      componentManager: this
    };

    const componentConfig = {
      ...config,
      class: 'enzyme-component'
    };

    const component = new COMPONENT_REGISTRY[componentType](componentConfig, systemConfig).init(componentConfig);
    return component;
  }

  remove () {}

  removeByName () {
    throw new Error('removeByName is not implemented');
  }

  getActiveComponent () {
    throw new Error('getActiveComponent is not implemented');
  }
}
