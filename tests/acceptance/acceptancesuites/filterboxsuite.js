import {
  setupServer,
  shutdownServer,
  FILTERBOX_PAGE
} from '../server';
import FacetsPage from '../pageobjects/facetspage';
import { Selector, RequestLogger } from 'testcafe';
import {
  browserBackButton,
  browserRefreshPage,
  browserForwardButton,
  registerIE11NoCacheHook
} from '../utils';
import {
  expectRequestFiltersToEql,
  expectRequestLocationRadiusToEql,
  expectRequestDoesNotContainParam
} from '../requestUtils';

fixture`FilterBox page`
  .before(setupServer)
  .after(shutdownServer)
  .page`${FILTERBOX_PAGE}`;

test(`single option filterbox works with back/forward navigation and page refresh`, async t => {
  const radiusFilterLogger = RequestLogger({
    url: /v2\/accounts\/me\/answers\/vertical\/query/
  });
  await t.addRequestHooks(radiusFilterLogger);
  await registerIE11NoCacheHook(t);
  const searchComponent = FacetsPage.getSearchComponent();
  await searchComponent.enterQuery('all');
  await searchComponent.submitQuery();

  const filterBox = FacetsPage.getStaticFilterBox();
  const radiusFilter = await filterBox.getFilterOptions('DISTANCE');

  // Choose the 25 miles radius filter
  await radiusFilter.toggleOption('25 miles');
  const filterTags = Selector('.yxt-ResultsHeader-removableFilterTag');
  await t.expect(filterTags.count).eql(1);
  await expectRequestLocationRadiusToEql(radiusFilterLogger, 40233.6);
  radiusFilterLogger.clear();

  // Hit the back button
  await browserBackButton();
  await t.expect(filterTags.count).eql(0);
  await expectRequestDoesNotContainParam(radiusFilterLogger, 'locationRadius');
  radiusFilterLogger.clear();

  // Hit the forward button
  await browserForwardButton();
  await t.expect(filterTags.count).eql(1);
  await expectRequestLocationRadiusToEql(radiusFilterLogger, 40233.6);
  radiusFilterLogger.clear();

  // Refresh the page
  await browserRefreshPage();
  await t.expect(filterTags.count).eql(1);
  await expectRequestLocationRadiusToEql(radiusFilterLogger, 40233.6);
});

test(`multioption filterbox works with back/forward navigation and page refresh`, async t => {
  const filterBoxLogger = RequestLogger({
    url: /v2\/accounts\/me\/answers\/vertical\/query/
  });
  await t.addRequestHooks(filterBoxLogger);
  await registerIE11NoCacheHook(t);
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
  await expectRequestFiltersToEql(filterBoxLogger, martyFilter);
  await t.expect(filterTags.count).eql(1);

  // Click the 'Frodo' checkbox
  await staticFilter.toggleOption('Frodo');
  await t.expect(filterTags.count).eql(2);
  await expectRequestFiltersToEql(filterBoxLogger, {
    $or: [martyFilter, frodoFilter]
  });

  // Hit the back button, see the 'Frodo' filter disappear
  await browserBackButton();
  await expectRequestFiltersToEql(filterBoxLogger, martyFilter);
  await t.expect(filterTags.count).eql(1);

  // Hit the back button, see the 'Marty' filter disappear
  await browserBackButton();
  await expectRequestDoesNotContainParam(filterBoxLogger, 'filters');
  await t.expect(filterTags.count).eql(0);

  // Hit the forward button, see the 'Marty' filter applied again
  await browserForwardButton();
  await expectRequestFiltersToEql(filterBoxLogger, martyFilter);
  await t.expect(filterTags.count).eql(1);

  // Hit the forward button, see the 'Frodo' filter applied again
  await browserForwardButton();
  await t.expect(filterTags.count).eql(2);
  await expectRequestFiltersToEql(filterBoxLogger, {
    $or: [martyFilter, frodoFilter]
  });

  // Refresh the page
  await browserRefreshPage();
  await t.expect(filterTags.count).eql(2);
  await expectRequestFiltersToEql(filterBoxLogger, {
    $or: [martyFilter, frodoFilter]
  });
});
