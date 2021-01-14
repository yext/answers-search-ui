import DOM from '../../../../src/ui/dom/dom';
import mockManager from '../../../setup/managermocker';
import { mount } from 'enzyme';
import GlobalStorage from '../../../../src/core/storage/globalstorage';
import PersistentStorage from '../../../../src/ui/storage/persistentstorage';
import StorageKeys from '../../../../src/core/storage/storagekeys';

DOM.setup(
  document,
  new DOMParser()
);

let bodyEl = DOM.query('body');
DOM.empty(bodyEl);

DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

let COMPONENT_MANAGER;

const defaultConfig = {
  container: '#test-component',
  verticalKey: 'verticalKey'
};

COMPONENT_MANAGER = mockManager({
  globalStorage: new GlobalStorage(),
  persistentStorage: new PersistentStorage()
});

it('test works', () => {
  const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
  // component.core.autoCompleteVertical = () => Promise.resolve({ inputIntents: ['NEAR_ME'] });
  const wrapper = mount(component);

  const spy = jest.spyOn(component, 'onQuerySubmit');

  const searchBarButton = wrapper.find('.js-yext-submit');
  searchBarButton.simulate('click');

  expect(spy).toHaveBeenCalled();

  // const storedQuery = component.core.persistentStorage.get(StorageKeys.QUERY);

  // expect(storedQuery).toEqual('abc');
});
