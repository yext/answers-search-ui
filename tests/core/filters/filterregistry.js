import FilterCombinators from '../../../src/core/filters/filtercombinators';
import FilterRegistry from '../../../src/core/filters/filterregistry';
import FilterNodeFactory from '../../../src/core/filters/filternodefactory';
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
    node1 = FilterNodeFactory.fromFilterView({
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
    node2 = FilterNodeFactory.fromFilterView({
      filter: filter2,
      metadata: metadata2
    });

    registry = new FilterRegistry(new GlobalStorage());
  });

  it('returns empty array for getFilterNodes when no values set', () => {
    expect(registry.getFilterNodes()).toEqual([]);
  });

  it('returns empty array for getFacetFilterNodes when no values set', () => {
    expect(registry.getFacetFilterNodes()).toEqual([]);
  });

  it('can correctly set simple filter nodes', () => {
    registry.setFilterNode('namespace1', node1);
    expect(registry.getFilterNodes()).toHaveLength(1);
    expect(registry.getFilterNodes()[0]).toEqual(node1);
    expect(JSON.parse(registry.getRequestFilter())).toEqual(filter1);

    registry.setFilterNode('namespace2', node2);
    expect(registry.getFilterNodes()).toHaveLength(2);
    expect(registry.getFilterNodes()).toContainEqual(node1);
    expect(registry.getFilterNodes()).toContainEqual(node2);
    const expectedFilter2 = {
      [ FilterCombinators.AND ]: [ filter1, filter2 ]
    };
    expect(JSON.parse(registry.getRequestFilter())).toEqual(expectedFilter2);

    registry.setFilterNode('namespace1', node2);
    expect(registry.getFilterNodes()).toHaveLength(2);
    expect(registry.getFilterNodes()[0]).toEqual(node2);
    expect(registry.getFilterNodes()[1]).toEqual(node2);
    const expectedFilter3 = {
      [ FilterCombinators.AND ]: [ filter2, filter2 ]
    };
    expect(JSON.parse(registry.getRequestFilter())).toEqual(expectedFilter3);
  });

  it('can correctly set nested filter nodes', () => {
    const orNode = FilterNodeFactory.or(node1, node2);
    registry.setFilterNode('namespace1', orNode);
    expect(registry.getFilterNodes()).toHaveLength(1);
    const expectedFilter1 = {
      [ FilterCombinators.OR ]: [ filter1, filter2 ]
    };
    expect(orNode.getFilter()).toEqual(expectedFilter1);
    expect(JSON.parse(registry.getRequestFilter())).toEqual(expectedFilter1);

    const andNode = FilterNodeFactory.and(node1, node2);
    registry.setFilterNode('namespace2', andNode);
    expect(registry.getFilterNodes()).toHaveLength(2);
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
    expect(registry.getFilterNodes()).toHaveLength(3);
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

  it('can set facet filter nodes, always overriding previous facets', () => {
    registry.setFacetFilterNodes([ 'random_field', 'another_field' ], [node1, node2]);
    const expectedFacet = Facet.fromFilters(
      [ 'random_field', 'another_field' ],
      Filter.from(filter1),
      Filter.from(filter2)
    );
    expect(registry.availableFieldIds).toEqual(['random_field', 'another_field']);
    expect(JSON.parse(registry.getRequestFacetFilter())).toEqual(JSON.parse(JSON.stringify(expectedFacet)));
  });

  it('can set facet filter nodes of more than 1 level', () => {
    const filter3 = Filter.from({
      c_1: {
        $eq: '2'
      }
    });
    const node3 = FilterNodeFactory.fromFilterView({
      filter: filter3
    });
    const orNode = FilterNodeFactory.or(node1, node3);
    const andNode = FilterNodeFactory.and(orNode, node2);

    registry.setFacetFilterNodes([ 'random_field', 'another_field' ], [ andNode ]);
    const expectedFacet = Facet.fromFilters(
      [ 'random_field', 'another_field' ],
      Filter.from(filter1),
      Filter.from(filter2),
      filter3
    );
    const expectedFacetRaw = {
      random_field: [],
      another_field: [],
      c_1: [ filter1, filter3 ],
      c_2: [ filter2 ]
    };
    expect(expectedFacet).toEqual(expectedFacetRaw);
    expect(registry.availableFieldIds).toEqual(['random_field', 'another_field']);
    expect(JSON.parse(registry.getRequestFacetFilter())).toEqual(JSON.parse(JSON.stringify(expectedFacet)));
  });
});
