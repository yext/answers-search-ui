import {
  setupServer,
  shutdownServer,
  FACETS_ON_LOAD_PAGE
} from '../server';
import FacetsPage from '../pageobjects/facetspage';
import VerticalPage from '../pageobjects/verticalpage';
import { RequestLogger } from 'testcafe';
import {
  browserBackButton,
  browserRefreshPage,
  browserForwardButton,
  registerIE11NoCacheHook
} from '../utils';
import { getMostRecentQueryParamsFromLogger } from '../requestUtils';

fixture`Facets page`
  .beforeEach(async t => {
    await VerticalPage.getVerticalResultsComponent().registerLogger(t);
  })
  .before(setupServer)
  .after(shutdownServer)
  .page`${FACETS_ON_LOAD_PAGE}`;

test('Facets work with back/forward navigation and page refresh', async t => {
  const searchQueryUrl = VerticalPage.getVerticalResultsComponent().getSearchQueryUrl();
  const logger = RequestLogger({
    url: searchQueryUrl
  });
  await t.addRequestHooks(logger);
  await registerIE11NoCacheHook(t, searchQueryUrl);

  async function getFacetsFromRequest () {
    const urlParams = await getMostRecentQueryParamsFromLogger(logger);
    return JSON.parse(urlParams.get('facetFilters'));
  }
  const searchComponent = FacetsPage.getSearchComponent();
  const resultComponent = VerticalPage.getVerticalResultsComponent();
  await searchComponent.enterQuery('all');
  await searchComponent.submitQuery();
  await resultComponent.waitOnSearchComplete();

  let currentFacets = await getFacetsFromRequest();
  await t.expect(currentFacets).eql({});
  logger.clear();

  const facets = FacetsPage.getFacetsComponent();
  const filterBox = facets.getFilterBox();

  let options;
  options = await filterBox.getFilterOptions('Employee Department');
  await options.toggleOption('Client Delivery');
  currentFacets = await getFacetsFromRequest();
  const state1 = {
    c_puppyPreference: [],
    c_employeeDepartment: [{ c_employeeDepartment: { $eq: 'Client Delivery [SO]' } }],
    languages: [],
    specialities: []
  };
  await t.expect(currentFacets).eql(state1);
  logger.clear();

  options = await filterBox.getFilterOptions('Employee Department');
  await options.toggleOption('Technology');
  currentFacets = await getFacetsFromRequest();
  const state2 = {
    c_employeeDepartment: [
      { c_employeeDepartment: { $eq: 'Client Delivery [SO]' } },
      { c_employeeDepartment: { $eq: 'Technology' } }
    ]
  };
  await t.expect(currentFacets).eql(state2);
  logger.clear();

  options = await filterBox.getFilterOptions('Puppy Preference');
  await options.toggleOption('Frodo');
  currentFacets = await getFacetsFromRequest();
  const state3 = {
    c_puppyPreference: [{ c_puppyPreference: { $eq: 'Frodo' } }],
    c_employeeDepartment: [
      { c_employeeDepartment: { $eq: 'Client Delivery [SO]' } },
      { c_employeeDepartment: { $eq: 'Technology' } }
    ],
    languages: [],
    specialities: []
  };
  await t.expect(currentFacets).eql(state3);
  logger.clear();

  await browserRefreshPage();
  currentFacets = await getFacetsFromRequest();
  await t.expect(currentFacets).eql(state3);
  logger.clear();

  await browserRefreshPage();
  currentFacets = await getFacetsFromRequest();
  await t.expect(currentFacets).eql(state3);
  logger.clear();

  await browserBackButton();
  currentFacets = await getFacetsFromRequest();
  await t.expect(currentFacets).eql(state2);
  logger.clear();

  await browserBackButton();
  currentFacets = await getFacetsFromRequest();
  await t.expect(currentFacets).eql(state1);

  await browserBackButton();
  currentFacets = await getFacetsFromRequest();
  await t.expect(currentFacets).eql({});

  await browserForwardButton();
  currentFacets = await getFacetsFromRequest();
  await t.expect(currentFacets).eql(state1);
});
