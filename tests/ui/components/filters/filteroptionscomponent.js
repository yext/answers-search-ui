import DOM from 'src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import FilterOptionsComponent from 'src/ui/components/filters/filteroptionscomponent';
import FilterNodeFactory from 'src/core/filters/filternodefactory';
import Filter from 'src/core/models/filter';

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
      filterRegistry: {
        setStaticFilterNodes: setStaticFilterNodes
      }
    };

    COMPONENT_MANAGER = mockManager(
      mockCore,
      FilterOptionsComponent.defaultTemplateName()
    );

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

  it('renders correct number of options + show more with default showMoreLimit of 5', () => {
    const config = {
      ...defaultConfig,
      control: 'multioption'
    };
    const component = COMPONENT_MANAGER.create('FilterOptions', config);
    const wrapper = mount(component);
    expect(options).toHaveLength(6);
    expect(wrapper.find('.multioption-option')).toHaveLength(5);
    expect(wrapper.find('.yxt-FilterOptions-showToggle')).toHaveLength(1);
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

  it('creates filternodes correctly from multi options', () => {
    const config = {
      ...defaultConfig,
      control: 'multioption',
      options: options,
      showMoreLimit: options.length
    };
    const component = COMPONENT_MANAGER.create('FilterOptions', config);
    let filterNode = component.getFilterNode();
    expect(filterNode).toEqual(FilterNodeFactory.from());

    component._updateOption(0, true);
    expect(component.getFilterNode()).toEqual(nodes[0]);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(1);

    component._updateOption(1, true);
    expect(component.getFilterNode()).toEqual(FilterNodeFactory.or(nodes[0], nodes[1]));
    expect(setStaticFilterNodes.mock.calls).toHaveLength(2);

    component._updateOption(1, false);
    expect(component.getFilterNode()).toEqual(nodes[0]);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(3);

    component._updateOption(3, true);
    expect(component.getFilterNode()).toEqual(FilterNodeFactory.and(nodes[0], nodes[3]));
    expect(setStaticFilterNodes.mock.calls).toHaveLength(4);

    component._updateOption(0, false);
    expect(component.getFilterNode()).toEqual(nodes[3]);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(5);

    component._updateOption(3, false);
    expect(filterNode).toEqual(FilterNodeFactory.from());
    expect(setStaticFilterNodes.mock.calls).toHaveLength(6);

    component._updateOption(5, true);
    expect(component.getFilterNode()).toEqual(nodes[5]);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(7);

    component._updateOption(4, true);
    expect(component.getFilterNode()).toEqual(FilterNodeFactory.or(nodes[4], nodes[5]));
    expect(setStaticFilterNodes.mock.calls).toHaveLength(8);

    component._updateOption(3, true);
    const orNode1 = FilterNodeFactory.or(nodes[3], nodes[4], nodes[5]);
    expect(component.getFilterNode()).toEqual(FilterNodeFactory.or(orNode1));
    expect(setStaticFilterNodes.mock.calls).toHaveLength(9);

    component._updateOption(2, true);
    expect(component.getFilterNode()).toEqual(FilterNodeFactory.and(nodes[2], orNode1));
    expect(setStaticFilterNodes.mock.calls).toHaveLength(10);

    component._updateOption(1, true);
    let orNode0 = FilterNodeFactory.or(nodes[1], nodes[2]);
    expect(component.getFilterNode()).toEqual(FilterNodeFactory.and(orNode0, orNode1));
    expect(setStaticFilterNodes.mock.calls).toHaveLength(11);

    component._updateOption(0, true);
    orNode0 = FilterNodeFactory.or(nodes[0], nodes[1], nodes[2]);
    expect(component.getFilterNode()).toEqual(FilterNodeFactory.and(orNode0, orNode1));
    expect(setStaticFilterNodes.mock.calls).toHaveLength(12);
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

  it('creates filternodes correctly from single options', () => {
    const config = {
      ...defaultConfig,
      control: 'singleoption',
      showMoreLimit: options.length
    };
    const component = COMPONENT_MANAGER.create('FilterOptions', config);
    let filterNode = component.getFilterNode();
    expect(filterNode).toEqual(FilterNodeFactory.from());

    component._updateOption(0, true);
    expect(component.getFilterNode()).toEqual(nodes[0]);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(1);
    component._updateOption(1, true);
    expect(component.getFilterNode()).toEqual(nodes[1]);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(2);
    component._updateOption(2, true);
    expect(component.getFilterNode()).toEqual(nodes[2]);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(3);
    component._updateOption(3, true);
    expect(component.getFilterNode()).toEqual(nodes[3]);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(4);
    component._updateOption(4, true);
    expect(component.getFilterNode()).toEqual(nodes[4]);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(5);
    component._updateOption(5, true);
    expect(component.getFilterNode()).toEqual(nodes[5]);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(6);
  });
});

describe('filter options when setting selected options in config', () => {
  let COMPONENT_MANAGER, defaultConfig;

  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

    COMPONENT_MANAGER = mockManager(
      {
        globalStorage: {
          getState: key => {
            if (key === 'test-previous-options') {
              return ['label1', 'label2'];
            }
          },
          delete: () => {}
        }
      },
      FilterOptionsComponent.defaultTemplateName()
    );

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
  let COMPONENT_MANAGER, defaultConfig, setLocationRadius, clearLocationRadius, setStaticFilterNodes;

  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));
    setLocationRadius = jest.fn();
    clearLocationRadius = jest.fn();
    setStaticFilterNodes = jest.fn();

    COMPONENT_MANAGER = mockManager(
      {
        globalStorage: {
          getState: () => {},
          delete: () => {}
        },
        persistentStorage: {
          set: () => {}
        },
        setLocationRadius,
        clearLocationRadius,
        setStaticFilterNodes
      },
      FilterOptionsComponent.defaultTemplateName()
    );

    defaultConfig = {
      container: '#test-component'
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

    const component = COMPONENT_MANAGER.create('FilterOptions', config);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(0);
    expect(setLocationRadius.mock.calls).toHaveLength(0);
    expect(clearLocationRadius.mock.calls).toHaveLength(0);
    component.apply();
    expect(setStaticFilterNodes.mock.calls).toHaveLength(1);
    expect(setLocationRadius.mock.calls).toHaveLength(0);
    expect(clearLocationRadius.mock.calls).toHaveLength(0);
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
    expect(setStaticFilterNodes.mock.calls).toHaveLength(0);
    expect(setLocationRadius.mock.calls).toHaveLength(0);
    expect(clearLocationRadius.mock.calls).toHaveLength(0);
    component.apply();
    expect(setStaticFilterNodes.mock.calls).toHaveLength(0);
    expect(setLocationRadius.mock.calls).toHaveLength(1);
    expect(setLocationRadius.mock.calls[0][0]).toEqual(12345);
    expect(clearLocationRadius.mock.calls).toHaveLength(0);
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
    expect(setStaticFilterNodes.mock.calls).toHaveLength(0);
    expect(setLocationRadius.mock.calls).toHaveLength(0);
    expect(clearLocationRadius.mock.calls).toHaveLength(0);
    component.apply();
    expect(setStaticFilterNodes.mock.calls).toHaveLength(0);
    expect(setLocationRadius.mock.calls).toHaveLength(0);
    expect(clearLocationRadius.mock.calls).toHaveLength(1);
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
