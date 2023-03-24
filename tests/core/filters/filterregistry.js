import FilterCombinators from '../../../src/core/filters/filtercombinators';
import FilterRegistry from '../../../src/core/filters/filterregistry';
import FilterNodeFactory from '../../../src/core/filters/filternodefactory';
import Filter from '../../../src/core/models/filter';
import Storage from '../../../src/core/storage/storage';
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

    registry = new FilterRegistry(new Storage().init());
  });

  it('returns empty array for getStaticFilterNodes when no values set', () => {
    expect(registry.getStaticFilterNodes()).toEqual([]);
  });

  it('returns empty array for getFacetFilterNodes when no values set', () => {
    expect(registry.getFacetFilterNodes()).toEqual([]);
  });

  it('can correctly set simple filter nodes', () => {
    const transformedFilter1 = {
      kind: 'fieldValue',
      fieldId: 'c_1',
      matcher: '$eq',
      value: filter1.c_1.$eq
    };
    const transformedFilter2 = {
      kind: 'fieldValue',
      fieldId: 'c_2',
      matcher: '$eq',
      value: filter2.c_2.$eq
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
      kind: 'conjunction',
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
      kind: 'conjunction',
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
      kind: 'fieldValue',
      fieldId: 'c_1',
      matcher: '$eq',
      value: filter1.c_1.$eq
    };
    const transformedFilter2 = {
      kind: 'fieldValue',
      fieldId: 'c_2',
      matcher: '$eq',
      value: filter2.c_2.$eq
    };
    const orNode = FilterNodeFactory.or(node1, node2);
    registry.setStaticFilterNodes('namespace1', orNode);
    expect(registry.getStaticFilterNodes()).toHaveLength(1);
    const expectedFilter1 = {
      [FilterCombinators.OR]: [filter1, filter2]
    };
    expect(orNode.getFilter()).toEqual(expectedFilter1);
    const expectedTransformedFilter1 = {
      kind: 'disjunction',
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
      kind: 'conjunction',
      combinator: FilterCombinators.AND,
      filters: [
        expectedTransformedFilter1,
        {
          kind: 'conjunction',
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
      kind: 'conjunction',
      combinator: FilterCombinators.AND,
      filters: [
        expectedTransformedFilter1,
        {
          kind: 'conjunction',
          combinator: FilterCombinators.AND,
          filters: [transformedFilter1, transformedFilter2]
        },
        transformedFilter1
      ]
    };
    expect(registry.getStaticFilterPayload()).toEqual(expectedFilter3);
  });

  it('can set facet filter nodes, always overriding previous facets', () => {
    registry.setFacetFilterNodes(['random_field', 'another_field'], [node1, node2]);
    const expectedFacets = [
      {
        fieldId: 'random_field',
        options: []
      },
      {
        fieldId: 'another_field',
        options: []
      },
      {
        fieldId: 'c_1',
        options: [
          {
            matcher: '$eq',
            value: '1'
          }
        ]
      },
      {
        fieldId: 'c_2',
        options: [
          {
            matcher: '$eq',
            value: '2'
          }
        ]
      }
    ];
    expect(registry.availableFieldIds).toEqual(['random_field', 'another_field']);
    expect(registry.getFacetsPayload()).toEqual(expectedFacets);
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
    const facetNodes = [FilterNodeFactory.or(node1, node3), node2];

    registry.setFacetFilterNodes(['random_field', 'another_field'], facetNodes);
    const expectedFacets = [
      {
        fieldId: 'random_field',
        options: []
      },
      {
        fieldId: 'another_field',
        options: []
      },
      {
        fieldId: 'c_1',
        options: [
          {
            matcher: '$eq',
            value: '1'
          },
          {
            matcher: '$eq',
            value: '2'
          }
        ]
      },
      {
        fieldId: 'c_2',
        options: [
          {
            matcher: '$eq',
            value: '2'
          }
        ]
      }
    ];
    expect(registry.getFacetFilterNodes()).toEqual(facetNodes);
    expect(registry.availableFieldIds).toEqual(['random_field', 'another_field']);
    expect(registry.getFacetsPayload()).toEqual(expectedFacets);
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
    const locationRadiusFilterNode = registry.getFilterNodeByKey(StorageKeys.LOCATION_RADIUS_FILTER_NODE);
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
    const locationRadiusFilterNode = registry.getFilterNodeByKey(StorageKeys.LOCATION_RADIUS_FILTER_NODE);
    expect(locationRadiusFilterNode.getFilter()).toEqual(FilterNodeFactory.from().getFilter());
    expect(locationRadiusFilterNode.getMetadata()).toEqual(FilterNodeFactory.from().getMetadata());
  });

  it('can clear facet filter nodes', () => {
    registry.setFacetFilterNodes(['random_field', 'another_field'], [node1, node2]);
    registry.clearFacetFilterNodes();
    expect(registry.getFacetFilterNodes()).toEqual([]);
  });

  it('can clear static filter nodes', () => {
    registry.setStaticFilterNodes('namespace1', node1);
    registry.clearStaticFilterNode('namespace1');
    expect(registry.getStaticFilterNodes()).toEqual([]);
  });

  it('getAllStaticFilterNodesCombined combines filters corectly', () => {
    registry.setStaticFilterNodes('aName', node1);
    registry.setStaticFilterNodes('bName', node2);
    expect(registry.getAllStaticFilterNodesCombined().getFilter()).toEqual({
      $and: [filter1, filter2]
    });
  });

  it('_createFacetsFromFilterNodes', () => {
    registry.setFacetFilterNodes(['random_field', 'another_field'], [node1, node2]);
    const expectedFacets = {
      another_field: [],
      c_1: [{ c_1: { $eq: '1' } }],
      c_2: [{ c_2: { $eq: '2' } }],
      random_field: []
    };
    expect(registry._createFacetsFromFilterNodes()).toEqual(expectedFacets);
  });

  it('getFacets defaults to the current state of PERSISTED_FACETS if no filter nodes exist', () => {
    const persistedFacets = {
      c_employeeDepartment: [
        {
          c_employeeDepartment: {
            $eq: 'International Dang Sales'
          }
        }
      ]
    };
    registry.storage.set(StorageKeys.PERSISTED_FACETS, persistedFacets);
    expect(registry.getFacets()).toEqual(persistedFacets);
  });

  it('getFacets uses FACET_FILTER_NODES if they exist', () => {
    registry.setFacetFilterNodes(['random_field', 'another_field'], [node1, node2]);
    const persistedFacets = {
      c_employeeDepartment: [
        {
          c_employeeDepartment: {
            $eq: 'International Dang Sales'
          }
        }
      ]
    };
    registry.storage.set(StorageKeys.PERSISTED_FACETS, persistedFacets);
    expect(registry.getFacets()).toEqual(registry._createFacetsFromFilterNodes());
  });

  it('transforms static filters with multiple matchers into combined filters', () => {
    const originalFilter = {
      aField: {
        $gt: 0,
        $lt: 5
      }
    };
    registry.setStaticFilterNodes('aName', FilterNodeFactory.from({
      metadata: {},
      filter: originalFilter
    }));
    expect(registry.getStaticFilterPayload()).toMatchObject({
      combinator: '$and',
      filters: [
        {
          fieldId: 'aField',
          matcher: '$gt',
          value: 0
        },
        {
          fieldId: 'aField',
          matcher: '$lt',
          value: 5
        }
      ]
    });
  });
});
