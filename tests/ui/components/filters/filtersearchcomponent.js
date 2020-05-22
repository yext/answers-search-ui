import FilterSearchComponent from 'src/ui/components/search/filtersearchcomponent';
import mockManager from '../../../setup/managermocker';
import FilterNodeFactory from 'src/core/filters/filternodefactory';
import Filter from 'src/core/models/filter';

describe('FilterSearch', () => {
  const COMPONENT_MANAGER = mockManager(
    {},
    FilterSearchComponent.defaultTemplateName()
  );

  it('builds FilterNodes correctly', () => {
    const title = 'abcdefg';
    const config = { title };
    const filterSearch = COMPONENT_MANAGER.create('FilterSearch', config);
    const query = 'Herndon, Virginia, USA, EARTH, MILKY WAY, UNIVERSE 7';
    const filter = JSON.stringify({ 'builtin.location': { $eq: 'P-place.9519240260937770' } });
    const filterNode = filterSearch._buildFilterNode(query, filter);
    const expectedFilterNode = FilterNodeFactory.from({
      filter: Filter.fromResponse(filter),
      metadata: {
        fieldName: title,
        displayValue: `"${query}"`
      }
    });
    expect(filterNode.filter).toEqual(expectedFilterNode.filter);
    expect(filterNode.metadata).toEqual(expectedFilterNode.metadata);
  });
});
