import { FILTERBOX_PAGE, VERTICAL_SEARCH_URL_REGEX } from '../constants';
import FacetsPage from '../pageobjects/facetspage';
import { Selector, RequestLogger } from 'testcafe';
import {
  browserBackButton,
  browserRefreshPage,
  browserForwardButton
} from '../utils';
import {
  getRequestFilters,
  expectRequestLocationRadiusToEql,
  expectRequestDoesNotContainParam
} from '../requestUtils';
import SearchRequestLogger from '../searchrequestlogger';
import { MockedVerticalSearchRequest } from '../fixtures/responses/vertical/search';
import { MockedVerticalAutoCompleteRequest } from '../fixtures/responses/vertical/autocomplete';

fixture`FilterBox page`
  .requestHooks(
    SearchRequestLogger.createVerticalSearchLogger(),
    MockedVerticalSearchRequest,
    MockedVerticalAutoCompleteRequest
  )
  .page`${FILTERBOX_PAGE}`;

test('single option filterbox works with back/forward navigation and page refresh', async t => {
  const radiusFilterLogger = RequestLogger({
    url: VERTICAL_SEARCH_URL_REGEX
  });
  await t.addRequestHooks(radiusFilterLogger);
  const searchComponent = FacetsPage.getSearchComponent();
  await searchComponent.enterQuery('all');
  await searchComponent.submitQuery();
  await SearchRequestLogger.waitOnSearchComplete(t);

  const filterBox = FacetsPage.getStaticFilterBox();
  const radiusFilter = await filterBox.getFilterOptions('DISTANCE');

  // Choose the 25 miles radius filter
  await radiusFilter.toggleOption('25 miles');
  const filterTags = Selector('.yxt-ResultsHeader-removableFilterTag');
  await SearchRequestLogger.waitOnSearchComplete(t);
  await t.expect(filterTags.count).eql(1);
  await expectRequestLocationRadiusToEql(radiusFilterLogger, 40233.6);
  radiusFilterLogger.clear();

  // Hit the back button
  await browserBackButton();
  await SearchRequestLogger.waitOnSearchComplete(t);
  await t.expect(filterTags.count).eql(0);
  await expectRequestDoesNotContainParam(radiusFilterLogger, 'locationRadius');
  radiusFilterLogger.clear();

  // Hit the forward button
  await browserForwardButton();
  await SearchRequestLogger.waitOnSearchComplete(t);
  await t.expect(filterTags.count).eql(1);
  await expectRequestLocationRadiusToEql(radiusFilterLogger, 40233.6);
  radiusFilterLogger.clear();

  // Refresh the page
  await browserRefreshPage();
  await SearchRequestLogger.waitOnSearchComplete(t);
  await t.expect(filterTags.count).eql(1);
  await expectRequestLocationRadiusToEql(radiusFilterLogger, 40233.6);
});

test('multioption filterbox works with back/forward navigation and page refresh', async t => {
  const filterBoxLogger = RequestLogger({
    url: VERTICAL_SEARCH_URL_REGEX
  });
  await t.addRequestHooks(filterBoxLogger);
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
  await searchComponent.enterQuery('all');
  await searchComponent.submitQuery();

  // Click the 'Marty' checkbox
  await staticFilter.toggleOption('Marty');
  await SearchRequestLogger.waitOnSearchComplete(t);
  await t.expect(await getRequestFilters(filterBoxLogger)).eql(martyFilter);
  await t.expect(filterTags.count).eql(1);
  filterBoxLogger.clear();

  // Click the 'Frodo' checkbox
  await staticFilter.toggleOption('Frodo');
  await SearchRequestLogger.waitOnSearchComplete(t);
  await t.expect(filterTags.count).eql(2);
  await t.expect(await getRequestFilters(filterBoxLogger)).eql({
    $or: [martyFilter, frodoFilter]
  });
  filterBoxLogger.clear();

  // Hit the back button, see the 'Frodo' filter disappear
  await browserBackButton();
  await SearchRequestLogger.waitOnSearchComplete(t);
  await t.expect(await getRequestFilters(filterBoxLogger)).eql(martyFilter);
  await t.expect(filterTags.count).eql(1);
  filterBoxLogger.clear();

  // Hit the back button, see the 'Marty' filter disappear
  await browserBackButton();
  await SearchRequestLogger.waitOnSearchComplete(t);
  await expectRequestDoesNotContainParam(filterBoxLogger, 'filters');
  await t.expect(filterTags.count).eql(0);

  // Hit the forward button, see the 'Marty' filter applied again
  await browserForwardButton();
  await SearchRequestLogger.waitOnSearchComplete(t);
  await t.expect(await getRequestFilters(filterBoxLogger)).eql(martyFilter);
  await t.expect(filterTags.count).eql(1);
  filterBoxLogger.clear();

  // Hit the forward button, see the 'Frodo' filter applied again
  await browserForwardButton();
  await SearchRequestLogger.waitOnSearchComplete(t);
  await t.expect(filterTags.count).eql(2);
  await t.expect(await getRequestFilters(filterBoxLogger)).eql({
    $or: [martyFilter, frodoFilter]
  });
  filterBoxLogger.clear();

  // Refresh the page
  await browserRefreshPage();
  await SearchRequestLogger.waitOnSearchComplete(t);
  await t.expect(filterTags.count).eql(2);
  await t.expect(await getRequestFilters(filterBoxLogger)).eql({
    $or: [martyFilter, frodoFilter]
  });
});

test('locationRadius of 0 is persisted', async t => {
  const filterBox = FacetsPage.getStaticFilterBox();
  const radiusFilter = await filterBox.getFilterOptions('DISTANCE');
  await radiusFilter.toggleOption('0 miles');
  const filterTags = Selector('.yxt-ResultsHeader-removableFilterTag');
  await SearchRequestLogger.waitOnSearchComplete(t);
  await t.expect(filterTags.count).eql(1);

  // Refresh the page
  await browserRefreshPage();
  await SearchRequestLogger.waitOnSearchComplete(t);
  await t.expect(filterTags.count).eql(1);
});
