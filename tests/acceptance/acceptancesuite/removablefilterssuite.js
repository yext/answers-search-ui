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
  const filterTags = resultsHeader.getFilterTags();
  let numRequests, filterOptionsCount, searchParams, facetFilters, expectedFilter;

  // Wait for the results to load
  numRequests = 1;
  await t.expect(verticalResults.getSelector().exists).ok();
  await t.expect(logger.requests.length).eql(numRequests);
  // The number of fieldIds sent in facetFilters should match the number of FilterOptions before the request
  filterOptionsCount = await filterBox.getFilterOptionsCount();

  // Select 'Client Delivery [SO]' within 'Employee Department'
  const employeeDepartment = await filterBox.getFilterOptionsWithTitle('Employee Department');
  await employeeDepartment.toggleOption('Client Delivery [SO]');
  // Check network request
  numRequests++;
  await t.expect(logger.requests.length).eql(numRequests);
  searchParams = new URLSearchParams(logger.requests[numRequests - 1].request.url);
  facetFilters = JSON.parse(searchParams.get('facetFilters'));
  expectedFilter = { c_employeeDepartment: { $eq: 'Client Delivery [SO]' } };
  await t.expect(facetFilters['c_employeeDepartment'][0]).eql(expectedFilter);
  await t.expect(Object.keys(facetFilters).length).eql(filterOptionsCount);
  // Check that the applied filters bar has the correct tags
  await t.expect(filterTags.count).eql(1);
  await t.expect(resultsHeader.getFilterTagWithLabel('Client Delivery [SO]').count).eql(1);
  filterOptionsCount = await filterBox.getFilterOptionsCount();

  // Click the removable filter tag for 'Client Delivery [SO]', removing the filter
  await resultsHeader.removeFilterTag('Client Delivery [SO]');
  // Check network request
  numRequests++;
  await t.expect(logger.requests.length).eql(numRequests);
  searchParams = new URLSearchParams(logger.requests[numRequests - 1].request.url);
  facetFilters = JSON.parse(searchParams.get('facetFilters'));
  await t.expect(Object.values(facetFilters).every(facetArray => !facetArray.length)).ok();
  await t.expect(Object.keys(facetFilters).length).eql(filterOptionsCount);
  // Check that the applied filters bar has the correct tags
  await t.expect(filterTags.count).eql(0);
});

test(`a RADIUS_FILTER within a FilterBox is removable through ResultsHeader`, async t => {
  const verticalResults = VerticalPage.getVerticalResultsComponent();
  const filterBox = VerticalPage.getFilterBoxComponent();
  const radiusFilter = await filterBox.getFilterOptionsWithTitle('Radius Filter');
  const resultsHeader = await verticalResults.getResultsHeader();
  const filterTags = resultsHeader.getFilterTags();
  let searchParams, locationRadius, numRequests;

  // Wait for the results to load
  numRequests = 1;
  await t.expect(verticalResults.getSelector().exists).ok();
  await t.expect(logger.requests.length).eql(numRequests);

  // Set the radius filter to 1, returning no results and hiding applied filters
  await radiusFilter.toggleOption('one');
  // Check network request
  numRequests++;
  await t.expect(logger.requests.length).eql(numRequests);
  searchParams = new URLSearchParams(logger.requests[numRequests - 1].request.url);
  locationRadius = searchParams.get('locationRadius');
  await t.expect(locationRadius).eql('1');
  // Check that the applied filters bar has the correct tags
  await t.expect(filterTags.count).eql(0);

  // Set the radius filter to 0
  await radiusFilter.toggleOption('empty');
  // Check network request
  numRequests++;
  await t.expect(logger.requests.length).eql(numRequests);
  searchParams = new URLSearchParams(logger.requests[numRequests - 1].request.url);
  locationRadius = searchParams.get('locationRadius');
  await t.expect(locationRadius).eql(null);
  // Check that the applied filters bar has the correct tags
  await t.expect(filterTags.count).eql(1);
  await t.expect(resultsHeader.getFilterTagWithLabel('empty').count).eql(1);

  // Remove the radius filter tag
  await resultsHeader.removeFilterTag('empty');
  // Check network request
  numRequests++;
  await t.expect(logger.requests.length).eql(numRequests);
  searchParams = new URLSearchParams(logger.requests[numRequests - 1].request.url);
  locationRadius = searchParams.get('locationRadius');
  await t.expect(locationRadius).eql(null);
  // Check that the applied filters bar has the correct tags
  await t.expect(filterTags.count).eql(0);
});

