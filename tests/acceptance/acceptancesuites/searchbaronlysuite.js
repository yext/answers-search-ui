import { ClientFunction } from 'testcafe';
import { SEARCH_BAR_ONLY_PAGE } from '../constants';
import SearchBarOnlyPage from '../pageobjects/searchbaronlypage';

/**
 * This file contains acceptance tests for a SearchBar-only page.
 * Note that before any tests are run, a local HTTP server is spun
 * up to serve the page and the dist directory of Answers. This server
 * is closed once all tests have completed.
 */
fixture`SearchBar-only page works as expected`
  .page`${SEARCH_BAR_ONLY_PAGE}`;

test('Basic search and redirect flow', async t => {
  const searchComponent = SearchBarOnlyPage.getSearchComponent();

  await searchComponent.enterQuery('Tom');
  await searchComponent.clearQuery();

  await searchComponent.enterQuery('ama');
  await searchComponent.getAutoComplete().selectOption('amani farooque phone number');

  const getUrl = ClientFunction(() => window.location.href);
  const clientUrl = await getUrl();
  const expectedUrl =
    'http://localhost:9999/tests/acceptance/fixtures/html/universal?query=amani+farooque+phone+number&referrerPageUrl=http%3A%2F%2Flocalhost%3A9999%2Ftests%2Facceptance%2Ffixtures%2Fhtml%2Fsearchbaronly';
  await t.expect(clientUrl).eql(expectedUrl);
});
