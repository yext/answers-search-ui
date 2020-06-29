/* eslint camelcase: 0 */
import FilterNodeFactory from 'src/core/filters/filternodefactory';
import Filter from 'src/core/models/filter';

describe('CombinedFilterNode', () => {
  it('can parse CombinedFilterNodes into SimpleFilterNodes', () => {
    const node_f0_v0 = FilterNodeFactory.from({
      filter: Filter.equal('field0', 'value0'),
      metadata: {
        fieldName: 'name0',
        displayValue: 'display0'
      }
    });
    const node_f0_v1 = FilterNodeFactory.from({
      filter: Filter.equal('field0', 'value1'),
      metadata: {
        fieldName: 'name0',
        displayValue: 'display1'
      }
    });
    const node_f1_v0 = FilterNodeFactory.from({
      filter: Filter.equal('field1', 'value0'),
      metadata: {
        fieldName: 'name1',
        displayValue: 'display0'
      }
    });
    const node_f1_v1 = FilterNodeFactory.from({
      filter: Filter.equal('field1', 'value1'),
      metadata: {
        fieldName: 'name1',
        displayValue: 'display1'
      }
    });
    const combinedNode = FilterNodeFactory.and(
      FilterNodeFactory.and(node_f0_v0, node_f0_v1),
      FilterNodeFactory.or(node_f1_v0, node_f1_v1)
    );
    const simpleFilterNodes = combinedNode.getSimpleDescendants();
    expect(simpleFilterNodes).toHaveLength(4);
    expect(simpleFilterNodes).toContainEqual(node_f0_v0);
    expect(simpleFilterNodes).toContainEqual(node_f1_v0);
    expect(simpleFilterNodes).toContainEqual(node_f0_v1);
    expect(simpleFilterNodes).toContainEqual(node_f1_v1);
  });
});
