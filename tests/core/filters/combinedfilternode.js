import FilterNodeFactory from '../../../src/core/filters/filternodefactory';
import FilterCombinators from '../../../src/core/filters/filtercombinators';
import Filter from '../../../src/core/models/filter';

describe('FilterNode with 2 filters with different', () => {
  let filter1, filter2,
    metadata1, metadata2,
    filterView1, filterView2,
    node1, node2;

  beforeEach(() => {
    filter1 = {
      c_1: {
        $eq: '1'
      }
    };
    metadata1 = {
      fieldName: 'field name 1',
      displayValue: 'one'
    };
    filterView1 = {
      filter: filter1,
      metadata: metadata1
    };
    node1 = FilterNodeFactory.fromFilterView(filterView1);

    filter2 = {
      c_2: {
        $eq: '2'
      }
    };
    metadata2 = {
      fieldName: 'field name 2',
      displayValue: 'two'
    };
    filterView2 = {
      filter: filter2,
      metadata: metadata2
    };
    node2 = FilterNodeFactory.fromFilterView(filterView2);
  });

  it('correctly creates a 1-layer AND node with 2 children', () => {
    const andNode = FilterNodeFactory.and(node1, node2);
    expect(andNode.combinator).toEqual(FilterCombinators.AND);
    expect(andNode.children.length).toEqual(2);
    expect(andNode.children).toContain(node1);
    expect(andNode.children).toContain(node2);
    expect(andNode.filterView).toBeUndefined();

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
    expect(orNode.filterView).toBeUndefined();

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
    expect(orNode.filterView).toEqual(node1.filterView);
    expect(orNode.children).toEqual(node1.children);
  });

  it('returns a blank FilterNode when trying to combine zero nodes', () => {
    const orNode = FilterNodeFactory.or();
    expect(orNode.combinator).toBeUndefined();
    expect(orNode.children).toBeUndefined();
    expect(orNode.filterView).toEqual({
      filter: {},
      metadata: {
        displayValue: undefined,
        fieldId: undefined,
        fieldName: undefined
      }
    });
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

    const actualFilterViews = rootNode.getFilterViews();
    expect(actualFilterViews).toHaveLength(5);
    const firstFilterViews = actualFilterViews.filter(fv => fv.filter.getFilterKey() === 'c_1');
    expect(firstFilterViews).toHaveLength(3);
    firstFilterViews.forEach(fv => {
      expect(fv.filter).toEqual(filter1);
      expect(fv.metadata).toEqual({
        fieldId: 'c_1',
        ...metadata1
      });
    });
    const secondFilterViews = actualFilterViews.filter(fv => fv.filter.getFilterKey() === 'c_2');
    expect(secondFilterViews).toHaveLength(2);
    secondFilterViews.forEach(fv => {
      expect(fv.filter).toEqual(filter2);
      expect(fv.metadata).toEqual({
        fieldId: 'c_2',
        ...metadata2
      });
    });
  });

  it('filters out nodes with empty filters in getFilter', () => {
    const orNode = FilterNodeFactory.or(node1, node2, FilterNodeFactory.fromFilterView({ filter: Filter.empty() }));
    expect(orNode.children).toHaveLength(2);
    const expectedFilter = Filter.from({
      [FilterCombinators.OR]: [ filter1, filter2 ]
    });
    expect(orNode.getFilter()).toEqual(expectedFilter);
  });
});
