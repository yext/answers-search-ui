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
  `Facets load on the page, and then selecting facet filters correctly affects the search`,
  async t => {
    const searchComponent = FacetsPage.getSearchComponent();
    await searchComponent.submitQuery();

    const facets = FacetsPage.getFacetsComponent();

    // Record the amount of results with no facets
    const verticalResultsComponent = FacetsPage.getVerticalResultsComponent();
    const initialResultsCount = await verticalResultsComponent.getResultsCountTotal();

    // Select the first option in the first FilterOptions
    await facets.toggleOption(0, 0);
    let expectedResultsCount = await facets.getOptionCount(0, 0);
    await facets.applyFilters();

    // Get the actual number of results and check that it equals the expected amount
    let actualResultsCount = await verticalResultsComponent.getResultsCountTotal();
    await t.expect(actualResultsCount).eql(expectedResultsCount);

    // Reset the filters, and check that the number of results
    // is the same as the initial amount
    await facets.reset();
    await facets.applyFilters();
    actualResultsCount = await verticalResultsComponent.getResultsCountTotal();
    await t.expect(actualResultsCount).eql(initialResultsCount);

    // Select the first option and second option in the first FilterOptions
    await facets.toggleOption(0, 0);
    await facets.toggleOption(0, 1);
    expectedResultsCount = await facets.getOptionCount(0, 0) + await facets.getOptionCount(0, 1);
    await facets.applyFilters();
    actualResultsCount = await verticalResultsComponent.getResultsCountTotal();
    await t.expect(actualResultsCount).eql(expectedResultsCount);

    // Select the third option in the first FilterOptions
    await facets.toggleOption(0, 2);
    expectedResultsCount += await facets.getOptionCount(0, 2);
    await facets.applyFilters();
    actualResultsCount = await verticalResultsComponent.getResultsCountTotal();
    await t.expect(actualResultsCount).eql(expectedResultsCount);

    // Check that selecting form different FilterOptions works
    await facets.toggleOption(1, 0);
    expectedResultsCount = Math.min(expectedResultsCount, await facets.getOptionCount(1, 0));
    await facets.applyFilters();
    actualResultsCount = await verticalResultsComponent.getResultsCountTotal();
    await t.expect(actualResultsCount).eql(expectedResultsCount);

    // Reset the filters, and check that the number of results
    // is the same as the initial amount
    await facets.reset();
    await facets.applyFilters();
    actualResultsCount = await verticalResultsComponent.getResultsCountTotal();
    await t.expect(actualResultsCount).eql(initialResultsCount);
  }
);
