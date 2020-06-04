import FilterNodeFactory from '../../../src/core/filters/filternodefactory';
import Filter from '../../../src/core/models/filter';
import FilterCombinators from '../../../src/core/filters/filtercombinators';
import SimpleFilterNode from '../../../src/core/filters/simplefilternode';
import FilterMetadata from '../../../src/core/filters/filtermetadata';
import FilterType from '../../../src/core/filters/filtertype';

describe('FilterNodeFactory', () => {
  let filter1, filter2,
    metadata1, metadata2,
    node1, node2;

  beforeEach(() => {
    filter1 = {
      c_1: {
        $eq: '1'
      }
    };
    metadata1 = {
      fieldName: 'field name 1',
      displayValue: 'one',
      filterType: FilterType.STATIC
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
    metadata2 = {
      fieldName: 'field name 2',
      displayValue: 'two',
      filterType: FilterType.STATIC
    };
    node2 = FilterNodeFactory.from({
      filter: filter2,
      metadata: metadata2
    });
  });

  function getLeafNodes (node) {
    const nodes = [];
    if (node.getChildren().length) {
      nodes.push(...node.getChildren().flatMap(getLeafNodes));
    } else {
      nodes.push(node);
    }
    return nodes;
  }

  it('correctly instantiates a simple FilterNode with from', () => {
    expect(node1.combinator).toBeUndefined();
    expect(node1.children).toBeUndefined();
    expect(node1.getMetadata()).toEqual(metadata1);
    expect(node1.getFilter()).toEqual(Filter.from(filter1));
    expect(node1.getFilter().getFilterKey()).toEqual('c_1');
  });

  it('correctly creates a 1-layer AND node with 2 children', () => {
    const andNode = FilterNodeFactory.and(node1, node2);
    expect(andNode.combinator).toEqual(FilterCombinators.AND);
    expect(andNode.children.length).toEqual(2);
    expect(andNode.children).toContain(node1);
    expect(andNode.filter).toBeUndefined();
    expect(andNode.getMetadata()).toBeNull();

    const expectedFilter1 = Filter.and(Filter.from(filter1), Filter.from(filter2));
    const expectedFilter2 = Filter.from({
      [FilterCombinators.AND]: [Filter.from(filter1), Filter.from(filter2)]
    });
    const andFilter = andNode.getFilter();
    expect(andFilter).toEqual(expectedFilter1);
    expect(andFilter).toEqual(expectedFilter2);
  });

  it('correctly creates a 1-layer OR node with 2 children', () => {
    const orNode = FilterNodeFactory.or(node1, node2);
    expect(orNode.combinator).toEqual(FilterCombinators.OR);
    expect(orNode.children.length).toEqual(2);
    expect(orNode.children).toContain(node1);
    expect(orNode.children).toContain(node2);
    expect(orNode.filter).toBeUndefined();
    expect(orNode.getMetadata()).toBeNull();

    const expectedFilter1 = Filter.or(Filter.from(filter1), Filter.from(filter2));
    const expectedFilter2 = Filter.from({
      [FilterCombinators.OR]: [Filter.from(filter1), Filter.from(filter2)]
    });
    const orFilter = orNode.getFilter();
    expect(orFilter).toEqual(expectedFilter1);
    expect(orFilter).toEqual(expectedFilter2);
  });

  it('performs a no-op when trying to combine a single node', () => {
    const orNode = FilterNodeFactory.or(node1);
    expect(orNode.combinator).toEqual(node1.combinator);
    expect(orNode.filter).toEqual(node1.filter);
    expect(orNode.metadata).toEqual(node1.metadata);
    expect(orNode.children).toEqual(node1.children);
  });

  it('returns a blank FilterNode when trying to combine zero nodes', () => {
    const orNode = FilterNodeFactory.or();
    expect(orNode.combinator).toBeUndefined();
    expect(orNode.children).toBeUndefined();
    expect(orNode.filter).toEqual({});
    expect(orNode.metadata).toEqual(new FilterMetadata({
      displayValue: undefined,
      fieldName: undefined
    }));
  });

  it('can create a three-layer filter node', () => {
    filter1 = Filter.from(filter1);
    filter2 = Filter.from(filter2);
    const node3 = FilterNodeFactory.or(node1, node2);
    const filter3 = Filter.from({
      [ FilterCombinators.OR ]: [ filter1, filter2 ]
    });
    expect(node3.getFilter()).toEqual(filter3);
    const node4 = FilterNodeFactory.and(node1, node2);
    const filter4 = Filter.from({
      [ FilterCombinators.AND ]: [ filter1, filter2 ]
    });
    expect(node4.getFilter()).toEqual(filter4);
    const rootNode = FilterNodeFactory.and(node1, node3, node4);
    expect(rootNode.getFilter()).toEqual(Filter.from({
      [ FilterCombinators.AND ]: [ filter1, filter3, filter4 ]
    }));

    const leafNodes = getLeafNodes(rootNode);
    expect(leafNodes).toHaveLength(5);
    leafNodes.forEach(node => expect(node).toBeInstanceOf(SimpleFilterNode));
    const firstNodes = leafNodes.filter(fn => fn.getFilter().getFilterKey() === 'c_1');
    expect(firstNodes).toHaveLength(3);
    firstNodes.forEach(fn => {
      expect(fn.getFilter()).toEqual(filter1);
      expect(fn.getMetadata()).toEqual(metadata1);
    });
    const secondNodes = leafNodes.filter(fv => fv.getFilter().getFilterKey() === 'c_2');
    expect(secondNodes).toHaveLength(2);
    secondNodes.forEach(fn => {
      expect(fn.getFilter()).toEqual(filter2);
      expect(fn.getMetadata()).toEqual(metadata2);
    });
  });

  it('filters out nodes with empty filters in getFilter', () => {
    const orNode = FilterNodeFactory.or(node1, node2, FilterNodeFactory.from({ filter: Filter.empty() }));
    expect(orNode.children).toHaveLength(2);
    const expectedFilter = Filter.from({
      [FilterCombinators.OR]: [ filter1, filter2 ]
    });
    expect(orNode.getFilter()).toEqual(expectedFilter);
  });

  it('filters out nodes correctly when filtering out 1 child out of 2', () => {
    const orNode = FilterNodeFactory.or(FilterNodeFactory.from(), node1);
    expect(orNode.getFilter()).toEqual(filter1);
  });
});
