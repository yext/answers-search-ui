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
    this.renderer.init(templates, 'en');
  }

  /**
   *
   * @param {string} componentType - The type of the component (as defined by the registry)
   * @param {Object} config - The config to pass to the component constructor
   * @param {?Object} systemConfig - The system config to override default mock system config
   */
  create (componentType, config, systemConfig = {}) {
    systemConfig = {
      core: this.core,
      analyticsReporter: this.analyticsReporter,
      renderer: this.renderer,
      componentManager: this,
      ...systemConfig
    };

    const componentConfig = {
      ...config,
      class: 'enzyme-component'
    };

    const component = new COMPONENT_REGISTRY[componentType](componentConfig, systemConfig).init(componentConfig);
    return component;
  }

  /**
   * @param {Object} renderer - The renderer to use for created components
   */
  setRenderer (renderer) {
    this.renderer = renderer;
    this.renderer._registerCustomHelpers();
  }

  /**
   * @param {Object} reporter - The analytics reporter to provide to constructed components (typically a jest mock)
   */
  setAnalyticsReporter (reporter) {
    this.analyticsReporter = reporter;
  }

  remove () {}

  removeByName () {
    throw new Error('removeByName is not implemented');
  }

  getActiveComponent () {
    throw new Error('getActiveComponent is not implemented');
  }

  getComponentNamesForComponentTypes () {
    throw new Error('getComponentNamesForComponentTypes is not implemented');
  }
}
