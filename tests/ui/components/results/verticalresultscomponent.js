import DOM from '../../../../src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import VerticalResultsComponent from '../../../../src/ui/components/results/verticalresultscomponent';
import StandardCardComponent from '../../../../src/ui/components/cards/standardcardcomponent';

const mockedCore = () => ({});

DOM.setup(document, new DOMParser());

const COMPONENT_MANAGER = mockManager(
  mockedCore(),
  VerticalResultsComponent.defaultTemplateName(),
  StandardCardComponent.defaultTemplateName()
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
    expect(wrapper.find('.yxt-VerticalResults')).toHaveLength(1);
  });
});
