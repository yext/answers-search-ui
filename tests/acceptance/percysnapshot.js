import { setupServer, shutdownServer } from './server';
import percySnapshot from '@percy/testcafe';
import { LIB_VERSION } from '../../src/core/constants';

const libVersionWithoutHash = LIB_VERSION.split('-')[0]

/**
 * This file contains testcafe tests that take percy snapshots.
 * These have to be separated out because Percy only supports
 * chrome and firefox.
 */
fixture`Universal search page works as expected`
  .before(setupServer)
  .after(shutdownServer)

test.page`http://localhost:9999/tests/acceptance/fixtures/html/universal`
  ('Universal page', async t => {
    await percySnapshot(t, `universal page pre search - ${libVersionWithoutHash}`);
    const searchComponent = UniversalPage.getSearchComponent();
    await searchComponent.enterQuery('Tom');
    await searchComponent.clearQuery();
    await percySnapshot(t, `universal page post search - ${libVersionWithoutHash}`);
});

test.page`http://localhost:9999/tests/acceptance/fixtures/html/vertical`
  ('Vertical page', async t => {
    await percySnapshot(t, `vertical page pre search - ${libVersionWithoutHash}`);
    const searchComponent = VerticalPage.getSearchComponent();
    await searchComponent.enterQuery('Tom');
    await searchComponent.clearQuery();
    await percySnapshot(t, `vertical page post search - ${libVersionWithoutHash}`);
});

test.page`http://localhost:9999/tests/acceptance/fixtures/html/facets`
  ('Facets page', async t => {
    await percySnapshot(t, `facets page pre search - ${libVersionWithoutHash}`);

    const searchComponent = FacetsPage.getSearchComponent();
    await searchComponent.submitQuery();

    await percySnapshot(t, `facets page post search - ${libVersionWithoutHash}`);

    // Select the first option in the first FilterOptions
    const employeeDepartment = await filterBox.getFilterOptions('Employee Department');
    await employeeDepartment.toggleOption('Client Delivery');
    await filterBox.applyFilters();

    await percySnapshot(t, `facets page post filtering - ${libVersionWithoutHash}`);
});

