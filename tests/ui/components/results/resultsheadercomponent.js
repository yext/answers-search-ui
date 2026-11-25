/* eslint camelcase: 0 */

import mockManager from '../../../setup/managermocker';
import FilterNodeFactory from '../../../../src/core/filters/filternodefactory';
import Filter from '../../../../src/core/models/filter';
import { mount } from 'enzyme';
import DOM from 'src/ui/dom/dom';
import QueryTriggers from '../../../../src/core/models/querytriggers';

describe('ResultsHeaderComponent\'s results count', () => {
  let COMPONENT_MANAGER;

  beforeEach(() => {
    DOM.setup(document, new DOMParser());
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

    COMPONENT_MANAGER = mockManager({
      filterRegistry: {
        getAllFilterNodes: () => []
      }
    });
  });

  it('renders the default results count without compiling a template', () => {
    // Simulate CSP blocking compilation. Any call to compile will throw and fail the test.
    COMPONENT_MANAGER.renderer.compile = jest.fn(() => {
      throw new Error('Runtime template compilation is unavailable under CSP');
    });
    const component = COMPONENT_MANAGER.create('ResultsHeader', {
      container: '#test-component',
      data: { resultsCount: 100, resultsLength: 10 }
    });
    const wrapper = mount(component);

    expect(wrapper.find('.yxt-ResultsHeader-resultsCountStart').text()).toEqual('1');
    expect(wrapper.find('.yxt-ResultsHeader-resultsCountEnd').text()).toEqual('10');
    expect(wrapper.find('.yxt-ResultsHeader-resultsCountTotal').text()).toEqual('100');
  });

  it('renders a custom results count template', () => {
    const component = COMPONENT_MANAGER.create('ResultsHeader', {
      container: '#test-component',
      resultsCountTemplate: '<strong>Showing {{resultsCountStart}} to {{resultsCountEnd}} matches ({{resultsCount}} total)</strong>',
      data: { resultsCount: 100, resultsLength: 10 }
    });
    const wrapper = mount(component);

    expect(wrapper.find('strong').text()).toEqual('Showing 1 to 10 matches (100 total)');
    expect(wrapper.find('.yxt-ResultsHeader-resultsCount')).toHaveLength(0);
  });
});

