import DOM from 'src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import FilterNodeFactory from 'src/core/filters/filternodefactory';
import Filter from 'src/core/models/filter';
import FilterMetadata from 'src/core/filters/filtermetadata';
import FilterType from '../../../../src/core/filters/filtertype';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import PersistentStorage from 'src/ui/storage/persistentstorage';

describe('filter options component', () => {
  DOM.setup(document, new DOMParser());
  let COMPONENT_MANAGER, defaultConfig, setStaticFilterNodes;

  const options = [
    {
      label: 'ciri',
      field: 'witcher',
      value: 'cirilla'
    },
    {
      label: 'geraldo',
      field: 'witcher',
      value: 'geralt'
    },
    {
      label: 'yen',
      field: 'witcher',
      value: 'yennefer'
    },
    {
      label: 'chihaya',
      field: 'chihayafuru',
      value: 'ayase'
    },
    {
      label: 'wataya',
      field: 'chihayafuru',
      value: 'arata'
    },
    {
      label: 'mashima',
      field: 'chihayafuru',
      value: 'taichi'
    }
  ];

  const filterOptionsLabel = 'test filter label';
  const nodes = [];
  for (let index = 0; index < options.length; index++) {
    const o = options[index];
    nodes[index] = FilterNodeFactory.from({
      filter: Filter.equal(o.field, o.value),
      metadata: {
        fieldName: filterOptionsLabel,
        displayValue: o.label
      }
    });
  }

  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));
    setStaticFilterNodes = jest.fn();

    const mockCore = {
      setStaticFilterNodes: setStaticFilterNodes,
      setLocationRadiusFilterNode: () => { },
      filterRegistry: {
        setStaticFilterNodes: setStaticFilterNodes
      },
      globalStorage: {
        getState: (key) => {
          if (key === StorageKeys.SEARCH_CONFIG) {
            return {
              verticalKey: 'a vertical key'
            };
          }
          return null;
        },
        delete: () => { },
        on: () => {}
      },
      persistentStorage: new PersistentStorage()
    };

    COMPONENT_MANAGER = mockManager(mockCore);

    defaultConfig = {
      container: '#test-component',
      control: 'singleoption',
      options: options,
      label: filterOptionsLabel
    };
  });

  it('renders with default values', () => {
    const component = COMPONENT_MANAGER.create('FilterOptions', defaultConfig);
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-FilterOptions-fieldSet')).toHaveLength(1);
  });

  it('renders correct number of options + show more with default showMoreLimit of 5 (multioption)', () => {
    const config = {
      ...defaultConfig,
      control: 'multioption'
    };
    const component = COMPONENT_MANAGER.create('FilterOptions', config);
    const wrapper = mount(component);
    expect(options).toHaveLength(6);
    expect(wrapper.find('.js-yxt-FilterOptions-option.hidden')).toHaveLength(1);
    expect(wrapper.find('.js-yxt-FilterOptions-showMore')).toHaveLength(1);
  });

  it('renders correct number of options + show more with default showMoreLimit of 5 (singleoption)', () => {
    const config = {
      ...defaultConfig,
      control: 'singleoption'
    };
    const component = COMPONENT_MANAGER.create('FilterOptions', config);
    const wrapper = mount(component);
    expect(options).toHaveLength(6);
    expect(wrapper.find('.js-yxt-FilterOptions-option.hidden')).toHaveLength(1);
    expect(wrapper.find('.js-yxt-FilterOptions-showMore')).toHaveLength(1);
  });

  it('renders correct number of multi options', () => {
    const config = {
      ...defaultConfig,
      control: 'multioption',
      showMoreLimit: options.length
    };
    const component = COMPONENT_MANAGER.create('FilterOptions', config);
    const wrapper = mount(component);
    expect(wrapper.find('.multioption-option')).toHaveLength(options.length);
    expect(wrapper.find('.yxt-FilterOptions-showToggle')).toHaveLength(0);
  });

  it('renders multi options with correct data-index tags', () => {
    const config = {
      ...defaultConfig,
      control: 'multioption',
      showMoreLimit: options.length
    };
    const component = COMPONENT_MANAGER.create('FilterOptions', config);
    const wrapper = mount(component);
    const multioptions = wrapper.find('.js-yext-filter-option');
    for (let index = 0; index < options.length; index++) {
      expect(multioptions.at(index).props()['data-index']).toEqual(index.toString());
    }
  });

  describe('properly interacts with URL', () => {
    it('selecting an option updates the URL when storeOnChange = true', () => {
      const config = {
        ...defaultConfig,
        storeOnChange: true,
        control: 'singleoption'
      };
      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      const storageBeforeSelection = component.core.persistentStorage.getAll();
      component._updateOption(0, true);
      const storageAfterSelection = component.core.persistentStorage.getAll();
      expect(storageBeforeSelection).not.toEqual(storageAfterSelection);
    });

    it('selecting an option does not update the URL when storeOnChange = false', () => {
      const config = {
        ...defaultConfig,
        storeOnChange: false,
        control: 'singleoption'
      };
      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      const storageBeforeSelection = component.core.persistentStorage.getAll();
      component._updateOption(0, true);
      const storageAfterSelection = component.core.persistentStorage.getAll();
      expect(storageBeforeSelection).toEqual(storageAfterSelection);
    });
  });

  describe('hides options if the number of options exceeds the show more limit', () => {
    it('works for singleoption', () => {
      const config = {
        ...defaultConfig,
        control: 'singleoption',
        showMoreLimit: 2
      };
      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      const wrapper = mount(component);
      const displayedOptions = wrapper.find('.singleoption-option:not(.hidden)');
      const hiddenOptions = wrapper.find('.singleoption-option.hidden');
      expect(displayedOptions).toHaveLength(2);
      expect(hiddenOptions).toHaveLength(4);
    });

    it('works for multioption', () => {
      const config = {
        ...defaultConfig,
        control: 'multioption',
        showMoreLimit: 2
      };
      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      const wrapper = mount(component);
      const displayedOptions = wrapper.find('.multioption-option:not(.hidden)');
      const hiddenOptions = wrapper.find('.multioption-option.hidden');
      expect(displayedOptions).toHaveLength(2);
      expect(hiddenOptions).toHaveLength(4);
    });

    it('ignores showMoreLimit if showMore is false (singleoption)', () => {
      const config = {
        ...defaultConfig,
        control: 'singleoption',
        showMore: false,
        showMoreLimit: 2
      };
      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      const wrapper = mount(component);
      const displayedOptions = wrapper.find('.singleoption-option:not(.hidden)');
      const hiddenOptions = wrapper.find('.singleoption-option.hidden');
      expect(displayedOptions).toHaveLength(6);
      expect(hiddenOptions).toHaveLength(0);
    });

    it('ignores showMoreLimit if showMore is false (singleoption)', () => {
      const config = {
        ...defaultConfig,
        control: 'multioption',
        showMore: false,
        showMoreLimit: 2
      };
      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      const wrapper = mount(component);
      const displayedOptions = wrapper.find('.multioption-option:not(.hidden)');
      const hiddenOptions = wrapper.find('.multioption-option.hidden');
      expect(displayedOptions).toHaveLength(6);
      expect(hiddenOptions).toHaveLength(0);
    });
  });

  describe('can create filter nodes', () => {
    let config;

    beforeEach(() => {
      config = {
        ...defaultConfig,
        control: 'multioption',
        options: options,
        showMoreLimit: options.length
      };
    });

    it('creates blank filternodes when no options selected on load', () => {
      COMPONENT_MANAGER.create('FilterOptions', config);
      const actualNode = setStaticFilterNodes.mock.calls[0][1];
      const expectedNode = FilterNodeFactory.from();
      expect(actualNode.getFilter()).toEqual(expectedNode.getFilter());
      expect(actualNode.getMetadata()).toEqual(expectedNode.getMetadata());
      expect(setStaticFilterNodes.mock.calls).toHaveLength(1);
    });

    it('creates simple filternodes correctly from multi options', () => {
      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      component._updateOption(0, true);
      const actualNode = component.getFilterNode();
      const expectedNode = nodes[0];
      expect(actualNode.getMetadata()).toEqual(expectedNode.getMetadata());
      expect(actualNode.getFilter()).toEqual(expectedNode.getFilter());
      expect(setStaticFilterNodes.mock.calls).toHaveLength(2);
    });

    it('creates combined filternodes correctly from multi options', () => {
      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      component._updateOption(0, true);
      component._updateOption(1, true);
      const actualNode = component.getFilterNode();
      const expectedNode = FilterNodeFactory.or(nodes[0], nodes[1]);
      expect(actualNode.getMetadata()).toEqual(expectedNode.getMetadata());
      expect(actualNode.getFilter()).toEqual(expectedNode.getFilter());
      expect(setStaticFilterNodes.mock.calls).toHaveLength(3);
    });

    it('can unset filter nodes', () => {
      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      component._updateOption(0, true);
      component._updateOption(1, true);
      component._updateOption(1, false);
      const actualNode = component.getFilterNode();
      const expectedNode = nodes[0];
      expect(actualNode.getMetadata()).toEqual(expectedNode.getMetadata());
      expect(actualNode.getFilter()).toEqual(expectedNode.getFilter());
      expect(setStaticFilterNodes.mock.calls).toHaveLength(4);
    });

    it('can do complicated operations', () => {
      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      component._updateOption(0, true);
      component._updateOption(1, true);
      component._updateOption(1, false);
      component._updateOption(3, true);
      component._updateOption(0, false);
      component._updateOption(3, false);
      component._updateOption(5, true);
      component._updateOption(4, true);
      component._updateOption(3, true);
      component._updateOption(2, true);
      component._updateOption(1, true);
      component._updateOption(0, true);
      const orNode0 = FilterNodeFactory.or(nodes[0], nodes[1], nodes[2]);
      const orNode1 = FilterNodeFactory.or(nodes[3], nodes[4], nodes[5]);
      const actualNode = component.getFilterNode();
      const expectedNode = FilterNodeFactory.and(orNode0, orNode1);
      expect(actualNode.getMetadata()).toEqual(expectedNode.getMetadata());
      expect(actualNode.getFilter()).toEqual(expectedNode.getFilter());
      expect(setStaticFilterNodes.mock.calls).toHaveLength(13);
    });
  });

  it('renders correct number of single options', () => {
    const config = {
      ...defaultConfig,
      control: 'singleoption',
      showMoreLimit: options.length
    };
    const component = COMPONENT_MANAGER.create('FilterOptions', config);
    const wrapper = mount(component);
    expect(wrapper.find('.singleoption-option')).toHaveLength(options.length);
  });

  it('reset button clears the filternode', () => {
    const component = COMPONENT_MANAGER.create('FilterOptions', {
      ...defaultConfig,
      showReset: true
    });
    const wrapper = mount(component);
    const resetSelector = wrapper.find('.js-yxt-FilterOptions-reset');
    expect(resetSelector).toHaveLength(1);
    component._updateOption(0, true);
    let actualNode = component.getFilterNode();
    let expectedNode = nodes[0];
    expect(actualNode.getMetadata()).toEqual(expectedNode.getMetadata());
    expect(actualNode.getFilter()).toEqual(expectedNode.getFilter());
    resetSelector.at(0).simulate('click');
    actualNode = component.getFilterNode();
    expectedNode = FilterNodeFactory.from();
    expect(actualNode.getMetadata()).toEqual(expectedNode.getMetadata());
    expect(actualNode.getFilter()).toEqual(expectedNode.getFilter());
  });

  it('sets filter nodes on page load', () => {
    const config = {
      ...defaultConfig,
      control: 'singleoption',
      showMoreLimit: options.length
    };
    expect(setStaticFilterNodes.mock.calls).toHaveLength(0);
    const component = COMPONENT_MANAGER.create('FilterOptions', config);
    let filterNode = component.getFilterNode();
    expect(filterNode.getFilter()).toEqual(FilterNodeFactory.from().getFilter());
    expect(filterNode.getMetadata()).toEqual(FilterNodeFactory.from().getMetadata());
    expect(setStaticFilterNodes.mock.calls).toHaveLength(1);
  });

  it('creates simple filternodes correctly from single options', () => {
    const config = {
      ...defaultConfig,
      control: 'singleoption',
      showMoreLimit: options.length
    };
    const component = COMPONENT_MANAGER.create('FilterOptions', config);
    component._updateOption(0, true);
    expect(component.getFilterNode().getFilter()).toEqual(nodes[0].getFilter());
    expect(component.getFilterNode().getMetadata()).toEqual(nodes[0].getMetadata());
    expect(setStaticFilterNodes.mock.calls).toHaveLength(2);
  });

  it('creates combined filternodes correctly from single options', () => {
    const config = {
      ...defaultConfig,
      control: 'singleoption',
      showMoreLimit: options.length
    };
    const component = COMPONENT_MANAGER.create('FilterOptions', config);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(1);
    component._updateOption(0, true);
    component._updateOption(1, true);
    component._updateOption(2, true);
    expect(component.getFilterNode().getFilter()).toEqual(nodes[2].getFilter());
    expect(component.getFilterNode().getMetadata()).toEqual(nodes[2].getMetadata());
    expect(setStaticFilterNodes.mock.calls).toHaveLength(4);
  });

  describe('filter options when setting selected options in config', () => {
    let COMPONENT_MANAGER, defaultConfig;

    beforeEach(() => {
      const bodyEl = DOM.query('body');
      DOM.empty(bodyEl);
      DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

      COMPONENT_MANAGER = mockManager({
        globalStorage: {
          getState: key => {
            if (key === 'test-previous-options') {
              return ['label1', 'label2'];
            }
          },
          delete: () => { },
          on: () => {}
        },
        setStaticFilterNodes: () => { }
      });

      defaultConfig = {
        container: '#test-component',
        options: [
          {
            label: 'label1',
            field: 'field',
            value: 'val1'
          },
          {
            label: 'label2',
            field: 'field',
            value: 'val2',
            selected: false
          },
          {
            label: 'label3',
            field: 'field',
            value: 'val3',
            selected: true
          },
          {
            label: 'label4',
            field: 'field',
            value: 'val4',
            selected: true
          }
        ]
      };
    });

    it('has no selected options by default', () => {
      const config = {
        ...defaultConfig,
        control: 'singleoption',
        options: [
          {
            label: 'label1',
            field: 'field',
            value: 'val1'
          },
          {
            label: 'label2',
            field: 'field',
            value: 'val2'
          },
          {
            label: 'label3',
            field: 'field',
            value: 'val3'
          }
        ]
      };

      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      const options = component.config.options;
      expect(options).toHaveLength(3);
      expect(options.filter(o => o.selected)).toHaveLength(0);
    });

    it('properly sets selected options for multioption', () => {
      const config = {
        ...defaultConfig,
        control: 'multioption'
      };

      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      const options = component.config.options;
      expect(options).toHaveLength(4);
      const selectedOptions = options.filter(o => o.selected);
      expect(selectedOptions).toHaveLength(2);
      expect(selectedOptions[0].label).toEqual('label3');
      expect(selectedOptions[1].label).toEqual('label4');
    });

    it('prioritizes previously selected options over config\'s selected options for multioption', () => {
      const config = {
        ...defaultConfig,
        name: 'test-previous-options',
        control: 'multioption'
      };

      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      const options = component.config.options;
      expect(options).toHaveLength(4);
      const selectedOptions = options.filter(o => o.selected);
      expect(selectedOptions).toHaveLength(2);
      expect(selectedOptions[0].label).toEqual('label1');
      expect(selectedOptions[1].label).toEqual('label2');
    });

    it('properly sets selected option for singleoption', () => {
      const config = {
        ...defaultConfig,
        control: 'singleoption'
      };

      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      const options = component.config.options;
      expect(options).toHaveLength(4);
      const selectedOptions = options.filter(o => o.selected);
      expect(selectedOptions).toHaveLength(1);
      expect(selectedOptions[0].label).toEqual('label3');
    });

    it('prioritizes previously selected option over config\'s selected options for singleoption', () => {
      const config = {
        ...defaultConfig,
        name: 'test-previous-options',
        control: 'singleoption'
      };

      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      const options = component.config.options;
      expect(options).toHaveLength(4);
      const selectedOptions = options.filter(o => o.selected);
      expect(selectedOptions).toHaveLength(1);
      expect(selectedOptions[0].label).toEqual('label1');
    });
  });

  describe('filter options works with different optionTypes', () => {
    let COMPONENT_MANAGER, defaultConfig, setLocationRadiusFilterNode, setStaticFilterNodes;

    beforeEach(() => {
      const bodyEl = DOM.query('body');
      DOM.empty(bodyEl);
      DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));
      setLocationRadiusFilterNode = jest.fn();
      setStaticFilterNodes = jest.fn();

      COMPONENT_MANAGER = mockManager({
        globalStorage: {
          getState: () => { },
          delete: () => { },
          on: () => {}
        },
        persistentStorage: {
          set: () => { },
          get: () => { }
        },
        setLocationRadiusFilterNode,
        setStaticFilterNodes
      });

      defaultConfig = {
        container: '#test-component',
        label: 'filterOptionsLabel'
      };
    });

    it('defaults to STATIC_FILTER', () => {
      const config = {
        ...defaultConfig,
        control: 'singleoption',
        options: [
          {
            label: 'label1',
            field: 'field',
            value: 'val1'
          }
        ]
      };

      expect(setStaticFilterNodes.mock.calls).toHaveLength(0);
      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      expect(setStaticFilterNodes.mock.calls).toHaveLength(1);
      expect(setLocationRadiusFilterNode.mock.calls).toHaveLength(0);
      component.apply();
      expect(setStaticFilterNodes.mock.calls).toHaveLength(2);
      expect(setLocationRadiusFilterNode.mock.calls).toHaveLength(0);
    });

    it('works with RADIUS_FILTER', () => {
      const config = {
        ...defaultConfig,
        control: 'singleoption',
        optionType: 'RADIUS_FILTER',
        options: [
          {
            label: '12345 meters',
            value: 12345,
            selected: true
          }
        ]
      };

      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      component.apply();
      const filterNode = FilterNodeFactory.from({
        metadata: new FilterMetadata({
          fieldName: 'filterOptionsLabel',
          displayValue: '12345 meters',
          filterType: FilterType.RADIUS
        }),
        filter: new Filter({ value: 12345 })
      });
      expect(setLocationRadiusFilterNode.mock.calls[1][0].getFilter()).toEqual(filterNode.getFilter());
      expect(setLocationRadiusFilterNode.mock.calls[1][0].getMetadata()).toEqual(filterNode.getMetadata());
    });

    it('clears locationRadius when radius = 0', () => {
      const config = {
        ...defaultConfig,
        control: 'singleoption',
        optionType: 'RADIUS_FILTER',
        options: [
          {
            label: 'le 0 metres',
            value: 0,
            selected: true
          }
        ]
      };

      const component = COMPONENT_MANAGER.create('FilterOptions', config);
      component.apply();
      const filterNode = FilterNodeFactory.from({
        metadata: new FilterMetadata({
          fieldName: 'filterOptionsLabel',
          displayValue: 'le 0 metres',
          filterType: FilterType.RADIUS
        }),
        filter: Filter.empty()
      });
      expect(setLocationRadiusFilterNode.mock.calls[1][0].getFilter()).toEqual(filterNode.getFilter());
      expect(setLocationRadiusFilterNode.mock.calls[1][0].getMetadata()).toEqual(filterNode.getMetadata());
    });

    it('throws error when trying to use multioption with RADIUS_FILTER', () => {
      const config = {
        ...defaultConfig,
        control: 'multioption',
        optionType: 'RADIUS_FILTER',
        options: [
          {
            label: '12345 meters',
            value: 12345,
            selected: true
          }
        ]
      };

      expect(() => COMPONENT_MANAGER.create('FilterOptions', config)).toThrow();
    });
  });
});
