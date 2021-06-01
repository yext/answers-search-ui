import { ClientFunction } from 'testcafe';
import SearchBarOnlyPage from '../pageobjects/searchbaronlypage';
import {
  setupServer,
  shutdownServer,
  SEARCH_BAR_ONLY_PAGE
} from '../server';

/**
 * This file contains acceptance tests for a SearchBar-only page.
 * Note that before any tests are run, a local HTTP server is spun
 * up to serve the page and the dist directory of Answers. This server
 * is closed once all tests have completed.
 */
fixture`SearchBar-only page works as expected`
  .before(setupServer)
  .after(shutdownServer)
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
    'http://localhost:9999/tests/acceptance/fixtures/html/universal?query=amani+farooque+phone+number';
  await t.expect(clientUrl).eql(expectedUrl);
});