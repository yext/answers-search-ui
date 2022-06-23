import { FACETS_PAGE } from '../constants';
import FacetsPage from '../pageobjects/facetspage';
import { Selector } from 'testcafe';
import { MockedVerticalSearchRequest } from '../fixtures/responses/vertical/search';
import StorageKeys from '../../../src/core/storage/storagekeys';
import { MockedUniversalSearchRequest } from '../fixtures/responses/universal/search';
import { MockedUniversalAutoCompleteRequest } from '../fixtures/responses/universal/autocomplete';

fixture`Experience links work as expected`
  .requestHooks([
    MockedVerticalSearchRequest,
    MockedUniversalSearchRequest,
    MockedUniversalAutoCompleteRequest
  ])
  .page`${FACETS_PAGE}`;

test('When you land, nav links should be clean', async t => {
  const universalUrl = await Selector('.js-yxt-navItem').nth(0).getAttribute('href');
  await t.expect(universalUrl).contains('universal');
  await verifyCleanLink(t, universalUrl);
});

test('When you search, nav links should be clean', async t => {
  const searchComponent = FacetsPage.getSearchComponent();
  await searchComponent.submitQuery();

  const staticFilterBox = FacetsPage.getStaticFilterBox();
  const distanceFilter = await staticFilterBox.getFilterOptions('DISTANCE');
  await distanceFilter.toggleOption('1000 miles');

  const facets = FacetsPage.getFacetsComponent();
  const filterBox = facets.getFilterBox();
  const employeeDepartment = await filterBox.getFilterOptions('Employee Department');
  await employeeDepartment.toggleOption('Client Delivery');
  await filterBox.applyFilters();

  const universalUrl = await Selector('.js-yxt-navItem').nth(0).getAttribute('href');
  await verifyCleanLink(t, universalUrl);
});

test('When you apply sort options, nav links should be clean', async t => {
  await t.click(await Selector('.yxt-SortOptions-optionSelector').nth(2));
  const universalUrl = await Selector('.js-yxt-navItem').nth(0).getAttribute('href');
  await verifyCleanLink(t, universalUrl);
});

test('When you apply static filters, nav links should be clean', async t => {
  await t.click(await Selector('.filterbox-container .js-yext-filter-option').nth(2));
  const universalUrl = await Selector('.js-yxt-navItem').nth(0).getAttribute('href');
  await verifyCleanLink(t, universalUrl);
});

test('When you navigate with pagination, nav links should be clean', async t => {
  const searchComponent = FacetsPage.getSearchComponent();
  await searchComponent.enterQuery(' ');
  await searchComponent.submitQuery();

  await t.click(await Selector('.js-yxt-navItem').nth(2)); // Go to vertical page
  await t.click(await Selector('.js-yxt-Pagination-next').nth(0)); // Page forward
  const universalUrl = await Selector('.js-yxt-navItem').nth(0).getAttribute('href');
  await verifyCleanLink(t, universalUrl);
});

test('View All links AND Change Filters links should be clean', async t => {
  const searchComponent = FacetsPage.getSearchComponent();
  await searchComponent.enterQuery(' ');
  await searchComponent.submitQuery();

  await t.click(await Selector('.js-yxt-navItem').nth(0)); // Go to universal page
  await searchComponent.clearQuery();
  await searchComponent.enterQuery('virginia');
  await searchComponent.submitQuery();

  const changeFiltersLink = await Selector('.yxt-ResultsHeader-changeFilters')
    .nth(0).getAttribute('href');
  await verifyCleanLink(t, changeFiltersLink);

  const viewAllLink = await Selector('.yxt-Results-viewAllLink')
    .nth(0).getAttribute('href');
  await verifyCleanLink(t, viewAllLink);
});

async function verifyCleanLink (t, url) {
  await t.expect(url).contains('referrerPageUrl');
  await t.expect(url).notContains(StorageKeys.PERSISTED_FACETS + '=');
  await t.expect(url).notContains(StorageKeys.SEARCH_OFFSET + '=');
  await t.expect(url).notContains(StorageKeys.PERSISTED_LOCATION_RADIUS + '=');
  await t.expect(url).notContains(StorageKeys.PERSISTED_FILTER + '=');
  await t.expect(url).notContains(StorageKeys.SORT_BYS + '=');
}
