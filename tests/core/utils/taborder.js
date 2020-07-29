import { generateTabUrl, mergeTabOrder, getDefaultTabOrder, getUrlParams } from '../../../src/core/utils/taborder';

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

    const defaultOrder = getDefaultTabOrder(tabConfig);
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

    let params = new URLSearchParams('tabOrder=tab2,tab1');
    const defaultOrder = getDefaultTabOrder(tabConfig, params);
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

    const tabOrder1 = ['tab1', 'tab2'];
    const tabOrder2 = ['tab2', 'tab3'];

    const defaultOrder = mergeTabOrder(tabOrder1, tabOrder2, tabConfig);
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

    const params = new URLSearchParams('query=yes');
    const defaultOrder = getDefaultTabOrder(tabConfig, params);
    const url = generateTabUrl(tabConfig[0].url, params, defaultOrder);
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

    const defaultOrder = getDefaultTabOrder(tabConfig, getUrlParams());
    const url = generateTabUrl(tabConfig[0].url, getUrlParams(), defaultOrder);
    expect(url).toEqual('/tab1/?tabOrder=tab1');
  });
});
