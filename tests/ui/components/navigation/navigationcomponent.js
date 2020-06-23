import DOM from '../../../../src/ui/dom/dom';
import NavigationComponent, { Tab } from '../../../../src/ui/components/navigation/navigationcomponent';
import VerticalPagesConfig from '../../../../src/core/models/verticalpagesconfig';
import StorageKeys from '../../../../src/core/storage/storagekeys';

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

  const mockedCore = (config) => {
    const verticalsConfig = new VerticalPagesConfig(config);
    return {
      globalStorage: {
        getState: (storageKey) => {
          expect(storageKey).toEqual(StorageKeys.VERTICAL_PAGES_CONFIG);
          return verticalsConfig;
        },
        on: () => {}
      }
    };
  };

  it('component supports default tab ordering from config', () => {
    const tabConfig = [
      {
        label: 'This this is my second label',
        url: '/tab1/',
        verticalKey: 'tab1'
      },
      {
        label: 'This is my label',
        url: '/tab2/',
        verticalKey: 'tab2',
        isFirst: true
      }
    ];

    // Finally construct our component
    let navComponent = new NavigationComponent({
      container: '.test-component'
    }, {
      core: mockedCore(tabConfig)
    });

    const defaultOrder = navComponent.getDefaultTabOrder(tabConfig);
    expect(defaultOrder).toMatchObject(['tab2', 'tab1']);
  });

  it('component supports default tab ordering from params', () => {
    const tabConfig = [
      {
        label: 'This this is my second label',
        url: '/tab1/',
        verticalKey: 'tab1'
      },
      {
        label: 'This is my label',
        url: '/tab2/',
        verticalKey: 'tab2'
      }
    ];

    // Finally construct our component
    let navComponent = new NavigationComponent({
      container: '.test-component'
    }, {
      core: mockedCore(tabConfig)
    });

    let params = new URLSearchParams('tabOrder=tab2,tab1');
    const defaultOrder = navComponent.getDefaultTabOrder(tabConfig, params);
    expect(defaultOrder).toMatchObject(['tab2', 'tab1']);
  });

  it('merging two tab orders', () => {
    const tabConfig = [
      {
        label: 'This this is my second label',
        url: '/tab1/',
        verticalKey: 'tab1'
      },
      {
        label: 'This is my label',
        url: '/tab2/',
        verticalKey: 'tab2'
      }
    ];

    // Finally construct our component
    let navComponent = new NavigationComponent({
      container: '.test-component'
    }, {
      core: mockedCore(tabConfig)
    });

    const tabOrder1 = ['tab1', 'tab2'];
    const tabOrder2 = ['tab2', 'tab3'];

    const defaultOrder = navComponent.mergeTabOrder(tabOrder1, tabOrder2);
    expect(defaultOrder).toMatchObject(['tab1', 'tab2', 'tab3']);
  });

  it('generates tab url', () => {
    const tabConfig = [
      {
        label: 'This this is my second label',
        url: '/tab1/',
        verticalKey: 'tab1'
      }
    ];

    // Finally construct our component
    let navComponent = new NavigationComponent({
      container: '.test-component'
    }, {
      core: mockedCore(tabConfig)
    });

    const params = new URLSearchParams('query=yes');
    const url = navComponent.generateTabUrl(tabConfig[0].url, params);
    expect(url).toEqual('/tab1/?query=yes&tabOrder=tab1');
  });

  it('generates tab url without params', () => {
    const tabConfig = [
      {
        label: 'This this is my second label',
        url: '/tab1/',
        verticalKey: 'tab1'
      }
    ];

    // Finally construct our component
    let navComponent = new NavigationComponent({
      container: '.test-component'
    }, {
      core: mockedCore(tabConfig)
    });

    const url = navComponent.generateTabUrl(tabConfig[0].url);
    expect(url).toEqual('/tab1/?tabOrder=tab1');
  });
});
