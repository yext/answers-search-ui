import DOM from '../../../../src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import VerticalResultsComponent from '../../../../src/ui/components/results/verticalresultscomponent';

const mockCore = {
  globalStorage: {
    set: () => {},
    on: () => {},
    getState: (storageKey) => {
      if (storageKey === StorageKeys.VERTICAL_PAGES_CONFIG) {
        return { get: () => { return []; } };
      } else if (storageKey === StorageKeys.NO_RESULTS_CONFIG) {
        return {};
      } else if (storageKey === StorageKeys.API_CONTEXT) {
        return undefined;
      } else if (storageKey === StorageKeys.REFERRER_PAGE_URL) {
        return '';
      } else if (storageKey === StorageKeys.SESSIONS_OPT_IN) {
        return {};
      }
    }
  },
  getStaticFilterNodes: () => [],
  getFacetFilterNodes: () => [],
  getLocationRadiusFilterNode: () => null
};

DOM.setup(document, new DOMParser());

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
    delete global.window.location;
    global.window = Object.create(window);
    global.window.location = {
      search: '?query=virginia&otherParam=123'
    };

    beforeEach(() => {
      component = COMPONENT_MANAGER.create('VerticalResults', {});
      component.query = 'my-query';
      component.verticalKey = 'key';
    });

    it('if unset defaults to vertical key', () => {
      expect(component.getVerticalURL()).toEqual('key.html?query=my-query&otherParam=123&tabOrder=&referrerPageUrl=');
    });

    it('if null defaults to vertical key', () => {
      component = COMPONENT_MANAGER.create('VerticalResults', {
        verticalURL: null
      });
      component.query = 'my-query';
      component.verticalKey = 'key';
      expect(component.getVerticalURL()).toEqual('key.html?query=my-query&otherParam=123&tabOrder=&referrerPageUrl=');
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
      expect(component.getVerticalURL()).toEqual('vertical-pages?query=my-query&otherParam=123&tabOrder=key&referrerPageUrl=');
    });

    it('can be set', () => {
      component = COMPONENT_MANAGER.create('VerticalResults', {
        verticalURL: 'vertical-url'
      });
      component.query = 'my-query';
      component.verticalKey = 'key';
      expect(component.getVerticalURL()).toEqual('vertical-url?query=my-query&otherParam=123&tabOrder=&referrerPageUrl=');
    });
  });
});
