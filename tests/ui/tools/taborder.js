import { mergeTabOrder, getDefaultTabOrder, getTabOrder } from '../../../src/ui/tools/taborder';

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

  it('generates tab orders', () => {
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
      },
      {
        label: 'This is my label',
        url: '/tab3/',
        verticalKey: 'tab3'
      }
    ];

    const dataTabOrder = ['tab1', 'tab3', 'tab2'];

    const tabOrder = getTabOrder(tabConfig, dataTabOrder);
    expect(tabOrder).toMatchObject(['tab1', 'tab3', 'tab2']);
  });
});
