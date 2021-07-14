import {
  setupServer,
  shutdownServer,
  FILTERBOX_PAGE
} from '../server';
import { Selector } from 'testcafe';
import { getCurrentUrlParams } from '../utils';
import StorageKeys from '../../../src/core/storage/storagekeys';
import VerticalPage from '../pageobjects/verticalpage';

fixture`Vertical page with default initial search`
  .beforeEach(async t => {
    await VerticalPage.getVerticalResultsComponent().registerLogger(t);
  })
  .before(setupServer)
  .after(shutdownServer)
  .page`${FILTERBOX_PAGE}`;

test('referrerPageUrl is added to the URL on default initial searches', async t => {
  await VerticalPage.getVerticalResultsComponent().waitOnSearchComplete();
  await Selector('.yxt-Results').with({ visibilityCheck: true })();
  const currentSearchParams = await getCurrentUrlParams();
  const referrerPageUrl = currentSearchParams.has(StorageKeys.REFERRER_PAGE_URL);
  await t.expect(referrerPageUrl).ok();
});
