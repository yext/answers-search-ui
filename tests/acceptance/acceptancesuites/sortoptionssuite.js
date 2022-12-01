import { FACETS_PAGE } from '../constants';
import FacetsPage from '../pageobjects/facetspage';
import { MockedVerticalSearchRequest } from '../fixtures/responses/vertical/search';
import { Selector } from 'testcafe';
import { browserRefreshPage } from '../utils';
import SearchRequestLogger from '../searchrequestlogger';
import { MockedVerticalAutoCompleteRequest } from '../fixtures/responses/vertical/autocomplete';

fixture`SortOptions suite`
  .requestHooks(
    MockedVerticalSearchRequest,
    MockedVerticalAutoCompleteRequest
  )
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
