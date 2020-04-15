import DOM from '../../../../src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import FilterBoxComponent from '../../../../src/ui/components/filters/filterboxcomponent';
import FilterNodeFactory from '../../../../src/core/filters/filternodefactory';
import Filter from '../../../../src/core/models/filter';
import FilterOptionsComponent from '../../../../src/ui/components/filters/filteroptionscomponent';

describe('sort options component', () => {
  DOM.setup(document, new DOMParser());
  let COMPONENT_MANAGER, defaultConfig, setFilterNode, verticalSearch;
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

  const nodes0 = [];
  const nodes1 = [];
  for (let index = 0; index < options.length; index++) {
    const o = options[index];
    nodes0[index] = FilterNodeFactory.from({
      filter: Filter.equal(o.field, o.value),
      metadata: {
        fieldName: 'first filter options',
        displayValue: o.label
      }
    });
    nodes1[index] = FilterNodeFactory.from({
      filter: Filter.equal(o.field, o.value),
      metadata: {
        fieldName: 'second filter options',
        displayValue: o.label
      }
    });
  }

  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));
    setFilterNode = jest.fn();
    verticalSearch = jest.fn();

    const mockCore = {
      setFilterNode: setFilterNode,
      verticalSearch: verticalSearch
    };

    COMPONENT_MANAGER = mockManager(
      mockCore,
      FilterBoxComponent.defaultTemplateName(),
      FilterOptionsComponent.defaultTemplateName()
    );

    defaultConfig = {
      container: '#test-component',
      filters: []
    };
  });

  it('renders with default values', () => {
    const component = COMPONENT_MANAGER.create('FilterBox', defaultConfig);
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-FilterBox-container')).toHaveLength(1);
  });

  it('correctly creates child filter components', () => {
    const config = {
      ...defaultConfig,
      filters: [
        {
          type: 'FilterOptions',
          label: 'first filter options',
          control: 'singleoption',
          options: options
        },
        {
          type: 'FilterOptions',
          label: 'second filter options',
          control: 'multioption',
          options: options
        }
      ]
    };
    const component = COMPONENT_MANAGER.create('FilterBox', config);
    mount(component);
    expect(component._filterComponents[0]._config.options).toEqual(options);
    expect(component._filterComponents[1]._config.options).toEqual(options);
  });

  it('correctly combines filternodes from child filters', () => {
    const config = {
      ...defaultConfig,
      name: 'unique name',
      searchOnChange: true,
      filters: [
        {
          type: 'FilterOptions',
          label: 'first filter options',
          control: 'singleoption',
          options: options
        },
        {
          type: 'FilterOptions',
          label: 'second filter options',
          control: 'multioption',
          options: options
        }
      ]
    };
    const component = COMPONENT_MANAGER.create('FilterBox', config);
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-FilterBox-filter')).toHaveLength(2);
    const child0 = component._filterComponents[0];
    const child1 = component._filterComponents[1];
    expect(setFilterNode.mock.calls).toHaveLength(1);
    expect(setFilterNode.mock.calls[0][0]).toEqual('unique name');
    expect(child0.getFilterNode()).toEqual(FilterNodeFactory.from());
    let filterNode = FilterNodeFactory.and(child0.getFilterNode(), child1.getFilterNode());
    expect(setFilterNode.mock.calls[0][1]).toEqual(filterNode);

    child0._updateOption(0, true);
    expect(child0.getFilterNode()).toEqual(nodes0[0]);
    filterNode = FilterNodeFactory.and(child0.getFilterNode(), child1.getFilterNode());
    expect(setFilterNode.mock.calls[1][1]).toEqual(filterNode);

    child1._updateOption(0, true);
    expect(child1.getFilterNode()).toEqual(nodes1[0]);
    filterNode = FilterNodeFactory.and(child0.getFilterNode(), child1.getFilterNode());
    expect(setFilterNode.mock.calls[2][1]).toEqual(filterNode);

    child1._updateOption(3, true);
    expect(child1.getFilterNode()).toEqual(FilterNodeFactory.and(nodes1[0], nodes1[3]));
    filterNode = FilterNodeFactory.and(child0.getFilterNode(), child1.getFilterNode());
    expect(setFilterNode.mock.calls[3][1]).toEqual(filterNode);

    child1._updateOption(4, true);
    expect(child1.getFilterNode()).toEqual(
      FilterNodeFactory.and(nodes1[0], FilterNodeFactory.or(nodes1[3], nodes1[4]))
    );
    filterNode = FilterNodeFactory.and(child0.getFilterNode(), child1.getFilterNode());
    expect(setFilterNode.mock.calls[4][1]).toEqual(filterNode);
  });
});
