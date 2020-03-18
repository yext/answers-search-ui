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
    },
    on: () => {}
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
      container: '#test-component'
    };
  });

  it('renders with only default config', () => {
    const component = COMPONENT_MANAGER.create(VerticalResultsComponent.type, defaultConfig);
    const wrapper = mount(component);
    expect(wrapper).toBeTruthy();
  });

  // it('renders a results header component when showResultsCount is true', () => {
  //   const config = {
  //     showResultsCount: true,
  //     ...defaultConfig
  //   };
  //   const component = COMPONENT_MANAGER.create(VerticalResultsComponent.type, config);
  //   const wrapper = mount(component);
  //   console.log(wrapper.debug());
  //   expect(wrapper.find('.yxt-ResultsHeader')).toHaveLength(1);
  // });

  // it('does not render header component when showResultsCount and showAppliedFilters are false', () => {
  //   const config = {
  //     showResultsCount: false,
  //     showAppliedFilters: false,
  //     ...defaultConfig
  //   };
  //   const component = COMPONENT_MANAGER.create(VerticalResultsComponent.type, config);
  //   const wrapper = mount(component);
  //   expect(wrapper.find('.yxt-ResultsHeader')).toHaveLength(0);
  // });
});
