import { setupServer, shutdownServer } from './server';
import percySnapshot from '@percy/testcafe';

/**
 * This file contains testcafe tests that take percy snapshots.
 * These have to be separated out because taking percy snapshots
 * on browserstack:ie, even without percy exec, will error.
 */
fixture`Universal search page works as expected`
  .before(setupServer)
  .after(shutdownServer);

test.page`http://localhost:9999/tests/acceptance/fixtures/html/facets`(
  'Facets page',
  async t => {
    await percySnapshot(t, `universal page pre search`);
  });
