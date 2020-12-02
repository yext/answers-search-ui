import FilterCombinators from '../../../src/core/filters/filtercombinators';
import FilterRegistry from '../../../src/core/filters/filterregistry';
import FilterNodeFactory from '../../../src/core/filters/filternodefactory';
import Filter from '../../../src/core/models/filter';
import GlobalStorage from '../../../src/core/storage/globalstorage';
import FilterMetadata from '../../../src/core/filters/filtermetadata';
import StorageKeys from '../../../src/core/storage/storagekeys';

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
    node1 = FilterNodeFactory.from({
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
    node2 = FilterNodeFactory.from({
      filter: filter2,
      metadata: metadata2
    });

    registry = new FilterRegistry(new GlobalStorage());
  });

  it('returns empty array for getStaticFilterNodes when no values set', () => {
    expect(registry.getStaticFilterNodes()).toEqual([]);
  });

  it('returns empty array for getFacetFilterNodes when no values set', () => {
    expect(registry.getFacetFilterNodes()).toEqual([]);
  });

  it('can correctly set simple filter nodes', () => {
    const transformedFilter1 = {
      fieldId: 'c_1',
      comparator: '$eq',
      comparedValue: filter1.c_1['$eq']
    };
    const transformedFilter2 = {
      fieldId: 'c_2',
      comparator: '$eq',
      comparedValue: filter2.c_2['$eq']
    };
    registry.setStaticFilterNodes('namespace1', node1);
    expect(registry.getStaticFilterNodes()).toHaveLength(1);
    expect(registry.getStaticFilterNodes()[0]).toEqual(node1);
    expect(registry.getStaticFilterPayload()).toEqual(transformedFilter1);

    registry.setStaticFilterNodes('namespace2', node2);
    expect(registry.getStaticFilterNodes()).toHaveLength(2);
    expect(registry.getStaticFilterNodes()).toContainEqual(node1);
    expect(registry.getStaticFilterNodes()).toContainEqual(node2);
    const expectedFilter2 = {
      combinator: FilterCombinators.AND,
      filters: [
        transformedFilter1,
        transformedFilter2
      ]
    };
    expect(registry.getStaticFilterPayload()).toEqual(expectedFilter2);

    registry.setStaticFilterNodes('namespace1', node2);
    expect(registry.getStaticFilterNodes()).toHaveLength(2);
    expect(registry.getStaticFilterNodes()[0]).toEqual(node2);
    expect(registry.getStaticFilterNodes()[1]).toEqual(node2);
    const expectedFilter3 = {
      combinator: FilterCombinators.AND,
      filters: [
        transformedFilter2,
        transformedFilter2
      ]
    };
    expect(registry.getStaticFilterPayload()).toEqual(expectedFilter3);
  });

  it('can correctly set nested filter nodes', () => {
    const transformedFilter1 = {
      fieldId: 'c_1',
      comparator: '$eq',
      comparedValue: filter1.c_1['$eq']
    };
    const transformedFilter2 = {
      fieldId: 'c_2',
      comparator: '$eq',
      comparedValue: filter2.c_2['$eq']
    };
    const orNode = FilterNodeFactory.or(node1, node2);
    registry.setStaticFilterNodes('namespace1', orNode);
    expect(registry.getStaticFilterNodes()).toHaveLength(1);
    const expectedFilter1 = {
      [ FilterCombinators.OR ]: [ filter1, filter2 ]
    };
    expect(orNode.getFilter()).toEqual(expectedFilter1);
    const expectedTransformedFilter1 = {
      combinator: FilterCombinators.OR,
      filters: [
        transformedFilter1,
        transformedFilter2
      ]
    };
    expect(registry.getStaticFilterPayload()).toEqual(expectedTransformedFilter1);

    const andNode = FilterNodeFactory.and(node1, node2);
    registry.setStaticFilterNodes('namespace2', andNode);
    expect(registry.getStaticFilterNodes()).toHaveLength(2);
    const expectedFilter2 = {
      combinator: FilterCombinators.AND,
      filters: [
        expectedTransformedFilter1,
        {
          combinator: FilterCombinators.AND,
          filters: [
            transformedFilter1,
            transformedFilter2
          ]
        }
      ]
    };
    expect(registry.getStaticFilterPayload()).toEqual(expectedFilter2);

    registry.setStaticFilterNodes('namespace3', node1);
    expect(registry.getStaticFilterNodes()).toHaveLength(3);
    const expectedFilter3 = {
      combinator: FilterCombinators.AND,
      filters: [
        expectedTransformedFilter1,
        {
          combinator: FilterCombinators.AND,
          filters: [ transformedFilter1, transformedFilter2 ]
        },
        transformedFilter1
      ]
    };
    expect(registry.getStaticFilterPayload()).toEqual(expectedFilter3);
  });

  it('can set facet filter nodes, always overriding previous facets', () => {
    registry.setFacetFilterNodes([ 'random_field', 'another_field' ], [node1, node2]);
    const expectedFacets = [ filter1, filter2 ];
    expect(registry.availableFieldIds).toEqual(['random_field', 'another_field']);
    expect(registry.getFacetFilterPayload()).toEqual(expectedFacets);
  });

  it('facets can combine multiple filter nodes', () => {
    const filter3 = Filter.from({
      c_1: {
        $eq: '2'
      }
    });
    const node3 = FilterNodeFactory.from({
      filter: filter3
    });
    const facetNodes = [ FilterNodeFactory.or(node1, node3), node2 ];

    registry.setFacetFilterNodes([ 'random_field', 'another_field' ], facetNodes);
    const expectedFacets = [
      Filter.from(filter1),
      Filter.from(filter3),
      Filter.from(filter2)
    ];
    expect(registry.getFacetFilterNodes()).toEqual(facetNodes);
    expect(registry.availableFieldIds).toEqual(['random_field', 'another_field']);
    expect(registry.getFacetFilterPayload()).toEqual(expectedFacets);
  });

  it('can set locationRadius FilterNodes', () => {
    const filterNode = FilterNodeFactory.from({
      metadata: new FilterMetadata({
        fieldName: 'label1',
        displayValue: 'displayvalue1'
      }),
      filter: new Filter({ value: 1234 })
    });
    registry.setLocationRadiusFilterNode(filterNode);
    const locationRadiusFilterNode = registry.getFilterNodeByKey(StorageKeys.LOCATION_RADIUS);
    expect(locationRadiusFilterNode.getFilter().value).toEqual(1234);
  });

  it('can clear locationRadius FilterNodes', () => {
    const filterNode = FilterNodeFactory.from({
      metadata: new FilterMetadata({
        fieldName: 'label1',
        displayValue: 'displayvalue1'
      }),
      filter: new Filter({ value: 1234 })
    });
    registry.setLocationRadiusFilterNode(filterNode);
    registry.setLocationRadiusFilterNode(FilterNodeFactory.from());
    const locationRadiusFilterNode = registry.getFilterNodeByKey(StorageKeys.LOCATION_RADIUS);
    expect(locationRadiusFilterNode.getFilter()).toEqual(FilterNodeFactory.from().getFilter());
    expect(locationRadiusFilterNode.getMetadata()).toEqual(FilterNodeFactory.from().getMetadata());
  });

  it('can clear facet filter nodes', () => {
    registry.setFacetFilterNodes([ 'random_field', 'another_field' ], [node1, node2]);
    registry.clearFacetFilterNodes();
    expect(registry.getFacetFilterNodes()).toEqual([]);
  });

  it('can clear static filter nodes', () => {
    registry.setStaticFilterNodes('namespace1', node1);
    registry.clearStaticFilterNode('namespace1');
    expect(registry.getStaticFilterNodes()).toEqual([]);
  });
});
