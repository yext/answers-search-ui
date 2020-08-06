import DOM from '../../../../src/ui/dom/dom';
import { Tab } from '../../../../src/ui/components/navigation/navigationcomponent';

// The DOM doesn't exist within components in the JEST environment,
// so we have to provide it to our DOM API properly.
DOM.setup(
  document,
  new DOMParser()
);

beforeEach(() => {
  // Always reset the DOM before each component render test
  let bodyEl = DOM.query('body');
  DOM.empty(bodyEl);

  // Create the container that our component will be injected into
  DOM.append(bodyEl, DOM.createEl('div', { class: 'test-component' }));
});

describe('navigation component configuration', () => {
  it('tab model supports basic configuration', () => {
    const config = {
      label: 'This is my label',
      url: 'This is my url'
    };

    const expected = {
      label: config.label,
      url: config.url,
      baseUrl: config.url,
      verticalKey: null,
      isFirst: false,
      isActive: false
    };

    const tab = new Tab(config);

    expect(tab).toMatchObject(expected);
  });

  it('tab model supports advanced configuration', () => {
    const config = {
      label: 'This is my label',
      url: 'This is my url',
      verticalKey: 'test',
      isFirst: true,
      isActive: true
    };

    const expected = {
      label: config.label,
      url: config.url,
      baseUrl: config.url,
      verticalKey: config.verticalKey,
      isFirst: config.isFirst,
      isActive: config.isActive
    };

    const tab = new Tab(config);

    expect(tab).toMatchObject(expected);
  });

  it('multi tab configuration', () => {
    const tab1Config = {
      label: 'This is my label',
      url: '/tab1/',
      verticalKey: null
    };

    const tab2Config = {
      label: 'This this is my second label',
      url: '/tab2/',
      verticalKey: null
    };

    const tab3Config = {
      label: 'this should be hidden :O',
      url: '/secrettab/',
      verticalKey: null,
      hideInNavigation: true
    };

    const expected = {
      '/tab1/': {
        label: tab1Config.label,
        url: tab1Config.url,
        verticalKey: '/tab1/',
        isFirst: false,
        isActive: false
      },
      '/tab2/': {
        label: tab2Config.label,
        url: tab2Config.url,
        verticalKey: '/tab2/',
        isFirst: false,
        isActive: false
      }
    };

    const tab = Tab.from([tab1Config, tab2Config, tab3Config]);
    expect(tab).toMatchObject(expected);
  });
});
