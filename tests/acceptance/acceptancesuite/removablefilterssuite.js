import { setupServer, shutdownServer } from '../server';
import VerticalPage from '../pageobjects/verticalpage';
import { RequestLogger } from 'testcafe';

const logger = RequestLogger({
  url: /v2\/accounts\/me\/answers\/vertical\/query/
});

fixture`Removable Filters page`
  .before(setupServer)
  .after(shutdownServer)
  .page`http://localhost:9999/tests/acceptance/fixtures/html/removablefilters`
  .requestHooks(logger);

test(`Facets are removable through ResultsHeader`, async t => {
  const facets = VerticalPage.getFacetsComponent();
  const filterBox = facets.getFilterBox();
  const verticalResults = VerticalPage.getVerticalResultsComponent();
  const resultsHeader = await verticalResults.getResultsHeader();

  // Wait for the results to load
  await t.expect(verticalResults.getSelector().exists).ok();
  await t.expect(logger.requests.length).eql(1);
  const filterOptionsCount = await filterBox.getFilterOptionsCount();

  // Select 'Client Delivery' within 'Employee Department'
  const employeeDepartment = await filterBox.getFilterOptionsWithTitle('Employee Department');
  await employeeDepartment.toggleOption('Client Delivery');
  let searchParams = new URLSearchParams(logger.requests[1].request.url);
  let facetFilters = JSON.parse(searchParams.get('facetFilters'));
  let expectedFilter = { c_employeeDepartment: { $eq: 'Client Delivery [SO]' } };
  await t.expect(logger.requests.length).eql(2);
  await t.expect(facetFilters['c_employeeDepartment'][0]).eql(expectedFilter);
  await t.expect(Object.keys(facetFilters).length).eql(filterOptionsCount);
  await t.expect(resultsHeader.getAllFilterTags().count).eql(1);

  // Click the removable filter tag for 'Client Delivery', removing the filter
  await resultsHeader.removeFilterTag('Client Delivery [SO]');
  searchParams = new URLSearchParams(logger.requests[2].request.url);
  facetFilters = JSON.parse(searchParams.get('facetFilters'));
  await t.expect(logger.requests.length).eql(3);
  await t.expect(Object.values(facetFilters).every(facetArray => !facetArray.length)).ok();
  await t.expect(Object.keys(facetFilters).length).eql(filterOptionsCount);
});
