import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import DOM from '../../../../src/ui/dom/dom';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import SearchStates from '../../../../src/core/storage/searchstates';
import UniversalResultsComponent from '../../../../src/ui/components/results/universalresultscomponent';

DOM.setup(document, new DOMParser());
let COMPONENT_MANAGER, defaultConfig;
beforeEach(() => {
  COMPONENT_MANAGER = mockManager();
  const bodyEl = DOM.query('body');
  DOM.empty(bodyEl);
  DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

  defaultConfig = {
    container: '#test-component'
  };
});

describe('UniversalResults component', () => {
  it('listens to updates to UNIVERSAL_RESULTS in global storage', () => {
    const storage = COMPONENT_MANAGER.core.storage;
    const component = COMPONENT_MANAGER.create(UniversalResultsComponent.type, defaultConfig);
    const wrapper = mount(component);
    expect(wrapper.find('.universal-result-list')).toHaveLength(0);
    storage.set(StorageKeys.UNIVERSAL_RESULTS, {
      searchState: SearchStates.SEARCH_COMPLETE
    });
    wrapper.update();
    expect(wrapper.find('.universal-result-list')).toHaveLength(1);
  });
});
