import {
  setupServer,
  shutdownServer,
  FILTERBOX_PAGE
} from '../server';
import FacetsPage from '../pageobjects/facetspage';
import VerticalPage from '../pageobjects/verticalpage';
import { Selector, RequestLogger } from 'testcafe';
import {
  browserBackButton,
  browserRefreshPage,
  browserForwardButton,
  registerIE11NoCacheHook
} from '../utils';
import {
  getRequestFilters,
  expectRequestLocationRadiusToEql,
  expectRequestDoesNotContainParam
} from '../requestUtils';

fixture`FilterBox page`
  .beforeEach(async t => {
    await VerticalPage.getVerticalResultsComponent().registerLogger(t);
  })
  .before(setupServer)
  .after(shutdownServer)
  .page`${FILTERBOX_PAGE}`;

test('single option filterbox works with back/forward navigation and page refresh', async t => {
  const searchQueryUrl = VerticalPage.getVerticalResultsComponent().getSearchQueryUrl();
  const radiusFilterLogger = RequestLogger({
    url: searchQueryUrl
  });
  await t.addRequestHooks(radiusFilterLogger);
  await registerIE11NoCacheHook(t, searchQueryUrl);
  const searchComponent = FacetsPage.getSearchComponent();
  const resultComponent = VerticalPage.getVerticalResultsComponent();
  await searchComponent.enterQuery('all');
  await searchComponent.submitQuery();
  await resultComponent.waitOnSearchComplete();

  const filterBox = FacetsPage.getStaticFilterBox();
  const radiusFilter = await filterBox.getFilterOptions('DISTANCE');

  // Choose the 25 miles radius filter
  await radiusFilter.toggleOption('25 miles');
  const filterTags = Selector('.yxt-ResultsHeader-removableFilterTag');
  await resultComponent.waitOnSearchComplete();
  await t.expect(filterTags.count).eql(1);
  await expectRequestLocationRadiusToEql(radiusFilterLogger, 40233.6);
  radiusFilterLogger.clear();

  // Hit the back button
  await browserBackButton();
  await resultComponent.waitOnSearchComplete();
  await t.expect(filterTags.count).eql(0);
  await expectRequestDoesNotContainParam(radiusFilterLogger, 'locationRadius');
  radiusFilterLogger.clear();

  // Hit the forward button
  await browserForwardButton();
  await resultComponent.waitOnSearchComplete();
  await t.expect(filterTags.count).eql(1);
  await expectRequestLocationRadiusToEql(radiusFilterLogger, 40233.6);
  radiusFilterLogger.clear();

  // Refresh the page
  await browserRefreshPage();
  await resultComponent.waitOnSearchComplete();
  await t.expect(filterTags.count).eql(1);
  await expectRequestLocationRadiusToEql(radiusFilterLogger, 40233.6);
});

test('multioption filterbox works with back/forward navigation and page refresh', async t => {
  const searchQueryUrl = VerticalPage.getVerticalResultsComponent().getSearchQueryUrl();
  const filterBoxLogger = RequestLogger({
    url: searchQueryUrl
  });
  await t.addRequestHooks(filterBoxLogger);
  await registerIE11NoCacheHook(t, searchQueryUrl);
  const martyFilter = {
    c_puppyPreference: {
      $eq: 'Marty'
    }
  };
  const frodoFilter = {
    c_puppyPreference: {
      $eq: 'Frodo'
    }
  };
  const filterBox = FacetsPage.getStaticFilterBox();
  const staticFilter = await filterBox.getFilterOptions('STATIC FILTERS');
  const filterTags = Selector('.yxt-ResultsHeader-removableFilterTag');
  const searchComponent = FacetsPage.getSearchComponent();
  const resultComponent = VerticalPage.getVerticalResultsComponent();
  await searchComponent.enterQuery('all');
  await searchComponent.submitQuery();
  await resultComponent.waitOnSearchComplete();

  // Click the 'Marty' checkbox
  await staticFilter.toggleOption('Marty');
  await resultComponent.waitOnSearchComplete();
  await t.expect(await getRequestFilters(filterBoxLogger)).eql(martyFilter);
  await t.expect(filterTags.count).eql(1);
  filterBoxLogger.clear();

  // Click the 'Frodo' checkbox
  await staticFilter.toggleOption('Frodo');
  await resultComponent.waitOnSearchComplete();
  await t.expect(filterTags.count).eql(2);
  await t.expect(await getRequestFilters(filterBoxLogger)).eql({
    $or: [martyFilter, frodoFilter]
  });
  filterBoxLogger.clear();

  // Hit the back button, see the 'Frodo' filter disappear
  await browserBackButton();
  await resultComponent.waitOnSearchComplete();
  await t.expect(await getRequestFilters(filterBoxLogger)).eql(martyFilter);
  await t.expect(filterTags.count).eql(1);
  filterBoxLogger.clear();

  // Hit the back button, see the 'Marty' filter disappear
  await browserBackButton();
  await resultComponent.waitOnSearchComplete();
  await expectRequestDoesNotContainParam(filterBoxLogger, 'filters');
  await t.expect(filterTags.count).eql(0);

  // Hit the forward button, see the 'Marty' filter applied again
  await browserForwardButton();
  await resultComponent.waitOnSearchComplete();
  await t.expect(await getRequestFilters(filterBoxLogger)).eql(martyFilter);
  await t.expect(filterTags.count).eql(1);
  filterBoxLogger.clear();

  // Hit the forward button, see the 'Frodo' filter applied again
  await browserForwardButton();
  await resultComponent.waitOnSearchComplete();
  await t.expect(filterTags.count).eql(2);
  await t.expect(await getRequestFilters(filterBoxLogger)).eql({
    $or: [martyFilter, frodoFilter]
  });
  filterBoxLogger.clear();

  // Refresh the page
  await browserRefreshPage();
  await resultComponent.waitOnSearchComplete();
  await t.expect(filterTags.count).eql(2);
  await t.expect(await getRequestFilters(filterBoxLogger)).eql({
    $or: [martyFilter, frodoFilter]
  });
});

test('locationRadius of 0 is persisted', async t => {
  const resultComponent = VerticalPage.getVerticalResultsComponent();
  const filterBox = FacetsPage.getStaticFilterBox();
  const radiusFilter = await filterBox.getFilterOptions('DISTANCE');
  await radiusFilter.toggleOption('0 miles');
  const filterTags = Selector('.yxt-ResultsHeader-removableFilterTag');
  await resultComponent.waitOnSearchComplete();
  await t.expect(filterTags.count).eql(1);

  // Refresh the page
  await browserRefreshPage();
  await resultComponent.waitOnSearchComplete();
  await t.expect(filterTags.count).eql(1);
});
