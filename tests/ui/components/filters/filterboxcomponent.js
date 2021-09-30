import DOM from 'src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import FilterNodeFactory from 'src/core/filters/filternodefactory';
import Filter from 'src/core/models/filter';
import FilterCombinators from 'src/core/filters/filtercombinators';
import FilterType from 'src/core/filters/filtertype';
import StorageKeys from '../../../../src/core/storage/storagekeys';

describe('filter box component', () => {
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
    setStaticFilterNodes = jest.fn();

    const mockCore = {
      setStaticFilterNodes: setStaticFilterNodes,
      filterRegistry: {
        setStaticFilterNodes: setStaticFilterNodes
      }
    };

    COMPONENT_MANAGER = mockManager(mockCore);

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

  describe('can correctly create filternodes from child filters', () => {
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

    it('creates and saves filternodes on page load', () => {
      const component = COMPONENT_MANAGER.create('FilterBox', config);
      const wrapper = mount(component);
      expect(wrapper.find('.yxt-FilterBox-filter')).toHaveLength(2);
      expect(setStaticFilterNodes.mock.calls).toHaveLength(2);
      expect(setStaticFilterNodes.mock.calls[0][0]).toEqual('unique name.filter0');
      expect(setStaticFilterNodes.mock.calls[1][0]).toEqual('unique name.filter1');
      const expectedFilterNode = FilterNodeFactory.from();
      const actualFilterNode0 = setStaticFilterNodes.mock.calls[0][1];
      const actualFilterNode1 = setStaticFilterNodes.mock.calls[1][1];
      expect(actualFilterNode0.getFilter()).toEqual(expectedFilterNode.getFilter());
      expect(actualFilterNode0.getMetadata()).toEqual(expectedFilterNode.getMetadata());
      expect(actualFilterNode1.getFilter()).toEqual(expectedFilterNode.getFilter());
      expect(actualFilterNode1.getMetadata()).toEqual(expectedFilterNode.getMetadata());
    });

    it('can save simple filternodes', () => {
      const component = COMPONENT_MANAGER.create('FilterBox', config);
      mount(component);
      const child0 = component._filterComponents[0];
      const child1 = component._filterComponents[1];
      child0._updateOption(0, true);
      expect(child0.getFilterNode().getFilter()).toEqual(nodes0[0].getFilter());
      expect(child0.getFilterNode().getMetadata()).toEqual(nodes0[0].getMetadata());
      expect(setStaticFilterNodes.mock.calls).toHaveLength(4);
      expect(setStaticFilterNodes.mock.calls[2][1].getFilter())
        .toEqual(child0.getFilterNode().getFilter());
      expect(setStaticFilterNodes.mock.calls[2][1].getMetadata())
        .toEqual(child0.getFilterNode().getMetadata());
      expect(setStaticFilterNodes.mock.calls[3][1].getFilter())
        .toEqual(child1.getFilterNode().getFilter());
      expect(setStaticFilterNodes.mock.calls[3][1].getMetadata())
        .toEqual(child1.getFilterNode().getMetadata());
    });

    it('can save combined filternodes', () => {
      const component = COMPONENT_MANAGER.create('FilterBox', config);
      mount(component);
      const child0 = component._filterComponents[0];
      const child1 = component._filterComponents[1];
      child0._updateOption(0, true);
      child1._updateOption(0, true);
      child1._updateOption(3, true);
      child1._updateOption(4, true);
      expect(setStaticFilterNodes.mock.calls).toHaveLength(10);
      expect(setStaticFilterNodes.mock.calls[9][1].getFilter())
        .toEqual(child1.getFilterNode().getFilter());
      expect(setStaticFilterNodes.mock.calls[9][1].getMetadata())
        .toEqual(child1.getFilterNode().getMetadata());
    });
  });

  describe('searchOnChange interactions with FilterRegistry', () => {
    const oneFilterConfig = {
      ...defaultConfig,
      name: 'unique name',
      filters: [
        {
          type: 'FilterOptions',
          label: 'first filter options',
          control: 'singleoption',
          options: options
        }
      ]
    };

    it('when searchOnChange = false, does not update FilterRegistry ' +
      'until the apply button is clicked', () => {
      const config = {
        ...oneFilterConfig,
        searchOnChange: false
      };
      const component = COMPONENT_MANAGER.create('FilterBox', config);
      expect(setStaticFilterNodes).toHaveBeenCalledTimes(0);
      const wrapper = mount(component);
      const filterComponent = component._filterComponents[0];
      expect(setStaticFilterNodes).toHaveBeenCalledTimes(1);
      filterComponent._updateOption(0, true);
      expect(setStaticFilterNodes).toHaveBeenCalledTimes(1);
      wrapper.find('.js-yext-filterbox-apply').first().simulate('click');
      expect(setStaticFilterNodes).toHaveBeenCalledTimes(2);
    });

    it('when searchOnChange = true, filter selection immediately updates FilterRegistry', () => {
      const config = {
        ...oneFilterConfig,
        searchOnChange: true
      };
      const component = COMPONENT_MANAGER.create('FilterBox', config);
      expect(setStaticFilterNodes).toHaveBeenCalledTimes(0);
      mount(component);
      expect(setStaticFilterNodes).toHaveBeenCalledTimes(1);
      const filterComponent = component._filterComponents[0];
      filterComponent._updateOption(0, true);
      expect(setStaticFilterNodes).toHaveBeenCalledTimes(2);
    });
  });

  it('searches only when apply button is clicked if search on change = false', () => {
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
    const child0 = component._filterComponents[0];
    child0._updateOption(0, true);
    const triggerSearch = component.core.triggerSearch;
    expect(setStaticFilterNodes.mock.calls).toHaveLength(2);
    expect(triggerSearch.mock.calls).toHaveLength(0);
    wrapper.find('.js-yext-filterbox-apply').first().simulate('click');
    expect(setStaticFilterNodes.mock.calls).toHaveLength(4);
    expect(triggerSearch.mock.calls).toHaveLength(1);
  });

  it('reset button resets filter node', () => {
    const component = COMPONENT_MANAGER.create('FilterBox', {
      ...defaultConfig,
      searchOnChange: true,
      name: 'unique name',
      filters: [
        {
          type: 'FilterOptions',
          label: 'first filter options',
          control: 'singleoption',
          options: options
        }
      ]
    });
    mount(component);
    // Click the first option of the first child FilterOptions
    component._filterComponents[0]._updateOption(0, true);
    // Reset FilterBox
    component.resetFilters();
    const actualFilterNode = setStaticFilterNodes.mock.calls[2][1];
    const expectedFilterNode = FilterNodeFactory.from();
    expect(actualFilterNode.getFilter()).toEqual(expectedFilterNode.getFilter());
    expect(actualFilterNode.getMetadata()).toEqual(expectedFilterNode.getMetadata());
  });

  describe('back navigation (HISTORY_POP_STATE listener)', () => {
    const config = {
      ...defaultConfig,
      name: 'test-name',
      searchOnChange: true,
      filters: [
        {
          type: 'FilterOptions',
          label: 'first filter options',
          control: 'multioption',
          options: [
            {
              label: 'ciri',
              field: 'witcher',
              value: 'cirilla'
            }
          ]
        }
      ]
    };

    it('does not trigger core.triggerSearch() calls on back nav', () => {
      const component = COMPONENT_MANAGER.create('FilterBox', config);
      const triggerSearch = component.core.triggerSearch;
      expect(triggerSearch).toHaveBeenCalledTimes(0);
      mount(component);
      component.core.storage.set(StorageKeys.HISTORY_POP_STATE, new Map());
      expect(triggerSearch).toHaveBeenCalledTimes(0);
    });

    it('with searchOnChange = false, will reset to initial state on back nav to blank url', () => {
      const component = COMPONENT_MANAGER.create('FilterBox', { ...config, searchOnChange: false });
      const wrapper = mount(component);
      setStaticFilterNodes.mockClear();
      component._filterComponents[0]._updateOption(0, true);
      wrapper.find('.js-yext-filterbox-apply').first().simulate('click');
      expect(setStaticFilterNodes).toHaveBeenCalledTimes(1);
      expect(setStaticFilterNodes.mock.calls[0][1]).toMatchObject({
        filter: {
          witcher: {
            $eq: 'cirilla'
          }
        },
        metadata: {
          displayValue: 'ciri',
          fieldName: 'first filter options',
          filterType: 'filter-type-static'
        }
      });
      setStaticFilterNodes.mockClear();
      component.core.storage.set(StorageKeys.HISTORY_POP_STATE, new Map());
      expect(setStaticFilterNodes).toHaveBeenCalledTimes(1);
      expect(setStaticFilterNodes.mock.calls[0][1]).toMatchObject({
        filter: {},
        metadata: {}
      });
    });
  });
});

