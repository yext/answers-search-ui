import {
  UNIVERSAL_INITIAL_SEARCH_PAGE
} from '../constants';
import { Selector } from 'testcafe';
import { getCurrentUrlParams } from '../utils';
import StorageKeys from '../../../src/core/storage/storagekeys';

fixture`Universal page with default initial search`
  .page`${UNIVERSAL_INITIAL_SEARCH_PAGE}`;

test('blank defaultInitialSearch will fire on universal if allowEmptySearch is true', async t => {
  await Selector('.yxt-Results').with({ visibilityCheck: true })();
  await t.expect(Selector('.yxt-Results').exists).ok();
});

test('referrerPageUrl is added to the URL on default initial searches', async t => {
  await Selector('.yxt-Results').with({ visibilityCheck: true })();
  const currentSearchParams = await getCurrentUrlParams();
  const referrerPageUrl = currentSearchParams.has(StorageKeys.REFERRER_PAGE_URL);
  await t.expect(referrerPageUrl).ok();
});
