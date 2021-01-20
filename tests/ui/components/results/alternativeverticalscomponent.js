import mockManager from '../../../setup/managermocker';
import DOM from '../../../../src/ui/dom/dom';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import AlternativeVerticalsComponent from '../../../../src/ui/components/results/alternativeverticalscomponent';

DOM.setup(document, new DOMParser());
let COMPONENT_MANAGER, defaultConfig;
beforeEach(() => {
  COMPONENT_MANAGER = mockManager();
  COMPONENT_MANAGER.getComponentNamesForComponentTypes = () => [];
  const bodyEl = DOM.query('body');
  DOM.empty(bodyEl);
  DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

  defaultConfig = {
    container: '#test-component',
    verticalsConfig: []
  };
});

describe('AlternativeVerticals component', () => {
  it('passes query to state correctly', () => {
    const storage = COMPONENT_MANAGER.core.storage;
    storage.set(StorageKeys.QUERY, 'office space');
    const component = COMPONENT_MANAGER.create(AlternativeVerticalsComponent.type, defaultConfig);
    expect(component.getState('query')).toEqual('office space');
  });
});
