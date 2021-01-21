import DOM from '../../../../src/ui/dom/dom';
import mockManager from '../../../setup/managermocker';
import { mount } from 'enzyme';
import PersistentStorage from '../../../../src/ui/storage/persistentstorage';
import StorageKeys from '../../../../src/core/storage/storagekeys';

DOM.setup(document, new DOMParser());

describe('SearchBar component', () => {
  const defaultConfig = {
    container: '#test-component',
    verticalKey: 'verticalKey'
  };

  const COMPONENT_MANAGER = mockManager({
    persistentStorage: new PersistentStorage(),
    setQuery: function (query) {
      this.storage.set(StorageKeys.QUERY, query);
    },
    autoCompleteVertical: jest.fn(() => Promise.resolve())
  });

  const persistentStorage = COMPONENT_MANAGER.core.persistentStorage;
  const storage = COMPONENT_MANAGER.core.storage;

  beforeEach(() => {
    let bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));
  });

  describe('Clicking the clear button updates storage properly', () => {
    it('clear button deletes SEARCH_OFFSET from global storage', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
      const wrapper = mount(component);

      storage.set(StorageKeys.SEARCH_OFFSET, 15);
      expect(storage.get(StorageKeys.SEARCH_OFFSET)).toBeTruthy();

      const clearButton = wrapper.find('.js-yxt-SearchBar-clear');
      clearButton.simulate('click');

      expect(storage.get(StorageKeys.SEARCH_OFFSET)).toBeFalsy();
    });

    it('clear button deletes SEARCH_OFFSET from persistent storage', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
      const wrapper = mount(component);

      persistentStorage.set(StorageKeys.SEARCH_OFFSET, 15);
      expect(persistentStorage.get(StorageKeys.SEARCH_OFFSET)).toBeTruthy();

      const clearButton = wrapper.find('.js-yxt-SearchBar-clear');
      clearButton.simulate('click');

      expect(persistentStorage.get(StorageKeys.SEARCH_OFFSET)).toBeFalsy();
    });

    it('clear button sets QUERY to the empty string in global storage', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
      const wrapper = mount(component);

      storage.set(StorageKeys.QUERY, 'what does yext do?');
      expect(storage.get(StorageKeys.QUERY)).toBeTruthy();

      const clearButton = wrapper.find('.js-yxt-SearchBar-clear');
      clearButton.simulate('click');

      expect(storage.get(StorageKeys.QUERY)).toEqual('');
    });

    it('clear button sets QUERY to the empty string in persistent storage', () => {
      const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
      const wrapper = mount(component);

      persistentStorage.set(StorageKeys.QUERY, 'what does yext do?');
      expect(persistentStorage.get(StorageKeys.QUERY)).toBeTruthy();

      const clearButton = wrapper.find('.js-yxt-SearchBar-clear');
      clearButton.simulate('click');

      expect(persistentStorage.get(StorageKeys.QUERY)).toEqual('');
    });
  });
});
