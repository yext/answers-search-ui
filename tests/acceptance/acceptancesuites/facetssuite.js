import {
  FACETS_PAGE,
  VERTICAL_SEARCH_URL_REGEX
} from '../constants';
import FacetsPage from '../pageobjects/facetspage';
import { MockedVerticalSearchRequest } from '../fixtures/responses/vertical/search';
import {
  registerIE11NoCacheHook
} from '../utils';
import SearchRequestLogger from '../searchrequestlogger';

fixture`Facets page`
  .requestHooks([SearchRequestLogger.createVerticalSearchLogger(), MockedVerticalSearchRequest])
  .beforeEach(async t => {
    await registerIE11NoCacheHook(t, VERTICAL_SEARCH_URL_REGEX);
  })
  .page`${FACETS_PAGE}`;

test('Facets load on the page, and can affect the search', async t => {
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
  let expectedResultsCount = await employeeDepartment.getOptionCount('Client Delivery');

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

  // Select the first option and second option in the first FilterOptions
  await employeeDepartment.toggleOption('Client Delivery');
  await employeeDepartment.toggleOption('Technology');
  const clientDeliveryCount = await employeeDepartment.getOptionCount('Client Delivery');
  const technologyCount = await employeeDepartment.getOptionCount('Technology');
  expectedResultsCount = clientDeliveryCount + technologyCount;
  await filterBox.applyFilters();
  actualResultsCount = await verticalResultsComponent.getResultsCountTotal();
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