test(`FilterBox filters are removable through ResultsHeader`, async t => {
  const verticalResults = VerticalPage.getVerticalResultsComponent();
  const filterBox = VerticalPage.getFilterBoxComponent();
  const resultsHeader = await verticalResults.getResultsHeader();
  const filterTags = resultsHeader.getFilterTags();
  let numRequests, searchParams, filters, facetFilters;

  // Wait for the results to load
  numRequests = 1;
  await t.expect(verticalResults.getSelector().exists).ok();
  await t.expect(logger.requests.length).eql(numRequests);

  // Click the "Roses Friend Static" filter option
  // the backend should respond with a selected facet for "Roses Friend"
  const awards = await filterBox.getFilterOptionsWithTitle('Awards');
  await awards.toggleOption('Roses Friend Static');
  // Check network request
  numRequests++;
  await t.expect(logger.requests.length).eql(numRequests);
  searchParams = new URLSearchParams(logger.requests[numRequests - 1].request.url);
  filters = searchParams.get('filters');
  await t.expect(filters).eql(JSON.stringify({ c_awards: { $eq: 'Roses Friend' } }));
  // Check that the applied filters bar has the correct tags
  await t.expect(filterTags.count).eql(2);
  await t.expect(resultsHeader.getFilterTagWithLabel('Roses Friend Static').count).eql(1);
  await t.expect(resultsHeader.getFilterTagWithLabel('Roses Friend').count).eql(1);

  // Click the "Pres Club Static" filter option
  // the backend should respond with a selected facet for "Presidents Club"
  await awards.toggleOption('Pres Club Static');
  // Check network request
  numRequests++;
  await t.expect(logger.requests.length).eql(numRequests);
  searchParams = new URLSearchParams(logger.requests[numRequests - 1].request.url);
  filters = searchParams.get('filters');
  await t.expect(filters).eql(JSON.stringify({ c_awards: { $eq: 'Presidents Club' } }));
  facetFilters = JSON.parse(searchParams.get('facetFilters'));
  await t.expect(facetFilters['c_awards']).eql([ { c_awards: { $eq: 'Roses Friend' } } ]);
  // Check that the applied filters bar has the correct tags
  await t.expect(filterTags.count).eql(3);
  await t.expect(resultsHeader.getFilterTagWithLabel('Pres Club Static').count).eql(1);
  await t.expect(resultsHeader.getFilterTagWithLabel('Presidents Club').count).eql(1);
  await t.expect(resultsHeader.getFilterTagWithLabel('Roses Friend').count).eql(1);

  // Remove the "Roses Friend" tag
  await resultsHeader.removeFilterTag('Roses Friend');
  // Check network request
  numRequests++;
  await t.expect(logger.requests.length).eql(numRequests);
  searchParams = new URLSearchParams(logger.requests[numRequests - 1].request.url);
  filters = searchParams.get('filters');
  await t.expect(filters).eql(JSON.stringify({ c_awards: { $eq: 'Presidents Club' } }));
  facetFilters = JSON.parse(searchParams.get('facetFilters'));
  await t.expect(facetFilters['c_awards']).eql([{ 'c_awards': { '$eq': 'Presidents Club' } }]);
  // Check that the applied filters bar has the correct tags
  await t.expect(filterTags.count).eql(2);
  await t.expect(resultsHeader.getFilterTagWithLabel('Pres Club Static').count).eql(1);
  await t.expect(resultsHeader.getFilterTagWithLabel('Presidents Club').count).eql(1);

  // Remove the "Pres Club Static" tag
  await resultsHeader.removeFilterTag('Pres Club Static');
  // Check network request
  numRequests++;
  await t.expect(logger.requests.length).eql(numRequests);
  searchParams = new URLSearchParams(logger.requests[numRequests - 1].request.url);
  filters = searchParams.get('filters');
  await t.expect(filters).eql('{}');
  facetFilters = JSON.parse(searchParams.get('facetFilters'));
  await t.expect(facetFilters['c_awards']).eql([{ 'c_awards': { '$eq': 'Presidents Club' } }]);
  // Check that the applied filters bar has the correct tags
  await t.expect(filterTags.count).eql(1);
  await t.expect(resultsHeader.getFilterTagWithLabel('Presidents Club').count).eql(1);

  // Remove the "Presidents Club" tag
  await resultsHeader.removeFilterTag('Presidents Club');
  // Check network request
  numRequests++;
  await t.expect(logger.requests.length).eql(numRequests);
  searchParams = new URLSearchParams(logger.requests[numRequests - 1].request.url);
  filters = searchParams.get('filters');
  await t.expect(filters).eql('{}');
  facetFilters = JSON.parse(searchParams.get('facetFilters'));
  await t.expect(facetFilters['c_awards']).eql([]);
  // Check that the applied filters bar has the correct tags
  await t.expect(filterTags.count).eql(0);
});

