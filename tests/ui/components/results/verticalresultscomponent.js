import DOM from '../../../../src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import VerticalResultsComponent from '../../../../src/ui/components/results/verticalresultscomponent';
import IconComponent from '../../../../src/ui/components/icons/iconcomponent';

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
      hiddenFields,
      removable,
      delimiter
    } = resultsHeaderOpts;
    expect(showFieldNames).toBeFalsy();
    expect(resultsCountSeparator).toEqual('|');
    expect(showResultCount).toBeTruthy();
    expect(showAppliedFilters).toBeTruthy();
    expect(showChangeFilters).toBeFalsy();
    expect(hiddenFields).toEqual(['builtin.location']);
    expect(removable).toBeFalsy();
    expect(delimiter).toEqual('|');
  });

  it('prefers appliedFilters config over deprecated config', () => {
    const component = COMPONENT_MANAGER.create('VerticalResults', {
      appliedFilters: {
        showFieldNames: null,
        resultsCountSeparator: '',
        show: null,
        hiddenFields: ['higher_priority']
      },
      showFieldNames: true,
      resultsCountSeparator: '|',
      showAppliedFilters: true,
      hiddenFields: ['builtin.location']
    });
    const resultsHeaderOpts = component.resultsHeaderOpts;
    const {
      showFieldNames,
      resultsCountSeparator,
      showAppliedFilters,
      hiddenFields
    } = resultsHeaderOpts;
    expect(showFieldNames).toBeNull();
    expect(resultsCountSeparator).toEqual('');
    expect(showAppliedFilters).toBeNull();
    expect(hiddenFields).toEqual(['higher_priority']);
  });

  it('will still use deprecated config over defaults', () => {
    const component = COMPONENT_MANAGER.create('VerticalResults', {
      appliedFilters: {},
      showFieldNames: false,
      resultsCountSeparator: '',
      showAppliedFilters: null,
      hiddenFields: ['better_than_default']
    });
    const resultsHeaderOpts = component.resultsHeaderOpts;
    const {
      showFieldNames,
      resultsCountSeparator,
      showAppliedFilters,
      hiddenFields
    } = resultsHeaderOpts;
    expect(showFieldNames).toEqual(false);
    expect(resultsCountSeparator).toEqual('');
    expect(showAppliedFilters).toBeNull();
    expect(hiddenFields).toEqual(['better_than_default']);
  });
});
