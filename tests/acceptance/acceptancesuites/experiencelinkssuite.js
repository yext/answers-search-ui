import { FACETS_PAGE } from '../constants';
import FacetsPage from '../pageobjects/facetspage';
import { Selector } from 'testcafe';
import { MockedVerticalSearchRequest } from '../fixtures/responses/vertical/search';
import StorageKeys from '../../../src/core/storage/storagekeys';

fixture`Experience links work as expected`
  .requestHooks(MockedVerticalSearchRequest)
  .page`${FACETS_PAGE}`;

test('experience links are clean', async t => {
  const verifyCleanLink = async () => {
    await t.expect(universalUrl).notContains(StorageKeys.PERSISTED_FACETS + '=');
    await t.expect(universalUrl).notContains(StorageKeys.SEARCH_OFFSET + '=');
    await t.expect(universalUrl).notContains(StorageKeys.PERSISTED_LOCATION_RADIUS + '=');
    await t.expect(universalUrl).notContains(StorageKeys.PERSISTED_FILTER + '=');
    await t.expect(universalUrl).notContains(StorageKeys.SORT_BYS + '=');
  };

  // When you land, nav links should be clean
  let universalUrl = await Selector('.js-yxt-navItem').nth(0).getAttribute('href');
  await t.expect(universalUrl).contains('universal');
  await t.expect(universalUrl).contains('referrerPageUrl');
  await verifyCleanLink(universalUrl);

  // When you search, nav links should be clean
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

  universalUrl = await Selector('.js-yxt-navItem').nth(0).getAttribute('href');
  await t.expect(universalUrl).contains('referrerPageUrl');
  await verifyCleanLink(universalUrl);

  // When you apply sort options, nav links should be clean
  await t.click(await Selector('.yxt-SortOptions-optionSelector').nth(2)); // Click search option
  universalUrl = await Selector('.js-yxt-navItem').nth(0).getAttribute('href');
  await t.expect(universalUrl).contains('referrerPageUrl');
  await verifyCleanLink(universalUrl);

  // When you apply static filters, nav links should be clean
  await t.click(await Selector('.filterbox-container .js-yext-filter-option').nth(2)); // Click static filter
  universalUrl = await Selector('.js-yxt-navItem').nth(0).getAttribute('href');
  await t.expect(universalUrl).contains('referrerPageUrl');
  await verifyCleanLink(universalUrl);

  // When you navigate with pagination, nav links should not have the
  // Facets/filter/pagination parameters
  await searchComponent.enterQuery(' ');
  await searchComponent.submitQuery();

  await t.click(await Selector('.js-yxt-navItem').nth(2)); // Go to vertical page
  await t.click(await Selector('.js-yxt-Pagination-next').nth(0)); // Page forward
  universalUrl = await Selector('.js-yxt-navItem').nth(0).getAttribute('href');
  await t.expect(universalUrl).contains('referrerPageUrl');
  await verifyCleanLink(universalUrl);

  // View All links AND Change Filters links should not have
  // Facets/filter/pagination parameters (though those components are not
  // allowed on universal currently)
  await t.click(await Selector('.js-yxt-navItem').nth(0)); // Go to universal page
  await searchComponent.clearQuery();
  await searchComponent.enterQuery('virginia');
  await searchComponent.submitQuery();

  const changeFiltersLink = await Selector('.yxt-ResultsHeader-changeFilters')
    .nth(0).getAttribute('href');
  await t.expect(changeFiltersLink).contains('referrerPageUrl');
  await verifyCleanLink(changeFiltersLink);

  const viewAllLink = await Selector('.yxt-Results-viewAllLink')
    .nth(0).getAttribute('href');
  await t.expect(viewAllLink).contains('referrerPageUrl');
  await verifyCleanLink(viewAllLink);
});
