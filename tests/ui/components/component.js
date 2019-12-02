import DOM from '../../../src/ui/dom/dom';
import HandlebarsRenderer from '../../../src/ui/rendering/handlebarsrenderer';
import Handlebars from 'handlebars/dist/handlebars.min.js';

import Component from '../../../src/ui/components/component';
import AnalyticsEvent from '../../../src/core/analytics/analyticsevent';
import ComponentManager from '../../../src/ui/components/componentmanager';

// The DOM doesn't exist within components in the JEST environment,
// so we have to provide it to our DOM API properly.
DOM.setup(
  document,
  new DOMParser()
);

// NOTE(billy) These are the pre-compiled templates used as the component defaults
// TODO(billy) Configure Jest to load these from source files
const COMPONENT_TEMPLATES = {
  COMPONENT: {
    TEMPLATE_NAME: 'default',
    TEMPLATE: Handlebars.compile(`<div>This is a default template {{name}}</div>`)
  },
  MAP: {
    TEMPLATE_NAME: 'results/map',
    TEMPLATE: Handlebars.compile(`<div>MY MAP</div>`)
  }
};

// Our render requires the native handlebars compiler,
// and the set of precompiled templates for the components to use
const RENDERER = new HandlebarsRenderer({
  '_hb': Handlebars,
  [COMPONENT_TEMPLATES.COMPONENT.TEMPLATE_NAME]: COMPONENT_TEMPLATES.COMPONENT.TEMPLATE,
  [COMPONENT_TEMPLATES.MAP.TEMPLATE_NAME]: COMPONENT_TEMPLATES.MAP.TEMPLATE
});

const COMPONENT_MANAGER = ComponentManager.getInstance();

// The component manager is used to render components within a template
// using the `<div data-component='Component'>` syntax
COMPONENT_MANAGER.setRenderer(RENDERER);

let component;
const reportMock = jest.fn(() => Promise.resolve());

beforeEach(() => {
  // Always reset the DOM before each component render test
  let bodyEl = DOM.query('body');
  DOM.empty(bodyEl);

  // Create the container that our component will be injected into
  DOM.append(bodyEl, DOM.createEl('div', { class: 'test-component' }));

  // Finally construct our component
  component = new Component({
    container: '.test-component'
  },
  {
    renderer: RENDERER,
    componentManager: COMPONENT_MANAGER,
    analyticsReporter: { report: reportMock }
  });

  jest.clearAllMocks();
});

describe('render component templates', () => {
  it('renders default template', () => {
    const COMPONENT_TEMPLATES_TEST = {
      DATA: {
        name: 'Billy'
      },
      EXPECTED_RESULT: `<div>This is a default template Billy</div>`
    };

    let renderEl = DOM.create(component.render(COMPONENT_TEMPLATES_TEST.DATA));

    let testEl = DOM.create(COMPONENT_TEMPLATES_TEST.EXPECTED_RESULT);

    expect(renderEl.isEqualNode(testEl)).toBeTruthy();
  });

  it('renders custom template', () => {
    const CUSTOM_TEMPLATES_TEST = {
      TEMPLATE: `<div>This is a test template {{name}}</div>`,
      DATA: {
        name: 'Billy'
      },
      EXPECTED_RESULT: `<div>This is a test template Billy</div>`
    };

    component.setTemplate(CUSTOM_TEMPLATES_TEST.TEMPLATE);

    let renderEl = DOM.create(component.render(CUSTOM_TEMPLATES_TEST.DATA));

    let testEl = DOM.create(CUSTOM_TEMPLATES_TEST.EXPECTED_RESULT);

    expect(renderEl.isEqualNode(testEl)).toBeTruthy();
  });
});

describe('attaching analytics events', () => {
  it('attaches analytics events based on data attributes during mount', () => {
    const template = `<div data-eventtype="test_event" data-eventoptions='{"name":"{{{name}}}"}'>This is a test template</div>`;
    const data = { name: 'Billy' };
    const expected = `<div data-eventtype="test_event" data-eventoptions='{"name":"Billy"}'>This is a test template</div>`;

    const domOn = jest.spyOn(DOM, 'on');

    component.setTemplate(template);

    let renderEl = DOM.create(component.render(data));
    let testEl = DOM.create(expected);
    expect(renderEl.isEqualNode(testEl)).toBeTruthy();

    component.setState(data);
    component.mount();
    expect(domOn).toHaveBeenCalledTimes(1);

    DOM.trigger('[data-eventtype]', 'click');
    expect(reportMock).toHaveBeenCalledTimes(1);
    const expectedEvent = new AnalyticsEvent('test_event');
    expectedEvent.addOptions({ name: 'Billy' });
    expect(reportMock).toHaveBeenCalledWith(expectedEvent);
  });

  it('attaches analytics events only once', () => {
    const template = `<div data-eventtype="test_event" data-eventoptions='{"name":"{{{name}}}"}'>This is a test template</div>`;
    const data = { name: 'Billy' };
    const expected = `<div data-eventtype="test_event" data-eventoptions='{"name":"Billy"}'>This is a test template</div>`;

    const domOn = jest.spyOn(DOM, 'on');

    component.setTemplate(template);

    let renderEl = DOM.create(component.render(data));
    let testEl = DOM.create(expected);
    expect(renderEl.isEqualNode(testEl)).toBeTruthy();

    component.setState(data);
    component.mount();
    component.mount();
    expect(domOn).toHaveBeenCalledTimes(2);

    DOM.trigger('[data-eventtype]', 'click');
    expect(reportMock).toHaveBeenCalledTimes(1);
    const expectedEvent = new AnalyticsEvent('test_event');
    expectedEvent.addOptions({ name: 'Billy' });
    expect(reportMock).toHaveBeenCalledWith(expectedEvent);
  });

  it('reports analyticsOptions provided to the component', () => {
    component = new Component({
      container: '.test-component',
      analyticsOptions: { testOption: 'test' }
    },
    {
      renderer: RENDERER,
      componentManager: COMPONENT_MANAGER,
      analyticsReporter: { report: reportMock }
    });

    const template = `<div data-eventtype="test_event" data-eventoptions='{"name":"{{{name}}}"}'>This is a test template</div>`;
    const data = { name: 'Billy' };
    const expected = `<div data-eventtype="test_event" data-eventoptions='{"name":"Billy"}'>This is a test template</div>`;

    const domOn = jest.spyOn(DOM, 'on');

    component.setTemplate(template);

    let renderEl = DOM.create(component.render(data));
    let testEl = DOM.create(expected);
    expect(renderEl.isEqualNode(testEl)).toBeTruthy();

    component.setState(data);
    component.mount();
    expect(domOn).toHaveBeenCalledTimes(1);

    DOM.trigger('[data-eventtype]', 'click');
    expect(reportMock).toHaveBeenCalledTimes(1);
    const expectedEvent = new AnalyticsEvent('test_event');
    expectedEvent.addOptions({ name: 'Billy', testOption: 'test' });
    expect(reportMock).toHaveBeenCalledWith(expectedEvent);
  });
});
