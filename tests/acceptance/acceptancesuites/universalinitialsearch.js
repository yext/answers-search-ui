import {
  setupServer,
  shutdownServer,
  UNIVERSAL_INITIAL_SEARCH_PAGE
} from '../server';
import { Selector } from 'testcafe';

fixture`Universal page with default initial search`
  .before(setupServer)
  .after(shutdownServer)
  .page`${UNIVERSAL_INITIAL_SEARCH_PAGE}`;

test(`blank defaultInitialSearch will fire on universal if allowEmptySearch is true`, async t => {
  await Selector('.yxt-Results').with({ visibilityCheck: true })();
  await t.expect(Selector('.yxt-Results').exists).ok();
});
