import { FILTERBOX_PAGE } from '../constants';
import { getCurrentUrlParams, waitForResults } from '../utils';
import StorageKeys from '../../../src/core/storage/storagekeys';
import { MockedVerticalSearchRequest } from '../fixtures/responses/vertical/search';
import { MockedVerticalAutoCompleteRequest } from '../fixtures/responses/vertical/autocomplete';

fixture`Vertical page with default initial search`
  .requestHooks(MockedVerticalSearchRequest, MockedVerticalAutoCompleteRequest)
  .page`${FILTERBOX_PAGE}`;

test('referrerPageUrl is added to the URL on default initial searches', async t => {
  await waitForResults();
  const currentSearchParams = await getCurrentUrlParams();
  const referrerPageUrl = currentSearchParams.has(StorageKeys.REFERRER_PAGE_URL);
  await t.expect(referrerPageUrl).ok();
});
