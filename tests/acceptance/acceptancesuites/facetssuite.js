import { FACETS_PAGE } from '../constants';
import FacetsPage from '../pageobjects/facetspage';
import { MockedVerticalSearchRequest } from '../fixtures/responses/vertical/search';
import SearchRequestLogger from '../searchrequestlogger';
import { MockedVerticalAutoCompleteRequest } from '../fixtures/responses/vertical/autocomplete';

fixture`Facets page`
  .requestHooks(
    SearchRequestLogger.createVerticalSearchLogger(),
    MockedVerticalSearchRequest,
    MockedVerticalAutoCompleteRequest
  )
  .page`${FACETS_PAGE}`;

test('can select and reset a single facet', async t => {
  const searchComponent = FacetsPage.getSearchComponent();
  await searchComponent.submitQuery();
  await SearchRequestLogger.waitOnSearchComplete(t);

  const facets = FacetsPage.getFacetsComponent();
  const filterBox = facets.getFilterBox();

  // Record the amount of results with no facets
  const verticalResultsComponent = FacetsPage.getVerticalResultsComponent();
  const initialResultsCount = await verticalResultsComponent.getResultsCountTotal();

  // Select the first option in the first FilterOptions
  const employeeDepartment = await filterBox.getFilterOptions('Employee Department');
  await employeeDepartment.toggleOption('Client Delivery');
  const expectedResultsCount = await employeeDepartment.getOptionCount('Client Delivery');

  await filterBox.applyFilters();

  // Get the actual number of results and check that it equals the expected amount
  let actualResultsCount = await verticalResultsComponent.getResultsCountTotal();
  await t.expect(actualResultsCount).eql(expectedResultsCount);

  // Reset the filters, and check that the number of results
  // is the same as the initial amount
  await filterBox.reset();
  await filterBox.applyFilters();
  actualResultsCount = await verticalResultsComponent.getResultsCountTotal();
  await t.expect(actualResultsCount).eql(initialResultsCount);
});

test('can select and reset multiple facets', async t => {
  const searchComponent = FacetsPage.getSearchComponent();
  await searchComponent.submitQuery();
  await SearchRequestLogger.waitOnSearchComplete(t);

  const facets = FacetsPage.getFacetsComponent();
  const filterBox = facets.getFilterBox();

  // Record the amount of results with no facets
  const verticalResultsComponent = FacetsPage.getVerticalResultsComponent();
  const initialResultsCount = await verticalResultsComponent.getResultsCountTotal();

  // Select the first option in the first FilterOptions
  const employeeDepartment = await filterBox.getFilterOptions('Employee Department');
  await employeeDepartment.toggleOption('Client Delivery');
  await employeeDepartment.toggleOption('Technology');
  const clientDeliveryCount = await employeeDepartment.getOptionCount('Client Delivery');
  const technologyCount = await employeeDepartment.getOptionCount('Technology');
  let expectedResultsCount = clientDeliveryCount + technologyCount;
  await filterBox.applyFilters();
  let actualResultsCount = await verticalResultsComponent.getResultsCountTotal();
  await t.expect(actualResultsCount).eql(expectedResultsCount);

  // Check that selecting multiple FilterOptions works
  const brands = await filterBox.getFilterOptions('Puppy Preference');
  await brands.toggleOption('Frodo');
  expectedResultsCount = await brands.getOptionCount('Frodo');
  await filterBox.applyFilters();
  actualResultsCount = await verticalResultsComponent.getResultsCountTotal();
  await t.expect(actualResultsCount).eql(expectedResultsCount);

  // Reset the filters, and check that the number of results
  // is the same as the initial amount
  await filterBox.reset();
  await filterBox.applyFilters();
  actualResultsCount = await verticalResultsComponent.getResultsCountTotal();
  await t.expect(actualResultsCount).eql(initialResultsCount);
});
