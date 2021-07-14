import {
  setupServer,
  shutdownServer,
  FACETS_PAGE
} from '../server';
import FacetsPage from '../pageobjects/facetspage';
import VerticalPage from '../pageobjects/verticalpage';
import { Selector } from 'testcafe';
import {
  browserBackButton,
  browserRefreshPage,
  browserForwardButton
} from '../utils';

fixture`Facets page`
  .beforeEach(async t => {
    await VerticalPage.getVerticalResultsComponent().registerLogger(t);
  })
  .before(setupServer)
  .after(shutdownServer)
  .page`${FACETS_PAGE}`;

test('filtersearch works with back/forward navigation and page refresh', async t => {
  const resultComponent = VerticalPage.getVerticalResultsComponent();
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
  resultComponent.waitOnSearchComplete();
  await expectOnlyFilterTagToEql('Virginia, United States');

  // Choose the 'New York City, New York, United States' filter option
  await filterSearch.selectFilter('New York City, New York, United States');
  resultComponent.waitOnSearchComplete();
  await expectOnlyFilterTagToEql('New York City, New York, United States');

  // Hit the back button, expect to be back at the 'Virginia' filter state
  await browserBackButton();
  resultComponent.waitOnSearchComplete();
  await expectOnlyFilterTagToEql('Virginia, United States');

  // Test that refreshing the page will use the 'Virginia' filter
  await browserRefreshPage();
  resultComponent.waitOnSearchComplete();
  await expectOnlyFilterTagToEql('Virginia, United States');

  // Hit the back button, expect to be back at the initial state with 0 results
  await browserBackButton();
  resultComponent.waitOnSearchComplete();
  await t.expect(filterTags.count).eql(0);
  await t.expect(Selector('.yxt-StandardCard-title').count).eql(0);

  // Hit the forward button, expect to see the 'Virginia' filter applied
  await browserForwardButton();
  resultComponent.waitOnSearchComplete();
  await expectOnlyFilterTagToEql('Virginia, United States');

  // Hit the forward button, expect to see the 'New York' filter applied
  await browserForwardButton();
  resultComponent.waitOnSearchComplete();
  await expectOnlyFilterTagToEql('New York City, New York, United States');
});

test('pagination works with page navigation after selecting a filtersearch filter', async t => {
  const resultComponent = VerticalPage.getVerticalResultsComponent();
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
  resultComponent.waitOnSearchComplete();
  await paginationComponent.clickNextButton();
  resultComponent.waitOnSearchComplete();
  let pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 2');
  await expectFilterTagIsNewYork();

  await browserBackButton();
  resultComponent.waitOnSearchComplete();
  pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 1');
  await expectFilterTagIsNewYork();

  await browserForwardButton();
  resultComponent.waitOnSearchComplete();
  pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 2');
  await expectFilterTagIsNewYork();

  await browserRefreshPage();
  resultComponent.waitOnSearchComplete();
  pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 2');
  await expectFilterTagIsNewYork();
});
