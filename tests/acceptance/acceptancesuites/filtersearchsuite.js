import { FACETS_PAGE } from '../constants';
import FacetsPage from '../pageobjects/facetspage';
import { Selector } from 'testcafe';
import {
  browserBackButton,
  browserRefreshPage,
  browserForwardButton
} from '../utils';
import { MockedFilterSearchRequest } from '../fixtures/responses/filtersearch/search';
import { MockedVerticalSearchRequest } from '../fixtures/responses/vertical/search';
import SearchRequestLogger from '../searchrequestlogger';
import { MockedVerticalAutoCompleteRequest } from '../fixtures/responses/vertical/autocomplete';

fixture`FilterSearch suite`
  .requestHooks(
    SearchRequestLogger.createVerticalSearchLogger(),
    MockedFilterSearchRequest,
    MockedVerticalSearchRequest,
    MockedVerticalAutoCompleteRequest
  )
  .page`${FACETS_PAGE}`;

test('filtersearch works with back/forward navigation and page refresh', async t => {
  const expectOnlyFilterTagToEql = async expectedText => {
    await t.expect(filterTags.count).eql(1);
    const filterTagText = await filterTags.nth(0).find(
      '.yxt-ResultsHeader-removableFilterValue').innerText;
    return t.expect(filterTagText).eql(expectedText);
  };
  const filterTags = Selector('.yxt-ResultsHeader-removableFilterTag');
  const filterSearch = FacetsPage.getFilterSearch();

  // Choose the 'Virginia, United States' filter option
  await filterSearch.selectFilter('Virginia, United States');
  await SearchRequestLogger.waitOnSearchComplete(t);
  await expectOnlyFilterTagToEql('Virginia, United States');

  // Choose the 'New York City, New York, United States' filter option
  await filterSearch.selectFilter('New York City, New York, United States');
  await SearchRequestLogger.waitOnSearchComplete(t);
  await expectOnlyFilterTagToEql('New York City, New York, United States');

  // Hit the back button, expect to be back at the 'Virginia' filter state
  await browserBackButton();
  await SearchRequestLogger.waitOnSearchComplete(t);
  await expectOnlyFilterTagToEql('Virginia, United States');

  // Test that refreshing the page will use the 'Virginia' filter
  await browserRefreshPage();
  await SearchRequestLogger.waitOnSearchComplete(t);
  await expectOnlyFilterTagToEql('Virginia, United States');

  // Hit the back button, expect to be back at the initial state with 0 results
  await browserBackButton();
  await SearchRequestLogger.waitOnSearchComplete(t);
  await t.expect(filterTags.count).eql(0);
  await t.expect(Selector('.yxt-StandardCard-title').count).eql(0);

  // Hit the forward button, expect to see the 'Virginia' filter applied
  await browserForwardButton();
  await SearchRequestLogger.waitOnSearchComplete(t);
  await expectOnlyFilterTagToEql('Virginia, United States');

  // Hit the forward button, expect to see the 'New York' filter applied
  await browserForwardButton();
  await SearchRequestLogger.waitOnSearchComplete(t);
  await expectOnlyFilterTagToEql('New York City, New York, United States');
});

test('pagination works with page navigation after selecting a filtersearch filter', async t => {
  const expectFilterTagIsNewYork = async () => {
    await t.expect(filterTags.count).eql(1);
    const filterTagText = await filterTags.nth(0).find(
      '.yxt-ResultsHeader-removableFilterValue').innerText;
    return t.expect(filterTagText).eql('New York City, New York, United States');
  };
  const filterTags = Selector('.yxt-ResultsHeader-removableFilterTag');
  const paginationComponent = FacetsPage.getPaginationComponent();
  const filterSearch = FacetsPage.getFilterSearch();

  await filterSearch.selectFilter('New York City, New York, United States');
  await paginationComponent.clickNextButton();
  let pageNumPromise = paginationComponent.getActivePageLabelAndNumberPromise();
  await t.expect(pageNumPromise).eql('Page 2');
  await expectFilterTagIsNewYork();

  await browserBackButton();
  pageNumPromise = paginationComponent.getActivePageLabelAndNumberPromise();
  await t.expect(pageNumPromise).eql('Page 1');
  await expectFilterTagIsNewYork();

  await browserForwardButton();
  pageNumPromise = paginationComponent.getActivePageLabelAndNumberPromise();
  await t.expect(pageNumPromise).eql('Page 2');
  await expectFilterTagIsNewYork();

  await browserRefreshPage();
  pageNumPromise = paginationComponent.getActivePageLabelAndNumberPromise();
  await t.expect(pageNumPromise).eql('Page 2');
  await expectFilterTagIsNewYork();
});
