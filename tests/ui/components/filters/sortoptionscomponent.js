import DOM from '../../../../src/ui/dom/dom';
import SortOptionsComponent from '../../../../src/ui/components/filters/sortoptionscomponent';
import IconComponent from '../../../../src/ui/components/icons/iconcomponent';
import { mount } from 'enzyme';
import { AnswersBasicError } from '../../../../src/core/errors/errors';
import mockManager from '../../../setup/managermocker';
import StorageKeys from '../../../../src/core/storage/storagekeys';

const mockedCore = () => {
  return {
    setSortBys: (...options) => {
      options.forEach(opt => {
        expect(opt).toHaveProperty('type');
      });
    },
    clearSortBys: () => {},
    verticalSearch: () => {},
    globalStorage: {
      getState: storageKey => {
        expect(['SortOptions', StorageKeys.QUERY]).toContain(storageKey);
      },
      getAll: storageKey => {
        expect([StorageKeys.FACET_FILTER, StorageKeys.FILTER]).toContain(storageKey);
      }
    },
    persistentStorage: {
      set: (namespace, optionIndex) => {
        expect(namespace).toBe('SortOptions');
        expect(typeof optionIndex).toBe('number');
      }
    }
  };
};

DOM.setup(document, new DOMParser());

const COMPONENT_MANAGER = mockManager(mockedCore(), SortOptionsComponent.defaultTemplateName(), IconComponent.defaultTemplateName());

describe('sort options component', () => {
  const systemConfig = { core: mockedCore() };
  const config = { container: '#test-component' };

  const defaultOptions = [
    {
      type: 'FIELD',
      field: 'c_popularity',
      direction: 'ASC',
      label: 'Popularity'
    }
  ];

  const threeOptions = [
    {
      type: 'FIELD',
      field: 'c_popularity',
      direction: 'ASC',
      label: 'Popularity'
    },
    {
      type: 'FIELD',
      field: 'c_price',
      direction: 'ASC',
      label: 'Price - Low to High'
    },
    {
      type: 'FIELD',
      field: 'c_price',
      direction: 'DESC',
      label: 'Price - High to Low'
    }
  ];

  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));
  });

  it('throws an error when config.options is unset', () => {
    const error = new AnswersBasicError('config.options are required', 'SortOptions');
    expect(() => new SortOptionsComponent(config, systemConfig)).toThrow(error);
  });

  it('renders correctly for default values', () => {
    const opts = { ...config, options: defaultOptions };
    const component = COMPONENT_MANAGER.create('SortOptions', opts);
    expect(component.selectedOptionIndex).toEqual(0);
    const wrapper = mount(COMPONENT_MANAGER.create('SortOptions', opts));
    expect(wrapper.find('.yxt-SortOptions-option')).toHaveLength(2);
    expect(wrapper.find('.yxt-SortOptions-reset')).toHaveLength(0);
    expect(wrapper.find('.yxt-SortOptions-showToggle')).toHaveLength(0);
  });

  it('reset button correctly resets', () => {
    const opts = { ...config, options: defaultOptions, showReset: true };
    const component = COMPONENT_MANAGER.create('SortOptions', opts);
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-SortOptions-reset')).toHaveLength(1);
    expect(component.selectedOptionIndex).toEqual(0);
    wrapper.find('.yxt-SortOptions-optionSelector').at(1).simulate('click');
    expect(component.selectedOptionIndex).toEqual(1);
  });

  it('has correct show more/less behavior', () => {
    const opts = {
      ...config,
      options: threeOptions,
      showMore: true,
      showMoreLimit: 2,
      showMoreLabel: 'show more label!',
      showLessLabel: 'show less label!'
    };
    const component = COMPONENT_MANAGER.create('SortOptions', opts);
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-SortOptions-showToggle')).toHaveLength(1);
    expect(wrapper.find('.yxt-SortOptions-showToggle').text()).toContain('show more label!');
    expect(wrapper.find('.yxt-SortOptions-option')).toHaveLength(2);

    wrapper.find('.yxt-SortOptions-showToggle').first().simulate('click');
    expect(wrapper.find('.yxt-SortOptions-showToggle')).toHaveLength(1);
    expect(wrapper.find('.yxt-SortOptions-showToggle').text()).toContain('show less label!');
    expect(wrapper.find('.yxt-SortOptions-option')).toHaveLength(4);

    wrapper.find('.yxt-SortOptions-showToggle').first().simulate('click');
    expect(wrapper.find('.yxt-SortOptions-showToggle')).toHaveLength(1);
    expect(wrapper.find('.yxt-SortOptions-showToggle').text()).toContain('show more label!');
    expect(wrapper.find('.yxt-SortOptions-option')).toHaveLength(2);
  });
});
