import DOM from '../../../../src/ui/dom/dom';
import mockManager from '../../../setup/managermocker';
import { mount } from 'enzyme';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import QueryTriggers from '../../../../src/core/models/querytriggers';

DOM.setup(document, new DOMParser());

describe('SearchBar component', () => {
  const defaultConfig = {
    container: '#test-component',
    verticalKey: 'verticalKey'
  };
  let COMPONENT_MANAGER, storage;
  beforeEach(() => {
    let bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

    COMPONENT_MANAGER = mockManager({
      setQuery: function (query) {
        this.storage.set(StorageKeys.QUERY, query);
      },
      autoCompleteVertical: jest.fn(() => Promise.resolve({ inputIntents: [] })),
      autoCompleteUniversal: jest.fn(() => Promise.resolve({ inputIntents: [] })),
      verticalSearch: jest.fn()
    });
    COMPONENT_MANAGER.getActiveComponent = () => null;
    storage = COMPONENT_MANAGER.core.storage;
  });

  describe('Clicking the clear button updates storage properly', () => {
    it('clear button deletes SEARCH_OFFSET from storage', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
      const wrapper = mount(component);

      storage.set(StorageKeys.SEARCH_OFFSET, 15);
      expect(storage.get(StorageKeys.SEARCH_OFFSET)).toBeTruthy();

      const clearButton = wrapper.find('.js-yxt-SearchBar-clear');
      clearButton.simulate('click');

      expect(storage.get(StorageKeys.SEARCH_OFFSET)).toBeFalsy();
    });

    it('clear button deletes SEARCH_OFFSET from current url state', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
      const wrapper = mount(component);

      storage.setWithPersist(StorageKeys.SEARCH_OFFSET, 15);
      expect(storage.getUrlWithCurrentState()).toEqual('search-offset=15');

      const clearButton = wrapper.find('.js-yxt-SearchBar-clear');
      clearButton.simulate('click');

      expect(storage.getUrlWithCurrentState()).toEqual('query=');
    });

    it('clear button sets QUERY to the empty string in storage', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
      const wrapper = mount(component);

      storage.set(StorageKeys.QUERY, 'what does yext do?');
      expect(storage.get(StorageKeys.QUERY)).toBeTruthy();

      const clearButton = wrapper.find('.js-yxt-SearchBar-clear');
      clearButton.simulate('click');

      expect(storage.get(StorageKeys.QUERY)).toEqual('');
    });

    it('clear button sets QUERY to the empty string in url state', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
      const wrapper = mount(component);

      storage.setWithPersist(StorageKeys.QUERY, 'what does yext do?');
      expect(storage.getUrlWithCurrentState()).toEqual('query=what+does+yext+do%3F');

      const clearButton = wrapper.find('.js-yxt-SearchBar-clear');
      clearButton.simulate('click');

      expect(storage.getUrlWithCurrentState()).toEqual('query=');
    });
  });

  it('default initial search works for universal', () => {
    const defaultInitialSearch = '';
    storage.set(StorageKeys.QUERY, defaultInitialSearch);
    storage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.INITIALIZE);

    const component = COMPONENT_MANAGER.create('SearchBar', {
      ...defaultConfig,
      verticalKey: null,
      allowEmptySearch: true
    });

    const wasSearchRanPromise = new Promise(resolve => {
      component.core.search = jest.fn(() => {
        resolve(true);
      });
    });

    return expect(wasSearchRanPromise).resolves.toBeTruthy();
  });
});
