import DOM from '../../../../src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import ResultsCountComponent from '../../../../src/ui/components/results/resultscountcomponent';
import StorageKeys from '../../../../src/core/storage/storagekeys';

DOM.setup(document, new DOMParser());

describe('results count component', () => {
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

  it('does not render before a search is made', () => {
    const COMPONENT_MANAGER = mockManager(
      {},
      ResultsCountComponent.defaultTemplateName()
    );
    const component = COMPONENT_MANAGER.create(ResultsCountComponent.type, defaultConfig);
    const wrapper = mount(component);
    expect(wrapper.exists('.yxt-ResultsCount')).toBeFalsy();
  });

  it('renders the current results count', () => {
    const COMPONENT_MANAGER = mockManager(
      {
        globalStorage: {
          getState: key => {
            if (key === StorageKeys.VERTICAL_RESULTS) {
              return {
                results: new Array(20),
                resultsCount: 100
              };
            }
            return null;
          }
        }
      },
      ResultsCountComponent.defaultTemplateName()
    );
    const component = COMPONENT_MANAGER.create(ResultsCountComponent.type, defaultConfig);
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-ResultsCount-start').text()).toEqual('1');
    expect(wrapper.find('.yxt-ResultsCount-end').text()).toEqual('20');
    expect(wrapper.find('.yxt-ResultsCount-total').text()).toEqual('100');
  });

  it('works with search offset', () => {
    const COMPONENT_MANAGER = mockManager(
      {
        globalStorage: {
          getState: key => {
            if (key === StorageKeys.VERTICAL_RESULTS) {
              return {
                results: new Array(10),
                resultsCount: 200
              };
            } else if (key === StorageKeys.SEARCH_OFFSET) {
              return 40;
            }
            return null;
          }
        }
      },
      ResultsCountComponent.defaultTemplateName()
    );
    const component = COMPONENT_MANAGER.create(ResultsCountComponent.type, defaultConfig);
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-ResultsCount-start').text()).toEqual('41');
    expect(wrapper.find('.yxt-ResultsCount-end').text()).toEqual('50');
    expect(wrapper.find('.yxt-ResultsCount-total').text()).toEqual('200');
  });
});
