import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import DOM from '../../../../src/ui/dom/dom';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import SearchStates from '../../../../src/core/storage/searchstates';
import AppliedFiltersComponent from '../../../../src/ui/components/results/appliedfilterscomponent';

DOM.setup(document, new DOMParser());
let COMPONENT_MANAGER, defaultConfig;
beforeEach(() => {
  COMPONENT_MANAGER = mockManager({
    filterRegistry: {
      getAllFilterNodes: () => []
    }
  });
  const bodyEl = DOM.query('body');
  DOM.empty(bodyEl);
  DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

  defaultConfig = {
    container: '#test-component',
    verticalKey: 'people'
  };
});

describe('AppliedFilters component', () => {
  it('listens to updates to VERTICAL_RESULTS in global storage', () => {
    const storage = COMPONENT_MANAGER.core.storage;
    const component = COMPONENT_MANAGER.create(AppliedFiltersComponent.type, defaultConfig);
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-AppliedFilters')).toHaveLength(0);
    storage.set(StorageKeys.VERTICAL_RESULTS, {
      searchState: SearchStates.SEARCH_COMPLETE,
      appliedQueryFilters: [
        {
          fieldId: 'c_employeeDepartment',
          key: 'Employee Department',
          value: 'Technology'
        }
      ]
    });
    wrapper.update();
    expect(wrapper.find('.yxt-AppliedFilters')).toHaveLength(1);
  });
})