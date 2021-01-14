import DOM from '../../../../src/ui/dom/dom';
import { Tab } from '../../../../src/ui/components/navigation/navigationcomponent';
import mockManager from '../../../setup/managermocker';
import { mount } from 'enzyme';
import GlobalStorage from '../../../../src/core/storage/globalstorage';
import PersistentStorage from '../../../../src/ui/storage/persistentstorage';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import VerticalPagesConfig from '../../../../src/core/models/verticalpagesconfig';

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
  DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

  // Mock DOM.on and DOM.off because they will not work in this test environment
  DOM.on = jest.fn();
  DOM.off = jest.fn();
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

describe('navigation tab links are correct', () => {
  let COMPONENT_MANAGER;

  const defaultConfig = {
    container: '#test-component',
    verticalKey: 'verticalKey',
    verticalPages: [
      { verticalKey: 'vertical', url: './vertical', label: 'Vertical' },
      { verticalKey: 'facets', url: './facets', label: 'Facets' }
    ]
  };

  beforeEach(() => {
    COMPONENT_MANAGER = mockManager({
      globalStorage: new GlobalStorage(),
      persistentStorage: new PersistentStorage()
    });

    COMPONENT_MANAGER.getComponentNamesForComponentTypes = () => [];
  });

  it('tab links contain the referrerPageUrl from global storage', () => {
    COMPONENT_MANAGER.core.globalStorage.set(StorageKeys.REFERRER_PAGE_URL, 'yext.com');

    const component = COMPONENT_MANAGER.create('Navigation', defaultConfig);
    const wrapper = mount(component);

    const navItem = wrapper.find('.js-yxt-navItem').first();
    const tabLink = navItem.prop('href');

    expect(tabLink).toContain('referrerPageUrl=yext.com');
  });

  it('tab links contain the context from global storage', () => {
    COMPONENT_MANAGER.core.globalStorage.set(StorageKeys.API_CONTEXT, 'some context');

    const component = COMPONENT_MANAGER.create('Navigation', defaultConfig);
    const wrapper = mount(component);

    const navItem = wrapper.find('.js-yxt-navItem').first();
    const tabLink = navItem.prop('href');

    expect(tabLink).toContain('context=some+context');
  });

  it('updating the context in global storage updates the context in tab links', () => {
    const component = COMPONENT_MANAGER.create('Navigation', defaultConfig);
    const wrapper = mount(component);

    COMPONENT_MANAGER.core.globalStorage.set(StorageKeys.API_CONTEXT, 'new context');

    // Re-render because the component state changed
    wrapper.update();

    const navItem = wrapper.find('.js-yxt-navItem').first();
    const tabLink = navItem.prop('href');

    expect(tabLink).toContain('context=new+context');
  });

  it('tab links default to the tab order from global storage', () => {
    const verticalPagesConfig = new VerticalPagesConfig([
      { label: 'Home', url: './index.html' },
      { label: 'People', url: './people.html', verticalKey: 'people' }
    ]);

    COMPONENT_MANAGER.core.globalStorage.set(StorageKeys.VERTICAL_PAGES_CONFIG, verticalPagesConfig);

    const component = COMPONENT_MANAGER.create('Navigation', {
      container: '#test-component',
      verticalKey: 'verticalKey',
      verticalPages: null
    });
    const wrapper = mount(component);

    const navItem = wrapper.find('.js-yxt-navItem').first();
    const tabLink = navItem.prop('href');

    expect(tabLink).toContain('tabOrder=.%2Findex.html%2Cpeople');
  });
});
