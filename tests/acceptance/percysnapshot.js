import UniversalPage from './pageobjects/universalpage';
import VerticalPage from './pageobjects/verticalpage';
import { setupServer, shutdownServer } from './server';
import FacetsPage from './pageobjects/facetspage';
import { Selector } from 'testcafe';
import percySnapshot from '@percy/testcafe';

/**
 * This file contains testcafe tests that take percy snapshots.
 * These have to be separated out because Percy only supports
 * chrome and firefox.
 */
fixture`Universal search page works as expected`
  .before(setupServer)
  .after(shutdownServer)

test
  .page`http://localhost:9999/tests/acceptance/fixtures/html/universal`
  ('Universal page', async t => {
    await percySnapshot(t, 'universal page');
});
test
  .page`http://localhost:9999/tests/acceptance/fixtures/html/vertical`
  ('Vertical page', async t => {
    await percySnapshot(t, 'vertical page');
});
test
  .page`http://localhost:9999/tests/acceptance/fixtures/html/facets`
  ('Facets page', async t => {
    await percySnapshot(t, 'facets page');
});