test(`Queries ('Consulting', 'Technology') that trigger an NLP Filter and also select a Facet`, async t => {
  const verticalResults = VerticalPage.getVerticalResultsComponent();
  const searchBar = VerticalPage.getSearchComponent();
  const resultsHeader = await verticalResults.getResultsHeader();
  const filterTags = resultsHeader.getFilterTags();
  let numRequests, searchParams, facetFilters;

  // Wait for the results to load
  numRequests = 1;
  await t.expect(verticalResults.getSelector().exists).ok();
  await t.expect(logger.requests.length).eql(numRequests);

  // Search for 'Technology'
  await searchBar.enterQuery('Technology');
  await searchBar.submitQuery();
  // Check network request
  numRequests++;
  await t.expect(verticalResults.getSelector().exists).ok();
  await t.expect(logger.requests.length).eql(numRequests);
  searchParams = new URLSearchParams(logger.requests[numRequests - 1].request.url);
  facetFilters = JSON.parse(searchParams.get('facetFilters'));
  await t.expect(facetFilters).eql({});
  // Check that the applied filters bar has the correct tags
  await t.expect(filterTags.count).eql(1);
  await t.expect(resultsHeader.getFilterTagWithLabel('Technology').count).eql(1);

  // Search for 'Consulting'
  await searchBar.deleteQuery();
  await searchBar.enterQuery('Consulting');
  await searchBar.submitQuery();
  // Check network request
  numRequests++;
  await t.expect(verticalResults.getSelector().exists).ok();
  await t.expect(logger.requests.length).eql(numRequests);
  searchParams = new URLSearchParams(logger.requests[numRequests - 1].request.url);
  facetFilters = JSON.parse(searchParams.get('facetFilters'));
  await t.expect(facetFilters).eql({});
  // Check that the applied filters bar has the correct tags
  await t.expect(filterTags.count).eql(1);
  await t.expect(resultsHeader.getFilterTagWithLabel('Consulting').count).eql(1);

  // Remove the "Consulting" tag
  await resultsHeader.removeFilterTag('Consulting');
  // Check network request
  numRequests++;
  await t.expect(logger.requests.length).eql(numRequests);
  searchParams = new URLSearchParams(logger.requests[numRequests - 1].request.url);
  facetFilters = JSON.parse(searchParams.get('facetFilters'));
  await t.expect(facetFilters).eql({ 'c_employeeDepartment': [], 'c_interests': [], 'emails': [], 'c_awards': [] });
  // Check that the applied filters bar has the correct tags
  await t.expect(filterTags.count).eql(0);
});

test(`By default, VerticalResults.appliedFilters.hiddenFields hides builtin.entityType`, async t => {
  const verticalResults = VerticalPage.getVerticalResultsComponent();
  const searchBar = VerticalPage.getSearchComponent();
  const resultsHeader = await verticalResults.getResultsHeader();
  const filterTags = resultsHeader.getFilterTags();

  // Search for 'Person'
  await searchBar.enterQuery('Person');
  await searchBar.submitQuery();
  // Check that ResultsHeader does not display the builtin.entityType NLP filter
  await t.expect(filterTags.count).eql(0);
});
