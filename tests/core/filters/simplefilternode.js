import SimpleFilterNode from '../../../src/core/filters/simplefilternode';
import Filter from '../../../src/core/models/filter';

describe('FilterNode with 2 filters with different', () => {
  let filter1,
    metadata1,
    filterView1,
    node1;

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
    node1 = SimpleFilterNode.fromFilterView(filterView1);
  });

  it('correctly instantiates a FilterNode with fromFilterView()', () => {
    expect(node1.combinator).toBeUndefined();
    expect(node1.children).toBeUndefined();
    expect(node1.filterView).toBeTruthy();
    expect(node1.getFilter()).toEqual(Filter.from(filter1));
    expect(node1.getFilter().getFilterKey()).toEqual('c_1');
  });

  it('can return filter views for a simple filter node', () => {
    expect(node1.getFilterViews()).toHaveLength(1);
    const actualFilterView = node1.getFilterViews()[0];
    expect(actualFilterView.filter).toEqual(filter1);
    expect(actualFilterView.metadata).toEqual({
      fieldId: 'c_1',
      ...metadata1
    });
  });
});
