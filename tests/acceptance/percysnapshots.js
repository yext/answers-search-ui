import { setupServer, shutdownServer } from './server';
import percySnapshot from '@percy/testcafe';

/**
 * This file contains testcafe tests that take percy snapshots.
 * These have to be separated out because having percy snapshots
 * in a testcafe tests, even without percy exec, will error out
 * on browserstack:ie .
 */
fixture`Percy Snapshots for the Facets Page`
  .before(setupServer)
  .after(shutdownServer);

test.page`http://localhost:9999/tests/acceptance/fixtures/html/facets`(
  'Facets page',
  async t => {
    await percySnapshot(t, `facets page pre search`);
  });
