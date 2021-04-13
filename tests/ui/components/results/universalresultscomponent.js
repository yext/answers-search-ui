/* eslint no-undef: 0 */
import Storage from '../../../../src/core/storage/storage';
import DOM from '../../../../src/ui/dom/dom';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import mockManager from '../../../setup/managermocker';
import { mount } from 'enzyme';
import SearchStates from '../../../../src/core/storage/searchstates';
import UniversalResultsComponent from '../../../../src/ui/components/results/universalresultscomponent';
import UniversalResults from '../../../../src/core/models/universalresults';

const mockCore = {
  storage: new Storage().init(),
  getStaticFilterNodes: () => [],
  getFacetFilterNodes: () => [],
  getLocationRadiusFilterNode: () => null
};

DOM.setup(document, new DOMParser());

mockCore.storage.set(StorageKeys.VERTICAL_PAGES_CONFIG, { get: () => [] });
mockCore.storage.set(StorageKeys.REFERRER_PAGE_URL, '');

const COMPONENT_MANAGER = mockManager(mockCore);
COMPONENT_MANAGER.getComponentNamesForComponentTypes = () => {
  return [];
};

describe('universal results component', () => {
  let defaultConfig;

  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

    defaultConfig = {
      container: '#test-component'
    };
  });

  it('sets correct loading state css class', () => {
    const component = COMPONENT_MANAGER.create(UniversalResultsComponent.type, defaultConfig);
    const container = DOM.query('#test-component');
    mount(component, { attachTo: container });
    expect(container.classList.contains('yxt-Results--preSearch')).toBeTruthy();

    component.core.storage.set(StorageKeys.UNIVERSAL_RESULTS, UniversalResults.searchLoading());
    expect(container.classList.contains('yxt-Results--searchLoading')).toBeTruthy();

    component.core.storage.set(StorageKeys.UNIVERSAL_RESULTS, { searchState: SearchStates.SEARCH_COMPLETE });
    expect(container.classList.contains('yxt-Results--searchComplete')).toBeTruthy();
  });
});
