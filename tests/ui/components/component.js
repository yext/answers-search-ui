import DOM from '../../../src/ui/dom/dom';
import HandlebarsRenderer from '../../../src/ui/rendering/handlebarsrenderer';
import Handlebars from 'handlebars/dist/handlebars.min.js';

import Component from '../../../src/ui/components/component';
import { COMPONENT_MANAGER } from '../../../src/ui/components/const';

// The DOM doesn't exist within components in the JEST environment,
//so we have to provide it to our DOM API properly.
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

// The component manager is used to render components within a template
// using the `<div data-component='Component'>` syntax
COMPONENT_MANAGER.setRenderer(RENDERER);

let component;

beforeEach(() => {
  // Always reset the DOM before each component render test
  let bodyEl = DOM.query('body');
  DOM.empty(bodyEl);

  // Create the container that our component will be injected into
  DOM.append(bodyEl, DOM.createEl('div', { class: 'test-component' } ))

  // Finally construct our component
  component = new Component({
    container: '.test-component',
    renderer: RENDERER,
    componentManager: COMPONENT_MANAGER
  })
});

describe('render component templates', () => {
  it('renders default template', () => {
    const COMPONENT_TEMPLATES_TEST = {
      DATA: {
        name: 'Billy'
      },
      EXPECTED_RESULT: `<div>This is a default template Billy</div>`
    };

    let renderEl = DOM.create(component.render(COMPONENT_TEMPLATES_TEST.DATA)),
        testEl = DOM.create(COMPONENT_TEMPLATES_TEST.EXPECTED_RESULT)

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

    let renderEl = DOM.create(component.render(CUSTOM_TEMPLATES_TEST.DATA)),
        testEl = DOM.create(CUSTOM_TEMPLATES_TEST.EXPECTED_RESULT)

    expect(renderEl.isEqualNode(testEl)).toBeTruthy();
  });
});

describe('render template components using markup syntax', () => {
  it('renders template component with data and configuration', () => {
    const CUSTOM_TEMPLATES_TEST = {
      TEMPLATE: `
        <div>
           This is a test template {{name}}
           <div data-component="Map" data-prop="map" data-opts='{"mapProvider": "google", "isStatic": true, "apiKey": "test"}'>
           </div>
        </div>`,
      DATA: {
        name: 'Billy',
        map: {

        }
      },
      EXPECTED_RESULT: `
        <div>
           This is a test template Billy
           <div data-component="Map" data-prop="map" data-opts='{"mapProvider": "google", "isStatic": true, "apiKey": "test"}' class="component"><div>MY MAP</div>
           </div>
        </div>`
    };

    component.setTemplate(CUSTOM_TEMPLATES_TEST.TEMPLATE);

    let renderEl = DOM.create(component.render(CUSTOM_TEMPLATES_TEST.DATA)),
        testEl = DOM.create(CUSTOM_TEMPLATES_TEST.EXPECTED_RESULT)

    expect(renderEl.isEqualNode(testEl)).toBeTruthy();
  });

  it('renders with multiple template components', () => {
    const CUSTOM_TEMPLATES_TEST = {
      TEMPLATE: `
        <div>
           This is a test template {{name}}
           <div data-component="Map" data-prop="map" data-opts='{"mapProvider": "google", "apiKey": "test"}'>
           </div>
           <div data-component="Map" data-prop="map" data-opts='{"mapProvider": "google", "apiKey": "test"}'>
           </div>
        </div>`,
      DATA: {
        name: 'Billy',
        map: {}
      },
      EXPECTED_RESULT: `
        <div>
           This is a test template Billy
           <div data-component="Map" data-prop="map" data-opts='{"mapProvider": "google", "apiKey": "test"}' class="component"><div>MY MAP</div>
           </div>
           <div data-component="Map" data-prop="map" data-opts='{"mapProvider": "google", "apiKey": "test"}' class="component"><div>MY MAP</div>
           </div>
        </div>`
    };

    component.setTemplate(CUSTOM_TEMPLATES_TEST.TEMPLATE);

    let renderEl = DOM.create(component.render(CUSTOM_TEMPLATES_TEST.DATA)),
        testEl = DOM.create(CUSTOM_TEMPLATES_TEST.EXPECTED_RESULT)

    expect(renderEl.isEqualNode(testEl)).toBeTruthy();
  });

  it('renders with template component, provided data array', () => {
    const CUSTOM_TEMPLATES_TEST = {
      TEMPLATE: `
        <div>
           This is a test template {{name}}
           <div data-component="Map" data-prop="map" data-opts='{"mapProvider": "google", "isStatic": true, "apiKey": "test"}'>
           </div>
        </div>`,
      DATA: {
        name: 'Billy',
        map: [{}, {}]
      },
      EXPECTED_RESULT: `
        <div>
           This is a test template Billy
           <div data-component="Map" data-prop="map" data-opts='{"mapProvider": "google", "isStatic": true, "apiKey": "test"}' class="component"><div>MY MAP</div><div>MY MAP</div>
           </div>
        </div>`
    };

    component.setTemplate(CUSTOM_TEMPLATES_TEST.TEMPLATE);
    let renderEl = DOM.create(component.render(CUSTOM_TEMPLATES_TEST.DATA)),
        testEl = DOM.create(CUSTOM_TEMPLATES_TEST.EXPECTED_RESULT)

    expect(renderEl.isEqualNode(testEl)).toBeTruthy();
  });
});