describe('dynamic filterbox component', () => {
  DOM.setup(document, new DOMParser());
  let COMPONENT_MANAGER, defaultConfig, setFacetFilterNodes;
  let node1, node2, node3, node4;

  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));
    setFacetFilterNodes = jest.fn();

    const mockCore = {
      setFacetFilterNodes: setFacetFilterNodes,
      filterRegistry: {
        setFacetFilterNodes: setFacetFilterNodes
      }
    };

    COMPONENT_MANAGER = mockManager(mockCore);

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
        displayValue: 'label 1',
        filterType: FilterType.FACET
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
        displayValue: 'label 2',
        filterType: FilterType.FACET
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
        displayValue: 'label 3',
        filterType: FilterType.FACET
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
        displayValue: 'label 4',
        filterType: FilterType.FACET
      }
    });
  });

  it('calls setFacetFilterNodes on page load', () => {
    const component = COMPONENT_MANAGER.create('FilterBox', defaultConfig);
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-FilterBox-container')).toHaveLength(1);
    expect(setFacetFilterNodes.mock.calls).toHaveLength(1);
    expect(setFacetFilterNodes.mock.calls[0][0]).toEqual(['c_employeeDepartment', 'c_otherDepartment']);
    expect(setFacetFilterNodes.mock.calls[0][1]).toEqual([]);
  });

  it('can create and set simple filter nodes', () => {
    const component = COMPONENT_MANAGER.create('FilterBox', defaultConfig);
    const wrapper = mount(component);
    component._filterComponents[0]._updateOption(0, true);
    component._filterComponents[1]._updateOption(0, true);
    expect(setFacetFilterNodes.mock.calls).toHaveLength(1);
    wrapper.find('.js-yext-filterbox-apply').first().simulate('click');
    expect(setFacetFilterNodes.mock.calls).toHaveLength(2);
    const expectedFacetFilterNodes = setFacetFilterNodes.mock.calls[1][1];
    expect(setFacetFilterNodes.mock.calls[1][0]).toEqual(['c_employeeDepartment', 'c_otherDepartment']);
    expect(expectedFacetFilterNodes[0].getFilter()).toEqual(node1.getFilter());
    expect(expectedFacetFilterNodes[0].getMetadata()).toEqual(node1.getMetadata());
    expect(expectedFacetFilterNodes[1].getFilter()).toEqual(node3.getFilter());
    expect(expectedFacetFilterNodes[1].getMetadata()).toEqual(node3.getMetadata());
  });

  it('can create and set combined filter nodes', () => {
    const component = COMPONENT_MANAGER.create('FilterBox', defaultConfig);
    const wrapper = mount(component);
    component._filterComponents[0]._updateOption(0, true);
    component._filterComponents[1]._updateOption(0, true);
    component._filterComponents[0]._updateOption(1, true);
    component._filterComponents[1]._updateOption(1, true);
    wrapper.find('.js-yext-filterbox-apply').first().simulate('click');
    expect(setFacetFilterNodes.mock.calls).toHaveLength(2);
    const expectedFacetFilterNodes = setFacetFilterNodes.mock.calls[1][1];
    expect(expectedFacetFilterNodes[0].combinator).toEqual(FilterCombinators.OR);
    expect(expectedFacetFilterNodes[0].children[0].getFilter()).toEqual(node1.getFilter());
    expect(expectedFacetFilterNodes[0].children[0].getMetadata()).toEqual(node1.getMetadata());
    expect(expectedFacetFilterNodes[0].children[1].getFilter()).toEqual(node2.getFilter());
    expect(expectedFacetFilterNodes[0].children[1].getMetadata()).toEqual(node2.getMetadata());
    expect(expectedFacetFilterNodes[1].combinator).toEqual(FilterCombinators.OR);
    expect(expectedFacetFilterNodes[1].children[0].getFilter()).toEqual(node3.getFilter());
    expect(expectedFacetFilterNodes[1].children[0].getMetadata()).toEqual(node3.getMetadata());
    expect(expectedFacetFilterNodes[1].children[1].getFilter()).toEqual(node4.getFilter());
    expect(expectedFacetFilterNodes[1].children[1].getMetadata()).toEqual(node4.getMetadata());
  });
});

