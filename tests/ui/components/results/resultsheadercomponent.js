/* eslint camelcase: 0 */

import ResultsHeaderComponent from 'src/ui/components/results/resultsheadercomponent';
import mockManager from '../../../setup/managermocker';
import FilterNodeFactory from '../../../../src/core/filters/filternodefactory';
import Filter from '../../../../src/core/models/filter';

describe('ResultsHeaderComponent\'s applied filters', () => {
  let resultsHeaderComponent;
  let node_f0_v0, node_f0_v1, node_f1_v0, node_f1_v1;
  const COMPONENT_MANAGER = mockManager(
    {
      getStaticFilterNodes: () => [],
      getFacetFilterNodes: () => [],
      getLocationRadiusFilterNode: () => FilterNodeFactory.from()
    },
    ResultsHeaderComponent.defaultTemplateName()
  );

  beforeEach(() => {
    resultsHeaderComponent = COMPONENT_MANAGER.create('ResultsHeader', {});
    node_f0_v0 = FilterNodeFactory.from({
      filter: Filter.equal('field0', 'value0'),
      metadata: {
        fieldName: 'name0',
        displayValue: 'display0'
      }
    });
    node_f0_v1 = FilterNodeFactory.from({
      filter: Filter.equal('field0', 'value1'),
      metadata: {
        fieldName: 'name0',
        displayValue: 'display1'
      }
    });
    node_f1_v0 = FilterNodeFactory.from({
      filter: Filter.equal('field1', 'value0'),
      metadata: {
        fieldName: 'name1',
        displayValue: 'display0'
      }
    });
    node_f1_v1 = FilterNodeFactory.from({
      filter: Filter.equal('field1', 'value1'),
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
    const simpleFilterNodes = [ node_f0_v0, node_f0_v1, node_f1_v0 ];
    resultsHeaderComponent.removableFilterNodes = simpleFilterNodes;
    const groupedFilters = resultsHeaderComponent._groupAppliedFilters();
    expect(Object.keys(groupedFilters)).toHaveLength(2);
    expect(groupedFilters['name0']).toEqual([
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
    expect(groupedFilters['name1']).toEqual([
      {
        displayValue: 'display0',
        dataFilterId: 2,
        removable: false
      }
    ]);
  });

  it('duplicate display values should still be repeated', () => {
    const simpleFilterNodes = [ node_f1_v1, node_f1_v1 ];
    resultsHeaderComponent.removableFilterNodes = simpleFilterNodes;
    const groupedFilters = resultsHeaderComponent._groupAppliedFilters();
    expect(Object.keys(groupedFilters)).toHaveLength(1);
    expect(groupedFilters['name1']).toHaveLength(2);
  });

  it('irremovable filter nodes come first, and removable: false by default', () => {
    const removableFilterNodes = [ node_f0_v0, node_f1_v0 ];
    const irremovableFilterNodes = [ node_f0_v0, node_f0_v1, node_f1_v0 ];
    resultsHeaderComponent.removableFilterNodes = removableFilterNodes;
    resultsHeaderComponent.irremovableFilterNodes = irremovableFilterNodes;
    console.log(resultsHeaderComponent._config);
    const groupedFilters = resultsHeaderComponent._groupAppliedFilters();
    expect(Object.keys(groupedFilters)).toHaveLength(2);
    expect(groupedFilters['name0']).toEqual([
      {
        displayValue: 'display0'
      },
      {
        displayValue: 'display1'
      },
      {
        displayValue: 'display0',
        dataFilterId: 0,
        removable: false
      }
    ]);
    expect(groupedFilters['name1']).toEqual([
      {
        displayValue: 'display0'
      },
      {
        displayValue: 'display0',
        dataFilterId: 1,
        removable: false
      }
    ]);
  });

  it('can display removable filters', () => {
    const simpleFilterNodes = [ node_f0_v0, node_f0_v1, node_f1_v0 ];
    resultsHeaderComponent._config.removable = true;
    resultsHeaderComponent.removableFilterNodes = simpleFilterNodes;
    const groupedFilters = resultsHeaderComponent._groupAppliedFilters();
    expect(Object.keys(groupedFilters)).toHaveLength(2);
    expect(groupedFilters['name0']).toEqual([
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
    expect(groupedFilters['name1']).toEqual([
      {
        displayValue: 'display0',
        dataFilterId: 2,
        removable: true
      }
    ]);
  });
});
