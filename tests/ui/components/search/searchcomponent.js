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
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

    COMPONENT_MANAGER = mockManager({
      autoCompleteVertical: jest.fn(() => Promise.resolve({ inputIntents: [] })),
      autoCompleteUniversal: jest.fn(() => Promise.resolve({ inputIntents: [] })),
      verticalSearch: jest.fn()
    });
    COMPONENT_MANAGER.getActiveComponent = () => null;
    storage = COMPONENT_MANAGER.core.storage;
    COMPONENT_MANAGER.core.triggerSearch = (queryTrigger, newQuery) => {
      const query = newQuery !== undefined
        ? newQuery
        : storage.get(StorageKeys.QUERY) || '';
      queryTrigger
        ? storage.set(StorageKeys.QUERY_TRIGGER, queryTrigger)
        : storage.delete(StorageKeys.QUERY_TRIGGER);
      COMPONENT_MANAGER.core.setQuery(query);
    };
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

    it('clear button sets QUERY_TRIGGER to SEARCH_BAR', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
      const wrapper = mount(component);

      storage.setWithPersist(StorageKeys.QUERY, 'what does yext do?');
      expect(storage.get(StorageKeys.QUERY_TRIGGER)).toBeFalsy();

      const clearButton = wrapper.find('.js-yxt-SearchBar-clear');
      clearButton.simulate('click');

      expect(storage.get(StorageKeys.QUERY_TRIGGER)).toEqual(QueryTriggers.SEARCH_BAR);
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
    component.searchAfterAnswersOnReady();

    const wasSearchRanPromise = new Promise(resolve => {
      component.core.search = jest.fn(() => {
        resolve(true);
      });
    });

    return expect(wasSearchRanPromise).resolves.toBeTruthy();
  });

  it('searching with the search bar sets QUERY_TRIGGER to SEARCH_BAR', () => {
    storage.setWithPersist(StorageKeys.QUERY, 'what does yext do?');
    const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
    const wrapper = mount(component);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(storage.get(StorageKeys.QUERY_TRIGGER)).toEqual(QueryTriggers.SEARCH_BAR);
  });
});