describe('FilterBox reset button', () => {
  DOM.setup(document, new DOMParser());
  let COMPONENT_MANAGER, defaultConfig;

  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

    COMPONENT_MANAGER = mockManager();

    defaultConfig = {
      container: '#test-component',
      filters: [{ type: 'FilterOptions', options: [] }, { type: 'FilterOptions', options: [] }]
    };
  });

  it('does not render by default if searchOnChange', () => {
    const component = COMPONENT_MANAGER.create('FilterBox', {
      ...defaultConfig,
      searchOnChange: true
    });
    const wrapper = mount(component);
    expect(wrapper.find('.js-yxt-FilterBox-reset')).toHaveLength(0);
  });

  it('renders by default if not searchOnChange', () => {
    const component = COMPONENT_MANAGER.create('FilterBox', {
      ...defaultConfig,
      searchOnChange: false
    });
    const wrapper = mount(component);
    expect(wrapper.find('.js-yxt-FilterBox-reset')).toHaveLength(1);
  });

  it('does not render if false', () => {
    const component = COMPONENT_MANAGER.create('FilterBox', {
      ...defaultConfig,
      resetFilters: false,
      searchOnChange: false
    });
    const wrapper = mount(component);
    expect(wrapper.find('.js-yxt-FilterBox-reset')).toHaveLength(0);
  });

  it('renders if true', () => {
    const component = COMPONENT_MANAGER.create('FilterBox', {
      ...defaultConfig,
      resetFilters: true,
      searchOnChange: true
    });
    const wrapper = mount(component);
    expect(wrapper.find('.js-yxt-FilterBox-reset')).toHaveLength(1);
  });

  it('renders with correct default text', () => {
    const component = COMPONENT_MANAGER.create('FilterBox', {
      ...defaultConfig,
      resetFilters: true
    });
    const wrapper = mount(component);
    expect(wrapper.find('.js-yxt-FilterBox-reset').at(0).text().trim()).toEqual('reset all');
  });

  it('renders with correct text', () => {
    const component = COMPONENT_MANAGER.create('FilterBox', {
      ...defaultConfig,
      resetFilters: true,
      resetFiltersLabel: 'WE THE BEST MUSIC'
    });
    const wrapper = mount(component);
    expect(wrapper.find('.js-yxt-FilterBox-reset').at(0).text().trim()).toEqual('WE THE BEST MUSIC');
  });
});
