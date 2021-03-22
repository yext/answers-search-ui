import SearchOptionsFactory from '../../../src/core/search/searchoptionsfactory';
import QueryTriggers from '../../../src/core/models/querytriggers';

describe('returns searchOptions based on QUERY_TRIGGER', () => {
  it('no QUERY_TRIGGER', async () => {
    const searchOptionsFactory = new SearchOptionsFactory();
    expect(searchOptionsFactory.create()).toMatchObject({
      setQueryParams: true,
      resetPagination: true
    });
  });

  it('FILTER_COMPONENT', async () => {
    const searchOptionsFactory = new SearchOptionsFactory();
    expect(searchOptionsFactory.create(QueryTriggers.FILTER_COMPONENT)).toMatchObject({
      setQueryParams: true,
      resetPagination: true,
      useFacets: true
    });
  });

  it('INITIALIZE', async () => {
    const searchOptionsFactory = new SearchOptionsFactory();
    expect(searchOptionsFactory.create(QueryTriggers.INITIALIZE)).toMatchObject({
      setQueryParams: true,
      resetPagination: false
    });
  });

  it('QUERY_PARAMETER', async () => {
    const searchOptionsFactory = new SearchOptionsFactory();
    expect(searchOptionsFactory.create(QueryTriggers.QUERY_PARAMETER)).toMatchObject({
      setQueryParams: true,
      resetPagination: false
    });
  });

  it('SUGGEST', async () => {
    const searchOptionsFactory = new SearchOptionsFactory();
    expect(searchOptionsFactory.create(QueryTriggers.SUGGEST)).toMatchObject({
      setQueryParams: true,
      resetPagination: true
    });
  });

  it('PAGINATION', async () => {
    const searchOptionsFactory = new SearchOptionsFactory();
    expect(searchOptionsFactory.create(QueryTriggers.PAGINATION)).toMatchObject({
      setQueryParams: true,
      resetPagination: false,
      useFacets: true,
      sendQueryId: true
    });
  });
});
