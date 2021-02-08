import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import DOM from '../../../../src/ui/dom/dom';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import AlternativeVerticalsComponent from '../../../../src/ui/components/results/alternativeverticalscomponent';

DOM.setup(document, new DOMParser());
let COMPONENT_MANAGER, defaultConfig, storage;

beforeEach(() => {
  COMPONENT_MANAGER = mockManager();
  COMPONENT_MANAGER.getComponentNamesForComponentTypes = () => [];
  const bodyEl = DOM.query('body');
  DOM.empty(bodyEl);
  DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));
  storage = COMPONENT_MANAGER.core.storage;
  COMPONENT_MANAGER.core.storage.setWithPersist(StorageKeys.QUERY, 'office space');

  defaultConfig = {
    container: '#test-component',
    verticalsConfig: [
      {
        label: 'Home',
        url: 'index.html'
      },
      {
        verticalKey: 'KM',
        label: 'Locations',
        url: 'locations.html'
      }
    ],
    baseUniversalUrl: './index.html',
    data: {
      alternativeVerticals: [{
        resultsCount: 2,
        verticalConfigId: 'KM'
      }]
    }
  };
});

describe('AlternativeVerticals component', () => {
  it('constructs vertical suggest link properly', () => {
    const component = COMPONENT_MANAGER.create(AlternativeVerticalsComponent.type, defaultConfig);
    const wrapper = mount(component);
    const suggestionHref = wrapper.find('.yxt-AlternativeVerticals-suggestionLink').prop('href');
    expect(suggestionHref).toEqual('locations.html?query=office+space');
  });

  it('constructs universal link properly', () => {
    storage.set(StorageKeys.QUERY, 'office space');
    const component = COMPONENT_MANAGER.create(AlternativeVerticalsComponent.type, defaultConfig);
    const wrapper = mount(component);
    const universalHref = wrapper.find('.yxt-AlternativeVerticals-universalLink').prop('href');
    expect(universalHref).toEqual('./index.html?query=office+space');
  });

  it('displays current query correctly', () => {
    storage.set(StorageKeys.QUERY, 'office space');
    const component = COMPONENT_MANAGER.create(AlternativeVerticalsComponent.type, defaultConfig);
    const wrapper = mount(component);
    const queryText = wrapper.find('.yxt-AlternativeVerticals-details--query').text();
    expect(queryText).toEqual('"office space"');
  });
});
