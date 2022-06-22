import {
  FACETS_PAGE,
  VERTICAL_SEARCH_URL_REGEX
} from '../constants';
import FacetsPage from '../pageobjects/facetspage';
import { MockedVerticalSearchRequest } from '../fixtures/responses/vertical/search';
import { Selector } from 'testcafe';
import {
  browserRefreshPage,
  registerIE11NoCacheHook
} from '../utils';
import SearchRequestLogger from '../searchrequestlogger';

fixture`Facets page`
  .requestHooks([SearchRequestLogger.createVerticalSearchLogger(), MockedVerticalSearchRequest])
  .beforeEach(async t => {
    await registerIE11NoCacheHook(t, VERTICAL_SEARCH_URL_REGEX);
  })
  .page`${FACETS_PAGE}`;

test('selecting a sort option and refreshing maintains that sort selection', async t => {
  const searchComponent = FacetsPage.getSearchComponent();
  await searchComponent.submitQuery();
  await SearchRequestLogger.waitOnSearchComplete(t);

  const thirdSortOption = await Selector('.yxt-SortOptions-optionSelector').nth(2);
  await t.click(thirdSortOption);
  await browserRefreshPage();

  await t.expect(thirdSortOption.checked).ok();
});

fixture`W3C Accessibility standards are met`
  .requestHooks(MockedVerticalSearchRequest)
  .page`${FACETS_PAGE}`;

test('Sort options focus state works', async t => {
  const searchComponent = FacetsPage.getSearchComponent();
  await searchComponent.submitQuery();

  const firstOption = await Selector('.yxt-SortOptions-optionSelector').nth(0);

  await t.click(firstOption);
  await t.expect(firstOption.focused).ok();
});