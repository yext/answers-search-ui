import {
  FILTERBOX_PAGE
} from '../constants';
import { Selector } from 'testcafe';
import { getCurrentUrlParams } from '../utils';
import StorageKeys from '../../../src/core/storage/storagekeys';

fixture`Vertical page with default initial search`
  .page`${FILTERBOX_PAGE}`;

test('referrerPageUrl is added to the URL on default initial searches', async t => {
  await Selector('.yxt-Results').with({ visibilityCheck: true })();
  const currentSearchParams = await getCurrentUrlParams();
  const referrerPageUrl = currentSearchParams.has(StorageKeys.REFERRER_PAGE_URL);
  await t.expect(referrerPageUrl).ok();
});
