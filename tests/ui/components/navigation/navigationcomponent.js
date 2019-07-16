import DOM from '../../../../src/ui/dom/dom';
import NavigationComponent, { Tab } from '../../../../src/ui/components/navigation/navigationcomponent';

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
      configId: null,
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
      configId: 'test',
      isFirst: true,
      isActive: true
    };

    const expected = {
      label: config.label,
      url: config.url,
      baseUrl: config.url,
      configId: config.configId,
      isFirst: config.isFirst,
      isActive: config.isActive
    };

    const tab = new Tab(config);

    expect(tab).toMatchObject(expected);
  });

  it('multi tab configuration', () => {
    const tab1Config = {
      label: 'This is my label',
      url: '/tab1/'
    };

    const tab2Config = {
      label: 'This this is my second label',
      url: '/tab2/'
    };

    const expected = {
      '/tab1/': {
        label: tab1Config.label,
        url: tab1Config.url,
        configId: '/tab1/',
        isFirst: false,
        isActive: false
      },
      '/tab2/': {
        label: tab2Config.label,
        url: tab2Config.url,
        configId: '/tab2/',
        isFirst: false,
        isActive: false
      }
    };

    const tab = Tab.from([tab1Config, tab2Config]);
    expect(tab).toMatchObject(expected);
  });

  it('component supports default tab ordering from config', () => {
    const tabConfig = [
      {
        label: 'This this is my second label',
        url: '/tab1/',
        configId: 'tab1'
      },
      {
        label: 'This is my label',
        url: '/tab2/',
        configId: 'tab2',
        isFirst: true
      }
    ];

    // Finally construct our component
    let navComponent = new NavigationComponent({
      container: '.test-component',
      tabs: tabConfig
    });

    const defaultOrder = navComponent.getDefaultTabOrder(tabConfig);
    expect(defaultOrder).toMatchObject(['tab2', 'tab1']);
  });

  it('component supports default tab ordering from params', () => {
    const tabConfig = [
      {
        label: 'This this is my second label',
        url: '/tab1/',
        configId: 'tab1'
      },
      {
        label: 'This is my label',
        url: '/tab2/',
        configId: 'tab2'
      }
    ];

    // Finally construct our component
    let navComponent = new NavigationComponent({
      container: '.test-component',
      tabs: tabConfig
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
        configId: 'tab1'
      },
      {
        label: 'This is my label',
        url: '/tab2/',
        configId: 'tab2'
      }
    ];

    // Finally construct our component
    let navComponent = new NavigationComponent({
      container: '.test-component',
      tabs: tabConfig
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
        configId: 'tab1'
      }
    ];

    // Finally construct our component
    let navComponent = new NavigationComponent({
      container: '.test-component',
      tabs: tabConfig
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
        configId: 'tab1'
      }
    ];

    // Finally construct our component
    let navComponent = new NavigationComponent({
      container: '.test-component',
      tabs: tabConfig
    });

    const url = navComponent.generateTabUrl(tabConfig[0].url);
    expect(url).toEqual('/tab1/?tabOrder=tab1');
  });
});
