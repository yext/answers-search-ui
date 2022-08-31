import { ClientFunction } from 'testcafe';
import { SEARCH_BAR_ONLY_PAGE } from '../constants';
import SearchBarOnlyPage from '../pageobjects/searchbaronlypage';
import { MockedUniversalAutoCompleteRequest } from '../fixtures/responses/universal/autocomplete';

/**
 * This file contains acceptance tests for a SearchBar-only page.
 * Note that before any tests are run, a local HTTP server is spun
 * up to serve the page and the dist directory of Answers. This server
 * is closed once all tests have completed.
 */
fixture`SearchBar-only page works as expected`
  .requestHooks(MockedUniversalAutoCompleteRequest)
  .page`${SEARCH_BAR_ONLY_PAGE}`;

test('Basic search and redirect flow', async t => {
  const searchComponent = SearchBarOnlyPage.getSearchComponent();

  await searchComponent.enterQuery('Tom');
  await searchComponent.clearQuery();

  await searchComponent.enterQuery('ama');
  await searchComponent.getAutoComplete().selectOption('amani farooque phone number');

  const getUrl = ClientFunction(() => window.location.href);
  const clientUrl = await getUrl();
  const expectedUrl = 'https://theme.slapshot.pagescdn.com/?query=amani+farooque+phone+number';
  await t.expect(clientUrl.startsWith(expectedUrl)).ok();
});
