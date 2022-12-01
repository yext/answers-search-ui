import VerticalPage from '../pageobjects/verticalpage';
import {
  VERTICAL_PAGE,
  VERTICAL_SEARCH_URL_REGEX
} from '../constants';
import { MockedVerticalSearchRequest } from '../fixtures/responses/vertical/search';
import { RequestLogger } from 'testcafe';
import {
  browserBackButton,
  browserRefreshPage
} from '../utils';
import SearchRequestLogger from '../searchrequestlogger';
import { MockedVerticalAutoCompleteRequest } from '../fixtures/responses/vertical/autocomplete';

fixture`Vertical search page works as expected`
  .requestHooks(
    SearchRequestLogger.createVerticalSearchLogger(),
    MockedVerticalSearchRequest,
    MockedVerticalAutoCompleteRequest
  )
  .page`${VERTICAL_PAGE}`;

test('pagination flow', async t => {
  const searchComponent = VerticalPage.getSearchComponent();
  await searchComponent.enterQuery('virginia');
  await searchComponent.submitQuery();
  await SearchRequestLogger.waitOnSearchComplete(t);

  const paginationComponent = VerticalPage.getPaginationComponent();
  await paginationComponent.clickNextButton();

  const pageNumPromise = paginationComponent.getActivePageLabelAndNumberPromise();
  await t.expect(pageNumPromise).eql('Page 2');
});

test('navigating and refreshing mantains that page number', async t => {
  await t.navigateTo(`${VERTICAL_PAGE}?query=virginia`);
  await SearchRequestLogger.waitOnSearchComplete(t);

  const paginationComponent = VerticalPage.getPaginationComponent();
  await paginationComponent.clickNextButton();
  await SearchRequestLogger.waitOnSearchComplete(t);

  await browserRefreshPage();
  const pageNumPromise = paginationComponent.getActivePageLabelAndNumberPromise();
  await t.expect(pageNumPromise).eql('Page 2');
});

test('navigating and refreshing mantains that page number with blank query', async t => {
  const searchComponent = VerticalPage.getSearchComponent();
  await searchComponent.submitQuery();
  await SearchRequestLogger.waitOnSearchComplete(t);

  const paginationComponent = VerticalPage.getPaginationComponent();
  await paginationComponent.clickNextButton();
  let pageNumPromise = paginationComponent.getActivePageLabelAndNumberPromise();
  await t.expect(pageNumPromise).eql('Page 2');

  await browserRefreshPage();
  pageNumPromise = paginationComponent.getActivePageLabelAndNumberPromise();
  await t.expect(pageNumPromise).eql('Page 2');
});

test('spell check flow', async t => {
  const spellCheckLogger = RequestLogger({
    url: VERTICAL_SEARCH_URL_REGEX
  });
  await t.addRequestHooks(spellCheckLogger);
  const searchComponent = VerticalPage.getSearchComponent();
  await searchComponent.enterQuery('varginia');
  await searchComponent.submitQuery();
  await SearchRequestLogger.waitOnSearchComplete(t);

  const paginationComponent = VerticalPage.getPaginationComponent();
  await paginationComponent.clickNextButton();
  let pageNumPromise = paginationComponent.getActivePageLabelAndNumberPromise();
  await t.expect(pageNumPromise).eql('Page 2');

  // Check that clicking spell check resets pagination to page 1
  const spellCheckComponent = VerticalPage.getSpellCheckComponent();
  await spellCheckComponent.clickLink();
  pageNumPromise = paginationComponent.getActivePageLabelAndNumberPromise();
  await t.expect(pageNumPromise).eql('Page 1');
});

test('navigating pages and hitting the browser back button lands you on the right page', async t => {
  await t.navigateTo(`${VERTICAL_PAGE}?query=virginia`);
  const paginationComponent = VerticalPage.getPaginationComponent();
  await paginationComponent.clickNextButton();
  await paginationComponent.clickNextButton();
  await browserBackButton();
  const pageNumPromise = paginationComponent.getActivePageLabelAndNumberPromise();
  await t.expect(pageNumPromise).eql('Page 2');
});