describe('ResultsHeaderComponent\'s applied filters', () => {
  let resultsHeaderComponent;
  let node_f0_v0, node_f0_v1, node_f1_v0, node_f1_v1;
  let remove_f0_v0_fn, remove_f0_v1_fn, remove_f1_v0_fn, remove_f1_v1_fn;
  let COMPONENT_MANAGER = mockManager({
    filterRegistry: {
      getAllFilterNodes: () => []
    }
  });

  beforeEach(() => {
    resultsHeaderComponent = COMPONENT_MANAGER.create('ResultsHeader', {});
    remove_f0_v0_fn = jest.fn();
    node_f0_v0 = FilterNodeFactory.from({
      filter: Filter.equal('field0', 'value0'),
      remove: remove_f0_v0_fn,
      metadata: {
        fieldName: 'name0',
        displayValue: 'display0'
      }
    });
    remove_f0_v1_fn = jest.fn();
    node_f0_v1 = FilterNodeFactory.from({
      filter: Filter.equal('field0', 'value1'),
      remove: remove_f0_v1_fn,
      metadata: {
        fieldName: 'name0',
        displayValue: 'display1'
      }
    });
    remove_f1_v0_fn = jest.fn();
    node_f1_v0 = FilterNodeFactory.from({
      filter: Filter.equal('field1', 'value0'),
      remove: remove_f1_v0_fn,
      metadata: {
        fieldName: 'name1',
        displayValue: 'display0'
      }
    });
    remove_f1_v1_fn = jest.fn();
    node_f1_v1 = FilterNodeFactory.from({
      filter: Filter.equal('field1', 'value1'),
      remove: remove_f1_v1_fn,
      metadata: {
        fieldName: 'name1',
        displayValue: 'display1'
      }
    });
  });

  it('works for empty case', () => {
    const groupedFilters = resultsHeaderComponent._groupAppliedFilters();
    expect(groupedFilters).toEqual({});
  });

  it('works with simpleFilterNodes, removable = false by default', () => {
    const simpleFilterNodes = [node_f0_v0, node_f0_v1, node_f1_v0];
    resultsHeaderComponent.appliedFilterNodes = simpleFilterNodes;
    const groupedFilters = resultsHeaderComponent._groupAppliedFilters();
    expect(Object.keys(groupedFilters)).toHaveLength(2);
    expect(groupedFilters.name0).toEqual([
      {
        displayValue: 'display0',
        dataFilterId: 0,
        removable: false
      },
      {
        displayValue: 'display1',
        dataFilterId: 1,
        removable: false
      }
    ]);
    expect(groupedFilters.name1).toEqual([
      {
        displayValue: 'display0',
        dataFilterId: 2,
        removable: false
      }
    ]);
  });

  it('duplicate display values should still be repeated', () => {
    const simpleFilterNodes = [node_f1_v1, node_f1_v1];
    resultsHeaderComponent.appliedFilterNodes = simpleFilterNodes;
    const groupedFilters = resultsHeaderComponent._groupAppliedFilters();
    expect(Object.keys(groupedFilters)).toHaveLength(1);
    expect(groupedFilters.name1).toHaveLength(2);
  });

  it('nlp filter nodes that are duplicates are removed', () => {
    const appliedFilterNodes = [node_f0_v0, node_f1_v0];
    const nlpFilterNodes = [node_f0_v0, node_f0_v1, node_f1_v0];
    resultsHeaderComponent.appliedFilterNodes = appliedFilterNodes;
    resultsHeaderComponent.nlpFilterNodes = nlpFilterNodes;
    const groupedFilters = resultsHeaderComponent._groupAppliedFilters();
    expect(Object.keys(groupedFilters)).toHaveLength(2);
    expect(groupedFilters.name0).toEqual([
      {
        displayValue: 'display0',
        dataFilterId: 0,
        removable: false
      },
      {
        displayValue: 'display1'
      }
    ]);
    expect(groupedFilters.name1).toEqual([
      {
        displayValue: 'display0',
        dataFilterId: 1,
        removable: false
      }
    ]);
  });

  it('can display removable filters', () => {
    const simpleFilterNodes = [node_f0_v0, node_f0_v1, node_f1_v0];
    resultsHeaderComponent._config.removable = true;
    resultsHeaderComponent.appliedFilterNodes = simpleFilterNodes;
    const groupedFilters = resultsHeaderComponent._groupAppliedFilters();
    expect(Object.keys(groupedFilters)).toHaveLength(2);
    expect(groupedFilters.name0).toEqual([
      {
        displayValue: 'display0',
        dataFilterId: 0,
        removable: true
      },
      {
        displayValue: 'display1',
        dataFilterId: 1,
        removable: true
      }
    ]);
    expect(groupedFilters.name1).toEqual([
      {
        displayValue: 'display0',
        dataFilterId: 2,
        removable: true
      }
    ]);
  });

  it('renders removable filter tags, which onClick remove the filter and run a core.triggerSearch', () => {
    // Setup DOM
    DOM.setup(document, new DOMParser());
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

    // Mock src/core.js functionality
    const triggerSearchFn = jest.fn();
    COMPONENT_MANAGER = mockManager({
      triggerSearch: triggerSearchFn,
      filterRegistry: {
        getAllFilterNodes: () => [node_f0_v0, node_f0_v1, node_f1_v0]
      }
    });

    // Initialize and mount component
    resultsHeaderComponent = COMPONENT_MANAGER.create('ResultsHeader', {
      container: '#test-component',
      removable: true,
      verticalKey: 'a vertical key',
      data: {
        nlpFilters: []
      }
    });
    const wrapper = mount(resultsHeaderComponent);

    expect(wrapper.find('.yxt-ResultsHeader-removableFilterValue')).toHaveLength(3);
    expect(wrapper.find('.yxt-ResultsHeader-removableFilterX')).toHaveLength(3);
    expect(wrapper.find('.yxt-ResultsHeader-removableFilterTag')).toHaveLength(3);
    expect(triggerSearchFn.mock.calls).toHaveLength(0);
    expect(remove_f0_v0_fn.mock.calls).toHaveLength(0);
    expect(remove_f0_v1_fn.mock.calls).toHaveLength(0);
    expect(remove_f1_v0_fn.mock.calls).toHaveLength(0);
    wrapper.find('.yxt-ResultsHeader-removableFilterTag').at(0).simulate('click');
    expect(triggerSearchFn.mock.calls).toHaveLength(1);
    expect(triggerSearchFn.mock.calls[0][0]).toEqual(QueryTriggers.FILTER_COMPONENT);
    expect(remove_f0_v0_fn.mock.calls).toHaveLength(1);
    expect(remove_f0_v1_fn.mock.calls).toHaveLength(0);
    expect(remove_f1_v0_fn.mock.calls).toHaveLength(0);
  });
});
