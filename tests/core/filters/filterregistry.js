import CombinedFilterNode from '../../../src/core/filters/combinedfilternode';
import SimpleFilterNode from '../../../src/core/filters/simplefilternode';
import FilterCombinators from '../../../src/core/filters/filtercombinators';
import FilterRegistry from '../../../src/core/filters/filterregistry';
import Facet from '../../../src/core/models/facet';
import Filter from '../../../src/core/models/filter';
import GlobalStorage from '../../../src/core/storage/globalstorage';

describe('FilterRegistry', () => {
  let node1, node2, filter1, filter2, registry;

  beforeEach(() => {
    filter1 = {
      c_1: {
        $eq: '1'
      }
    };
    const metadata1 = {
      fieldName: 'field name 1',
      displayValue: 'one'
    };
    node1 = SimpleFilterNode.fromFilterView({
      filter: filter1,
      metadata: metadata1
    });

    filter2 = {
      c_2: {
        $eq: '2'
      }
    };
    const metadata2 = {
      fieldName: 'field name 2',
      displayValue: 'two'
    };
    node2 = SimpleFilterNode.fromFilterView({
      filter: filter2,
      metadata: metadata2
    });

    registry = new FilterRegistry(new GlobalStorage());
  });

  it('returns empty array for getFilterViews when no values set', () => {
    expect(registry.getFilterViews()).toEqual([]);
  });

  it('returns empty array for getFacetFilterViews when no values set', () => {
    expect(registry.getFacetFilterViews()).toEqual([]);
  });

  it('can correctly set simple filter nodes', () => {
    registry.setFilterNode('namespace1', node1);
    expect(registry.getFilterViews()).toHaveLength(1);
    expect(registry.getFilterViews()[0]).toEqual(node1.filterView);
    expect(JSON.parse(registry.getRequestFilter())).toEqual(filter1);

    registry.setFilterNode('namespace2', node2);
    expect(registry.getFilterViews()).toHaveLength(2);
    expect(registry.getFilterViews()).toContainEqual(node1.filterView);
    expect(registry.getFilterViews()).toContainEqual(node2.filterView);
    const expectedFilter2 = {
      [ FilterCombinators.AND ]: [ filter1, filter2 ]
    };
    expect(JSON.parse(registry.getRequestFilter())).toEqual(expectedFilter2);

    registry.setFilterNode('namespace1', node2);
    expect(registry.getFilterViews()).toHaveLength(2);
    expect(registry.getFilterViews()[0]).toEqual(node2.filterView);
    expect(registry.getFilterViews()[1]).toEqual(node2.filterView);
    const expectedFilter3 = {
      [ FilterCombinators.AND ]: [ filter2, filter2 ]
    };
    expect(JSON.parse(registry.getRequestFilter())).toEqual(expectedFilter3);
  });

  it('can correctly set nested filter nodes', () => {
    const orNode = CombinedFilterNode.or(node1, node2);
    registry.setFilterNode('namespace1', orNode);
    expect(registry.getFilterViews()).toHaveLength(2);
    const expectedFilter1 = {
      [ FilterCombinators.OR ]: [ filter1, filter2 ]
    };
    expect(JSON.parse(registry.getRequestFilter())).toEqual(expectedFilter1);

    const andNode = CombinedFilterNode.and(node1, node2);
    registry.setFilterNode('namespace2', andNode);
    expect(registry.getFilterViews()).toHaveLength(4);
    const expectedFilter2 = {
      [ FilterCombinators.AND ]: [
        expectedFilter1,
        {
          [ FilterCombinators.AND ]: [ filter1, filter2 ]
        }
      ]
    };
    expect(JSON.parse(registry.getRequestFilter())).toEqual(expectedFilter2);

    registry.setFilterNode('namespace3', node1);
    expect(registry.getFilterViews()).toHaveLength(5);
    const expectedFilter3 = {
      [ FilterCombinators.AND ]: [
        expectedFilter1,
        {
          [ FilterCombinators.AND ]: [ filter1, filter2 ]
        },
        filter1
      ]
    };
    expect(JSON.parse(registry.getRequestFilter())).toEqual(expectedFilter3);
  });

  it('can set facet filter views, always overriding previous facets', () => {
    registry.setFacetFilterViews([ 'random_field', 'another_field' ], [node1.filterView, node2.filterView]);
    const expectedFacet = Facet.fromFilters(
      [ 'random_field', 'another_field' ],
      Filter.from(filter1),
      Filter.from(filter2)
    );
    expect(registry.availableFieldIds).toEqual(['random_field', 'another_field']);
    expect(JSON.parse(registry.getRequestFacetFilter())).toEqual(JSON.parse(JSON.stringify(expectedFacet)));
  });
});
