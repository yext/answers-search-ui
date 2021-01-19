import DOM from '../../../../src/ui/dom/dom';
import mockManager from '../../../setup/managermocker';
import { mount } from 'enzyme';
import GlobalStorage from '../../../../src/core/storage/globalstorage';
import PersistentStorage from '../../../../src/ui/storage/persistentstorage';
import StorageKeys from '../../../../src/core/storage/storagekeys';

DOM.setup(document, new DOMParser());

describe('SearchBar component', () => {
  let COMPONENT_MANAGER;

  const defaultConfig = {
    container: '#test-component',
    verticalKey: 'verticalKey'
  };

  COMPONENT_MANAGER = mockManager({
    globalStorage: new GlobalStorage(),
    persistentStorage: new PersistentStorage(),
    setQuery: jest.fn(),
    autoCompleteVertical: jest.fn()
  });

  const globalStorage = COMPONENT_MANAGER.core.globalStorage;

  beforeEach(() => {
    let bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));
  });

  it('clicking the clear button deletes SEARCH_OFFSET from global storage', () => {
    globalStorage.set(StorageKeys.SEARCH_OFFSET, 15);
    const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
    const wrapper = mount(component);

    expect(globalStorage.getState(StorageKeys.SEARCH_OFFSET)).toBeTruthy();

    const clearButton = wrapper.find('.js-yxt-SearchBar-clear');
    clearButton.simulate('click');

    expect(globalStorage.getState(StorageKeys.SEARCH_OFFSET)).toBeFalsy();
  });
});
