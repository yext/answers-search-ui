import DOM from '../../../../src/ui/dom/dom';
import SortOptionsComponent from '../../../../src/ui/components/filters/sortoptionscomponent';
import { mount } from 'enzyme';
import { AnswersBasicError } from '../../../../src/core/errors/errors';
import mockManager from '../../../setup/managermocker';
import StorageKeys from '../../../../src/core/storage/storagekeys';

const mockedCore = () => {
  return {
    setSortBys: (...options) => {
      options.forEach(opt => expect(opt).toHaveProperty('type'));
    },
    clearSortBys: () => {},
    verticalSearch: () => {},
    globalStorage: {
      on: () => {},
      getState: storageKey => {
        expect(['SortOptions', StorageKeys.QUERY]).toContain(storageKey);
        return null;
      },
      getAll: storageKey => {
        expect([StorageKeys.FACET_FILTER_NODE, StorageKeys.STATIC_FILTER_NODE]).toContain(storageKey);
        return [];
      },
      delete: storageKey => expect(storageKey).toBe(StorageKeys.SEARCH_OFFSET)
    },
    persistentStorage: {
      set: (namespace, optionIndex) => {
        expect(namespace).toBe('SortOptions');
        expect(typeof optionIndex).toBe('number');
      },
      delete: storageKey => expect(storageKey).toBe(StorageKeys.SEARCH_OFFSET)
    }
  };
};

DOM.setup(document, new DOMParser());

const COMPONENT_MANAGER = mockManager(mockedCore());

describe('sort options component', () => {
  const systemConfig = { core: mockedCore() };
  let defaultConfig;
  let threeOptions;

  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

    defaultConfig = {
      container: '#test-component',
      verticalKey: 'verticalKey',
      options: [
        {
          type: 'FIELD',
          field: 'c_popularity',
          direction: 'ASC',
          label: 'Popularity'
        }
      ]
    };

    threeOptions = [
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
  });

  it('throws an error when config.options is unset', () => {
    const error = new AnswersBasicError('config.options are required', 'SortOptions');
    expect(() => new SortOptionsComponent({ container: '#test-component' }, systemConfig)).toThrow(error);
  });

  it('renders correctly for default values', () => {
    const component = COMPONENT_MANAGER.create('SortOptions', defaultConfig);
    expect(component.selectedOptionIndex).toEqual(0);
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-SortOptions-option')).toHaveLength(2);
    expect(wrapper.find('.yxt-SortOptions-reset').hasClass('js-hidden')).toBeTruthy();
    expect(wrapper.find('.yxt-SortOptions-showToggle')).toHaveLength(0);
  });

  it('reset button correctly resets', () => {
    const opts = { ...defaultConfig, showReset: true };
    const component = COMPONENT_MANAGER.create('SortOptions', opts);
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-SortOptions-reset').hasClass('js-hidden')).toBeTruthy();
    expect(component.selectedOptionIndex).toEqual(0);
    wrapper.find('.yxt-SortOptions-optionSelector').at(1).simulate('click');
    expect(wrapper.find('.yxt-SortOptions-reset').hasClass('js-hidden')).toBeFalsy();
    expect(component.selectedOptionIndex).toEqual(1);
    wrapper.find('.yxt-SortOptions-reset').first().simulate('click');
    expect(wrapper.find('.yxt-SortOptions-reset').hasClass('js-hidden')).toBeTruthy();
    expect(component.selectedOptionIndex).toEqual(0);
  });

  it('has correct number of options when show more is false', () => {
    const opts = {
      ...defaultConfig,
      options: threeOptions,
      showMore: false,
      showMoreLimit: 2,
      showMoreLabel: 'show more label!',
      showLessLabel: 'show less label!'
    };
    const component = COMPONENT_MANAGER.create('SortOptions', opts);
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-SortOptions-option')).toHaveLength(4);
  });

  it('has correct show more/less behavior', () => {
    const opts = {
      ...defaultConfig,
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

  it('has correct radio button behavior', () => {
    const opts = {
      ...defaultConfig,
      options: threeOptions
    };
    const component = COMPONENT_MANAGER.create('SortOptions', opts);
    const wrapper = mount(component);

    const firstOption = wrapper.find('.yxt-SortOptions-optionSelector').first();
    const fourthOption = wrapper.find('.yxt-SortOptions-optionSelector').at(3);

    expect(firstOption.getDOMNode().checked).toBeTruthy();
    fourthOption.simulate('click');
    expect(wrapper.find('.yxt-SortOptions-optionSelector').at(3).getDOMNode().checked).toBeTruthy();
  });

  it('no apply button when default searchOnChange value (true)', () => {
    const opts = {
      ...defaultConfig,
      options: threeOptions
    };
    const component = COMPONENT_MANAGER.create('SortOptions', opts);
    const wrapper = mount(component);
    expect(component._config.searchOnChange).toBeTruthy();
    expect(wrapper.find('.yxt-SortOptions-apply')).toHaveLength(0);
  });

  it('has apply button with searchOnChange = false', () => {
    const opts = {
      ...defaultConfig,
      options: threeOptions,
      searchOnChange: false
    };
    const component = COMPONENT_MANAGER.create('SortOptions', opts);
    const wrapper = mount(component);
    expect(component._config.searchOnChange).toBeFalsy();
    expect(wrapper.find('.yxt-SortOptions-apply')).toHaveLength(1);
  });

  it('does not render for no results', () => {
    const opts = {
      ...defaultConfig,
      options: threeOptions,
      searchOnChange: false
    };
    const component = COMPONENT_MANAGER.create('SortOptions', opts);
    const isNoResults = true;
    component.handleVerticalResultsUpdate(isNoResults);
    const wrapper = mount(component);
    expect(wrapper.text()).toEqual('');
  });
});
