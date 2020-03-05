import DOM from '../../../../src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import VerticalResultsComponent from '../../../../src/ui/components/results/verticalresultscomponent';
import IconComponent from '../../../../src/ui/components/icons/iconcomponent';

const mockedCore = () => {
  return {
    globalStorage: {
      getState: (storageKey) => {
        if (storageKey === StorageKeys.VERTICAL_PAGES_CONFIG) {
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
});
