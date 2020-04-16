import DOM from '../../../../src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import FilterBoxComponent from '../../../../src/ui/components/filters/filterboxcomponent';
import FilterNodeFactory from '../../../../src/core/filters/filternodefactory';
import Filter from '../../../../src/core/models/filter';
import FilterOptionsComponent from '../../../../src/ui/components/filters/filteroptionscomponent';
import FilterCombinators from '../../../../src/core/filters/filtercombinators';

describe('filter box component', () => {
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
      verticalSearch: verticalSearch,
      filterRegistry: {
        setFilterNode: setFilterNode
      }
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

  it('search on change = false works', () => {
    const config = {
      ...defaultConfig,
      name: 'unique name',
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
    expect(component._config.searchOnChange).toBeFalsy();
    const child0 = component._filterComponents[0];
    expect(setFilterNode.mock.calls).toHaveLength(1);
    expect(verticalSearch.mock.calls).toHaveLength(0);
    child0._updateOption(0, true);
    expect(setFilterNode.mock.calls).toHaveLength(1);
    expect(verticalSearch.mock.calls).toHaveLength(0);
    wrapper.find('.js-yext-filterbox-apply').first().simulate('click');
    expect(setFilterNode.mock.calls).toHaveLength(2);
    expect(verticalSearch.mock.calls).toHaveLength(1);
  });
});

describe('dynamic filterbox component', () => {
  DOM.setup(document, new DOMParser());
  let COMPONENT_MANAGER, defaultConfig, verticalSearch, setFacetFilterNodes;
  let node1, node2, node3, node4;

  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));
    verticalSearch = jest.fn();
    setFacetFilterNodes = jest.fn();

    const mockCore = {
      setFacetFilterNodes: setFacetFilterNodes,
      verticalSearch: verticalSearch,
      filterRegistry: {
        setFacetFilterNodes: setFacetFilterNodes
      }
    };

    COMPONENT_MANAGER = mockManager(
      mockCore,
      FilterBoxComponent.defaultTemplateName(),
      FilterOptionsComponent.defaultTemplateName()
    );

    defaultConfig = {
      container: '#test-component',
      name: 'Facets.filterbox',
      isDynamic: true,
      filters: [
        {
          type: 'FilterOptions',
          control: 'multioption',
          label: 'Employee Department',
          fieldId: 'c_employeeDepartment',
          options: [
            {
              label: 'label 1',
              countLabel: 1,
              selected: false,
              filter: {
                c_employeeDepartment: {
                  $eq: 'value 1'
                }
              }
            },
            {
              label: 'label 2',
              countLabel: 0,
              selected: false,
              filter: {
                c_employeeDepartment: {
                  $eq: 'value 2'
                }
              }
            }
          ]
        },
        {
          type: 'FilterOptions',
          control: 'multioption',
          label: 'Other Department',
          fieldId: 'c_otherDepartment',
          options: [
            {
              label: 'label 3',
              countLabel: 1,
              selected: false,
              filter: {
                c_otherDepartment: {
                  $eq: 'value 3'
                }
              }
            },
            {
              label: 'label 4',
              countLabel: 0,
              selected: false,
              filter: {
                c_otherDepartment: {
                  $eq: 'value 4'
                }
              }
            }
          ]
        }
      ]
    };

    node1 = FilterNodeFactory.from({
      filter: {
        c_employeeDepartment: {
          $eq: 'value 1'
        }
      },
      metadata: {
        fieldName: 'Employee Department',
        displayValue: 'label 1'
      }
    });

    node2 = FilterNodeFactory.from({
      filter: {
        c_employeeDepartment: {
          $eq: 'value 2'
        }
      },
      metadata: {
        fieldName: 'Employee Department',
        displayValue: 'label 2'
      }
    });

    node3 = FilterNodeFactory.from({
      filter: {
        c_otherDepartment: {
          $eq: 'value 3'
        }
      },
      metadata: {
        fieldName: 'Other Department',
        displayValue: 'label 3'
      }
    });

    node4 = FilterNodeFactory.from({
      filter: {
        c_otherDepartment: {
          $eq: 'value 4'
        }
      },
      metadata: {
        fieldName: 'Other Department',
        displayValue: 'label 4'
      }
    });
  });

  it('renders with default values', () => {
    const component = COMPONENT_MANAGER.create('FilterBox', defaultConfig);
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-FilterBox-container')).toHaveLength(1);
    expect(setFacetFilterNodes.mock.calls).toHaveLength(1);
    expect(setFacetFilterNodes.mock.calls[0][0]).toEqual([ 'c_employeeDepartment', 'c_otherDepartment' ]);
    expect(setFacetFilterNodes.mock.calls[0][1]).toEqual([]);
    component._filterComponents[0]._updateOption(0, true);
    component._filterComponents[1]._updateOption(0, true);
    expect(setFacetFilterNodes.mock.calls).toHaveLength(1);
    wrapper.find('.js-yext-filterbox-apply').first().simulate('click');
    expect(setFacetFilterNodes.mock.calls).toHaveLength(2);
    expect(setFacetFilterNodes.mock.calls[1][0]).toEqual([ 'c_employeeDepartment', 'c_otherDepartment' ]);
    expect(setFacetFilterNodes.mock.calls[1][1]).toContainEqual(node1);
    expect(setFacetFilterNodes.mock.calls[1][1]).toContainEqual(node3);

    component._filterComponents[0]._updateOption(1, true);
    component._filterComponents[1]._updateOption(1, true);
    wrapper.find('.js-yext-filterbox-apply').first().simulate('click');
    expect(setFacetFilterNodes.mock.calls).toHaveLength(3);
    expect(setFacetFilterNodes.mock.calls[2][1][0].combinator).toEqual(FilterCombinators.OR);
    expect(setFacetFilterNodes.mock.calls[2][1][1].combinator).toEqual(FilterCombinators.OR);
    expect(setFacetFilterNodes.mock.calls[2][1][0].children[0]).toEqual(node1);
    expect(setFacetFilterNodes.mock.calls[2][1][0].children[1]).toEqual(node2);
    expect(setFacetFilterNodes.mock.calls[2][1][1].children[0]).toEqual(node3);
    expect(setFacetFilterNodes.mock.calls[2][1][1].children[1]).toEqual(node4);
  });
});
