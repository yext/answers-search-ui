import { mount, render } from 'enzyme';

import DOM from '../../../src/ui/dom/dom';
import HandlebarsRenderer from '../../../src/ui/rendering/handlebarsrenderer';
import Handlebars from 'handlebars/dist/handlebars.min.js';

import AnalyticsEvent from '../../../src/core/analytics/analyticsevent';
import MockComponentManager from '../../setup/mockcomponentmanager';

/* global MouseEvent */

const DEFAULT_TEMPLATE = '<div>This is a default template {{name}}</div>';

// Our render requires the native handlebars compiler,
// and the set of precompiled templates for the components to use
const RENDERER = new HandlebarsRenderer({
  '_hb': Handlebars,
  'default': Handlebars.compile(DEFAULT_TEMPLATE)
});

const COMPONENT_MANAGER = new MockComponentManager();
COMPONENT_MANAGER.setRenderer(RENDERER);

const mockAnalyticsReporter = {
  report: jest.fn(() => Promise.resolve())
};
COMPONENT_MANAGER.setAnalyticsReporter(mockAnalyticsReporter);

describe('rendering component templates', () => {
  it('renders default templates', () => {
    const component = COMPONENT_MANAGER.create('Component', {
      data: { name: 'Billy' }
    });
    let wrapper = render(component);
    expect(wrapper.text()).toBe('This is a default template Billy');
  });

  it('renders provided custom templates', () => {
    const customTemplate = '<div>This is a test template {{name}}</div>';
    const component = COMPONENT_MANAGER.create('Component', {
      data: { name: 'Adrian' }
    });
    component.setTemplate(customTemplate);
    let wrapper = render(component);
    expect(wrapper.text()).toBe('This is a test template Adrian');
  });
});

describe('creating subcomponents', () => {
  it('creates subcomponents based on data attributes during mount', () => {
    const template = `<div data-component="Component" data-prop="child"></div>`;
    const component = COMPONENT_MANAGER.create('Component', {
      data: {
        child: { name: 'Bowen' }
      }
    });
    component.setTemplate(template);

    const wrapper = mount(component);
    expect(wrapper.text()).toBe('This is a default template Bowen');
  });
});

describe('attaching analytics events', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('attaches analytics events based on data attributes during mount', () => {
    const template = `<div id='test' data-eventtype="test_event" data-eventoptions='{"name":"{{name}}"}'>This is a test template</div>`;

    const component = COMPONENT_MANAGER.create(
      'Component',
      { data: { name: 'Jesse' } });
    component.setTemplate(template);

    const domOn = jest.spyOn(DOM, 'on');

    const wrapper = mount(component);
    expect(domOn).toHaveBeenCalledTimes(1);

    wrapper.find('#test').getDOMNode().dispatchEvent(new MouseEvent('mousedown', { button: 0 }));
    expect(mockAnalyticsReporter.report).toHaveBeenCalledTimes(1);
    const expectedEvent = new AnalyticsEvent('test_event');
    expectedEvent.addOptions({ name: 'Jesse' });
    expect(mockAnalyticsReporter.report).toHaveBeenCalledWith(expectedEvent);
  });

  it('attaches analytics events only once for subcomponents', () => {
    // eslint-disable-next-line
    const childTemplate = `<div id="test" data-eventtype="test_event" data-eventoptions='{"name":"{{name}}"}'>This is a test template</div>`;
    const childConfig = {
      template: childTemplate
    };
    const template = `<div data-component="Component" data-prop="child" data-opts='${JSON.stringify(childConfig).replace(/'/g, '&#39;')}'></div>`;

    const component = COMPONENT_MANAGER.create(
      'Component',
      { data: { name: 'Vig' } });
    component.setTemplate(template);
    const domOn = jest.spyOn(DOM, 'on');

    const wrapper = mount(component);
    expect(domOn).toHaveBeenCalledTimes(1);

    wrapper.find('#test').getDOMNode().dispatchEvent(new MouseEvent('mousedown', { button: 0 }));
    expect(mockAnalyticsReporter.report).toHaveBeenCalledTimes(1);
    const expectedEvent = new AnalyticsEvent('test_event');
    expectedEvent.addOptions({ name: 'Vig' });
    expect(mockAnalyticsReporter.report).toHaveBeenCalledWith(expectedEvent);
  });

  it('reports analyticsOptions provided to the component', () => {
    const template = `<div id='test' data-eventtype="test_event" data-eventoptions='{"name":"{{name}}"}'>This is a test template</div>`;

    const component = COMPONENT_MANAGER.create(
      'Component',
      {
        data: { name: 'Kelly' },
        analyticsOptions: { testOption: 'test' }
      });
    component.setTemplate(template);

    const domOn = jest.spyOn(DOM, 'on');

    const wrapper = mount(component);
    expect(domOn).toHaveBeenCalledTimes(1);

    wrapper.find('#test').getDOMNode().dispatchEvent(new MouseEvent('mousedown', { button: 0 }));
    expect(mockAnalyticsReporter.report).toHaveBeenCalledTimes(1);
    const expectedEvent = new AnalyticsEvent('test_event');
    expectedEvent.addOptions({
      name: 'Kelly',
      testOption: 'test'
    });
    expect(mockAnalyticsReporter.report).toHaveBeenCalledWith(expectedEvent);
  });
});
