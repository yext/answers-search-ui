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
      expect(component.getVerticalURL()).toEqual('key.html?query=my-query&otherParam=123&tabOrder=');
    });

    it('if null defaults to vertical key', () => {
      component = COMPONENT_MANAGER.create('VerticalResults', {
        verticalURL: null
      });
      component.query = 'my-query';
      component.verticalKey = 'key';
      expect(component.getVerticalURL()).toEqual('key.html?query=my-query&otherParam=123&tabOrder=');
    });

    it('works with transformData', () => {
      expect(component.getVerticalURL({
        verticalURL: 'transform-data'
      })).toEqual('transform-data?query=my-query&otherParam=123&tabOrder=');
    });

    it('defaults to matching config in verticalPages', () => {
      component._verticalsConfig = [{
        verticalKey: 'key',
        url: 'vertical-pages'
      }];
      expect(component.getVerticalURL()).toEqual('vertical-pages?query=my-query&otherParam=123&tabOrder=key');
    });

    it('can be set', () => {
      component = COMPONENT_MANAGER.create('VerticalResults', {
        verticalURL: 'vertical-url'
      });
      component.query = 'my-query';
      component.verticalKey = 'key';
      expect(component.getVerticalURL()).toEqual('vertical-url?query=my-query&otherParam=123&tabOrder=');
    });
  });
});
