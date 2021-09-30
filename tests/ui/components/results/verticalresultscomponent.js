import DOM from '../../../../src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import SearchStates from '../../../../src/core/storage/searchstates';
import VerticalResultsComponent from '../../../../src/ui/components/results/verticalresultscomponent';
import Storage from '../../../../src/core/storage/storage';
import VerticalResults from '../../../../src/core/models/verticalresults';

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

describe('vertical results component', () => {
  let defaultConfig;

  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

    defaultConfig = {
      container: '#test-component',
      verticalKey: 'verticalKey'
    };
  });

  it('getVerticalUrl encodes the storage query when the component is created', () => {
    COMPONENT_MANAGER.core.storage.set(StorageKeys.QUERY, 'yext');
    const component = COMPONENT_MANAGER.create(VerticalResultsComponent.type, defaultConfig);

    expect(component.getVerticalURL()).toContain('query=yext');
  });

  it('sets correct loading state css class', () => {
    const component = COMPONENT_MANAGER.create(VerticalResultsComponent.type, defaultConfig);
    const container = DOM.query('#test-component');
    mount(component, { attachTo: container });
    expect(container.classList.contains('yxt-Results--preSearch')).toBeTruthy();

    component.core.storage.set(StorageKeys.VERTICAL_RESULTS, VerticalResults.searchLoading());
    expect(container.classList.contains('yxt-Results--searchLoading')).toBeTruthy();

    component.core.storage.set(StorageKeys.VERTICAL_RESULTS, { searchState: SearchStates.SEARCH_COMPLETE });
    expect(container.classList.contains('yxt-Results--searchComplete')).toBeTruthy();
  });

  it('updates to storage vertical results update the component results', () => {
    const component = COMPONENT_MANAGER.create(VerticalResultsComponent.type, defaultConfig);

    const verticalResults = {
      searchState: SearchStates.SEARCH_COMPLETE,
      resultsCount: 15,
      results: 'yext search results',
      verticalConfigId: 'verticalKey',
      resultsContext: {}
    };

    component.core.storage.set(StorageKeys.VERTICAL_RESULTS, verticalResults);

    expect(component.getState('results')).toEqual('yext search results');
  });

  it('renders with only default config', () => {
    const component = COMPONENT_MANAGER.create(VerticalResultsComponent.type, defaultConfig);
    const wrapper = mount(component);
    expect(wrapper).toBeTruthy();
  });

  it('has correct default config for the results header', () => {
    const resultsHeaderOpts = COMPONENT_MANAGER.create('VerticalResults', {}).resultsHeaderOpts;
    const {
      showFieldNames,
      resultsCountSeparator,
      showResultCount,
      showAppliedFilters,
      showChangeFilters,
      removable,
      delimiter
    } = resultsHeaderOpts;
    expect(showFieldNames).toBeFalsy();
    expect(resultsCountSeparator).toEqual('|');
    expect(showResultCount).toBeTruthy();
    expect(showAppliedFilters).toBeTruthy();
    expect(showChangeFilters).toBeFalsy();
    expect(removable).toBeFalsy();
    expect(delimiter).toEqual('|');
  });

  it('prefers appliedFilters config over deprecated config', () => {
    const component = COMPONENT_MANAGER.create('VerticalResults', {
      appliedFilters: {
        showFieldNames: null,
        resultsCountSeparator: '',
        show: null
      },
      showFieldNames: true,
      resultsCountSeparator: '|',
      showAppliedFilters: true
    });
    const resultsHeaderOpts = component.resultsHeaderOpts;
    const {
      showFieldNames,
      resultsCountSeparator,
      showAppliedFilters
    } = resultsHeaderOpts;
    expect(showFieldNames).toBeNull();
    expect(resultsCountSeparator).toEqual('');
    expect(showAppliedFilters).toBeNull();
  });

  it('will still use deprecated config over defaults', () => {
    const component = COMPONENT_MANAGER.create('VerticalResults', {
      appliedFilters: {},
      showFieldNames: false,
      resultsCountSeparator: '',
      showAppliedFilters: null
    });
    const resultsHeaderOpts = component.resultsHeaderOpts;
    const {
      showFieldNames,
      resultsCountSeparator,
      showAppliedFilters
    } = resultsHeaderOpts;
    expect(showFieldNames).toEqual(false);
    expect(resultsCountSeparator).toEqual('');
    expect(showAppliedFilters).toBeNull();
  });

  describe('creates verticalURL correctly', () => {
    let component;

    beforeEach(() => {
      component = COMPONENT_MANAGER.create('VerticalResults', {});
      COMPONENT_MANAGER.core.storage.setWithPersist(StorageKeys.QUERY, 'virginia');
      COMPONENT_MANAGER.core.storage.setWithPersist('otherParam', 123);
      component.query = 'my-query';
      component.verticalKey = 'key';
    });

    it('if unset defaults to vertical key', () => {
      expect(component.getVerticalURL())
        .toEqual('key.html?query=my-query&otherParam=123&tabOrder=&referrerPageUrl=');
    });

    it('if null defaults to vertical key', () => {
      component = COMPONENT_MANAGER.create('VerticalResults', {
        verticalURL: null
      });
      component.query = 'my-query';
      component.verticalKey = 'key';
      expect(component.getVerticalURL())
        .toEqual('key.html?query=my-query&otherParam=123&tabOrder=&referrerPageUrl=');
    });

    it('works with transformData', () => {
      expect(component.getVerticalURL({
        verticalURL: 'transform-data'
      })).toEqual('transform-data?query=my-query&otherParam=123&tabOrder=&referrerPageUrl=');
    });

    it('defaults to matching config in verticalPages', () => {
      component._verticalsConfig = [{
        verticalKey: 'key',
        url: 'vertical-pages'
      }];
      expect(component.getVerticalURL())
        .toEqual('vertical-pages?query=my-query&otherParam=123&tabOrder=key&referrerPageUrl=');
    });

    it('can be set', () => {
      component = COMPONENT_MANAGER.create('VerticalResults', {
        verticalURL: 'vertical-url'
      });
      component.query = 'my-query';
      component.verticalKey = 'key';
      expect(component.getVerticalURL())
        .toEqual('vertical-url?query=my-query&otherParam=123&tabOrder=&referrerPageUrl=');
    });
  });

  it('only remounts the component during the SEARCH_LOADING state of vertical results', () => {
    const component = COMPONENT_MANAGER.create(VerticalResultsComponent.type, {
      ...defaultConfig,
      template: '{{{searchState}}}'
    });
    const wrapper = mount(component);
    expect(wrapper.text()).toEqual('pre-search');
    const { storage } = component.core;

    storage.set(StorageKeys.VERTICAL_RESULTS, VerticalResults.searchLoading());
    wrapper.update();
    expect(wrapper.text()).toEqual('pre-search');

    storage.set(StorageKeys.VERTICAL_RESULTS, {
      searchState: SearchStates.SEARCH_COMPLETE
    });
    wrapper.update();
    expect(wrapper.text()).toEqual('search-complete');
  });
});
