/* eslint camelcase: 0 */
import DOM from '../../../../src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import VerticalResultsComponent from '../../../../src/ui/components/results/verticalresultscomponent';
import IconComponent from '../../../../src/ui/components/icons/iconcomponent';
import FilterNodeFactory from '../../../../src/core/filters/filternodefactory';
import Filter from '../../../../src/core/models/filter';

const mockedCore = () => {
  return {
    globalStorage: {
      set: () => {},
      getState: (storageKey) => {
        if (storageKey === StorageKeys.VERTICAL_PAGES_CONFIG) {
          return { get: () => { return []; } };
        } else if (storageKey === StorageKeys.NO_RESULTS_CONFIG) {
          return {};
        }
      }
    }
  };
};

DOM.setup(document, new DOMParser());

const COMPONENT_MANAGER = mockManager(
  mockedCore(),
  VerticalResultsComponent.defaultTemplateName(),
  IconComponent.defaultTemplateName()
);

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

  it('can parse CombinedFilterNodes into SimpleFilterNodes', () => {
    const component = COMPONENT_MANAGER.create('VerticalResults', {});
    const node_f0_v0 = FilterNodeFactory.from({
      filter: Filter.equal('field0', 'value0'),
      metadata: {
        fieldName: 'name0',
        displayValue: 'display0'
      }
    });
    const node_f0_v1 = FilterNodeFactory.from({
      filter: Filter.equal('field0', 'value1'),
      metadata: {
        fieldName: 'name0',
        displayValue: 'display1'
      }
    });
    const node_f1_v0 = FilterNodeFactory.from({
      filter: Filter.equal('field1', 'value0'),
      metadata: {
        fieldName: 'name1',
        displayValue: 'display0'
      }
    });
    const node_f1_v1 = FilterNodeFactory.from({
      filter: Filter.equal('field1', 'value1'),
      metadata: {
        fieldName: 'name1',
        displayValue: 'display1'
      }
    });
    const combinedNode = FilterNodeFactory.and(
      FilterNodeFactory.and(node_f0_v0, node_f0_v1),
      FilterNodeFactory.or(node_f1_v0, node_f1_v1)
    );
    const simpleFilterNodes = component._getSimpleFilterNodes([combinedNode]);
    expect(simpleFilterNodes).toHaveLength(4);
    expect(simpleFilterNodes).toContainEqual(node_f0_v0);
    expect(simpleFilterNodes).toContainEqual(node_f1_v0);
    expect(simpleFilterNodes).toContainEqual(node_f0_v1);
    expect(simpleFilterNodes).toContainEqual(node_f1_v1);
  });
});
