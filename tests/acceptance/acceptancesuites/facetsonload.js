import { FACETS_ON_LOAD_PAGE, VERTICAL_SEARCH_URL_REGEX } from '../constants';
import FacetsPage from '../pageobjects/facetspage';
import { RequestLogger } from 'testcafe';
import {
  browserBackButton,
  browserRefreshPage,
  browserForwardButton
} from '../utils';
import { getMostRecentQueryParamsFromLogger } from '../requestUtils';
import { MockedVerticalSearchRequest } from '../fixtures/responses/vertical/search';
import { MockedVerticalAutoCompleteRequest } from '../fixtures/responses/vertical/autocomplete';

fixture`Facets on page load`
  .requestHooks(
    MockedVerticalSearchRequest,
    MockedVerticalAutoCompleteRequest
  )
  .page`${FACETS_ON_LOAD_PAGE}`;

test('Facets work with back/forward navigation and page refresh', async t => {
  const logger = RequestLogger({
    url: VERTICAL_SEARCH_URL_REGEX
  });
  await t.addRequestHooks(logger);

  async function getFacetsFromRequest () {
    const urlParams = await getMostRecentQueryParamsFromLogger(logger);
    return JSON.parse(urlParams.get('facetFilters'));
  }
  const searchComponent = FacetsPage.getSearchComponent();
  await searchComponent.enterQuery('all');
  await searchComponent.submitQuery();

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
    c_popularity: [],
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
    c_popularity: [],
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
