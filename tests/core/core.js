import DOM from '../../src/ui/dom/dom';
import GlobalStorage from '../../src/core/storage/globalstorage';
import Core from '../../src/core/core.js';
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

describe('core configuration', () => {
  it('core supports default tab ordering from config', () => {
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
    let core = new Core({
      container: '.test-component'
    });

    const defaultOrder = core.getDefaultTabOrder(tabConfig);
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
    let core = new Core({
      container: '.test-component'
    });

    let params = new URLSearchParams('tabOrder=tab2,tab1');
    const defaultOrder = core.getDefaultTabOrder(tabConfig, params);
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
    let core = new Core({
      container: '.test-component'
    });

    const tabOrder1 = ['tab1', 'tab2'];
    const tabOrder2 = ['tab2', 'tab3'];

    const defaultOrder = core.mergeTabOrder(tabOrder1, tabOrder2, tabConfig);
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
    let core = new Core({
      container: '.test-component'
    });

    core.globalStorage = new GlobalStorage();
    const params = new URLSearchParams('query=yes');
    const defaultOrder = core.getDefaultTabOrder(tabConfig, params);
    const url = core.generateTabUrl(tabConfig[0].url, params, tabConfig, defaultOrder);
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
    let core = new Core({
      container: '.test-component'
    });

    core.globalStorage = new GlobalStorage();
    const defaultOrder = core.getDefaultTabOrder(tabConfig, core.getUrlParams());
    const url = core.generateTabUrl(tabConfig[0].url, core.getUrlParams(), tabConfig, defaultOrder);
    expect(url).toEqual('/tab1/?tabOrder=tab1');
  });
});
