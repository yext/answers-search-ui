import {
  setupServer,
  shutdownServer,
  FACETS_PAGE
} from '../server';
import FacetsPage from '../pageobjects/facetspage';
import { Selector, RequestLogger } from 'testcafe';
import {
  browserBackButton,
  browserRefreshPage,
  browserForwardButton,
  registerIE11NoCacheHook
} from '../utils';
import { expectRequestFiltersToEql } from '../requestUtils';

fixture`Facets page`
  .before(setupServer)
  .after(shutdownServer)
  .page`${FACETS_PAGE}`;

test(`filtersearch works with back/forward navigation and page refresh`, async t => {
  const filterSearchLogger = RequestLogger({
    url: /v2\/accounts\/me\/answers\/vertical\/query/
  });
  await t.addRequestHooks(filterSearchLogger);
  await registerIE11NoCacheHook(t);
  const expectOnlyFilterTagToEql = async expectedText => {
    await t.expect(filterTags.count).eql(1);
    const filterTagText = await filterTags.nth(0).find(
      '.yxt-ResultsHeader-removableFilterValue').innerText;
    return t.expect(filterTagText).eql(expectedText);
  };
  const filterTags = Selector('.yxt-ResultsHeader-removableFilterTag');
  const filterSearch = FacetsPage.getFilterSearch();
  const virginiaFilter = {
    'builtin.location': {
      $eq: 'P-region.7919684583758790'
    }
  };
  const newYorkFilter = {
    'builtin.location': {
      $eq: 'P-place.15278078705964500'
    }
  };
  await t.expect(filterSearchLogger.requests.length).eql(0);

  // Choose the 'Virginia, United States' filter option
  await filterSearch.selectFilter('Virginia, United States');
  await expectOnlyFilterTagToEql('Virginia, United States');
  await expectRequestFiltersToEql(filterSearchLogger, virginiaFilter);
  filterSearchLogger.clear();

  // Choose the 'New York City, New York, United States' filter option
  await filterSearch.selectFilter('New York City, New York, United States');
  await expectOnlyFilterTagToEql('New York City, New York, United States');
  await expectRequestFiltersToEql(filterSearchLogger, newYorkFilter);
  filterSearchLogger.clear();

  // Hit the back button, expect to be back at the 'Virginia' filter state
  await browserBackButton();
  await expectOnlyFilterTagToEql('Virginia, United States');
  await expectRequestFiltersToEql(filterSearchLogger, virginiaFilter);
  filterSearchLogger.clear();

  // Test that refreshing the page will use the 'Virginia' filter
  await browserRefreshPage();
  await expectOnlyFilterTagToEql('Virginia, United States');
  await expectRequestFiltersToEql(filterSearchLogger, virginiaFilter);
  filterSearchLogger.clear();

  // Hit the back button, expect to be back at the initial state with 0 results
  await browserBackButton();
  await t.expect(filterTags.count).eql(0);
  await t.expect(Selector('.yxt-StandardCard-title').count).eql(0);
  await t.expect(filterSearchLogger.requests.length).eql(0);

  // Hit the forward button, expect to see the 'Virginia' filter applied
  await browserForwardButton();
  await expectOnlyFilterTagToEql('Virginia, United States');
  await expectRequestFiltersToEql(filterSearchLogger, virginiaFilter);
  filterSearchLogger.clear();

  // Hit the forward button, expect to see the 'New York' filter applied
  await browserForwardButton();
  await expectOnlyFilterTagToEql('New York City, New York, United States');
  await expectRequestFiltersToEql(filterSearchLogger, newYorkFilter);
  filterSearchLogger.clear();
});

test(`pagination works with page navigation after selecting a filtersearch filter`, async t => {
  const expectFilterTagIsVirginia = async () => {
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
  let pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 2');
  await expectFilterTagIsVirginia();

  await browserBackButton();
  pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 1');
  await expectFilterTagIsVirginia();

  await browserForwardButton();
  pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 2');
  await expectFilterTagIsVirginia();

  await browserRefreshPage();
  pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 2');
  await expectFilterTagIsVirginia();
});
