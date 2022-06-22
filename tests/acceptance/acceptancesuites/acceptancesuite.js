import UniversalPage from '../pageobjects/universalpage';
import VerticalPage from '../pageobjects/verticalpage';
import {
  UNIVERSAL_PAGE,
  FACETS_PAGE,
  VERTICAL_PAGE,
  UNIVERSAL_SEARCH_URL_REGEX,
  VERTICAL_SEARCH_URL_REGEX
} from '../constants';
import FacetsPage from '../pageobjects/facetspage';
import { MockedUniversalAutoCompleteRequest } from '../fixtures/responses/universal/autocomplete';
import { MockedUniversalSearchRequest } from '../fixtures/responses/universal/search';
import { MockedVerticalSearchRequest } from '../fixtures/responses/vertical/search';
import { Selector, RequestLogger } from 'testcafe';
import {
  browserBackButton,
  browserRefreshPage,
  registerIE11NoCacheHook
} from '../utils';
import SearchRequestLogger from '../searchrequestlogger';

/**
 * This file contains acceptance tests for a universal search page.
 * Note that before any tests are run, a local HTTP server is spun
 * up to serve the search page and the dist directory of Answers.
 * This server is closed once all tests have completed.
 */

fixture`Universal search page works as expected`
  .requestHooks(
    [
      SearchRequestLogger.createUniversalSearchLogger(),
      MockedUniversalSearchRequest,
      MockedUniversalAutoCompleteRequest
    ]
  )
  .beforeEach(async t => {
    await registerIE11NoCacheHook(t, UNIVERSAL_SEARCH_URL_REGEX);
  })
  .page`${UNIVERSAL_PAGE}`;

test('Basic universal flow', async t => {
  const searchComponent = UniversalPage.getSearchComponent();
  await searchComponent.enterQuery('Tom');
  await searchComponent.clearQuery();

  await searchComponent.enterQuery('ama');
  await searchComponent.getAutoComplete().selectOption('amani farooque phone number');
  await SearchRequestLogger.waitOnSearchComplete(t);

  const sections =
    await UniversalPage.getUniversalResultsComponent().getSections();
  await t.expect(sections.length).eql(2);

  const faqsSectionTitle = await sections[1].getTitle();
  await t.expect(faqsSectionTitle.toUpperCase()).contains('FAQ');
});

fixture`Vertical search page works as expected`
  .requestHooks([SearchRequestLogger.createVerticalSearchLogger(), MockedVerticalSearchRequest])
  .beforeEach(async t => {
    await registerIE11NoCacheHook(t, VERTICAL_SEARCH_URL_REGEX);
  })
  .page`${VERTICAL_PAGE}`;

test('pagination flow', async t => {
  const searchComponent = VerticalPage.getSearchComponent();
  await searchComponent.enterQuery('virginia');
  await searchComponent.submitQuery();
  await SearchRequestLogger.waitOnSearchComplete(t);

  const paginationComponent = VerticalPage.getPaginationComponent();
  await paginationComponent.clickNextButton();

  const pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 2');
});

test('navigating and refreshing mantains that page number', async t => {
  await t.navigateTo(`${VERTICAL_PAGE}?query=virginia`);
  await SearchRequestLogger.waitOnSearchComplete(t);

  const paginationComponent = VerticalPage.getPaginationComponent();
  await paginationComponent.clickNextButton();
  await SearchRequestLogger.waitOnSearchComplete(t);

  await browserRefreshPage();
  const pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 2');
});

test('navigating and refreshing mantains that page number with blank query', async t => {
  const searchComponent = VerticalPage.getSearchComponent();
  await searchComponent.submitQuery();
  await SearchRequestLogger.waitOnSearchComplete(t);

  const paginationComponent = VerticalPage.getPaginationComponent();
  await paginationComponent.clickNextButton();
  let pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 2');

  await browserRefreshPage();
  pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 2');
});

test('spell check flow', async t => {
  const spellCheckLogger = RequestLogger({
    url: VERTICAL_SEARCH_URL_REGEX
  });
  await t.addRequestHooks(spellCheckLogger);
  await registerIE11NoCacheHook(t, VERTICAL_SEARCH_URL_REGEX);
  const searchComponent = VerticalPage.getSearchComponent();
  await searchComponent.enterQuery('varginia');
  await searchComponent.submitQuery();
  await SearchRequestLogger.waitOnSearchComplete(t);

  const paginationComponent = VerticalPage.getPaginationComponent();
  await paginationComponent.clickNextButton();
  let pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 2');

  // Check that clicking spell check resets pagination to page 1
  const spellCheckComponent = VerticalPage.getSpellCheckComponent();
  await spellCheckComponent.clickLink();
  pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 1');
});

test('navigating pages and hitting the browser back button lands you on the right page', async t => {
  await t.navigateTo(`${VERTICAL_PAGE}?query=virginia`);
  const paginationComponent = VerticalPage.getPaginationComponent();
  await paginationComponent.clickNextButton();
  await paginationComponent.clickNextButton();
  await browserBackButton();
  const pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 2');
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
