import UniversalPage from './pageobjects/universalpage';
import VerticalPage from './pageobjects/verticalpage';
import { setupServer, shutdownServer } from './server';
import FacetsPage from './pageobjects/facetspage';

/**
 * This file contains acceptance tests for a universal search page.
 * Note that before any tests are run, a local HTTP server is spun
 * up to serve the search page and the dist directory of Answers.
 * This server is closed once all tests have completed.
 */
fixture`Universal search page works as expected`
  .before(setupServer)
  .after(shutdownServer)
  .page`http://localhost:9999/tests/acceptance/fixtures/html/universal`;

test('Basic universal flow', async t => {
  const searchComponent = UniversalPage.getSearchComponent();

  await searchComponent.enterQuery('Tom');
  await searchComponent.clearQuery();

  await searchComponent.enterQuery('ama');
  await searchComponent.getAutoComplete().selectOption('amani farooque phone number');

  const sections =
        await UniversalPage.getUniversalResultsComponent().getSections();
  await t.expect(sections.length).eql(2);

  const faqsSectionTitle = await sections[1].getTitle();
  await t.expect(faqsSectionTitle).contains('FAQ');
});

fixture`Vertical search page works as expected`
  .before(setupServer)
  .after(shutdownServer)
  .page`http://localhost:9999/tests/acceptance/fixtures/html/vertical`;

test('pagination flow', async t => {
  const searchComponent = VerticalPage.getSearchComponent();
  await searchComponent.enterQuery('Virginia');
  await searchComponent.submitQuery();
  const paginationComponent = VerticalPage.getPaginationComponent();
  await paginationComponent.clickNextButton();
  const pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 2');
});

test.page`http://localhost:9999/tests/acceptance/fixtures/html/facets`(
  `Facets load on the page, and then selecting and applying a filter option returns the number of \
  results shown in that option's count label`,
  async t => {
    const searchComponent = FacetsPage.getSearchComponent();

    let filterBox = await FacetsPage.getFacetsComponent().getFilterBox();
    let count = await filterBox.getFilterCount();
    await t.expect(count).eql(0);

    await searchComponent.enterQuery('Virginia');
    await searchComponent.submitQuery();
    count = await filterBox.getFilterCount();
    await t.expect(count).gt(0);

    const filterOptions = await filterBox.getFilter(0);
    await filterOptions.expand();
    const expectedResultsCount = await filterOptions.getOptionCount(0);
    await filterOptions.clickOption(0);

    const verticalResultsComponent = FacetsPage.getVerticalResultsComponent();
    await filterBox.applyFilters();
    const resultsCount = await verticalResultsComponent.getResultsCount();
    await t.expect(resultsCount).eql(expectedResultsCount);
  }
);
